import { ServicesPageContent } from "@/components/sections/company-pages";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Software development services",
  "Custom software development, web and mobile applications, integration, product design, and ongoing improvement.",
  "/services",
);
export default function ServicesPage() {
  return <ServicesPageContent />;
}
