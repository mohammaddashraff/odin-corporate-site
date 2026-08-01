import type { Metadata } from "next";

import "./globals.css";

import { AnalyticsPlaceholder } from "@/components/analytics-placeholder";
import { LanguageProvider } from "@/components/language-provider";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ODIN ERP | Total Business Control",
    template: "%s | ODIN"
  },
  description: siteConfig.description,
  openGraph: {
    title: "ODIN ERP | Total Business Control",
    description: siteConfig.description,
    url: "/",
    siteName: "ODIN ERP",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "ODIN ERP business platform"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ODIN ERP | Total Business Control",
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  },
  icons: {
    icon: [{ url: "/brand/odin_logo_no_bg.png", type: "image/png", sizes: "512x512" }],
    shortcut: ["/brand/odin_logo_no_bg.png"],
    apple: [{ url: "/brand/odin_logo_no_bg.png", type: "image/png", sizes: "180x180" }]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className="font-sans">
        <LanguageProvider>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-blue focus:px-3 focus:py-2 focus:text-white">
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
