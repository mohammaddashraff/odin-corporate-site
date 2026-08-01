"use client";

import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { navItems, siteConfig } from "@/lib/site";

export function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="border-t border-stroke bg-panel/40">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            {language === "en"
              ? "ODIN ERP connects accounting, sales, purchasing, inventory, POS, banking, approvals, and reporting in one controlled platform."
              : "يجمع ODIN ERP المحاسبة والمبيعات والمشتريات والمخزون ونقاط البيع والبنوك والموافقات والتقارير في منصة واحدة محكمة."}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-silver">{language === "en" ? "Navigation" : "التنقل"}</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-blue" href={item.href}>
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-silver">{language === "en" ? "Contact" : "تواصل معنا"}</h3>
          <p className="mt-4 text-sm text-muted">{language === "en" ? "Email" : "البريد الإلكتروني"}: {siteConfig.email}</p>
          <div className="mt-6 flex gap-3">
            <Link href="/privacy" className="text-sm text-muted transition hover:text-blue">
              {language === "en" ? "Privacy" : "الخصوصية"}
            </Link>
            <Link href="/terms" className="text-sm text-muted transition hover:text-blue">
              {language === "en" ? "Terms" : "الشروط"}
            </Link>
          </div>
        </div>
      </Container>
      <div className="border-t border-stroke py-4 text-center text-xs text-muted">
        <Container>(c) {new Date().getFullYear()} ODIN ERP. {language === "en" ? "All rights reserved." : "جميع الحقوق محفوظة."}</Container>
      </div>
    </footer>
  );
}
