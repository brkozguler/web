import type { MediaTone } from "@/components/ui/Media";
import type { Locale } from "@/config/locales";

export type Bar = {
  key: string;
  slug: Record<Locale, string>;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  /** İçecek seçkisi / tema */
  drinks: Record<Locale, string>;
  /** Otel içindeki konumu */
  location: Record<Locale, string>;
  /** Servis saatleri */
  hours: string;
  tone: MediaTone;
  /** Detay sayfasındaki fotoğraf sayısı (placeholder üretimi için) */
  count: number;
};

const tonePalette: MediaTone[] = ["dark", "sea", "cream", "sand", "light"];

export const bars: Bar[] = [
  {
    key: "lobby",
    slug: {
      tr: "lobi-bar",
      en: "lobby-bar",
      de: "lobbybar",
      ru: "lobbi-bar",
    },
    title: {
      tr: "Lobi Bar",
      en: "Lobby Bar",
      de: "Lobbybar",
      ru: "Лобби-бар",
    },
    description: {
      tr: "Gün boyu açık; sabah kahvesinden gece kokteyline kadar otelin buluşma noktası.",
      en: "Open all day — from the morning coffee to the late cocktail, the meeting point of the hotel.",
      de: "Den ganzen Tag geöffnet — vom Morgenkaffee bis zum späten Cocktail der Treffpunkt des Hauses.",
      ru: "Открыт весь день — от утреннего кофе до вечернего коктейля, место встреч отеля.",
    },
    drinks: {
      tr: "Kahve & kokteyl",
      en: "Coffee & cocktails",
      de: "Kaffee & Cocktails",
      ru: "Кофе и коктейли",
    },
    location: { tr: "Lobi", en: "Lobby", de: "Lobby", ru: "Лобби" },
    hours: "09:00 – 24:00",
    tone: "cream",
    count: 10,
  },
  {
    key: "pool",
    slug: {
      tr: "havuz-bar",
      en: "pool-bar",
      de: "poolbar",
      ru: "bar-u-basseyna",
    },
    title: {
      tr: "Havuz Bar",
      en: "Pool Bar",
      de: "Poolbar",
      ru: "Бар у бассейна",
    },
    description: {
      tr: "Havuzdan çıkmadan uzanabileceğiniz soğuk içecekler, dondurma ve taze meyveler.",
      en: "Cold drinks, ice cream and fresh fruit you can reach without leaving the pool.",
      de: "Kalte Getränke, Eis und frisches Obst, die Sie erreichen, ohne den Pool zu verlassen.",
      ru: "Холодные напитки, мороженое и фрукты, до которых можно дотянуться, не выходя из бассейна.",
    },
    drinks: {
      tr: "Soğuk içecekler",
      en: "Cold drinks",
      de: "Kalte Getränke",
      ru: "Холодные напитки",
    },
    location: {
      tr: "Ana havuz",
      en: "Main pool",
      de: "Hauptpool",
      ru: "Главный бассейн",
    },
    hours: "10:00 – 18:00",
    tone: "sea",
    count: 8,
  },
  {
    key: "beach",
    slug: {
      tr: "sahil-bar",
      en: "beach-bar",
      de: "strandbar",
      ru: "plyazhnyy-bar",
    },
    title: {
      tr: "Sahil Bar",
      en: "Beach Bar",
      de: "Strandbar",
      ru: "Пляжный бар",
    },
    description: {
      tr: "Şezlongun birkaç adım ötesinde; gün batımını izlemek için en iyi bardak burada.",
      en: "A few steps from the sunbeds — the best glass for watching the sunset is here.",
      de: "Wenige Schritte von den Liegen — das beste Glas für den Sonnenuntergang steht hier.",
      ru: "В нескольких шагах от шезлонгов — лучший бокал для заката именно здесь.",
    },
    drinks: {
      tr: "Kokteyl & limonata",
      en: "Cocktails & lemonade",
      de: "Cocktails & Limonade",
      ru: "Коктейли и лимонад",
    },
    location: { tr: "Plaj", en: "Beach", de: "Strand", ru: "Пляж" },
    hours: "10:00 – 18:00",
    tone: "sand",
    count: 8,
  },
  {
    key: "amphi",
    slug: {
      tr: "amfi-bar",
      en: "amphitheatre-bar",
      de: "amphitheater-bar",
      ru: "bar-amfiteatra",
    },
    title: {
      tr: "Amfi Bar",
      en: "Amphitheatre Bar",
      de: "Amphitheater-Bar",
      ru: "Бар амфитеатра",
    },
    description: {
      tr: "Akşam gösterileri boyunca açık; sahnenin hemen yanında, ayakta ya da oturarak.",
      en: "Open throughout the evening shows, right beside the stage — standing or seated.",
      de: "Während der Abendshows geöffnet, direkt neben der Bühne — im Stehen oder Sitzen.",
      ru: "Работает во время вечерних шоу, прямо у сцены — стоя или сидя.",
    },
    drinks: {
      tr: "Şarap & bira",
      en: "Wine & beer",
      de: "Wein & Bier",
      ru: "Вино и пиво",
    },
    location: {
      tr: "Amfitiyatro",
      en: "Amphitheatre",
      de: "Amphitheater",
      ru: "Амфитеатр",
    },
    hours: "20:00 – 24:00",
    tone: "dark",
    count: 8,
  },
  {
    key: "disco",
    slug: {
      tr: "disco-bar",
      en: "disco-bar",
      de: "disco-bar",
      ru: "disko-bar",
    },
    title: {
      tr: "Disco Bar",
      en: "Disco Bar",
      de: "Disco Bar",
      ru: "Диско-бар",
    },
    description: {
      tr: "Gecenin devam ettiği yer: DJ seti, dans pisti ve imza kokteyller.",
      en: "Where the night carries on: a DJ set, a dance floor and signature cocktails.",
      de: "Wo die Nacht weitergeht: DJ-Set, Tanzfläche und Signature-Cocktails.",
      ru: "Место, где ночь продолжается: сет диджея, танцпол и авторские коктейли.",
    },
    drinks: {
      tr: "İmza kokteyller",
      en: "Signature cocktails",
      de: "Signature-Cocktails",
      ru: "Авторские коктейли",
    },
    location: {
      tr: "Alt kat",
      en: "Lower level",
      de: "Untergeschoss",
      ru: "Нижний этаж",
    },
    hours: "24:00 – 02:00",
    tone: "dark",
    count: 8,
  },
  {
    key: "vitamin",
    slug: {
      tr: "vitamin-bar",
      en: "vitamin-bar",
      de: "vitaminbar",
      ru: "vitamin-bar",
    },
    title: {
      tr: "Vitamin Bar",
      en: "Vitamin Bar",
      de: "Vitaminbar",
      ru: "Витамин-бар",
    },
    description: {
      tr: "Günlük sıkılmış meyve suları, smoothie'ler ve spa sonrası hafif içecekler.",
      en: "Freshly pressed juices, smoothies and light drinks for after the spa.",
      de: "Frisch gepresste Säfte, Smoothies und leichte Getränke für nach dem Spa.",
      ru: "Свежевыжатые соки, смузи и лёгкие напитки после спа.",
    },
    drinks: {
      tr: "Taze meyve suları",
      en: "Fresh juices",
      de: "Frische Säfte",
      ru: "Свежие соки",
    },
    location: {
      tr: "Spa girişi",
      en: "Spa entrance",
      de: "Spa-Eingang",
      ru: "Вход в спа",
    },
    hours: "08:00 – 18:00",
    tone: "light",
    count: 8,
  },
];

/** Placeholder fotoğraf listesi — gerçek görseller gelince `src` eklenecek. */
export function photosFor(bar: Bar) {
  return Array.from({ length: bar.count }, (_, index) => ({
    id: `${bar.key}-${index + 1}`,
    tone: tonePalette[
      (index + tonePalette.indexOf(bar.tone)) % tonePalette.length
    ],
  }));
}

export function barBySlug(slug: string, locale: Locale) {
  return bars.find((bar) => bar.slug[locale] === slug);
}

/** Detay sayfasındaki önceki/sonraki bar. */
export function neighbours(bar: Bar) {
  const index = bars.indexOf(bar);
  const total = bars.length;
  return {
    previous: bars[(index - 1 + total) % total],
    next: bars[(index + 1) % total],
  };
}
