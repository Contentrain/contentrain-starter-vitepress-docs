import { defineConfig } from "vitepress";
import {
  document,
  singleton,
  type DocsPage,
  type Footer,
  type GuidePage,
  type Navigation,
  type PackagePage,
  type ReferencePage,
  type SeoDefaults,
  type SiteSettings,
} from "#contentrain";

type BaseDoc = {
  title: string;
  slug: string;
  description?: string;
  sidebar_label?: string;
  order?: number;
};

type DocsHome = DocsPage & {
  layout?: "doc" | "home";
  hero?: {
    name?: string;
    text?: string;
    tagline?: string;
    image?: string;
    actions?: Array<{ text: string; link: string; theme?: "brand" | "alt" }>;
  };
  features?: Array<{ title: string; details: string; icon?: string }>;
};

type NavigationItem = NonNullable<Navigation["items"]>[number];

const site = singleton("site-settings").get() as SiteSettings;
const navigation = singleton("navigation").get() as Navigation;
const footer = singleton("footer").get() as Footer;
const seo = singleton("seo-defaults").get() as SeoDefaults;

const docsPages = document("docs-page")
  .all()
  .sort((left: DocsHome, right: DocsHome) => Number(left.order ?? 0) - Number(right.order ?? 0)) as DocsHome[];
const guidePages = document("guide-page")
  .all()
  .sort((left: GuidePage, right: GuidePage) => Number(left.order ?? 0) - Number(right.order ?? 0)) as BaseDoc[];
const referencePages = document("reference-page")
  .all()
  .sort((left: ReferencePage, right: ReferencePage) => Number(left.order ?? 0) - Number(right.order ?? 0)) as BaseDoc[];
const packagePages = document("package-page")
  .all()
  .sort((left: PackagePage, right: PackagePage) => Number(left.order ?? 0) - Number(right.order ?? 0)) as BaseDoc[];

function pageLink(basePath: string, slug: string) {
  if (basePath === "/" && slug === "index") {
    return "/";
  }

  if (basePath === "/") {
    return `/${slug}`;
  }

  return `${basePath}${slug}`;
}

function toSidebarItems(basePath: string, pages: BaseDoc[]) {
  return pages.map((page) => ({
    text: page.sidebar_label ?? page.title,
    link: pageLink(basePath, page.slug),
  }));
}

export default defineConfig({
  title: site.site_name,
  description: seo.meta_description,
  cleanUrls: true,
  head: [
    ["meta", { name: "theme-color", content: "#0f766e" }],
    ["meta", { property: "og:title", content: seo.meta_title }],
    ["meta", { property: "og:description", content: seo.meta_description }],
  ],
  themeConfig: {
    siteTitle: site.site_name,
    logo: seo.og_image,
    nav: [
      ...(navigation.items ?? []).map((item: NavigationItem) => ({
        text: item.label,
        link: item.href,
      })),
      { text: "SDK", link: "https://ai.contentrain.io/packages/sdk.html" },
      { text: "Studio", link: "https://studio.contentrain.io/" },
    ],
    sidebar: {
      "/guides/": [
        {
          text: "Guides",
          items: toSidebarItems("/guides/", guidePages),
        },
      ],
      "/reference/": [
        {
          text: "Reference",
          items: toSidebarItems("/reference/", referencePages),
        },
      ],
      "/packages/": [
        {
          text: "Packages",
          items: toSidebarItems("/packages/", packagePages),
        },
      ],
      "/": [
        {
          text: "Start",
          items: toSidebarItems("/", docsPages.filter((page) => page.slug !== "index")),
        },
        {
          text: "Guides",
          items: toSidebarItems("/guides/", guidePages),
        },
        {
          text: "Reference",
          items: toSidebarItems("/reference/", referencePages),
        },
        {
          text: "Packages",
          items: toSidebarItems("/packages/", packagePages),
        },
      ],
    },
    outline: [2, 3],
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/Contentrain" },
    ],
    footer: {
      message: footer.blurb ?? site.site_tagline ?? "",
      copyright: footer.legal_notice ?? "",
    },
    docFooter: {
      prev: "Previous page",
      next: "Next page",
    },
    editLink: {
      pattern: "https://studio.contentrain.io/",
      text: "Open in Contentrain Studio",
    },
  },
});
