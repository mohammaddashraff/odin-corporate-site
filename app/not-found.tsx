"use client";
import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
export default function NotFoundPage() {
  const { isArabic: ar } = useLanguage();
  return (
    <section className="page-hero">
      <Container>
        <h1>{ar ? "الصفحة دي مش موجودة." : "We couldn't find that page."}</h1>
        <p>
          {ar
            ? "الرابط ممكن يكون اتغيّر. ارجع للرئيسية واستكشف حلول ODIN."
            : "The link may have changed. Head back home to explore ODIN's software solutions."}
        </p>
        <ButtonLink href="/">
          {ar ? "ارجع للرئيسية" : "Back to home"}
        </ButtonLink>
      </Container>
    </section>
  );
}
