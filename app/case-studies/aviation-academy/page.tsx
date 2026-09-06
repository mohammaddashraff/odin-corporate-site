import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ButtonLink } from "@/components/ui/button-link";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Case Study - Aviation Academy",
  "How ODIN reduced operational time by 30% for an Aviation Academy through AI automation and integrated dashboards.",
  "/case-studies/aviation-academy",
);

export default function AviationCaseStudyPage() {
  return (
    <section className="section-spacing">
      <Container>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Case Study", href: "/case-studies/aviation-academy" },
            { label: "Aviation Academy" },
          ]}
        />

        <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-tight md:text-5xl">
          Aviation Academy: from manual workflows to controlled operations
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">
          ODIN built custom AI automation and integrated dashboard
          infrastructure for an aviation academy to eliminate delays and restore
          full workflow visibility.
        </p>

        <div className="surface mt-10 overflow-hidden">
          <Image
            src="/brand/aviation-placeholder.svg"
            alt="Aviation Academy dashboard overview"
            width={1200}
            height={800}
            className="h-auto w-full"
            priority
          />
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <article className="surface p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-silver">
              Challenges
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>Manual processes caused delays and inefficiency.</li>
              <li>Limited visibility slowed operational decision-making.</li>
            </ul>
          </article>

          <article className="surface p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-silver">
              Solutions
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>Custom AI automation mapped to academy workflows.</li>
              <li>
                Integrated dashboards for leadership and operational teams.
              </li>
            </ul>
          </article>

          <article className="surface p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-silver">
              Results
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>30% operational time reduction.</li>
              <li>Full workflow visibility enabling better decisions.</li>
            </ul>
          </article>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/contact">Request a Similar Solution</ButtonLink>
          <ButtonLink href="/services" variant="secondary">
            Explore Services
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
