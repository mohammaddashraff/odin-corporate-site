import type { Metadata } from "next";
import "./globals.css";
import "./home-experience.css";
import { AnalyticsPlaceholder } from "@/components/analytics-placeholder";
import { LanguageProvider } from "@/components/language-provider";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { siteConfig } from "@/lib/site";
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: "%s | ODIN Software Solutions" },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: { icon: "/icon.svg" },
};
const directionContract =
  "<!-- THESIS: Software shaped around a client's work; solution exploration replaces the ERP-only sales pitch. OWN-WORLD: User-selected light, navy and blue; Manrope typography, generous whitespace, flat eye mark, clear geometric workflows. STORY: Understand the breadth, explore a solution, discuss a project. FIRST VIEWPORT: Large three-line message left, keyboard-operable six-solution explorer right, blue project CTA under the message. Signature interaction: choosing a solution replaces its connected workflow with a short staged reveal; reduced motion stays static. FORM: Client-selected professional software studio, code-led, overriding assigned index 4; seed 3afb45e0. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md -->";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        <template dangerouslySetInnerHTML={{ __html: directionContract }} />
        <LanguageProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-blue focus:px-3 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <Header />
          <main id="main-content" className="min-h-[70vh]">
            {children}
          </main>
          <Footer />
          <AnalyticsPlaceholder />
        </LanguageProvider>
      </body>
    </html>
  );
}
