"use client";
import type { Route } from "next";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/ui/container";
import { ButtonLink, Arrow } from "@/components/ui/button-link";
import {
  ProcessSection,
  ProjectCTA,
  SolutionGrid,
} from "@/components/sections/software-home";
import { SoftwarePreview } from "@/components/sections/software-preview";
import { copy, type Solution } from "@/content/solutions";
import { siteConfig } from "@/lib/site";

export function SolutionsPageContent() {
  const { isArabic: ar } = useLanguage();
  return (
    <>
      <section className="page-hero">
        <Container>
          <h1>
            {ar
              ? "البرمجيات المناسبة، تبدأ باحتياجك."
              : "The right software starts with your needs."}
          </h1>
          <p>
            {ar
              ? "حلول لإدارة أعمالك وتطوير تجربة عملائك وتمكين فريقك. استكشف اللي محتاجه، أو خلينا نبدأ من فكرتك."
              : "Solutions to run your business, improve your customer experience, and help your team do more. Find what you need, or let's start with your idea."}
          </p>
        </Container>
      </section>
      <SolutionGrid heading={false} />
      <ProjectCTA />
    </>
  );
}

export function SolutionPageContent({ solution }: { solution: Solution }) {
  const { isArabic: ar, t } = useLanguage();
  return (
    <>
      <section className="page-hero">
        <Container>
          <nav
            className="breadcrumb"
            aria-label={ar ? "مسار الصفحة" : "Breadcrumb"}
          >
            <Link href="/solutions">{ar ? "الحلول" : "Solutions"}</Link>
            <Arrow />
            <span>{t(solution.name)}</span>
          </nav>
          <div className="solution-detail-hero">
            <div>
              <h1>{t(solution.promise)}</h1>
              <p>{t(solution.description)}</p>
              <ButtonLink href={`/contact?solution=${solution.slug}`}>
                {ar ? "ناقش الحل المناسب ليك" : "Discuss your solution"}
              </ButtonLink>
            </div>
            <SoftwarePreview solution={solution} />
          </div>
        </Container>
      </section>
      <section className="section-spacing">
        <Container>
          <div className="section-intro">
            <h2>
              {ar ? "نبنيه على طريقة شغلك." : "Built around how you work."}
            </h2>
            <p>
              {ar
                ? "دي بعض الجوانب اللي نقدر نبني عليها مشروعك. بنحدد الوظائف والتكاملات المطلوبة معاك حسب أهدافك."
                : "These are some of the areas your project can cover. We define the features and integrations together, based on what your business needs."}
            </p>
          </div>
          <ul className="detail-feature-list">
            {solution.features.map((feature) => (
              <li key={feature.en}>
                <Arrow diagonal />
                {t(feature)}
              </li>
            ))}
          </ul>
          {solution.slug === "erp" && (
            <div className="custom-solution">
              <div>
                <h3>
                  {ar
                    ? "استكشف ODIN ERP الحالي"
                    : "Explore the existing ODIN ERP"}
                </h3>
                <p>
                  {ar
                    ? "جرّب نموذج من حلول إدارة الأعمال اللي بنقدمها."
                    : "Take a look at one example of our business software."}
                </p>
              </div>
              <ButtonLink href={siteConfig.demoUrl} variant="secondary">
                {ar ? "افتح النسخة التجريبية" : "Open the live demo"}
              </ButtonLink>
            </div>
          )}
        </Container>
      </section>
      <ProcessSection />
      <ProjectCTA />
    </>
  );
}

