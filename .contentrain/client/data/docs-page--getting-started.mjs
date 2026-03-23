export default {
  "content": "# Getting Started\n\n## Install\n\n```bash\npnpm install\npnpm dev\n```\n\nThe starter runs VitePress against the real `docs/` directory.\n\n## Regenerate content after schema changes\n\n```bash\npnpm contentrain:prepare\n```\n\nThis does two things:\n\n1. Syncs local Contentrain data and model files from the starter seed definitions.\n2. Regenerates the typed SDK client that VitePress uses to build navigation and sidebars.\n\n## Deploy flow\n\n```bash\npnpm check\npnpm build\npnpm preview\n```\n\nThe build output lands in `docs/.vitepress/dist`, which is ready for Vercel, Netlify, or Cloudflare Pages.",
  "description": "Boot the docs starter, regenerate the SDK, and ship a docs site with seeded content.",
  "order": 2,
  "sidebar_label": "Getting Started",
  "slug": "getting-started",
  "title": "Getting Started"
}
