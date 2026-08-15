# Site Knowledge MCP Server

MCP server that exposes this Astro site's content as Resources and Tools for use with Cursor, Claude Desktop, or other MCP clients.

## Features

- **Resources**: Each markdown page is available as `site://content/{path}` (e.g. `site://content/security/introduction`, `site://content/ai-engineering/prompt-engineering`)
- **Tool**: `search_site` – substring search across all content

## Setup

```bash
cd mcp-server
npm install
npm run build
```

## Usage

### With Cursor

The project includes `.cursor/mcp.json` which registers this server. Restart Cursor after adding or changing the config.

### Standalone (stdio)

```bash
node mcp-server/dist/index.js
```

The server communicates via stdin/stdout. MCP clients (e.g. Claude Desktop) can spawn it as a subprocess.

## Content Source

Reads markdown files from `src/content/` (Astro Content Collections). Keep content in sync by running the Astro site build; the MCP server reads the source markdown directly.
