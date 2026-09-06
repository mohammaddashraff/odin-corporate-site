import { SoftwareHome } from "@/components/sections/software-home";
import { pageMetadata, siteConfig } from "@/lib/site";
export const metadata = pageMetadata(
  "ODIN Software Solutions | Software built around your business",
  siteConfig.description,
  "/",
);
export default function HomePage() {
  return <SoftwareHome />;
}
