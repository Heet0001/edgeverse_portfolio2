import { API_ORIGIN } from "../api/client";
import type { Blog } from "../types/models";
import { SITE } from "./site";
import type { SeoConfig } from "./types";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.legalName,
  url: SITE.url,
  logo: SITE.defaultImage,
  email: SITE.email,
  description: SITE.defaultDescription,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Perceiva™ ARAS Platform",
  brand: {
    "@type": "Brand",
    name: SITE.name,
  },
  description:
    "Advanced Rider Assistance System for two-wheelers with edge-native AI perception, forward collision warning, blind spot detection, and driver monitoring.",
  manufacturer: {
    "@type": "Organization",
    name: SITE.legalName,
    url: SITE.url,
  },
  category: "Automotive Safety Software",
};

export const STATIC_PAGE_SEO: Record<string, Omit<SeoConfig, "path">> = {
  "/": {
    title: "EdgeVerse | Edge-Native AI for Two-Wheeler Safety & Perception",
    description:
      "EdgeVerse builds Perceiva™ ARAS, DMS, and Imedge® hardware — edge-native AI perception for OEMs, fleets, and smart mobility across India.",
    jsonLd: organizationSchema,
  },
  "/product": {
    title: "Perceiva™ Product Platform | ARAS, DMS & Imedge | EdgeVerse",
    description:
      "Explore Perceiva™ ARAS, Driver Monitoring System, and Imedge® hardware. Level 0 & Level 1 rider assistance built for Indian roads and OEM integration.",
    jsonLd: productSchema,
  },
  "/technology": {
    title: "Edge AI Technology & Co-Development Partner | EdgeVerse",
    description:
      "Partner with EdgeVerse on perception intelligence — sensor fusion, active learning, proprietary India perception data, and OEM co-development at the edge.",
  },
  "/about": {
    title: "About EdgeVerse | Edge AI Company in Bengaluru",
    description:
      "Learn about EdgeVerse — building edge-native perception intelligence for two-wheelers, mobility, and industrial systems from Bengaluru, India.",
  },
  "/contact": {
    title: "Contact EdgeVerse | Schedule an ARAS Demo",
    description:
      "Get in touch with EdgeVerse to schedule a demo, explore OEM integration, or partner on edge AI perception for two-wheelers and fleet safety.",
  },
  "/careers": {
    title: "Careers at EdgeVerse | Edge AI & Computer Vision Jobs",
    description:
      "Join EdgeVerse and build edge-native AI for real-world mobility. Explore open roles in perception, embedded systems, and automotive software.",
  },
  "/blog": {
    title: "EdgeVerse Blog | Edge AI, ARAS & Mobility Insights",
    description:
      "Engineering insights on edge AI, ARAS, driver monitoring, and perception systems — written by the team building Perceiva™ at EdgeVerse.",
  },
  "/leadership": {
    title: "EdgeVerse Leadership Team",
    description:
      "Meet the leadership team behind EdgeVerse — building Perceiva™ ARAS, Imedge® hardware, and edge-native perception intelligence for India.",
  },
  "/investors": {
    title: "EdgeVerse Investors & Partners",
    description:
      "EdgeVerse investors and partners supporting edge AI innovation for two-wheeler safety, perception systems, and smart mobility in India.",
  },
  "/industries": {
    title: "Edge AI for Industries | EdgeVerse Perceiva™",
    description:
      "Deploy Perceiva™ edge AI perception across mobility, surveillance, industrial automation, and smart infrastructure with EdgeVerse.",
  },
  "/safety": {
    title: "Two-Wheeler Safety with Edge AI | EdgeVerse",
    description:
      "EdgeVerse Perceiva™ ARAS delivers predictive collision alerts, blind spot detection, and lane advisory for safer two-wheeler riding.",
  },
  "/terms-of-service": {
    title: "Terms of Service | EdgeVerse",
    description:
      "Terms of Service governing access to EdgeVerse websites, content, and digital services.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | EdgeVerse",
    description:
      "How EdgeVerse collects, uses, protects, and manages personal information across our digital platforms.",
  },
  "/product/imedge": {
    title: "Imedge® Hardware Platform | EdgeVerse",
    description:
      "Imedge® is EdgeVerse's edge AI vision hardware platform for camera design, ISP tuning, and OEM co-development.",
  },
};

export function isDynamicSeoPath(pathname: string): boolean {
  if (pathname.startsWith("/blog/") && pathname !== "/blog") return true;
  if (/^\/careers\/[^/]+\/apply$/.test(pathname)) return true;
  return false;
}

export function getStaticPageSeo(pathname: string): SeoConfig {
  const normalized = pathname.replace(/\/$/, "") || "/";
  const config = STATIC_PAGE_SEO[normalized] ?? {
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
  };

  return {
    ...config,
    path: normalized,
  };
}

export function resolveAbsoluteUrl(value: string | undefined | null): string {
  if (!value) return SITE.defaultImage;
  if (value.startsWith("http://") || value.startsWith("https://")) return value;
  if (value.startsWith("/")) return `${API_ORIGIN}${value}`;
  return `${API_ORIGIN}/${value}`;
}

export function truncateDescription(text: string, max = 160): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 3).trim()}...`;
}

export function buildBlogDetailSeo(
  post: Blog | null | undefined,
  slug: string,
): SeoConfig | null {
  const path = `/blog/${slug}`;

  if (post === undefined) return null;

  if (post === null) {
    return {
      title: "Post Not Found | EdgeVerse Blog",
      description: "This blog post could not be found on EdgeVerse.",
      path,
      noindex: true,
    };
  }

  if (!post) return null;

  const description = truncateDescription(post.excerpt || post.content);
  const image = post.coverImage ? resolveAbsoluteUrl(post.coverImage) : undefined;

  return {
    title: `${post.title} | EdgeVerse Blog`,
    description,
    path,
    image,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description,
      image,
      author: {
        "@type": "Person",
        name: post.author || "EdgeVerse Team",
      },
      publisher: {
        "@type": "Organization",
        name: SITE.legalName,
        url: SITE.url,
        logo: {
          "@type": "ImageObject",
          url: SITE.defaultImage,
        },
      },
      datePublished: post.publishedAt || post.createdAt,
      dateModified: post.updatedAt || post.publishedAt || post.createdAt,
      mainEntityOfPage: `${SITE.url}${path}`,
    },
  };
}

export function buildCareerApplySeo(
  opening:
    | { title: string; slug: string; description: string; location: string }
    | null
    | undefined,
  slug: string,
): SeoConfig | null {
  const path = `/careers/${slug}/apply`;

  if (opening === undefined) return null;

  if (opening === null) {
    return {
      title: "Job Not Found | EdgeVerse Careers",
      description: "This job opening could not be found on EdgeVerse.",
      path,
      noindex: true,
    };
  }

  if (!opening) return null;

  return {
    title: `Apply: ${opening.title} | EdgeVerse Careers`,
    description: truncateDescription(
      `${opening.title} in ${opening.location}. ${opening.description}`,
    ),
    path,
    noindex: true,
  };
}
