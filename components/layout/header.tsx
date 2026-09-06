"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { navItems } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const { language, setLanguage, t } = useLanguage();
  const ar = language === "ar";
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <header className="site-header">
      <Container className="header-inner">
        <Logo compact />
        <nav
          aria-label={ar ? "التنقل الرئيسي" : "Primary navigation"}
          className="desktop-nav"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname.startsWith(item.href) ? "page" : undefined}
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="language-button"
            type="button"
            onClick={() => setLanguage(ar ? "en" : "ar")}
            aria-label={ar ? "Switch to English" : "Switch to Arabic"}
          >
            {ar ? "EN" : "العربية"}
          </button>
          <ButtonLink className="header-cta" href="/contact">
            {ar ? "ناقش مشروعك" : "Let's talk"}
          </ButtonLink>
          <button
            ref={menuButton}
            type="button"
            className="menu-button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={ar ? "القائمة" : "Navigation menu"}
            onClick={() => setOpen(!open)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d={open ? "m6 6 12 12M6 18 18 6" : "M4 8h16M4 16h16"}
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </Container>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label={ar ? "قائمة الموبايل" : "Mobile navigation"}
        >
          <Container>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={
                  pathname.startsWith(item.href) ? "page" : undefined
                }
                onClick={() => setOpen(false)}
              >
                {t(item.label)}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)}>
              {ar ? "ناقش مشروعك" : "Let's talk about your project"}
            </Link>
          </Container>
        </nav>
      )}
    </header>
  );
}
