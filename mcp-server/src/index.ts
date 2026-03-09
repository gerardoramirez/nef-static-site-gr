import * as z from 'zod';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import {
  getAllContent,
  getContentByPath,
  searchContent,
} from './content.js';

const mcpServer = new McpServer({
  name: 'nef-site-knowledge',
  version: '1.0.0',
}, {
  capabilities: {
    resources: { listChanged: true },
    tools: { listChanged: true },
  },
});

// Register resource template for site content (site://nef/security/introduction, etc.)
mcpServer.registerResource(
  'site-content',
  new ResourceTemplate('site://nef/{+path}', {
    list: async () => {
      const entries = getAllContent();
      return {
        resources: entries.map((e) => ({
          uri: `site://nef/${e.path}`,
          name: e.title,
          description: `${e.collection}: ${e.title}`,
          mimeType: 'text/markdown',
        })),
      };
    },
  }),
  {
    title: 'NEF Site Content',
    description: 'Knowledge from the personal site (security, AI engineering, software engineering)',
    mimeType: 'text/markdown',
  },
  async (uri, variables) => {
    const pathRaw = variables.path;
    const path = typeof pathRaw === 'string' ? pathRaw : Array.isArray(pathRaw) ? pathRaw[0] : '';
    const entry = getContentByPath(path);
    if (!entry) {
      throw new Error(`Resource not found: site://nef/${path}`);
    }
    return {
      contents: [
        {
          uri: uri.toString(),
          mimeType: 'text/markdown',
          text: `# ${entry.title}\n\n${entry.content}`,
        },
      ],
    };
  }
);

// Register search_site tool with simple substring search
mcpServer.registerTool(
  'search_site',
  {
    description: 'Search across the site content (security, AI engineering, software engineering) using substring matching. Returns matching pages with their content snippets.',
    inputSchema: {
      query: z.string().describe('Search query to find in the site content'),
    },
  },
  async ({ query }) => {
    const results = searchContent(query);
    if (results.length === 0) {
      return {
        content: [
          {
            type: 'text' as const,
            text: `No content found matching "${query}".`,
          },
        ],
      };
    }
    const snippets = results.slice(0, 10).map((e) => {
      const preview = e.content.length > 500 ? e.content.slice(0, 500) + '...' : e.content;
      return `## ${e.title} (site://nef/${e.path})\n${preview}`;
    });
    return {
      content: [
        {
          type: 'text' as const,
          text: `Found ${results.length} matching page(s):\n\n${snippets.join('\n\n---\n\n')}`,
        },
      ],
    };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await mcpServer.connect(transport);
}

main().catch((error) => {
  console.error('MCP server error:', error);
  process.exit(1);
});
