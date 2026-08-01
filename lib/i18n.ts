export type Language = "en" | "ar";

export type LocalizedText = {
  en: string;
  ar: string;
};

export const pick = (copy: LocalizedText, language: Language) => copy[language];
