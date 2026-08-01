import { ERPInfoPage } from "@/components/sections/erp-info-page";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("ODIN ERP Platform", "A bilingual and auditable ERP platform for distribution and finance.", "/solutions");

export default function SolutionsPage() {
  return <ERPInfoPage
    eyebrow={{ en: "The Platform", ar: "المنصة" }}
    title={{ en: "Operational execution with accounting integrity", ar: "تنفيذ تشغيلي بدقة محاسبية" }}
    description={{ en: "Every posted business event remains connected to its source document, stock movement, approval history, and journal evidence.", ar: "يظل كل حدث أعمال مُرحّل مرتبطاً بالمستند المصدر وحركة المخزون وسجل الموافقات والقيد المحاسبي." }}
    items={[
      { title: { en: "One connected document chain", ar: "سلسلة مستندية واحدة" }, text: { en: "Partial conversions and remaining-quantity controls connect quotations, orders, deliveries, invoices, receipts, and returns.", ar: "التحويل الجزئي وضوابط الكميات المتبقية تربط العروض والأوامر والتسليم والفواتير والتحصيل والمرتجعات." } },
      { title: { en: "Auditable by design", ar: "قابل للتدقيق بطبيعته" }, text: { en: "Maker-checker approvals, immutable posted journals, linked reversals, and append-only audit records preserve accountability.", ar: "الموافقات وفصل المهام والقيود المرحلة غير القابلة للتعديل والعكس المرتبط وسجل التدقيق تحفظ المساءلة." } },
      { title: { en: "Role-aware access", ar: "صلاحيات حسب الدور" }, text: { en: "Administrators, finance, accounting, audit, sales, purchasing, warehouse, and POS users see only permitted workflows.", ar: "يرى مستخدمو الإدارة والمالية والمحاسبة والمراجعة والمبيعات والمشتريات والمخازن ونقاط البيع ما تسمح به أدوارهم فقط." } },
      { title: { en: "English and Arabic RTL", ar: "إنجليزي وعربي RTL" }, text: { en: "The product supports complete English/LTR and Arabic/RTL interfaces with persistent language selection.", ar: "يدعم المنتج واجهات إنجليزية كاملة وعربية كاملة باتجاه RTL مع حفظ اختيار اللغة." } }
    ]}
  />;
}