const services = [
  {
    title: copy("Custom software development", "تطوير برمجيات مخصصة"),
    text: copy(
      "From a focused internal tool to a complete business platform. We shape the requirements, architecture, and experience around the problem you need to solve.",
      "من أداة داخلية بسيطة لمنصة أعمال متكاملة. بنصمم المتطلبات والبنية والتجربة حول المشكلة اللي محتاج تحلها.",
    ),
  },
  {
    title: copy("Web & mobile applications", "تطبيقات الويب والموبايل"),
    text: copy(
      "Digital products for the people who use them. Customer portals, mobile apps, and web platforms with clear journeys and connected services.",
      "منتجات رقمية مصممة لمستخدميها. بوابات عملاء وتطبيقات موبايل ومنصات ويب بتجربة واضحة وخدمات مترابطة.",
    ),
  },
  {
    title: copy("Business systems & integration", "أنظمة الأعمال والتكامل"),
    text: copy(
      "Bring the right systems together. We evaluate your existing tools and connect the data and workflows your team depends on.",
      "نربط الأنظمة اللي تحتاجها. بنقيّم أدواتك الحالية ونحدد طريقة ربط البيانات ودورات العمل اللي فريقك بيعتمد عليها.",
    ),
  },
  {
    title: copy("Product design & discovery", "تصميم المنتجات وتحليل الاحتياج"),
    text: copy(
      "Make the idea concrete before development. Clarify priorities, map user journeys, and shape a practical first version of your product.",
      "بنحوّل الفكرة لتصور واضح قبل التطوير. نحدد الأولويات ورحلة المستخدم ونطاق مناسب لأول نسخة من منتجك.",
    ),
  },
  {
    title: copy("Support & continuous improvement", "الدعم والتطوير المستمر"),
    text: copy(
      "Plan for life after launch. Maintenance, improvements, and future releases can be scoped around your software and your team's needs.",
      "بنخطط لما بعد الإطلاق. نطاق الصيانة والتحسينات والإصدارات الجاية بيتحدد حسب احتياج النظام وفريقك.",
    ),
  },
];
export function ServicesPageContent() {
  const { isArabic: ar, t } = useLanguage();
  return (
    <>
      <section className="page-hero">
        <Container>
          <h1>
            {ar
              ? "شريكك في كل خطوة من رحلة البرمجيات."
              : "Your software partner. From idea to everyday use."}
          </h1>
          <p>
            {ar
              ? "بداية من فهم الاحتياج وتصميم المنتج، لحد التطوير والتكامل والإطلاق. نحدد معاك الخدمات اللي يحتاجها مشروعك."
              : "From understanding the need and designing the product to development, integration, and launch. We shape the engagement around your project."}
          </p>
          <ButtonLink href="/contact">
            {ar ? "خلينا نناقش مشروعك" : "Let's discuss your project"}
          </ButtonLink>
        </Container>
      </section>
      <section className="section-spacing">
        <Container>
          {services.map((service) => (
            <article className="service-row" key={service.title.en}>
              <h2>{t(service.title)}</h2>
              <div>
                <p>{t(service.text)}</p>
                <Link href="/contact" className="text-link">
                  {ar ? "ناقش احتياجك" : "Discuss your needs"}
                  <Arrow />
                </Link>
              </div>
            </article>
          ))}
        </Container>
      </section>
      <ProcessSection />
      <ProjectCTA />
    </>
  );
}

const industryExamples = [
  {
    title: copy("Business & professional services", "الشركات والخدمات المهنية"),
    text: copy(
      "Connect customer relationships, projects, people, and day-to-day administration with software shaped around your team's work.",
      "اربط علاقات العملاء والمشروعات والموظفين والإدارة اليومية ببرمجيات مناسبة لطريقة شغل فريقك.",
    ),
    link: "crm",
  },
  {
    title: copy("Retail & distribution", "التجارة والتوزيع"),
    text: copy(
      "Bring sales, stock, purchasing, and accounting into connected workflows, from a customer order to the movement of goods.",
      "اربط المبيعات والمخزون والمشتريات والحسابات، من طلب العميل لحركة البضاعة.",
    ),
    link: "erp",
  },
  {
    title: copy("Education & training", "التعليم والتدريب"),
    text: copy(
      "Support the whole learning environment: courses and assessments, student administration, schedules, and communication.",
      "ادعم تجربة التعليم كاملة: الدورات والاختبارات وإدارة الطلاب والجداول والتواصل.",
    ),
    link: "education",
  },
  {
    title: copy("Digital products & services", "المنتجات والخدمات الرقمية"),
    text: copy(
      "Turn a new service or product idea into a web or mobile application with a clear experience for your customers.",
      "حوّل فكرة خدمتك أو منتجك لتطبيق ويب أو موبايل بتجربة واضحة لعملائك.",
    ),
    link: "mobile-apps",
  },
];
export function IndustriesPageContent() {
  const { isArabic: ar, t } = useLanguage();
  return (
    <>
      <section className="page-hero">
        <Container>
          <h1>
            {ar
              ? "كل قطاع له تفاصيله. وكل حل يبدأ بيها."
              : "Different industries. Real-world needs."}
          </h1>
          <p>
            {ar
              ? "دي أمثلة لإزاي البرمجيات تقدر تخدم شغلك. بنبدأ بفهم عملياتك قبل اختيار شكل الحل."
              : "Explore how software can support your business. We start by understanding your operations before choosing the shape of the solution."}
          </p>
        </Container>
      </section>
      <section className="section-spacing">
        <Container className="industry-grid">
          {industryExamples.map((item) => (
            <article key={item.link} className="industry-item">
              <h2>{t(item.title)}</h2>
              <p>{t(item.text)}</p>
              <Link
                href={`/solutions/${item.link}` as Route}
                className="text-link"
              >
                {ar ? "استكشف حل مناسب" : "Explore a relevant solution"}
                <Arrow />
              </Link>
            </article>
          ))}
        </Container>
      </section>
      <ProjectCTA />
    </>
  );
}

