import type { MediaTone } from "@/components/ui/Media";
import type { Locale } from "@/config/locales";

export type GalleryCategory = {
  key: string;
  slug: Record<Locale, string>;
  title: Record<Locale, string>;
  /** Kapak görselinin tonu — gerçek fotoğraf gelince `cover` alanı eklenecek */
  tone: MediaTone;
  /** Kategorideki fotoğraf sayısı (placeholder üretimi için) */
  count: number;
};

const tonePalette: MediaTone[] = ["sea", "sand", "light", "cream", "dark"];

export const galleryCategories: GalleryCategory[] = [
  {
    key: "hotel",
    slug: {
      tr: "otel-ve-bahceler",
      en: "hotel-and-gardens",
      de: "hotel-und-gaerten",
      ru: "otel-i-sady",
    },
    title: {
      tr: "Otel & Bahçeler",
      en: "Hotel & Gardens",
      de: "Hotel & Gärten",
      ru: "Отель и сады",
    },
    tone: "sea",
    count: 14,
  },
  {
    key: "rooms",
    slug: { tr: "odalar", en: "rooms", de: "zimmer", ru: "nomera" },
    title: { tr: "Odalar", en: "Rooms", de: "Zimmer", ru: "Номера" },
    tone: "cream",
    count: 12,
  },
  {
    key: "pools",
    slug: {
      tr: "havuzlar-ve-aquapark",
      en: "pools-and-aquapark",
      de: "pools-und-aquapark",
      ru: "basseyny-i-akvapark",
    },
    title: {
      tr: "Havuzlar & Aquapark",
      en: "Pools & Aquapark",
      de: "Pools & Aquapark",
      ru: "Бассейны и аквапарк",
    },
    tone: "light",
    count: 12,
  },
  {
    key: "beach",
    slug: { tr: "plaj", en: "beach", de: "strand", ru: "plyazh" },
    title: { tr: "Plaj", en: "Beach", de: "Strand", ru: "Пляж" },
    tone: "sand",
    count: 10,
  },
  {
    key: "dining",
    slug: {
      tr: "yeme-icme",
      en: "dining",
      de: "gastronomie",
      ru: "restorany",
    },
    title: {
      tr: "Yeme & İçme",
      en: "Dining",
      de: "Gastronomie",
      ru: "Рестораны",
    },
    tone: "dark",
    count: 12,
  },
  {
    key: "spa",
    slug: {
      tr: "spa-wellness",
      en: "spa-wellness",
      de: "spa-wellness",
      ru: "spa-wellness",
    },
    title: {
      tr: "Spa & Wellness",
      en: "Spa & Wellness",
      de: "Spa & Wellness",
      ru: "Спа и велнес",
    },
    tone: "light",
    count: 10,
  },
];

/** Placeholder fotoğraf listesi — gerçek görseller gelince `src` eklenecek. */
export function photosFor(category: GalleryCategory) {
  return Array.from({ length: category.count }, (_, index) => ({
    id: `${category.key}-${index + 1}`,
    tone: tonePalette[(index + tonePalette.indexOf(category.tone)) % tonePalette.length],
  }));
}

export function categoryBySlug(slug: string, locale: Locale) {
  return galleryCategories.find((category) => category.slug[locale] === slug);
}

/** Bir kategorinin önceki/sonraki komşusu — detay sayfasındaki gezinme için. */
export function neighbours(category: GalleryCategory) {
  const index = galleryCategories.indexOf(category);
  const total = galleryCategories.length;
  return {
    previous: galleryCategories[(index - 1 + total) % total],
    next: galleryCategories[(index + 1) % total],
  };
}
