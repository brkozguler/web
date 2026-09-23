import type { MediaTone } from "@/components/ui/Media";
import type { Locale } from "@/config/locales";

export type Restaurant = {
  key: string;
  slug: Record<Locale, string>;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  /** Mutfak / tema */
  cuisine: Record<Locale, string>;
  /** Servis konsepti: açık büfe, à la carte, snack… */
  concept: Record<Locale, string>;
  /** Servis saatleri */
  hours: string;
  tone: MediaTone;
  /** Detay sayfasındaki fotoğraf sayısı (placeholder üretimi için) */
  count: number;
};

const tonePalette: MediaTone[] = ["dark", "sand", "cream", "sea", "light"];

const aLaCarte: Record<Locale, string> = {
  tr: "À la carte",
  en: "À la carte",
  de: "À la carte",
  ru: "À la carte",
};

const buffet: Record<Locale, string> = {
  tr: "Açık büfe",
  en: "Buffet",
  de: "Buffet",
  ru: "Шведский стол",
};

const snack: Record<Locale, string> = {
  tr: "Snack servisi",
  en: "Snack service",
  de: "Snack-Service",
  ru: "Снек-сервис",
};

export const restaurants: Restaurant[] = [
  {
    key: "main",
    slug: {
      tr: "ana-restoran",
      en: "main-restaurant",
      de: "hauptrestaurant",
      ru: "osnovnoy-restoran",
    },
    title: {
      tr: "Ana Restoran",
      en: "Main Restaurant",
      de: "Hauptrestaurant",
      ru: "Основной ресторан",
    },
    description: {
      tr: "Günün üç öğününde dünya mutfaklarından geniş bir seçki; canlı pişirme istasyonları ve çocuklar için ayrı büfe.",
      en: "A broad selection from world cuisines at all three meals, with live cooking stations and a separate children's buffet.",
      de: "Eine große Auswahl aus den Küchen der Welt zu allen drei Mahlzeiten, mit Live-Cooking-Stationen und eigenem Kinderbuffet.",
      ru: "Широкий выбор блюд мировой кухни на завтрак, обед и ужин, живые кулинарные станции и отдельный детский буфет.",
    },
    cuisine: {
      tr: "Dünya mutfağı",
      en: "World cuisine",
      de: "Weltküche",
      ru: "Мировая кухня",
    },
    concept: buffet,
    hours: "07:00 – 22:00",
    tone: "cream",
    count: 12,
  },
  {
    key: "turkish",
    slug: {
      tr: "turk-restorani",
      en: "turkish-restaurant",
      de: "tuerkisches-restaurant",
      ru: "turetskiy-restoran",
    },
    title: {
      tr: "Türk Restoranı",
      en: "Turkish Restaurant",
      de: "Türkisches Restaurant",
      ru: "Турецкий ресторан",
    },
    description: {
      tr: "Anadolu'nun bölgesel tatları: bakır sahanda mezeler, taş fırından ekmek ve ocakbaşı kebapları.",
      en: "Regional flavours of Anatolia: mezes in copper dishes, stone-oven bread and grill-side kebabs.",
      de: "Regionale Aromen Anatoliens: Mezze in Kupferschalen, Brot aus dem Steinofen und Kebabs vom Grill.",
      ru: "Региональные вкусы Анатолии: мезе в медной посуде, хлеб из каменной печи и кебабы с гриля.",
    },
    cuisine: {
      tr: "Türk mutfağı",
      en: "Turkish cuisine",
      de: "Türkische Küche",
      ru: "Турецкая кухня",
    },
    concept: aLaCarte,
    hours: "19:00 – 21:30",
    tone: "sand",
    count: 10,
  },
  {
    key: "italian",
    slug: {
      tr: "italyan-restorani",
      en: "italian-restaurant",
      de: "italienisches-restaurant",
      ru: "italyanskiy-restoran",
    },
    title: {
      tr: "İtalyan Restoranı",
      en: "Italian Restaurant",
      de: "Italienisches Restaurant",
      ru: "Итальянский ресторан",
    },
    description: {
      tr: "Günlük hazırlanan taze makarnalar, odun ateşinde pizza ve İtalya'nın sade ama iddialı sunumları.",
      en: "Fresh pasta made daily, wood-fired pizza and the plain but confident plating of Italy.",
      de: "Täglich frische Pasta, Pizza aus dem Holzofen und die schlichte, selbstbewusste Präsentation Italiens.",
      ru: "Свежая паста каждый день, пицца на дровах и сдержанная, но уверенная подача Италии.",
    },
    cuisine: {
      tr: "İtalyan mutfağı",
      en: "Italian cuisine",
      de: "Italienische Küche",
      ru: "Итальянская кухня",
    },
    concept: aLaCarte,
    hours: "19:00 – 21:30",
    tone: "dark",
    count: 10,
  },
  {
    key: "mexican",
    slug: {
      tr: "meksika-restorani",
      en: "mexican-restaurant",
      de: "mexikanisches-restaurant",
      ru: "meksikanskiy-restoran",
    },
    title: {
      tr: "Meksika Restoranı",
      en: "Mexican Restaurant",
      de: "Mexikanisches Restaurant",
      ru: "Мексиканский ресторан",
    },
    description: {
      tr: "Baharatın öne çıktığı, paylaşmaya uygun tabaklar; tacolar, fajitalar ve gün batımına bakan bir teras.",
      en: "Spice-forward plates made for sharing: tacos, fajitas and a terrace facing the sunset.",
      de: "Würzige Gerichte zum Teilen: Tacos, Fajitas und eine Terrasse mit Blick auf den Sonnenuntergang.",
      ru: "Острые блюда для компании: тако, фахитас и терраса с видом на закат.",
    },
    cuisine: {
      tr: "Meksika mutfağı",
      en: "Mexican cuisine",
      de: "Mexikanische Küche",
      ru: "Мексиканская кухня",
    },
    concept: aLaCarte,
    hours: "19:00 – 21:30",
    tone: "sand",
    count: 8,
  },
  {
    key: "far-east",
    slug: {
      tr: "uzakdogu-restorani",
      en: "far-eastern-restaurant",
      de: "fernoestliches-restaurant",
      ru: "dalnevostochnyy-restoran",
    },
    title: {
      tr: "Uzakdoğu Restoranı",
      en: "Far Eastern Restaurant",
      de: "Fernöstliches Restaurant",
      ru: "Дальневосточный ресторан",
    },
    description: {
      tr: "Wok tezgâhı, sushi barı ve önünüzde pişen teppanyaki ile Uzakdoğu'nun sakin temposu.",
      en: "A wok counter, a sushi bar and teppanyaki cooked in front of you — the calm tempo of the Far East.",
      de: "Wok-Theke, Sushi-Bar und Teppanyaki, das vor Ihren Augen zubereitet wird — das ruhige Tempo Fernosts.",
      ru: "Вок-стойка, суши-бар и теппаньяки, который готовят перед вами, — спокойный ритм Дальнего Востока.",
    },
    cuisine: {
      tr: "Uzakdoğu mutfağı",
      en: "Far Eastern cuisine",
      de: "Fernöstliche Küche",
      ru: "Дальневосточная кухня",
    },
    concept: aLaCarte,
    hours: "19:00 – 21:30",
    tone: "sea",
    count: 10,
  },
  {
    key: "fish",
    slug: {
      tr: "balik-restorani",
      en: "fish-restaurant",
      de: "fischrestaurant",
      ru: "rybnyy-restoran",
    },
    title: {
      tr: "Balık Restoranı",
      en: "Fish Restaurant",
      de: "Fischrestaurant",
      ru: "Рыбный ресторан",
    },
    description: {
      tr: "Günün avı, zeytinyağlılar ve deniz kenarında uzun süren akşam yemekleri.",
      en: "The day's catch, olive-oil dishes and long dinners at the water's edge.",
      de: "Der Fang des Tages, Gerichte in Olivenöl und lange Abendessen am Wasser.",
      ru: "Улов дня, блюда на оливковом масле и долгие ужины у воды.",
    },
    cuisine: {
      tr: "Deniz ürünleri",
      en: "Seafood",
      de: "Meeresfrüchte",
      ru: "Морепродукты",
    },
    concept: aLaCarte,
    hours: "19:00 – 21:30",
    tone: "light",
    count: 10,
  },
  {
    key: "aqua-snack",
    slug: {
      tr: "aqua-snack",
      en: "aqua-snack",
      de: "aqua-snack",
      ru: "aqua-snack",
    },
    title: {
      tr: "Aqua Snack",
      en: "Aqua Snack",
      de: "Aqua Snack",
      ru: "Aqua Snack",
    },
    description: {
      tr: "Havuz başında, ıslak ayakla uğranabilecek hafif tabaklar ve gün boyu taze meyve.",
      en: "Light plates you can stop by for straight from the pool, and fresh fruit all day.",
      de: "Leichte Gerichte direkt vom Pool aus und den ganzen Tag frisches Obst.",
      ru: "Лёгкие блюда прямо от бассейна и свежие фрукты в течение дня.",
    },
    cuisine: {
      tr: "Hafif yemekler",
      en: "Light bites",
      de: "Leichte Küche",
      ru: "Лёгкие закуски",
    },
    concept: snack,
    hours: "11:00 – 17:00",
    tone: "sea",
    count: 8,
  },
  {
    key: "beach-snack",
    slug: {
      tr: "sahil-snack",
      en: "beach-snack",
      de: "strand-snack",
      ru: "plyazhnyy-snek",
    },
    title: {
      tr: "Sahil Snack",
      en: "Beach Snack",
      de: "Strand-Snack",
      ru: "Пляжный снек",
    },
    description: {
      tr: "Kumsala birkaç adım mesafede; soğuk içecekler, dondurma ve öğle güneşine uygun atıştırmalıklar.",
      en: "A few steps from the sand: cold drinks, ice cream and bites suited to the midday sun.",
      de: "Wenige Schritte vom Sand: kalte Getränke, Eis und Snacks für die Mittagssonne.",
      ru: "В нескольких шагах от песка: холодные напитки, мороженое и закуски для полуденного солнца.",
    },
    cuisine: {
      tr: "Atıştırmalık",
      en: "Snacks",
      de: "Snacks",
      ru: "Закуски",
    },
    concept: snack,
    hours: "10:00 – 18:00",
    tone: "sand",
    count: 8,
  },
];

/** Placeholder fotoğraf listesi — gerçek görseller gelince `src` eklenecek. */
export function photosFor(restaurant: Restaurant) {
  return Array.from({ length: restaurant.count }, (_, index) => ({
    id: `${restaurant.key}-${index + 1}`,
    tone: tonePalette[
      (index + tonePalette.indexOf(restaurant.tone)) % tonePalette.length
    ],
  }));
}

export function restaurantBySlug(slug: string, locale: Locale) {
  return restaurants.find((restaurant) => restaurant.slug[locale] === slug);
}

/** Detay sayfasındaki önceki/sonraki restoran. */
export function neighbours(restaurant: Restaurant) {
  const index = restaurants.indexOf(restaurant);
  const total = restaurants.length;
  return {
    previous: restaurants[(index - 1 + total) % total],
    next: restaurants[(index + 1) % total],
  };
}
