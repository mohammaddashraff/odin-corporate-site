import type { Route } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { insightPosts } from "@/content/insights";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Insights",
  "ODIN insights on enterprise automation, CRM architecture, operational dashboards, and AI inside business systems.",
  "/insights",
);

export default function InsightsPage() {
  return (
    <section className="section-spacing">
      <Container>
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Insights" }]}
        />
        <h1 className="text-4xl font-semibold md:text-5xl">Insights</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
          Practical articles for leaders building structured business systems
          with automation and intelligent workflows.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {insightPosts.map((post) => {
            const href = `/insights/${post.slug}` as Route;

            return (
              <article
                key={post.slug}
                className="surface p-6 transition hover:-translate-y-1"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-silver">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                  {" | "}
                  {post.readTime}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-text">
                  <Link className="transition hover:text-blue" href={href}>
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {post.excerpt}
                </p>
                <Link
                  href={href}
                  className="mt-6 inline-flex text-sm text-blue"
                >
                  Read article
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
