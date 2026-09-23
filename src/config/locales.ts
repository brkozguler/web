export const locales = ["tr", "en", "de", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

/** hreflang etiketlerinde kullanılan bölge kodlu karşılıklar */
export const hrefLangMap: Record<Locale, string> = {
  tr: "tr-TR",
  en: "en-US",
  de: "de-DE",
  ru: "ru-RU",
};

/** Dil değiştiricide görünen adlar */
export const localeNames: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
  de: "Deutsch",
  ru: "Русский",
};

export const localeShortNames: Record<Locale, string> = {
  tr: "TR",
  en: "EN",
  de: "DE",
  ru: "RU",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
