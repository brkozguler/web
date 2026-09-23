import type { Locale } from "@/config/locales";
import type { Dictionary } from "@/i18n/types";

const dictionaries: Record<Locale, () => Promise<{ default: Dictionary }>> = {
  tr: () => import("@/i18n/dictionaries/tr"),
  en: () => import("@/i18n/dictionaries/en"),
  de: () => import("@/i18n/dictionaries/de"),
  ru: () => import("@/i18n/dictionaries/ru"),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const load = dictionaries[locale] ?? dictionaries.tr;
  return (await load()).default;
}

export type { Dictionary };
