import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CollectionCards from "@/components/collection/CollectionCards";
import PageHero from "@/components/layout/PageHero";
import { isLocale, locales, type Locale } from "@/config/locales";
import { pathFor } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { roomTypes } from "@/data/rooms";
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
    locales.map((item) => [item, pathFor("rooms", item)]),
  ) as Record<Locale, string>;

  return {
    title: dict.rooms.metaTitle,
    description: dict.rooms.metaDescription,
    alternates: buildAlternates(paths, locale),
    openGraph: {
      type: "website",
      title: dict.rooms.metaTitle,
      description: dict.rooms.metaDescription,
      url: `${siteConfig.domain}${paths[locale]}`,
    },
  };
}

export default async function RoomsPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);

  const cards = roomTypes.map((room) => ({
    key: room.key,
    title: room.title[locale],
    href: pathFor("rooms", locale, room.slug[locale]),
    tone: room.tone,
    description: room.description[locale],
    properties: [
      { icon: "capacity" as const, label: room.capacity[locale] },
      { icon: "size" as const, label: `${room.size} m²` },
      { icon: "view" as const, label: room.view[locale] },
    ],
  }));

  return (
    <>
      <PageHero
        eyebrow={dict.rooms.eyebrow}
        title={dict.rooms.title}
        scrollLabel={dict.common.scrollDown}
        tone="sea"
      />
      <CollectionCards cards={cards} />
    </>
  );
}
