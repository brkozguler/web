import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CollectionCards from "@/components/collection/CollectionCards";
import PageHero from "@/components/layout/PageHero";
import { isLocale, locales, type Locale } from "@/config/locales";
import { pathFor } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { restaurants } from "@/data/restaurants";
import { getDictionary } from "@/i18n";
import { buildAlternates } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = await getDictionary(locale);
  const paths = Object.fromEntries(
    locales.map((item) => [item, pathFor("dining", item)]),
  ) as Record<Locale, string>;

  return {
    title: dict.restaurants.metaTitle,
    description: dict.restaurants.metaDescription,
    alternates: buildAlternates(paths, locale),
    openGraph: {
      type: "website",
      title: dict.restaurants.metaTitle,
      description: dict.restaurants.metaDescription,
      url: `${siteConfig.domain}${paths[locale]}`,
    },
  };
}

export default async function RestaurantsPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);

  const cards = restaurants.map((restaurant) => ({
    key: restaurant.key,
    title: restaurant.title[locale],
    href: pathFor("dining", locale, restaurant.slug[locale]),
    tone: restaurant.tone,
    description: restaurant.description[locale],
    properties: [
      { icon: "cuisine" as const, label: restaurant.cuisine[locale] },
      { icon: "concept" as const, label: restaurant.concept[locale] },
      { icon: "hours" as const, label: restaurant.hours },
    ],
  }));

  return (
    <>
      <PageHero
        eyebrow={dict.restaurants.eyebrow}
        title={dict.restaurants.title}
        scrollLabel={dict.common.scrollDown}
        tone="dark"
      />
      <CollectionCards cards={cards} />
    </>
  );
}
