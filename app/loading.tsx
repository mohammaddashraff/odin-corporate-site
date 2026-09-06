"use client";
import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/ui/container";
import { OdinMark } from "@/components/ui/logo";
export default function Loading() {
  const { isArabic: ar } = useLanguage();
  return (
    <section className="section-spacing" aria-busy="true">
      <Container>
        <div
          className="flex items-center justify-center gap-4 text-blue"
          role="status"
        >
          <OdinMark />
          <span>{ar ? "جاري تحميل الصفحة…" : "Loading page…"}</span>
        </div>
      </Container>
    </section>
  );
}
