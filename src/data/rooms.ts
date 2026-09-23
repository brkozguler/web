import type { MediaTone } from "@/components/ui/Media";
import type { Locale } from "@/config/locales";

export type RoomType = {
  key: string;
  slug: Record<Locale, string>;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  /** Oda büyüklüğü (m²) */
  size: number;
  /** "2 Yetişkin + 1 Çocuk" gibi, dile göre hazır metin */
  capacity: Record<Locale, string>;
  /** Manzara tipi */
  view: Record<Locale, string>;
  tone: MediaTone;
  /** Detay sayfasındaki fotoğraf sayısı (placeholder üretimi için) */
  count: number;
};

const tonePalette: MediaTone[] = ["cream", "sand", "light", "sea", "dark"];

export const roomTypes: RoomType[] = [
  {
    key: "standard",
    slug: {
      tr: "standart-oda",
      en: "standard-room",
      de: "standardzimmer",
      ru: "standartnyy-nomer",
    },
    title: {
      tr: "Standart Oda",
      en: "Standard Room",
      de: "Standardzimmer",
      ru: "Стандартный номер",
    },
    description: {
      tr: "Çam ağaçlarının gölgesine bakan, sade ve ferah odalarımız; kısa molalardan uzun tatillere kadar her ritme uyum sağlıyor.",
      en: "Calm, uncluttered rooms overlooking the shade of the pines — suited to short escapes and long holidays alike.",
      de: "Ruhige, klar gestaltete Zimmer mit Blick in den Schatten der Pinien — passend für kurze Auszeiten wie für lange Ferien.",
      ru: "Спокойные и просторные номера с видом на сосны — одинаково удобны и для короткого отдыха, и для длительного отпуска.",
    },
    size: 26,
    capacity: {
      tr: "2 Yetişkin + 1 Çocuk",
      en: "2 Adults + 1 Child",
      de: "2 Erwachsene + 1 Kind",
      ru: "2 взрослых + 1 ребёнок",
    },
    view: {
      tr: "Bahçe manzara",
      en: "Garden view",
      de: "Gartenblick",
      ru: "Вид на сад",
    },
    tone: "cream",
    count: 10,
  },
  {
    key: "standard-garden",
    slug: {
      tr: "standart-oda-bahce-manzarali",
      en: "garden-view-standard-room",
      de: "standardzimmer-gartenblick",
      ru: "nomer-s-vidom-na-sad",
    },
    title: {
      tr: "Bahçe Manzaralı Standart Oda",
      en: "Garden View Standard Room",
      de: "Standardzimmer mit Gartenblick",
      ru: "Стандартный номер с видом на сад",
    },
    description: {
      tr: "Balkonu doğrudan bahçeye açılan odalar; sabah kahvenizi kuş sesleri ve çam kokusuyla içmek isteyenler için.",
      en: "Rooms whose balconies open straight onto the gardens — for mornings that start with birdsong and pine air.",
      de: "Zimmer, deren Balkone direkt in den Garten führen — für Morgen, die mit Vogelgesang und Pinienduft beginnen.",
      ru: "Номера с балконом, выходящим прямо в сад — для утра под пение птиц и запах сосен.",
    },
    size: 26,
    capacity: {
      tr: "2 Yetişkin + 1 Çocuk",
      en: "2 Adults + 1 Child",
      de: "2 Erwachsene + 1 Kind",
      ru: "2 взрослых + 1 ребёнок",
    },
    view: {
      tr: "Bahçe manzara",
      en: "Garden view",
      de: "Gartenblick",
      ru: "Вид на сад",
    },
    tone: "sand",
    count: 8,
  },
  {
    key: "standard-sea",
    slug: {
      tr: "standart-oda-deniz-manzarali",
      en: "sea-view-standard-room",
      de: "standardzimmer-meerblick",
      ru: "nomer-s-vidom-na-more",
    },
    title: {
      tr: "Deniz Manzaralı Standart Oda",
      en: "Sea View Standard Room",
      de: "Standardzimmer mit Meerblick",
      ru: "Стандартный номер с видом на море",
    },
    description: {
      tr: "Akdeniz'in ufuk çizgisine bakan balkonuyla, günün her saatinde değişen bir manzarayı odanıza taşıyor.",
      en: "A balcony facing the Mediterranean horizon brings a view that changes with every hour of the day.",
      de: "Der Balkon zum Horizont des Mittelmeers holt eine Aussicht ins Zimmer, die sich mit jeder Stunde verändert.",
      ru: "Балкон с видом на горизонт Средиземного моря приносит в номер пейзаж, который меняется каждый час.",
    },
    size: 28,
    capacity: {
      tr: "2 Yetişkin + 1 Çocuk",
      en: "2 Adults + 1 Child",
      de: "2 Erwachsene + 1 Kind",
      ru: "2 взрослых + 1 ребёнок",
    },
    view: {
      tr: "Deniz manzara",
      en: "Sea view",
      de: "Meerblick",
      ru: "Вид на море",
    },
    tone: "sea",
    count: 10,
  },
  {
    key: "family",
    slug: {
      tr: "aile-odasi",
      en: "family-room",
      de: "familienzimmer",
      ru: "semeynyy-nomer",
    },
    title: {
      tr: "Aile Odası",
      en: "Family Room",
      de: "Familienzimmer",
      ru: "Семейный номер",
    },
    description: {
      tr: "Ara kapıyla birbirine bağlanan iki yaşam alanı; çocuklara kendi köşesini, ebeveynlere sessizliğini bırakıyor.",
      en: "Two connected living spaces: the children get a corner of their own, the parents keep their quiet.",
      de: "Zwei durch eine Verbindungstür getrennte Bereiche: Die Kinder bekommen ihre Ecke, die Eltern ihre Ruhe.",
      ru: "Два пространства, соединённые дверью: у детей свой уголок, у родителей — тишина.",
    },
    size: 42,
    capacity: {
      tr: "2 Yetişkin + 2 Çocuk",
      en: "2 Adults + 2 Children",
      de: "2 Erwachsene + 2 Kinder",
      ru: "2 взрослых + 2 ребёнка",
    },
    view: {
      tr: "Bahçe / deniz manzara",
      en: "Garden / sea view",
      de: "Garten- / Meerblick",
      ru: "Вид на сад / море",
    },
    tone: "light",
    count: 12,
  },
  {
    key: "superior",
    slug: {
      tr: "superior-oda",
      en: "superior-room",
      de: "superior-zimmer",
      ru: "superior-nomer",
    },
    title: {
      tr: "Superior Oda",
      en: "Superior Room",
      de: "Superior Zimmer",
      ru: "Номер Superior",
    },
    description: {
      tr: "Daha geniş bir oturma alanı, büyük balkon ve denize dönük konumuyla konforu bir adım öteye taşıyor.",
      en: "A larger sitting area, a generous balcony and a position facing the sea take the comfort one step further.",
      de: "Ein größerer Wohnbereich, ein weiter Balkon und die Lage zum Meer heben den Komfort eine Stufe an.",
      ru: "Просторная гостиная зона, большой балкон и расположение к морю поднимают комфорт на ступень выше.",
    },
    size: 34,
    capacity: {
      tr: "3 Yetişkin",
      en: "3 Adults",
      de: "3 Erwachsene",
      ru: "3 взрослых",
    },
    view: {
      tr: "Deniz manzara",
      en: "Sea view",
      de: "Meerblick",
      ru: "Вид на море",
    },
    tone: "cream",
    count: 10,
  },
  {
    key: "suite",
    slug: { tr: "suite", en: "suite", de: "suite", ru: "syuit" },
    title: { tr: "Suite", en: "Suite", de: "Suite", ru: "Сьют" },
    description: {
      tr: "Ayrı yatak odası, geniş salon ve denize bakan terasıyla otelin en özel konaklama seçeneği.",
      en: "A separate bedroom, a wide living room and a sea-facing terrace — the most private stay at the resort.",
      de: "Separates Schlafzimmer, großzügiger Wohnraum und Terrasse zum Meer — die privateste Unterkunft des Hauses.",
      ru: "Отдельная спальня, просторная гостиная и терраса с видом на море — самый уединённый вариант в отеле.",
    },
    size: 55,
    capacity: {
      tr: "4 Yetişkin + 1 Çocuk",
      en: "4 Adults + 1 Child",
      de: "4 Erwachsene + 1 Kind",
      ru: "4 взрослых + 1 ребёнок",
    },
    view: {
      tr: "Deniz manzara",
      en: "Sea view",
      de: "Meerblick",
      ru: "Вид на море",
    },
    tone: "dark",
    count: 12,
  },
];

/** Placeholder fotoğraf listesi — gerçek görseller gelince `src` eklenecek. */
export function photosFor(room: RoomType) {
  return Array.from({ length: room.count }, (_, index) => ({
    id: `${room.key}-${index + 1}`,
    tone: tonePalette[
      (index + tonePalette.indexOf(room.tone)) % tonePalette.length
    ],
  }));
}

export function roomBySlug(slug: string, locale: Locale) {
  return roomTypes.find((room) => room.slug[locale] === slug);
}

/** Detay sayfasındaki önceki/sonraki oda tipi. */
export function neighbours(room: RoomType) {
  const index = roomTypes.indexOf(room);
  const total = roomTypes.length;
  return {
    previous: roomTypes[(index - 1 + total) % total],
    next: roomTypes[(index + 1) % total],
  };
}
