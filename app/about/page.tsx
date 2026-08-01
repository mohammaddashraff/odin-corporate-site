import { ERPInfoPage } from "@/components/sections/erp-info-page";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("About ODIN ERP", "ODIN ERP is an auditable bilingual accounting and distribution platform.", "/about");

export default function AboutPage() {
  return <ERPInfoPage
    eyebrow={{ en: "About ODIN ERP", ar: "عن ODIN ERP" }}
    title={{ en: "A business system engineered around traceability", ar: "نظام أعمال مبني حول التتبع والرقابة" }}
    description={{ en: "ODIN ERP is a full-stack accounting and distribution platform designed to keep operational activity, stock, cash, and the general ledger aligned.", ar: "ODIN ERP هو نظام متكامل للمحاسبة والتوزيع صُمم للحفاظ على تطابق النشاط التشغيلي والمخزون والنقدية ودفتر الأستاذ." }}
    image="/screenshots/erp-reports.png"
    items={[
      { title: { en: "Real operating workflows", ar: "دورات عمل حقيقية" }, text: { en: "The deployed product executes sales, purchasing, inventory, POS, accounting, banking, approvals, and reporting from the browser.", ar: "ينفذ المنتج المنشور المبيعات والمشتريات والمخزون ونقاط البيع والمحاسبة والبنوك والموافقات والتقارير من المتصفح." } },
      { title: { en: "Financial integrity", ar: "سلامة مالية" }, text: { en: "Balanced posting, stock controls, control-account reconciliation, fiscal periods, and immutable audit evidence are enforced.", ar: "يتم فرض توازن القيود وضوابط المخزون وتسوية الحسابات الرقابية والفترات المالية وأدلة التدقيق غير القابلة للتعديل." } },
      { title: { en: "Bilingual by default", ar: "ثنائي اللغة من الأساس" }, text: { en: "English and Arabic are supported across navigation, screens, forms, validation, reports, and right-to-left layouts.", ar: "يدعم النظام الإنجليزية والعربية في التنقل والشاشات والنماذج والتحقق والتقارير وتخطيط RTL." } },
      { title: { en: "Built for accountable teams", ar: "مصمم للفرق المسؤولة" }, text: { en: "Role-aware workflows, approval history, comments, source drill-down, and append-only audit records make actions explainable.", ar: "تجعل الصلاحيات وسجل الموافقات والتعليقات والتتبع للمصدر وسجلات التدقيق الإجراءات قابلة للتفسير." } }
    ]}
  />;
}
