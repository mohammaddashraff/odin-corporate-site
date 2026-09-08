"use client";

import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/ui/container";
import { Arrow, ButtonLink } from "@/components/ui/button-link";
import { BrandLockup, OdinMark } from "@/components/ui/logo";
import { CheckIcon, SolutionIcon } from "./software-preview";
import { copy, solutions } from "@/content/solutions";
import { siteConfig } from "@/lib/site";

const productViews = [
  {
    image: "/screenshots/erp-dashboard.png",
    title: copy("Command center", "مركز الإدارة"),
    detail: copy(
      "The bigger picture, in one workspace.",
      "الصورة الكاملة، في مساحة واحدة.",
    ),
    text: copy(
      "A view across sales, inventory, finance, and the work that needs your attention.",
      "نظرة على المبيعات والمخزون والحسابات والشغل اللي محتاج متابعتك.",
    ),
  },
  {
    image: "/screenshots/erp-pos.png",
    title: copy("Point of sale", "نقطة البيع"),
    detail: copy(
      "Where service becomes a transaction.",
      "من خدمة العميل لتسجيل العملية.",
    ),
    text: copy(
      "Explore the sales workspace and how everyday transactions fit into the wider system.",
      "استكشف مساحة البيع وإزاي المعاملات اليومية بتتكامل مع باقي النظام.",
    ),
  },
  {
    image: "/screenshots/erp-reports.png",
    title: copy("Reports & insights", "التقارير والمتابعة"),
    detail: copy(
      "Turn operational detail into a clearer view.",
      "حوّل تفاصيل الشغل لرؤية أوضح.",
    ),
    text: copy(
      "Follow the records behind your reports and explore information in context.",
      "تابع السجلات اللي ورا التقارير واستكشف المعلومات في سياقها.",
    ),
  },
];

