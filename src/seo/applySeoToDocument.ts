import { resolveAbsoluteUrl } from "./pageSeo";
import { SITE } from "./site";
import type { SeoConfig } from "./types";

function upsertMeta(
  attribute: "name" | "property",
  key: string,
  content: string,
): void {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    element.dataset.seoManaged = "true";
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string): void {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    element.dataset.seoManaged = "true";
    document.head.appendChild(element);
  }

  element.href = href;
}

function upsertJsonLd(jsonLd: SeoConfig["jsonLd"]): void {
  document.head
    .querySelectorAll('script[type="application/ld+json"][data-seo-managed="true"]')
    .forEach((node) => node.remove());

  if (!jsonLd) return;

  const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd];

  items.forEach((item) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.seoManaged = "true";
    script.textContent = JSON.stringify(item);
    document.head.appendChild(script);
  });
}

export function applySeoToDocument(config: SeoConfig): void {
  const canonicalUrl = `${SITE.url}${config.path === "/" ? "" : config.path}`;
  const imageUrl = resolveAbsoluteUrl(config.image ?? SITE.defaultImage);
  const robots = config.noindex ? "noindex, nofollow" : "index, follow";

  document.title = config.title;

  upsertMeta("name", "description", config.description);
  upsertMeta("name", "robots", robots);
  upsertMeta("property", "og:type", "website");
  upsertMeta("property", "og:site_name", SITE.name);
  upsertMeta("property", "og:locale", SITE.locale);
  upsertMeta("property", "og:url", canonicalUrl);
  upsertMeta("property", "og:title", config.title);
  upsertMeta("property", "og:description", config.description);
  upsertMeta("property", "og:image", imageUrl);
  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", config.title);
  upsertMeta("name", "twitter:description", config.description);
  upsertMeta("name", "twitter:image", imageUrl);

  upsertLink("canonical", canonicalUrl);
  upsertJsonLd(config.jsonLd);
}
