import { type Locale, locales } from "@/config/locales";

/**
 * Uygulama içinde route klasörleri İngilizce anahtarlarla duruyor
 * (`src/app/[locale]/rooms/...`), kullanıcıya görünen URL ise dile göre
 * yerelleştiriliyor (`/de/zimmer/...`). Çeviri tek kaynaktan — buradan —
 * yapılıyor: middleware gelen isteği bu tabloyla canonical segmente
 * yeniden yazıyor, linkler ve hreflang etiketleri de buradan üretiliyor.
 */
export const routeSegments = {
  hotel: { tr: "otel", en: "hotel", de: "hotel", ru: "otel" },
  rooms: {
    tr: "konaklama",
    en: "accommodation",
    de: "unterkunft",
    ru: "prozhivanie",
  },
  dining: {
    tr: "restoranlar",
    en: "restaurants",
    de: "restaurants",
    ru: "restorany",
  },
  bars: { tr: "barlar", en: "bars", de: "bars", ru: "bary" },
  experiences: {
    tr: "aktiviteler",
    en: "activities",
    de: "aktivitaeten",
    ru: "aktivnosti",
  },
  spa: {
    tr: "spa-wellness",
    en: "spa-wellness",
    de: "spa-wellness",
    ru: "spa-wellness",
  },
  meetings: {
    tr: "toplanti-etkinlik",
    en: "meetings-events",
    de: "tagungen-events",
    ru: "konferentsii",
  },
  side: { tr: "side", en: "side", de: "side", ru: "side" },
  gallery: { tr: "galeri", en: "gallery", de: "galerie", ru: "galereya" },
  blog: { tr: "blog", en: "blog", de: "blog", ru: "blog" },
  contact: {
    tr: "iletisim",
    en: "contact",
    de: "kontakt",
    ru: "kontakty",
  },
  booking: {
    tr: "rezervasyon",
    en: "booking",
    de: "buchung",
    ru: "bronirovanie",
  },
  privacy: {
    tr: "gizlilik",
    en: "privacy",
    de: "datenschutz",
    ru: "konfidentsialnost",
  },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routeSegments;

export const routeKeys = Object.keys(routeSegments) as RouteKey[];

/** `/tr/odalar/aile-odasi/` biçiminde, sondaki slash dahil URL üretir. */
export function pathFor(
  key: RouteKey | null,
  locale: Locale,
  ...rest: string[]
): string {
  const parts: string[] = [locale];
  if (key) parts.push(routeSegments[key][locale]);
  parts.push(...rest.filter(Boolean));
  return `/${parts.join("/")}/`;
}

/** Ana sayfa yolu. */
export function homePath(locale: Locale): string {
  return `/${locale}/`;
}

/** Yerelleştirilmiş segmentten canonical anahtarı bulur. */
export function keyForSegment(
  segment: string,
  locale: Locale,
): RouteKey | null {
  for (const key of routeKeys) {
    if (routeSegments[key][locale] === segment) return key;
  }
  return null;
}

/**
 * Herhangi bir dildeki segmenti tanır — kullanıcı dil değiştirdiğinde eski
 * segmentle gelen isteği de doğru sayfaya bağlayabilmek için.
 */
export function keyForAnySegment(segment: string): RouteKey | null {
  for (const key of routeKeys) {
    for (const locale of locales) {
      if (routeSegments[key][locale] === segment) return key;
    }
  }
  return null;
}

/** Canonical (İngilizce klasör adı) segmenti — middleware rewrite hedefi. */
export function canonicalSegment(key: RouteKey): string {
  return routeSegments[key].en;
}
