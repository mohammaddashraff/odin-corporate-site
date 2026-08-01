import { ERPProduct } from "@/components/sections/erp-product";
import { Hero } from "@/components/sections/hero";
import { EyeDivider } from "@/components/ui/eye-divider";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "ODIN ERP | Accounting, Inventory, Sales and POS",
  "ODIN ERP is a bilingual, auditable platform for accounting, sales, purchasing, inventory, POS, banking, approvals, and reporting.",
  "/"
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <EyeDivider />
      <ERPProduct />
    </>
  );
}
