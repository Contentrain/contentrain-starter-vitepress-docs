---
description: Manifest, release, and validation rules that every starter in this repo follows.
order: 2
sidebar_label: Starter Contracts
slug: starter-contracts
title: Starter Contracts
---

# Starter Contracts

## Required starter files

Every starter in this repository includes:

- `package.json`
- `starter.manifest.json`
- `starter.release.json`
- `contentrain.starter.json`
- `contentrain.seed.json`

## Manifest rules

A starter manifest must declare:

- starter id
- framework
- category
- visual family
- deploy targets
- model list
- section list

## Release rules

Release metadata defines the public repository surface:

- repository name
- description
- topics
- deploy outputs
- preview and build commands

## Validation

The repo validation script checks that every starter directory contains the required files and that starter manifests meet minimum structural expectations.
