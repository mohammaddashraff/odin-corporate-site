import { ERPInfoPage } from "@/components/sections/erp-info-page";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Industries", "ODIN ERP supports distribution, retail, multi-branch, and service operations.", "/industries");

export default function IndustriesPage() {
  return <ERPInfoPage
    eyebrow={{ en: "Industries", ar: "القطاعات" }}
    title={{ en: "Built for inventory, distribution, retail, and financial control", ar: "مصمم للمخزون والتوزيع والتجزئة والرقابة المالية" }}
    description={{ en: "ODIN ERP fits organizations that need connected purchasing, warehouses, sales, POS, finance, approvals, and reporting across branches.", ar: "يناسب ODIN ERP المؤسسات التي تحتاج إلى ربط المشتريات والمستودعات والمبيعات ونقاط البيع والمالية والموافقات والتقارير عبر الفروع." }}
    image="/screenshots/erp-pos.png"
    items={[
      { title: { en: "Distribution", ar: "التوزيع" }, text: { en: "Control supplier purchasing, warehouse stock, customer orders, deliveries, invoices, collections, and profitability.", ar: "تحكم في مشتريات الموردين ومخزون المستودعات وأوامر العملاء والتسليم والفواتير والتحصيل والربحية." } },
      { title: { en: "Retail and POS", ar: "التجزئة ونقاط البيع" }, text: { en: "Run barcode sales, customer or walk-in transactions, discounts, split payments, returns, and cashier shifts.", ar: "نفذ البيع بالباركود ومعاملات العملاء أو البيع المباشر والخصومات والدفع المختلط والمرتجعات وورديات الكاشير." } },
      { title: { en: "Multi-branch operations", ar: "العمليات متعددة الفروع" }, text: { en: "Use branches, warehouses, cost centers, role controls, and consolidated reporting without losing transaction detail.", ar: "استخدم الفروع والمستودعات ومراكز التكلفة والصلاحيات والتقارير المجمعة مع الاحتفاظ بتفاصيل المعاملات." } },
      { title: { en: "Finance-led organizations", ar: "المؤسسات ذات الرقابة المالية" }, text: { en: "Maintain approvals, fiscal periods, audit evidence, control accounts, reconciliation, and financial statements.", ar: "حافظ على الموافقات والفترات المالية وأدلة التدقيق والحسابات الرقابية والتسويات والقوائم المالية." } }
    ]}
  />;
}