export function ProductShowcase() {
  const { isArabic: ar, t } = useLanguage();
  const [active, setActive] = useState(0);
  const view = productViews[active];
  return (
    <section
      className="product-showcase section-spacing"
      id="software-in-action"
    >
      <Container>
        <div className="section-intro">
          <h2>
            {ar ? (
              <>
                الكلام مهم.
                <br />
                <span>والتجربة أهم.</span>
              </>
            ) : (
              <>
                More than an idea.
                <br />
                <span>Software in action.</span>
              </>
            )}
          </h2>
          <p>
            {ar
              ? "دي صور فعلية من ODIN ERP، واحد من حلولنا. تنقّل بين الشاشات، أو افتح النسخة التجريبية بنفسك."
              : "A closer look at ODIN ERP, one of our existing solutions. Browse real product screens, then try the live demo for yourself."}
          </p>
        </div>
        <div className="product-showcase-layout">
          <div
            className="product-view-selector"
            aria-label={ar ? "شاشات المنتج" : "Product screens"}
          >
            {productViews.map((item, index) => (
              <button
                key={item.image}
                type="button"
                aria-pressed={active === index}
                aria-controls="product-screen"
                onClick={() => setActive(index)}
              >
                <span>
                  <strong>{t(item.title)}</strong>
                  <span>{t(item.detail)}</span>
                </span>
                <Arrow />
              </button>
            ))}
            <div className="product-demo-action">
              <BrandLockup product="ERP" compact />
              <p>
                {ar
                  ? "شاشات حقيقية. جرّبها بنفسك."
                  : "Real screens. Explore them yourself."}
              </p>
              <ButtonLink href={siteConfig.demoUrl}>
                {ar ? "افتح نسخة ERP" : "Launch the ERP demo"}
              </ButtonLink>
            </div>
          </div>
          <div
            className="product-screen-frame"
            id="product-screen"
            aria-live="polite"
          >
            <div className="product-screen-top">
              <span className="window-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <BrandLockup product="ERP" descriptor={false} mark={false} className="brand-inline" />
              <span>{t(view.title)}</span>
              <Arrow diagonal />
            </div>
            <div className="product-screen-image" key={view.image}>
              <Image
                src={view.image}
                alt={`${ar ? "شاشة فعلية من ODIN ERP" : "Actual ODIN ERP screen"}: ${t(view.title)}`}
                width={1440}
                height={900}
                sizes="(max-width: 900px) 100vw, 65vw"
              />
            </div>
            <div className="product-screen-description">
              <span>{t(view.text)}</span>
              <span>{ar ? "صورة من المنتج" : "Actual product capture"}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const scenarios = [
  {
    name: copy("Retail & distribution", "التجارة والتوزيع"),
    slug: "erp",
    title: copy(
      "From the first sale to the last item in stock.",
      "من أول عملية بيع لآخر قطعة في المخزن.",
    ),
    problem: copy(
      "Orders, stock, and accounts should tell the same story.",
      "الطلبات والمخزون والحسابات لازم يحكوا نفس الحكاية.",
    ),
    systems: ["ERP", "CRM", "Mobile"],
    steps: [
      copy("Receive an order", "استلام الطلب"),
      copy("Prepare & fulfill", "التجهيز والتسليم"),
      copy("Follow the transaction", "متابعة المعاملة"),
    ],
    detail: copy(
      "Connect the customer journey with inventory and finance. Define the sales, warehouse, and reporting workflows around your operation.",
      "اربط رحلة العميل بالمخزون والحسابات. نحدد دورات البيع والمخازن والتقارير على حسب طريقة شغلك.",
    ),
  },
  {
    name: copy("Education & training", "التعليم والتدريب"),
    slug: "education",
    title: copy(
      "A learning journey that goes beyond the classroom.",
      "رحلة تعليم متكاملة، جوه الفصل وبراه.",
    ),
    problem: copy(
      "Students, instructors, and administrators need a connected experience.",
      "الطلاب والمدرسين والإدارة محتاجين تجربة مترابطة.",
    ),
    systems: ["EDU", "LMS", "Mobile"],
    steps: [
      copy("Enroll a learner", "تسجيل المتعلم"),
      copy("Deliver the learning", "تقديم المحتوى"),
      copy("Follow their progress", "متابعة التقدم"),
    ],
    detail: copy(
      "Bring admissions, course delivery, schedules, and learner records into the same conversation. Scope the tools your institution actually needs.",
      "اجمع القبول والمحتوى والجداول وملفات المتعلمين. نحدد الأدوات اللي مؤسستك محتاجاها فعلاً.",
    ),
  },
  {
    name: copy("Service businesses", "الشركات الخدمية"),
    slug: "crm",
    title: copy(
      "Keep the conversation moving. And the work with it.",
      "خلّي التواصل مستمر، والشغل معاه.",
    ),
    problem: copy(
      "A customer request should not get lost between teams.",
      "طلب العميل ماينفعش يضيع بين الفرق.",
    ),
    systems: ["CRM", "ERP", "Mobile"],
    steps: [
      copy("Capture the request", "تسجيل الطلب"),
      copy("Assign the next step", "تحديد الخطوة الجاية"),
      copy("Keep the client updated", "متابعة العميل"),
    ],
    detail: copy(
      "Shape a clear path from inquiry to service delivery, with customer records, team tasks, and the right follow-up at each stage.",
      "نرسم طريق واضح من الاستفسار لتقديم الخدمة، بملفات عملاء ومهام للفريق ومتابعة في كل مرحلة.",
    ),
  },
  {
    name: copy("Growing teams", "الفرق والشركات النامية"),
    slug: "hr",
    title: copy(
      "Give people the tools to do their best work.",
      "ادّي فريقك الأدوات اللي تساعده يشتغل أحسن.",
    ),
    problem: copy(
      "Every new colleague should add possibility, not paperwork.",
      "كل فرد جديد يضيف فرصة، مش عبء إداري.",
    ),
    systems: ["HR", "LMS", "ERP"],
    steps: [
      copy("Welcome your people", "استقبال الموظف"),
      copy("Connect everyday work", "ربط الشغل اليومي"),
      copy("Build their next skill", "تطوير المهارات"),
    ],
    detail: copy(
      "Connect employee information, requests, onboarding, and training. Start with the processes that matter most to your team.",
      "اربط بيانات الموظفين والطلبات والتأهيل والتدريب. نبدأ بالعمليات الأهم لفريقك.",
    ),
  },
];

export function IndustryStories() {
  const { isArabic: ar, t } = useLanguage();
  const [active, setActive] = useState(0);
  const scenario = scenarios[active];
  return (
    <section className="industry-stories section-spacing">
      <Container>
        <div className="section-intro">
          <h2>
            {ar ? (
              <>
                نفس التكنولوجيا.
                <br />
                إمكانيات مختلفة.
              </>
            ) : (
              <>
                Different worlds.
                <br />
                Connected possibilities.
              </>
            )}
          </h2>
          <p>
            {ar
              ? "مش كل شركة بتشتغل بنفس الطريقة. اختار مجال وشوف مثال إزاي الحلول ممكن تشتغل مع بعض."
              : "No two businesses work the same way. Choose a setting to explore how different solutions can work together."}
          </p>
        </div>
        <div
          className="industry-switcher"
          aria-label={ar ? "أمثلة حسب المجال" : "Explore industry scenarios"}
        >
          {scenarios.map((item, index) => (
            <button
              type="button"
              key={item.slug}
              aria-pressed={active === index}
              aria-controls="industry-story"
              onClick={() => setActive(index)}
            >
              {t(item.name)}
              <Arrow diagonal />
            </button>
          ))}
        </div>
        <div className="industry-story" id="industry-story" aria-live="polite">
          <div className="industry-narrative" key={`copy-${active}`}>
            <h3>{t(scenario.title)}</h3>
            <p>{t(scenario.detail)}</p>
            <Link
              className="text-link"
              href={`/contact?solution=${scenario.slug}` as Route}
            >
              {ar ? "ناقش رحلة شغلك" : "Let's map your workflow"}
              <Arrow />
            </Link>
          </div>
          <div className="industry-journey" key={`journey-${active}`}>
            <p>{t(scenario.problem)}</p>
            <div className="journey-systems">
              {scenario.systems.map((system) => (
                <span key={system}>{system}</span>
              ))}
            </div>
            <ol>
              {scenario.steps.map((step, index) => (
                <li key={step.en}>
                  <span>{index + 1}</span>
                  <strong>{t(step)}</strong>
                  <CheckIcon />
                </li>
              ))}
            </ol>
            <span className="scenario-caption">
              {ar
                ? "مثال توضيحي — نطاق مشروعك بيتحدد معاك."
                : "Illustrative scenario. Your project scope is defined together."}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

const connectionPaths = [
  "M155 62H230Q260 62 260 110V160H290",
  "M155 175H290",
  "M155 288H230Q260 288 260 240V190H290",
  "M445 62H370Q340 62 340 110V160H310",
  "M445 175H310",
  "M445 288H370Q340 288 340 240V190H310",
];

export function ConnectedSystems() {
  const { isArabic: ar, t } = useLanguage();
  const [active, setActive] = useState(0);
  const solution = solutions[active];
  return (
    <section className="connected-section section-spacing">
      <Container className="connected-layout">
        <div>
          <h2>
            {ar ? (
              <>
                كل جزء،
                <br />
                <span>بيكمّل الصورة.</span>
              </>
            ) : (
              <>
                Every part.
                <br />
                <span>A bigger picture.</span>
              </>
            )}
          </h2>
          <p className="body-copy">
            {ar
              ? "موقع، تطبيق، أو نظام داخلي. نقدر نقيّم إزاي البيانات والخطوات تنتقل بينهم، حسب إمكانيات الربط المتاحة."
              : "A website, an app, or an internal system. We explore how data and actions can move between them, based on the integrations available."}
          </p>
          <ul className="connection-principles">
            {[
              copy(
                "Map the data that needs to move",
                "نحدد البيانات اللي محتاجة تنتقل",
              ),
              copy(
                "Connect the steps, not just the tools",
                "نربط الخطوات، مش الأدوات بس",
              ),
              copy(
                "Define access for the right people",
                "نحدد الصلاحيات للمستخدمين المناسبين",
              ),
            ].map((item) => (
              <li key={item.en}>
                <CheckIcon />
                {t(item)}
              </li>
            ))}
          </ul>
          <Link href="/services" className="text-link">
            {ar ? "استكشف خدمات التكامل" : "Explore integration services"}
            <Arrow />
          </Link>
        </div>
        <div className="systems-explorer">
          <div
            className="systems-map"
            aria-label={
              ar ? "خريطة توضيحية للحلول" : "Illustrative solution map"
            }
          >
            <svg
              className="system-connectors"
              viewBox="0 0 600 350"
              fill="none"
              aria-hidden="true"
            >
              {connectionPaths.map((path, index) => (
                <path
                  key={path}
                  d={path}
                  className={active === index ? "connection-active" : ""}
                />
              ))}
              <path
                key={active}
                className="connection-trace"
                d={connectionPaths[active]}
              />
            </svg>
            <div className="system-hub">
              <OdinMark />
              <strong>OSS.</strong>
              <span>{ar ? "حول احتياجك" : "Built around you"}</span>
            </div>
            {solutions.map((item, index) => (
              <button
                className={`system-node node-${index}`}
                type="button"
                key={item.slug}
                aria-pressed={active === index}
                aria-controls="system-description"
                onClick={() => setActive(index)}
              >
                <SolutionIcon slug={item.slug} />
                <span>{item.short}</span>
              </button>
            ))}
          </div>
          <div
            className="system-description"
            id="system-description"
            aria-live="polite"
          >
            <div>
              <strong>{t(solution.name)}</strong>
              <p>{t(solution.outcome)}</p>
            </div>
            <Link
              href={`/solutions/${solution.slug}` as Route}
              aria-label={`${ar ? "استكشف" : "Explore"} ${t(solution.name)}`}
            >
              <Arrow />
            </Link>
          </div>
          <p className="systems-caption">
            {ar
              ? "خريطة توضيحية. التكاملات بتتحدد حسب مشروعك."
              : "Illustrative map. Integrations are scoped for your project."}
          </p>
        </div>
      </Container>
    </section>
  );
}
