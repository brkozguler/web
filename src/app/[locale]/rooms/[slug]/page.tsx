import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CollectionArticle from "@/components/collection/CollectionArticle";
import PageHero from "@/components/layout/PageHero";
import { isLocale, locales, type Locale } from "@/config/locales";
import { pathFor } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { photosFor, roomBySlug, roomTypes } from "@/data/rooms";
import { getDictionary } from "@/i18n";
import { buildAlternates } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    roomTypes.map((room) => ({ locale, slug: room.slug[locale] })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const room = roomBySlug(slug, locale);
  if (!room) return {};

  const paths = Object.fromEntries(
    locales.map((item) => [item, pathFor("rooms", item, room.slug[item])]),
  ) as Record<Locale, string>;

  return {
    title: room.title[locale],
    description: room.description[locale],
    alternates: buildAlternates(paths, locale),
    openGraph: {
      type: "website",
      title: room.title[locale],
      description: room.description[locale],
      url: `${siteConfig.domain}${paths[locale]}`,
    },
  };
}

export default async function RoomPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const room = roomBySlug(slug, locale);
  if (!room) notFound();

  const dict = await getDictionary(locale);

  const related = roomTypes
    .filter((item) => item.key !== room.key)
    .map((item) => ({
      key: item.key,
      title: item.title[locale],
      href: pathFor("rooms", locale, item.slug[locale]),
      tone: item.tone,
    }));

  return (
    <>
      <PageHero
        eyebrow={dict.rooms.eyebrow}
        title={room.title[locale]}
        scrollLabel={dict.common.scrollDown}
        tone={room.tone}
        fullHeight
      />

      <CollectionArticle
        intro={room.description[locale]}
        body={room.body[locale]}
        properties={[
          { icon: "capacity", label: room.capacity[locale] },
          { icon: "size", label: `${room.size} m²` },
          { icon: "view", label: room.view[locale] },
        ]}
        photos={photosFor(room).map((photo) => ({
          ...photo,
          alt: `${siteConfig.name} — ${room.title[locale]}`,
        }))}
        relatedTitle={dict.rooms.relatedTitle}
        related={related}
        previousLabel={dict.common.previous}
        nextLabel={dict.common.next}
        galleryLabel={dict.rooms.galleryLabel}
      />
    </>
  );
}
