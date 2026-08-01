import type { Metadata } from "next";

export const siteConfig = {
  name: "ODIN ERP",
  tagline: "One ERP. Total Business Control.",
  description:
    "ODIN ERP unifies accounting, sales, purchasing, inventory, POS, banking, approvals, and reporting in one auditable business platform.",
  url: "https://odin-ltd.com",
  demoUrl: "https://odin-erp-web.vercel.app/",
  ogImage: "/brand/og-placeholder.svg",
  email: "hello@odin-ltd.com"
};

export const navItems = [
  { label: { en: "Home", ar: "الرئيسية" }, href: "/" },
  { label: { en: "ERP Modules", ar: "وحدات النظام" }, href: "/services" },
  { label: { en: "Platform", ar: "المنصة" }, href: "/solutions" },
  { label: { en: "Industries", ar: "القطاعات" }, href: "/industries" },
  { label: { en: "Success Story", ar: "قصة نجاح" }, href: "/case-studies/aviation-academy" },
  { label: { en: "About", ar: "عن أودين" }, href: "/about" },
  { label: { en: "Insights", ar: "المقالات" }, href: "/insights" },
  { label: { en: "Contact", ar: "تواصل معنا" }, href: "/contact" }
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
