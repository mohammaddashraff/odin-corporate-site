import { Container } from "@/components/ui/container";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Terms and Conditions",
  "Review ODIN terms for website usage, intellectual property, and service engagement boundaries.",
  "/terms",
);

export default function TermsPage() {
  return (
    <section className="section-spacing">
      <Container className="max-w-4xl">
        <h1 className="text-3xl font-semibold md:text-4xl">
          Terms and Conditions
        </h1>
        <p className="mt-3 text-sm text-muted">
          Last updated: February 18, 2026
        </p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted md:text-base">
          <p>
            By accessing ODIN resources, you agree to use this website for
            lawful purposes and in a manner that does not interfere with
            platform integrity or user access.
          </p>
          <p>
            All intellectual property, including text, design assets, and system
            frameworks, is owned by ODIN unless explicitly stated otherwise.
          </p>
          <p>
            Information provided on this website is for general business
            communication. Final project scope, terms, pricing, and delivery
            commitments are defined through formal agreements.
          </p>
          <p>
            ODIN may update these terms as services evolve. Continued use of the
            website indicates acceptance of the most current version.
          </p>
        </div>
      </Container>
    </section>
  );
}
