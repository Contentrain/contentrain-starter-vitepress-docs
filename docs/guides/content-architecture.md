---
description: How the docs starter maps system, docs, guides, reference, and package domains to real VitePress paths.
order: 1
sidebar_label: Content Architecture
slug: content-architecture
title: Content Architecture
---

# Content Architecture

## Domain model

The docs starter separates concerns by domain:

- `system`: site settings, navigation, footer, SEO defaults
- `docs`: root docs pages such as `index.md` and `getting-started.md`
- `guides`: implementation walkthroughs and opinionated decisions
- `reference`: contracts, schemas, and operational rules
- `packages`: package-level technical documentation

## Storage strategy

This starter uses `content_path` overrides so document models write into the real VitePress tree:

- `docs-page` -> `docs/`
- `guide-page` -> `docs/guides/`
- `reference-page` -> `docs/reference/`
- `package-page` -> `docs/packages/`

That means the project is both Contentrain-managed and VitePress-native.

## Shared layers

### Design tokens

The visual system is shared as CSS token primitives. Every framework starter consumes those tokens without sharing UI component code.

### Contentrain blueprints

The content blueprint package defines reusable models, section contracts, and starter recipes. Framework templates stay focused on rendering and interaction.

### Starter templates

Each starter owns its framework-native structure, deploy defaults, and visual identity. Shared architecture lives above the framework line.

## UI decision

Do not build one cross-framework component library. Share:

- design language
- content models
- section vocabulary
- operational conventions

Keep rendering native to the framework.
