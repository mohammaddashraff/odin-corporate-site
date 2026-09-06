import type { MetadataRoute } from "next";
import { insightPosts } from "@/content/insights";
import { solutions } from "@/content/solutions";
import { siteConfig } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/solutions",
    "/industries",
    "/case-studies/aviation-academy",
    "/about",
    "/contact",
    "/insights",
    "/privacy",
    "/terms",
    ...solutions.map((solution) => `/solutions/${solution.slug}`),
  ];
  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...insightPosts.map((post) => ({
      url: `${siteConfig.url}/insights/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
