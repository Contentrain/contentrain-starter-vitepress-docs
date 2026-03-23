export default {
  "content": "# Contentrain Models\n\n## System models\n\n### `site-settings`\n\nGlobal site identity and theme metadata.\n\n### `navigation`\n\nTop-level nav links and CTA destination.\n\n### `footer`\n\nFooter copy and grouped link columns.\n\n### `seo-defaults`\n\nCanonical base, default title, description, and OG image.\n\n## Documentation models\n\n### `docs-page`\n\nRoot docs pages. This model can also describe a VitePress home page through optional `layout`, `hero`, and `features` fields.\n\n### `guide-page`\n\nOpinionated implementation guides and architecture walkthroughs.\n\n### `reference-page`\n\nOperational or schema-heavy reference content.\n\n### `package-page`\n\nPackage-oriented technical pages, ideal for monorepo libraries.\n\n## Why four document models instead of one\n\nUsing separate document models demonstrates domain separation clearly and lets Contentrain write into distinct content paths without hacks.",
  "description": "Reference for the docs starter model set and why each kind exists.",
  "order": 1,
  "sidebar_label": "Contentrain Models",
  "slug": "contentrain-models",
  "title": "Contentrain Models"
}
