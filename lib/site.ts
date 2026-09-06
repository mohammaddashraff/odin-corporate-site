import type { Metadata } from "next";

export const siteConfig = {
  name: "ODIN Software Solutions",
  tagline: "Software built around your business.",
  description:
    "Custom software solutions for the way you work. Explore ERP, HR, CRM, learning platforms, education systems, and mobile applications with ODIN Software Solutions.",
  url: "https://odin-ltd.com",
  demoUrl: "https://odin-erp-web.vercel.app/",
  ogImage: "/brand/og-software-solutions.png",
  email: "help@odin-ltd.com",
};
export const navItems = [
  { label: { en: "Solutions", ar: "الحلول" }, href: "/solutions" },
  { label: { en: "Services", ar: "الخدمات" }, href: "/services" },
  { label: { en: "Industries", ar: "القطاعات" }, href: "/industries" },
  { label: { en: "About us", ar: "عن ODIN" }, href: "/about" },
] as const;
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
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
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
