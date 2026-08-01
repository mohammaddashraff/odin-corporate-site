import { Container } from "@/components/ui/container";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Privacy Policy",
  "Read the ODIN privacy policy for data handling, retention, and communication practices.",
  "/privacy"
);

export default function PrivacyPage() {
  return (
    <section className="section-spacing">
      <Container className="max-w-4xl">
        <h1 className="text-3xl font-semibold md:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted">Last updated: February 18, 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted md:text-base">
          <p>
            ODIN collects contact details and project inquiry information to respond to requests, prepare proposals,
            and improve service delivery.
          </p>
          <p>
            We process submitted data for communication, qualification, and operational planning. Data is retained only
            as long as required for legitimate business and legal purposes.
          </p>
          <p>
            ODIN applies reasonable technical and organizational safeguards to protect information against unauthorized
            access, disclosure, or misuse.
          </p>
          <p>
            You may request access, correction, or deletion of personal data by contacting hello@odin-ltd.com.
            We will respond in accordance with applicable regulations.
          </p>
        </div>
      </Container>
    </section>
  );
}
