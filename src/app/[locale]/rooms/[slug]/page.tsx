import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CollectionDetail from "@/components/collection/CollectionDetail";
import { isLocale, locales, type Locale } from "@/config/locales";
import { pathFor } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { neighbours, photosFor, roomBySlug, roomTypes } from "@/data/rooms";
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

  const dict = await getDictionary(locale);
  const paths = Object.fromEntries(
    locales.map((item) => [item, pathFor("rooms", item, room.slug[item])]),
  ) as Record<Locale, string>;

  return {
    title: room.title[locale],
    description: `${room.title[locale]} — ${dict.rooms.metaDescription}`,
    alternates: buildAlternates(paths, locale),
    openGraph: {
      type: "website",
      title: room.title[locale],
      description: dict.rooms.metaDescription,
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
  const { previous, next } = neighbours(room);

  return (
    <CollectionDetail
      title={room.title[locale]}
      photos={photosFor(room).map((photo) => ({
        ...photo,
        alt: `${siteConfig.name} — ${room.title[locale]}`,
      }))}
      previous={{
        href: pathFor("rooms", locale, previous.slug[locale]),
        title: previous.title[locale],
        label: dict.common.previous,
      }}
      next={{
        href: pathFor("rooms", locale, next.slug[locale]),
        title: next.title[locale],
        label: dict.common.next,
      }}
      closeLabel={dict.common.close}
      previousPhotoLabel={dict.common.previous}
      nextPhotoLabel={dict.common.next}
    />
  );
}
