# Contentrain VitePress Docs on Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https%3A%2F%2Fgithub.com%2FContentrain%2Fcontentrain-starter-vitepress-docs)

## Quick start

```bash
pnpm install
pnpm build
```

## Deploy with Netlify CLI

From the repository root:

```bash
pnpm dlx netlify-cli init
```

If the repository is already connected to a Netlify project:

```bash
pnpm dlx netlify-cli link
```

## Build contract

- Build command: `pnpm deploy:netlify`
- Publish directory: `docs/.vitepress/dist`
- Node version: `22`

## Demo routes

- `/`
- `/getting-started`
- `/guides/content-architecture`
- `/guides/product-surfaces`
- `/reference/contentrain-models`
- `/reference/deployment-targets`
- `/packages/design-tokens`

## Contentrain references

- SDK and CLI: https://ai.contentrain.io/packages/sdk.html
- Docs: https://docs.contentrain.io/
- Studio: https://studio.contentrain.io/

