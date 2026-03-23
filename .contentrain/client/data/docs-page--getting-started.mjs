export default {
  "content": "# Getting Started\n\n## Install\n\n```bash\npnpm install\npnpm dev\n```\n\nThe starter runs VitePress against the real `docs/` directory.\n\n## Regenerate the SDK after local content changes\n\nIf you edit files under `.contentrain/models` or `.contentrain/content`, regenerate the typed SDK client:\n\n```bash\npnpm contentrain:generate\n```\n\nThis refreshes the `#contentrain` client that VitePress uses to build navigation and sidebars.\n\n## Deploy flow\n\n```bash\npnpm check\npnpm build\npnpm preview\n```\n\nThe build output lands in `docs/.vitepress/dist`, which is ready for Vercel, Netlify, or Cloudflare Pages.",
  "description": "Boot the docs starter, regenerate the SDK, and ship a docs site with seeded content.",
  "order": 2,
  "sidebar_label": "Getting Started",
  "slug": "getting-started",
  "title": "Getting Started"
}
