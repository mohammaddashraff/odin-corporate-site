import type { Metadata } from "next";

export const siteConfig = {
  name: "ODIN",
  tagline: "Total Vision. Complete Control.",
  description:
    "ODIN delivers structured business systems enhanced with intelligent automation - giving organizations total visibility and complete control.",
  url: "https://odin-ltd.com",
  ogImage: "/brand/og-placeholder.svg",
  email: "hello@odin-ltd.com"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Case Study", href: "/case-studies/aviation-academy" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" }
] as const;

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "ODIN corporate technology"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage]
    }
  };
}
