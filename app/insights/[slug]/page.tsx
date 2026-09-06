import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getInsightBySlug, insightPosts } from "@/content/insights";
import { siteConfig } from "@/lib/site";

type InsightPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return insightPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: InsightPageProps): Metadata {
  const post = getInsightBySlug(params.slug);

  if (!post) {
    return {
      title: "Insight Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/insights/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/insights/${post.slug}`,
      type: "article",
      images: [siteConfig.ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [siteConfig.ogImage],
    },
  };
}

export default function InsightDetailPage({ params }: InsightPageProps) {
  const post = getInsightBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="section-spacing">
      <Container className="max-w-4xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Insights", href: "/insights" },
            { label: post.title },
          ]}
        />

        <p className="text-xs uppercase tracking-[0.2em] text-silver">
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          {" | "}
          {post.readTime}
        </p>

        <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted">
          {post.excerpt}
        </p>

        <div className="mt-10 space-y-6">
          {post.sections.map((section) => (
            <section key={section.heading} className="surface p-6">
              <h2 className="text-2xl font-semibold text-text">
                {section.heading}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
}
