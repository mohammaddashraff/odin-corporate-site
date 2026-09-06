import { SolutionsPageContent } from "@/components/sections/company-pages";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Software solutions",
  "Explore ODIN solutions for ERP, HR, CRM, learning management, education, and mobile applications.",
  "/solutions",
);
export default function SolutionsPage() {
  return <SolutionsPageContent />;
}
