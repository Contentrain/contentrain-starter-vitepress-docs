---
description: How the monorepo becomes separate public starter repositories.
order: 2
sidebar_label: Release Workflow
slug: release-workflow
title: Release Workflow
---

# Release Workflow

## Local verification

Before deploying this starter, run:

```bash
pnpm check
pnpm build
```

## Production preview

```bash
pnpm preview
```

## What ships in the public starter

This repository is intentionally self-contained:

- committed `.contentrain/` models and content
- generated `#contentrain` SDK client
- starter-specific README
- CI workflow
- pinned Node version via `.nvmrc`
- MIT license

## Deploy checklist

1. Connect the repository to your deployment provider.
2. Use `pnpm install` as the install step.
3. Use `pnpm build` as the build step.
4. Set the publish directory to `docs/.vitepress/dist` for static hosts.
5. Verify navigation, sidebar routes, and search in preview.
