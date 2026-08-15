# gerardoramirez.info

The source code for [gerardoramirez.info](https://gerardoramirez.info) — a personal site built with [Astro](https://astro.build).

## About

This site collects selected works, products, writing, and talks at the intersection of human needs, product thinking, and technology. From enterprise integrations and applied AI to security and independent experiments, it explores how we turn complicated problems into software people can understand, trust, and use to perform, remember, and connect.

## Tech Stack

- **Framework:** [Astro](https://astro.build) — static site generator with content collections
- **Language:** TypeScript
- **Hosting:** Static deployment at [gerardoramirez.info](https://gerardoramirez.info)

## Project Structure

```text
/
├── public/               # Static assets (favicon, logo, CNAME)
├── src/
│   ├── components/       # Reusable Astro components
│   ├── content/          # Markdown content collections
│   │   ├── work/
│   │   ├── products/
│   │   ├── writing/
│   │   ├── speaking/
│   │   ├── ai-engineering/
│   │   ├── security/
│   │   ├── software-engineering/
│   │   └── enterprise/
│   ├── layouts/          # Page layout templates
│   └── pages/            # Route-based pages
├── mcp-server/           # MCP server that exposes site content
├── astro.config.mjs
└── package.json
```

## Local Development

```sh
# Install dependencies
npm install

# Start dev server at localhost:4321
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Content

Content is managed as Markdown files inside `src/content/`, organized by topic. The schema for each collection is defined in `src/content/config.ts`.

## License

The code in this repository is open source. Site content (writing, talks, case studies) is © Gerardo Ramirez — all rights reserved.
