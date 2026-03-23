---
description: How the monorepo becomes separate public starter repositories.
order: 2
sidebar_label: Release Workflow
slug: release-workflow
title: Release Workflow
---

# Release Workflow

## Source model

The monorepo is the source of truth for:

- design tokens
- content blueprints
- starter recipes
- validation and export scripts

## Distribution model

Every starter is published as its own repository.

That keeps onboarding simple:

- users clone one starter
- framework docs stay native
- examples and release notes stay focused

## Export flow

```bash
pnpm contentrain:prepare
pnpm exec turbo run check build
pnpm export:all
```

## Public repository defaults

Exported starter repos should ship with:

- committed `.contentrain/` content
- generated SDK client
- CI workflow
- `.nvmrc` pinned to Node 22
- starter-specific README
- release metadata
- MIT license

## Publish checklist

1. Push `dist/<starter>` to a public repository.
2. Enable GitHub template repository mode.
3. Apply description and topic metadata from `starter.release.json`.
4. Verify CI passes.
5. Attach preview deployment when available.
