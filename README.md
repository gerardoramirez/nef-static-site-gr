# No Está Fácil — Personal Site

The source code for [gerardoramirez.info](https://gerardoramirez.info) — a personal portfolio and writing space built with [Astro](https://astro.build).

## About

This site is home to my work, writing, speaking engagements, and explorations across software engineering, AI engineering, security, and product building. The name *No Está Fácil* is a nod to the honest reality of building things: it's never as easy as it looks.

## Tech Stack

- **Framework:** [Astro](https://astro.build) — static site generator with content collections
- **Language:** TypeScript
- **Hosting:** Static deployment at [gerardoramirez.info](https://gerardoramirez.info)

## Project Structure

```text
/
├── public/               # Static assets (images, fonts, favicons)
├── src/
│   ├── assets/           # Processed assets
│   ├── components/       # Reusable Astro components
│   ├── content/          # Markdown content collections
│   │   ├── ai-engineering/
│   │   ├── security/
│   │   ├── speaking/
│   │   ├── work/
│   │   ├── writing/
│   │   └── ...
│   ├── layouts/          # Page layout templates
│   └── pages/            # Route-based pages
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
