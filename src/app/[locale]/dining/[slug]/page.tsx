import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CollectionDetail from "@/components/collection/CollectionDetail";
import { isLocale, locales, type Locale } from "@/config/locales";
import { pathFor } from "@/config/routes";
import { siteConfig } from "@/config/site";
import {
  neighbours,
  photosFor,
  restaurantBySlug,
  restaurants,
} from "@/data/restaurants";
import { getDictionary } from "@/i18n";
import { buildAlternates } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    restaurants.map((restaurant) => ({
      locale,
      slug: restaurant.slug[locale],
    })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const restaurant = restaurantBySlug(slug, locale);
  if (!restaurant) return {};

  const paths = Object.fromEntries(
    locales.map((item) => [
      item,
      pathFor("dining", item, restaurant.slug[item]),
    ]),
  ) as Record<Locale, string>;

  return {
    title: restaurant.title[locale],
    description: restaurant.description[locale],
    alternates: buildAlternates(paths, locale),
    openGraph: {
      type: "website",
      title: restaurant.title[locale],
      description: restaurant.description[locale],
      url: `${siteConfig.domain}${paths[locale]}`,
    },
  };
}

export default async function RestaurantPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const restaurant = restaurantBySlug(slug, locale);
  if (!restaurant) notFound();

  const dict = await getDictionary(locale);
  const { previous, next } = neighbours(restaurant);

  return (
    <CollectionDetail
      title={restaurant.title[locale]}
      photos={photosFor(restaurant).map((photo) => ({
        ...photo,
        alt: `${siteConfig.name} — ${restaurant.title[locale]}`,
      }))}
      previous={{
        href: pathFor("dining", locale, previous.slug[locale]),
        title: previous.title[locale],
        label: dict.common.previous,
      }}
      next={{
        href: pathFor("dining", locale, next.slug[locale]),
        title: next.title[locale],
        label: dict.common.next,
      }}
      closeLabel={dict.common.close}
      previousPhotoLabel={dict.common.previous}
      nextPhotoLabel={dict.common.next}
    />
  );
}
