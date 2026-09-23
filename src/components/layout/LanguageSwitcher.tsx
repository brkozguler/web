"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  isLocale,
  localeShortNames,
  locales,
  type Locale,
} from "@/config/locales";
import { keyForAnySegment, routeSegments } from "@/config/routes";

type Props = {
  className?: string;
};

/**
 * Bulunulan sayfanın diğer dillerdeki karşılığına götürür. Detay sayfalarında
 * slug çevirisi veri katmanından geldiği için, kategori sayfasına düşülür.
 */
export default function LanguageSwitcher({ className = "" }: Props) {
  const pathname = usePathname() ?? "/";
  const segments = pathname.split("/").filter(Boolean);
  const current = segments[0];
  const activeLocale: Locale = isLocale(current) ? current : "tr";
  const categoryKey =
    segments.length > 1 ? keyForAnySegment(segments[1]) : null;

  return (
    <ul className={`flex items-center gap-16 ${className}`}>
      {locales.map((locale) => {
        const href = categoryKey
          ? `/${locale}/${routeSegments[categoryKey][locale]}/`
          : `/${locale}/`;

        return (
          <li key={locale}>
            <Link
              href={href}
              hrefLang={locale}
              className={`eyebrow transition-opacity duration-500 hover:opacity-100 ${
                locale === activeLocale ? "opacity-100" : "opacity-50"
              }`}
            >
              {localeShortNames[locale]}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
