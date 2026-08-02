"use client";

import Image from "next/image";

import { useLanguage } from "@/components/language-provider";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

const modules = [
  ["Sales & Receivables", "المبيعات والعملاء", "Quotations, orders, deliveries, invoices, returns, receipts, statements, and AR aging.", "عروض الأسعار والأوامر والتسليم والفواتير والمرتجعات والتحصيل وكشوف الحساب وأعمار الديون."],
  ["Purchasing & Payables", "المشتريات والموردون", "Requests, purchase orders, goods receipts, supplier bills, payments, returns, and AP aging.", "طلبات الشراء وأوامر التوريد والاستلام وفواتير الموردين والمدفوعات والمرتجعات وأعمار الديون."],
  ["Inventory & Warehouses", "المخزون والمستودعات", "Transfers, adjustments, stock counts, valuation, stock cards, and negative-stock prevention.", "التحويلات والتسويات والجرد والتقييم وكروت الصنف ومنع المخزون السالب."],
  ["Accounting & Finance", "المحاسبة والمالية", "Balanced journals, branches, cost centers, approvals, immutable posting, reversals, and fiscal periods.", "قيود متوازنة وفروع ومراكز تكلفة وموافقات وترحيل غير قابل للتعديل وعكس القيود والفترات المالية."],
  ["Point of Sale", "نقاط البيع", "Barcode search, held carts, cash/card/split tender, receipt PDFs, returns, and shift closing.", "بحث بالباركود وتعليق السلات ودفع نقدي أو بطاقة أو مختلط وإيصالات PDF ومرتجعات وإغلاق الورديات."],
  ["Cash & Banking", "النقدية والبنوك", "Cash and bank accounts, receipts, payments, transfers, statement matching, and reconciliation.", "حسابات الخزينة والبنوك والمقبوضات والمدفوعات والتحويلات ومطابقة كشوف البنك والتسوية."],
  ["Approvals & Workflow", "الموافقات وسير العمل", "Maker-checker controls, approval inbox, history, comments, and role-aware actions.", "فصل المُعد عن المعتمد وصندوق الموافقات والسجل والتعليقات وإجراءات حسب الصلاحية."],
  ["Reports & Analytics", "التقارير والتحليلات", "Financial statements, ledgers, aging, inventory, sales, purchasing, POS, CSV, PDF, and drill-down.", "القوائم المالية ودفاتر الأستاذ والأعمار والمخزون والمبيعات والمشتريات ونقاط البيع وتصدير CSV وPDF."],
  ["Administration & Audit", "الإدارة والتدقيق", "Role-based access, tenant isolation, append-only audit trail, health checks, and controlled reset.", "صلاحيات حسب الدور وعزل الشركات وسجل تدقيق غير قابل للحذف وفحوصات سلامة وإعادة ضبط محكومة."]
] as const;

const shots = [
  ["/screenshots/erp-dashboard.png", "Executive Command Center", "مركز القيادة التنفيذي"],
  ["/screenshots/erp-pos.png", "Integrated Point of Sale", "نقطة بيع متكاملة"],
  ["/screenshots/erp-reports.png", "Financial Report Library", "مكتبة التقارير المالية"]
] as const;

