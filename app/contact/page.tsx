import { ContactPageContent } from "@/components/contact/contact-form";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Let's talk about your project",
  "Tell ODIN Software Solutions about your next business system, education platform, mobile app, or custom software project.",
  "/contact",
);
export default function ContactPage() {
  return <ContactPageContent />;
}
