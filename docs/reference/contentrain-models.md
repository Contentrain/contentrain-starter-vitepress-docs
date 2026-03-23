---
description: Reference for the docs starter model set and why each kind exists.
order: 1
sidebar_label: Contentrain Models
slug: contentrain-models
title: Contentrain Models
---

# Contentrain Models

## System models

### `site-settings`

Global site identity and theme metadata.

### `navigation`

Top-level nav links and CTA destination.

### `footer`

Footer copy and grouped link columns.

### `seo-defaults`

Canonical base, default title, description, and OG image.

## Documentation models

### `docs-page`

Root docs pages. This model can also describe a VitePress home page through optional `layout`, `hero`, and `features` fields.

### `guide-page`

Opinionated implementation guides and architecture walkthroughs.

### `reference-page`

Operational or schema-heavy reference content.

### `package-page`

Package-oriented technical pages, ideal for monorepo libraries.

## Why four document models instead of one

Using separate document models demonstrates domain separation clearly and lets Contentrain write into distinct content paths without hacks.
