import { IndustriesPageContent } from "@/components/sections/company-pages";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Industries",
  "Explore software solutions for business services, retail and distribution, education, and digital products.",
  "/industries",
);
export default function IndustriesPage() {
  return <IndustriesPageContent />;
}
