---
description: Manifest, release, and validation rules that every starter in this repo follows.
order: 2
sidebar_label: Starter Contracts
slug: starter-contracts
title: Starter Contracts
---

# Starter Contracts

## Public starter files

A published starter should keep only files that are useful to the adopter:

- `package.json`
- framework config files
- `.contentrain/` models and content
- generated `#contentrain` client
- starter-specific README
- CI workflow
- license and editor config files

## Source-only files

Some files belong only in the source monorepo and should not be shipped in exported starter repositories:

- `contentrain.seed.json`
- `contentrain.starter.json`
- `starter.manifest.json`
- `starter.release.json`

## Why this separation matters

Published starter repositories should stay easy to understand. Runtime content, schema, and deploy configuration belong in the public repo. Internal release metadata and source seeding files do not.
