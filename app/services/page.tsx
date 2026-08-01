import { ERPInfoPage } from "@/components/sections/erp-info-page";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("ERP Modules", "Explore the operational modules implemented in ODIN ERP.", "/services");

export default function ServicesPage() {
  return <ERPInfoPage
    eyebrow={{ en: "ERP Modules", ar: "وحدات النظام" }}
    title={{ en: "Connected workflows from transaction to ledger", ar: "دورات عمل مترابطة من المستند حتى القيد" }}
    description={{ en: "ODIN ERP executes the complete sales, purchasing, inventory, POS, accounting, banking, approval, and reporting workflows in one platform.", ar: "ينفذ ODIN ERP دورات المبيعات والمشتريات والمخزون ونقاط البيع والمحاسبة والبنوك والموافقات والتقارير في منصة واحدة." }}
    image="/screenshots/erp-dashboard.png"
    items={[
      { title: { en: "Sales and customers", ar: "المبيعات والعملاء" }, text: { en: "Quotation to order, delivery, invoice, payment allocation, statement, aging, return, and credit note.", ar: "من عرض السعر إلى الأمر والتسليم والفاتورة والتحصيل وكشف الحساب والأعمار والمرتجع والإشعار الدائن." } },
      { title: { en: "Purchasing and suppliers", ar: "المشتريات والموردون" }, text: { en: "Purchase requests, orders, goods receipts, supplier bills, allocations, returns, GRNI, VAT, and payables.", ar: "طلبات وأوامر الشراء والاستلام وفواتير الموردين والتسويات والمرتجعات وحساب الاستلام غير المفوتر والضرائب والدائنين." } },
      { title: { en: "Inventory and POS", ar: "المخزون ونقاط البيع" }, text: { en: "Warehouse transfers, counts, adjustments, valuation, barcode sales, split tender, receipts, returns, and shift control.", ar: "تحويلات وجرد وتسويات وتقييم المخزون، وبيع بالباركود ودفع مختلط وإيصالات ومرتجعات وإدارة الورديات." } },
      { title: { en: "Finance and control", ar: "المالية والرقابة" }, text: { en: "Journals, fiscal periods, cash and bank, reconciliation, approvals, immutable posting, audit trail, and financial reports.", ar: "القيود والفترات المالية والخزينة والبنوك والتسويات والموافقات والترحيل المحكم وسجل التدقيق والتقارير المالية." } }
    ]}
  />;
}
