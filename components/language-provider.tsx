"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import type { Language, LocalizedText } from "@/lib/i18n";

type LanguageContextValue = {
  language: Language;
  isArabic: boolean;
  setLanguage: (language: Language) => void;
  t: (copy: LocalizedText) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("odin-language");
    if (stored === "ar" || stored === "en") setLanguage(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem("odin-language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      isArabic: language === "ar",
      setLanguage,
      t: (copy: LocalizedText) => copy[language]
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
