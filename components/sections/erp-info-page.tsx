"use client";

import Image from "next/image";

import { useLanguage } from "@/components/language-provider";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { EyeWatermark } from "@/components/ui/eye-watermark";
import type { LocalizedText } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

type Item = { title: LocalizedText; text: LocalizedText };

export function ERPInfoPage({ eyebrow, title, description, items, image = "/screenshots/erp-reports.png" }: {
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  items: Item[];
  image?: string;
}) {
  const { language, t } = useLanguage();
  const ar = language === "ar";

  return (
    <>
      <section className="relative overflow-hidden border-b border-stroke py-16 md:py-20">
        <EyeWatermark />
        <Container className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue">{t(eyebrow)}</p>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight md:text-5xl">{t(title)}</h1>
            <p className="mt-5 text-base leading-relaxed text-muted">{t(description)}</p>
            <div className="mt-8"><ButtonLink href={siteConfig.demoUrl}>{ar ? "افتح النسخة التجريبية" : "Open Live Demo"}</ButtonLink></div>
          </div>
          <div className="overflow-hidden rounded-[1.35rem] border border-stroke bg-white shadow-2xl shadow-black/40">
            <Image src={image} alt={t(title)} width={1280} height={720} className="h-auto w-full" />
          </div>
        </Container>
      </section>
      <section className="section-spacing">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {items.map((item, index) => (
              <article key={item.title.en} className="surface p-6 md:p-8">
                <span className="text-xs font-semibold text-blue">{String(index + 1).padStart(2, "0")}</span>
                <h2 className="mt-4 text-xl font-semibold text-text">{t(item.title)}</h2>
                <p className="mt-3 leading-7 text-muted">{t(item.text)}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
