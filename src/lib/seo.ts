import type { Metadata } from "next";

import { hrefLangMap, locales, type Locale } from "@/config/locales";
import { siteConfig } from "@/config/site";

/**
 * Canonical + hreflang üretir. `pathsByLocale` her dilin site içi yolunu
 * (`/tr/galeri/odalar/` gibi) taşır; böylece yerelleştirilmiş slug'lar
 * doğru şekilde eşleşir.
 */
export function buildAlternates(
  pathsByLocale: Record<Locale, string>,
  locale: Locale,
): Metadata["alternates"] {
  const languages = Object.fromEntries(
    locales.map((item) => [
      hrefLangMap[item],
      `${siteConfig.domain}${pathsByLocale[item]}`,
    ]),
  );

  return {
    canonical: `${siteConfig.domain}${pathsByLocale[locale]}`,
    languages: {
      ...languages,
      "x-default": `${siteConfig.domain}${pathsByLocale.en}`,
    },
  };
}
