"use client";
import Link from "next/link";
import type { Route } from "next";
import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { navItems, siteConfig } from "@/lib/site";
import { solutions } from "@/content/solutions";
export function Footer() {
  const { isArabic: ar, t } = useLanguage();
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-main">
          <div className="footer-brand">
            <Logo />
            <p>
              {ar
                ? "حلول برمجية مبنية حول شغلك. من أول فكرة للي جاي بعدها."
                : "Software built around your business. From the first idea to what comes next."}
            </p>
            <a href={`mailto:${siteConfig.email}`} dir="ltr">
              {siteConfig.email}
            </a>
          </div>
          <div>
            <h2>{ar ? "الحلول" : "Solutions"}</h2>
            {solutions.map((solution) => (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}` as Route}
              >
                {t(solution.name)}
              </Link>
            ))}
          </div>
          <div>
            <h2>{ar ? "الشركة" : "Company"}</h2>
            {navItems
              .filter((item) => item.href !== "/solutions")
              .map((item) => (
                <Link key={item.href} href={item.href}>
                  {t(item.label)}
                </Link>
              ))}
            <Link href="/insights">{ar ? "المقالات" : "Insights"}</Link>
            <Link href="/contact">{ar ? "تواصل معنا" : "Contact"}</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ODIN Software Solutions.</p>
          <div>
            <Link href="/privacy">{ar ? "الخصوصية" : "Privacy"}</Link>
            <Link href="/terms">{ar ? "الشروط" : "Terms"}</Link>
            <a href="#main-content">{ar ? "للأعلى" : "Back to top"}</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
