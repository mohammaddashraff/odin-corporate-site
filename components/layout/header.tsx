"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useLanguage } from "@/components/language-provider";
import { navItems, siteConfig } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-stroke bg-bg/90 backdrop-blur-md">
      <Container className="flex min-h-[74px] items-center justify-between gap-6">
        <Logo compact />

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl px-3 py-2 text-sm transition ${
                  active ? "text-blue" : "text-muted hover:text-text"
                }`}
              >
                {t(item.label)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            className="rounded-xl border border-stroke px-3 py-2 text-sm font-semibold text-silver transition hover:border-blue/60 hover:text-text"
            aria-label={language === "en" ? "Switch to Arabic" : "Switch to English"}
          >
            {language === "en" ? "العربية" : "EN"}
          </button>
          <ButtonLink href={siteConfig.demoUrl} variant="primary">
            {language === "en" ? "Request a Demo" : "جرّب النظام"}
          </ButtonLink>
        </div>

        <button
          type="button"
          className="rounded-xl border border-stroke px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-silver md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {language === "en" ? "Menu" : "القائمة"}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-stroke bg-panel/95 md:hidden">
          <Container className="flex flex-col py-4">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-2 py-3 text-sm ${active ? "text-blue" : "text-muted"}`}
                  onClick={() => setOpen(false)}
                >
                  {t(item.label)}
                </Link>
              );
            })}
            <div className="mt-3 grid grid-cols-[auto_1fr] gap-2">
              <button
                type="button"
                onClick={() => setLanguage(language === "en" ? "ar" : "en")}
                className="rounded-xl border border-stroke px-4 py-3 text-sm font-semibold text-silver"
              >
                {language === "en" ? "العربية" : "EN"}
              </button>
              <ButtonLink href={siteConfig.demoUrl} variant="primary">
                {language === "en" ? "Request a Demo" : "جرّب النظام"}
              </ButtonLink>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