export function ERPProduct() {
  const { language } = useLanguage();
  const ar = language === "ar";

  return (
    <>
      <section id="erp-modules" className="section-spacing border-b border-stroke">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-blue">{ar ? "وحدات ODIN ERP" : "ODIN ERP Modules"}</p>
            <h2 className="mt-4 text-3xl font-semibold text-text md:text-5xl">{ar ? "كل قسم يعمل على نفس الحقيقة." : "Every department. One source of truth."}</h2>
            <p className="mt-5 leading-relaxed text-muted">{ar ? "من أول المستند التشغيلي حتى أثره على المخزون والحسابات، يحافظ النظام على سلسلة مترابطة وقابلة للتدقيق." : "From the first operational document to its inventory and accounting impact, ODIN keeps every transaction connected and auditable."}</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {modules.map(([enTitle, arTitle, enText, arText], index) => (
              <article key={enTitle} className="surface group p-6 transition duration-300 hover:-translate-y-1 hover:border-blue/45">
                <span className="text-xs font-semibold text-blue">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-xl font-semibold text-text">{ar ? arTitle : enTitle}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{ar ? arText : enText}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-spacing">
        <Container>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-blue">{ar ? "من داخل النظام" : "Inside the product"}</p>
              <h2 className="mt-4 text-3xl font-semibold text-text md:text-5xl">{ar ? "شاهد المنتج الحقيقي، وليس مجرد تصور." : "See the real product, not a mockup."}</h2>
            </div>
            <ButtonLink href={siteConfig.demoUrl} variant="secondary">{ar ? "استكشف النسخة الحية" : "Explore the live system"}</ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {shots.map(([src, en, arabic], index) => (
              <figure key={src} className={`surface overflow-hidden ${index === 0 ? "lg:col-span-2" : ""}`}>
                <div className="relative aspect-[16/10] overflow-hidden bg-white">
                  <Image src={src} alt={ar ? arabic : en} fill className="object-cover object-top" sizes={index === 0 ? "(min-width:1024px) 66vw, 100vw" : "(min-width:1024px) 33vw, 100vw"} />
                </div>
                <figcaption className="border-t border-stroke px-5 py-4 text-sm font-medium text-text">{ar ? arabic : en}</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/80 bg-white/35 py-16 shadow-[inset_0_18px_40px_rgba(255,255,255,.65),inset_0_-16px_36px_rgba(105,126,170,.07)] backdrop-blur-sm">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-blue">{ar ? "تحكم يمكنك إثباته" : "Control you can prove"}</p>
            <h2 className="mt-4 text-3xl font-semibold text-text md:text-4xl">{ar ? "مصمم للعمليات المالية الجادة." : "Built for serious financial operations."}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ar ? ["ترحيل محكم", "القيود المرحلة غير قابلة للتعديل، مع عكس مرتبط وسبب موثق."] : ["Immutable posting", "Posted journals cannot be edited, with linked reversals and documented reasons."],
              ar ? ["تكامل المخزون والحسابات", "حركات المخزون وتكلفة البضاعة والضرائب والعملاء والموردون تنعكس في القيود."] : ["Inventory-to-ledger integrity", "Stock, COGS, VAT, receivables, and payables flow into the accounting records."],
              ar ? ["صلاحيات واضحة", "تختلف الشاشات والإجراءات حسب دور المدير والمحاسب والمراجع والكاشير والمخزن."] : ["Role-aware governance", "Navigation and actions change for administrators, accountants, auditors, cashiers, and warehouse teams."],
              ar ? ["عربي وإنجليزي", "واجهة عربية كاملة باتجاه RTL مع استمرار اختيار اللغة عبر التنقل وتسجيل الدخول."] : ["English and Arabic", "A complete RTL Arabic interface with language persistence across navigation and sign-in."]
            ].map(([title, text]) => (
              <div key={title} className="rounded-[1.4rem] border border-white/90 bg-panel/70 p-5 shadow-[10px_10px_22px_rgba(105,126,170,.14),-8px_-8px_20px_rgba(255,255,255,.9),inset_1px_1px_0_white]">
                <h3 className="font-semibold text-text">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-spacing">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/90 bg-gradient-to-br from-blue-100/90 via-white/70 to-pink-100/80 p-8 shadow-[20px_20px_42px_rgba(105,126,170,.18),-15px_-15px_34px_rgba(255,255,255,.95),inset_1px_1px_0_white] md:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-300/25 blur-3xl" />
            <div className="relative max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-blue">{ar ? "شاهد دورة العمل كاملة" : "Run the workflow yourself"}</p>
              <h2 className="mt-4 text-3xl font-semibold text-text md:text-5xl">{ar ? "اختبر ODIN ERP على بيانات تشغيلية حقيقية." : "Experience ODIN ERP with real operating data."}</h2>
              <p className="mt-5 leading-relaxed text-muted">{ar ? "افتح النسخة المنشورة واستكشف لوحة الإدارة والمبيعات والمخزون ونقاط البيع والحسابات والتقارير." : "Open the deployed demo and explore the dashboard, sales, inventory, POS, accounting, and reporting workflows."}</p>
              <div className="mt-8"><ButtonLink href={siteConfig.demoUrl}>{ar ? "افتح النسخة التجريبية" : "Open Live Demo"}</ButtonLink></div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