export function AboutPageContent() {
  const { isArabic: ar } = useLanguage();
  return (
    <>
      <section className="page-hero">
        <Container>
          <h1>
            {ar
              ? "نفهم شغلك. ونبني البرمجيات اللي تناسبه."
              : "We understand your business. Then we build for it."}
          </h1>
          <p>
            {ar
              ? "ODIN Software Solutions شركة حلول برمجية. بنساعد العملاء يحوّلوا احتياجاتهم لأنظمة ومنتجات رقمية، من إدارة الأعمال لحد التعليم وتجارب الموبايل."
              : "ODIN Software Solutions is a software solutions company. We help clients turn their needs into business systems and digital products, from everyday operations to education and mobile experiences."}
          </p>
          <ButtonLink href="/contact">
            {ar ? "اتعرف علينا من خلال مشروعك" : "Tell us about your project"}
          </ButtonLink>
        </Container>
      </section>
      <section className="section-spacing">
        <Container>
          <div className="section-intro">
            <h2>
              {ar
                ? "البداية دايمًا من احتياجك."
                : "The starting point is always you."}
            </h2>
            <p>
              {ar
                ? "احتياجك هو اللي بيحدد الحل: HR أو ERP أو CRM أو منصة تعليمية أو تطبيق موبايل أو نظام مخصص. هدفنا نبني حاجة ليها مكان حقيقي في شغلك."
                : "Your need determines the solution: HR, ERP, CRM, a learning platform, a mobile app, or a custom system. Our focus is software with a real place in the way you work."}
            </p>
          </div>
          <div className="service-row">
            <h2>{ar ? "وضوح في الاختيارات" : "Clarity in the decisions"}</h2>
            <p>
              {ar
                ? "نحدد الأولويات والنطاق والخطوات معاك، علشان يبقى واضح إيه اللي هيتبني وليه."
                : "We define priorities, scope, and next steps with you, so it's clear what we're building and why."}
            </p>
          </div>
          <div className="service-row">
            <h2>{ar ? "اهتمام بالمستخدم" : "Care for the people using it"}</h2>
            <p>
              {ar
                ? "التجربة اليومية مهمة زي الوظائف. بنصمم الحل حول المستخدمين والمهام اللي محتاجين ينجزوها."
                : "The everyday experience matters as much as the feature list. We design around the people and the tasks they need to complete."}
            </p>
          </div>
          <div className="service-row">
            <h2>{ar ? "مساحة للتطور" : "Room for what comes next"}</h2>
            <p>
              {ar
                ? "بنناقش احتياجات النهارده وخطط بكرة، علشان نقدر نرسم طريق مناسب لتطور مشروعك."
                : "We discuss today's needs and tomorrow's plans, so we can shape a sensible path for your product to evolve."}
            </p>
          </div>
        </Container>
      </section>
      <ProcessSection />
      <ProjectCTA />
    </>
  );
}
