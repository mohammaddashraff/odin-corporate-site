import { AboutPageContent } from "@/components/sections/company-pages";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "About ODIN",
  "Meet ODIN Software Solutions: a software partner building business systems and digital products around client needs.",
  "/about",
);
export default function AboutPage() {
  return <AboutPageContent />;
}
