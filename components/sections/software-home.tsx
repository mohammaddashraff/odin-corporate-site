"use client";
import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { useRef, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/ui/container";
import { Arrow, ButtonLink } from "@/components/ui/button-link";
import { OdinMark } from "@/components/ui/logo";
import {
  companyFaqs,
  deliverySteps,
  solutions,
  type Solution,
} from "@/content/solutions";
import { siteConfig } from "@/lib/site";

export function SolutionVisual({
  solution = solutions[0],
}: {
  solution?: Solution;
}) {
  const { isArabic: ar, t } = useLanguage();
  return (
    <div className="solution-visual" key={solution.slug}>
      <div className="visual-heading">
        <OdinMark />
        <span>
          ODIN
          <span className="visual-heading-small">
            {ar ? "مصمم حول احتياجك" : "Designed around you"}
          </span>
        </span>
        <span className="visual-corner" aria-hidden="true">
          <Arrow diagonal />
        </span>
      </div>
      <div className="visual-title">
        <span dir="ltr">{solution.short}</span>
        <p>{t(solution.scene)}</p>
      </div>
      <div className="workflow">
        {solution.rows.map((row, index) => (
          <div className="workflow-step" key={row.en}>
            <span className="step-node" aria-hidden="true">
              {index + 1}
            </span>
            <span>{t(row)}</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="m5 12 4 4L19 6"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ))}
      </div>
      <div className="visual-bottom">
        <span>{t(solution.outcome)}</span>
        <span className="visual-caption">
          {ar ? "مثال توضيحي للحل" : "Illustrative workflow"}
        </span>
      </div>
    </div>
  );
}

export function SolutionExplorer() {
  const { isArabic: ar } = useLanguage();
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const solution = solutions[active];
  return (
    <div className="solution-explorer">
      <div
        className="explorer-tabs"
        role="tablist"
        aria-label={ar ? "استكشف الحلول" : "Explore our solutions"}
      >
        {solutions.map((item, index) => (
          <button
            key={item.slug}
            ref={(node) => {
              tabs.current[index] = node;
            }}
            id={`solution-tab-${item.slug}`}
            role="tab"
            aria-selected={active === index}
            aria-controls="solution-panel"
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(event) => {
              let next = index;
              if (event.key === "ArrowRight")
                next =
                  (index + (ar ? -1 : 1) + solutions.length) % solutions.length;
              else if (event.key === "ArrowLeft")
                next =
                  (index + (ar ? 1 : -1) + solutions.length) % solutions.length;
              else if (event.key === "Home") next = 0;
              else if (event.key === "End") next = solutions.length - 1;
              else return;
              event.preventDefault();
              setActive(next);
              tabs.current[next]?.focus();
            }}
          >
            {item.short === "APP" ? (ar ? "موبايل" : "Mobile") : item.short}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id="solution-panel"
        aria-labelledby={`solution-tab-${solution.slug}`}
        tabIndex={0}
      >
        <SolutionVisual solution={solution} />
      </div>
      <div className="explorer-footer">
        <span>
          {ar ? "احتياجك هو نقطة البداية." : "Your needs. Our starting point."}
        </span>
        <Link href={`/solutions/${solution.slug}` as Route}>
          {ar ? "استكشف الحل" : "Explore solution"}
          <Arrow />
        </Link>
      </div>
    </div>
  );
}

export function SolutionGrid({ heading = true }: { heading?: boolean }) {
  const { isArabic: ar, t } = useLanguage();
  return (
    <section className="section-spacing" id="solutions">
      <Container>
        {heading && (
          <div className="section-intro">
            <h2>
              {ar ? (
                "حلول مختلفة. نفس الاهتمام بشغلك."
              ) : (
                <>
                  Different needs.
                  <br />
                  The same commitment.
                </>
              )}
            </h2>
            <p>
              {ar
                ? "من إدارة العمليات لابتكار تجربة جديدة لعملائك. نحدد الحل المناسب ونبنيه على مقاس احتياجك."
                : "From running your operations to creating your next customer experience. We find the right solution, then make it fit."}
            </p>
          </div>
        )}
        <div className="solutions-grid">
          {solutions.map((solution) => (
            <Link
              className="solution-link"
              key={solution.slug}
              href={`/solutions/${solution.slug}` as Route}
            >
              <div className="solution-link-top">
                <h3>
                  {t(solution.name)}
                  {["ERP", "HR", "CRM", "LMS"].includes(solution.short) && (
                    <>
                      {" "}
                      <bdi>({solution.short})</bdi>
                    </>
                  )}
                </h3>
                <Arrow diagonal />
              </div>
              <p>{t(solution.description)}</p>
              <span className="text-link">
                {ar ? "استكشف الحل" : "Explore solution"}
              </span>
            </Link>
          ))}
        </div>
        <div className="custom-solution">
          <div>
            <h3>
              {ar ? "فكرتك مش ضمن القائمة؟" : "Something a little different?"}
            </h3>
            <p>
              {ar
                ? "دي نقطة بداية ممتازة. احكيلنا اللي محتاج تبنيه."
                : "That's a good place to start. Tell us what you need to build."}
            </p>
          </div>
          <ButtonLink href="/contact" variant="secondary">
            {ar ? "احكيلنا فكرتك" : "Tell us your idea"}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export function ProcessSection() {
  const { isArabic: ar, t } = useLanguage();
  return (
    <section className="process-section section-spacing" id="process">
      <Container>
        <div className="section-intro">
          <h2>
            {ar ? (
              "من أول سؤال، لآخر تفصيلة."
            ) : (
              <>
                From the first question.
                <br />
                To the final detail.
              </>
            )}
          </h2>
          <p>
            {ar
              ? "شراكة واضحة في كل خطوة. نفهم الأول، ونبني معاك، ونخطط للخطوة اللي بعدها."
              : "A clear partnership at every step. We understand first, build with you, and plan for what comes next."}
          </p>
        </div>
        <ol className="process-grid">
          {deliverySteps.map((step, index) => (
            <li key={step.title.en}>
              <div className="process-number">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Arrow />
              </div>
              <h3>{t(step.title)}</h3>
              <p>{t(step.text)}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function ProjectCTA() {
  const { isArabic: ar } = useLanguage();
  return (
    <section className="project-cta">
      <Container>
        <div>
          <h2>{ar ? "إيه اللي محتاج تبنيه؟" : "What do you need to build?"}</h2>
          <p>
            {ar
              ? "ابدأ باحتياج، أو تحدي، أو مجرد فكرة. هنساعدك تحدد الخطوة الجاية."
              : "Start with a need, a challenge, or just an idea. Let's work out the next step together."}
          </p>
        </div>
        <ButtonLink href="/contact">
          {ar ? "خلينا نتكلم" : "Let's talk about it"}
        </ButtonLink>
      </Container>
    </section>
  );
}

export function FAQSection() {
  const { isArabic: ar, t } = useLanguage();
  return (
    <section className="section-spacing">
      <Container className="faq-layout">
        <div>
          <h2>
            {ar ? (
              "أسئلة قبل ما نبدأ."
            ) : (
              <>
                Before we <br />
                get started.
              </>
            )}
          </h2>
          <p className="body-copy">
            {ar
              ? "كل مشروع له تفاصيله. دي إجابات تساعدك تبدأ."
              : "Every project is different. Here are a few useful starting points."}
          </p>
          <Link className="text-link" href="/contact">
            {ar ? "عندك سؤال تاني؟" : "Have another question?"}
            <Arrow />
          </Link>
        </div>
        <div className="faq-list">
          {companyFaqs.map((faq) => (
            <details key={faq.q.en}>
              <summary>
                {t(faq.q)}
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <p>{t(faq.a)}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SoftwareHome() {
  const { isArabic: ar } = useLanguage();
  return (
    <>
      <section className="home-hero">
        <Container className="hero-layout">
          <div className="hero-copy">
            <h1>
              {ar ? (
                <>
                  برمجيات على
                  <br />
                  <span>مقاس شغلك.</span>
                </>
              ) : (
                <>
                  Your business.
                  <br />
                  Your ambition.
                  <br />
                  <span>Our software.</span>
                </>
              )}
            </h1>
            <p>
              {ar
                ? "في ODIN Software Solutions، بنحوّل احتياجك لحلول برمجية. أنظمة أعمال، منصات تعليم، وتطبيقات موبايل — كلها مبنية حولك."
                : "We turn what your business needs into software that works for you. Business systems, learning platforms, and mobile apps. All built around you."}
            </p>
            <div className="hero-actions">
              <ButtonLink href="/contact">
                {ar ? "ناقش مشروعك" : "Let's build your solution"}
              </ButtonLink>
              <Link className="text-link" href="/solutions">
                {ar ? "استكشف حلولنا" : "Explore our solutions"}
                <Arrow />
              </Link>
            </div>
            <div className="hero-note">
              <span aria-hidden="true" />
              {ar
                ? "مصمم لاحتياجك. قابل للتطور معاك."
                : "Made for your needs. Built for what's next."}
            </div>
          </div>
          <SolutionExplorer />
        </Container>
      </section>
      <div className="capability-strip">
        <Container>
          <span>{ar ? "أفكارك. مترابطة." : "Your world, connected."}</span>
          <p>
            {ar ? "أنظمة الأعمال" : "Business systems"}
            <span aria-hidden="true">/</span>
            {ar ? "المنصات التعليمية" : "Learning platforms"}
            <span aria-hidden="true">/</span>
            {ar ? "التجارب الرقمية" : "Digital experiences"}
          </p>
        </Container>
      </div>
      <SolutionGrid />
      <ProcessSection />
      <section className="section-spacing">
        <Container className="featured-project">
          <div className="project-image">
            <Image
              src="/screenshots/erp-dashboard.png"
              alt={
                ar
                  ? "واجهة نظام ODIN ERP الحالي"
                  : "The existing ODIN ERP dashboard"
              }
              width={1440}
              height={900}
              sizes="(max-width: 800px) 100vw, 55vw"
            />
            <div className="project-image-caption">
              <span>ODIN ERP</span>
              <span>{ar ? "استكشف المنتج" : "Product spotlight"}</span>
            </div>
          </div>
          <div>
            <h2>
              {ar
                ? "شوف الحل على أرض الواقع."
                : "See the thinking. Explore the software."}
            </h2>
            <p className="body-copy">
              {ar
                ? "ODIN ERP مثال على الحلول اللي بنقدمها: حسابات ومخزون ومبيعات وعمليات مترابطة. استكشف النظام الحالي، وبعدها نتكلم عن احتياج شركتك."
                : "ODIN ERP is one example of what we do: connected accounting, inventory, sales, and business operations. Explore the existing platform, then let's talk about yours."}
            </p>
            <div className="project-actions">
              <ButtonLink href={siteConfig.demoUrl} variant="secondary">
                {ar ? "استكشف نسخة ERP" : "Explore the ERP demo"}
              </ButtonLink>
              <Link className="text-link" href="/solutions/erp">
                {ar ? "عن حلول ERP" : "About ERP solutions"}
                <Arrow />
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <FAQSection />
      <ProjectCTA />
    </>
  );
}
