> Source of truth: this starter is exported from the `contentrain-starters` monorepo.
> Internal starter id: `vitepress-docs`.
# Contentrain VitePress Docs

Documentation starter for teams that want Markdown-native docs with Contentrain-managed schema, navigation, and long-form content.

## Demo routes

- `/`
- `/getting-started`
- `/guides/content-architecture`
- `/guides/product-surfaces`
- `/reference/contentrain-models`
- `/reference/deployment-targets`
- `/packages/design-tokens`

## Start

```bash
pnpm install
pnpm dev
```

## Commands

```bash
pnpm check
pnpm build
pnpm preview
```

## Contentrain Architecture

- Long-form docs pages are modeled as Contentrain `document` models and written into the real `docs/` tree through `content_path` overrides
- VitePress navigation and sidebar structure are generated from Contentrain content, not hardcoded arrays
- Starter-local `.contentrain/context.json`, `vocabulary.json`, and `meta/` files are committed so the repo opens with a complete Contentrain project shape
- The docs surface is positioned as part of a wider product-surface system, not as an isolated blog replacement
- Official references are built in:
  - [SDK](https://ai.contentrain.io/packages/sdk.html)
  - [Docs](https://docs.contentrain.io/)
  - [Studio](https://studio.contentrain.io/)

If you change `.contentrain/models` or `.contentrain/content`, regenerate the local SDK first:

```bash
pnpm contentrain:generate
```

To validate the on-disk Contentrain project itself:

```bash
pnpm exec contentrain validate --json
```
