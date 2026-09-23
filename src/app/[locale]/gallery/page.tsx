import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CollectionCards from "@/components/collection/CollectionCards";
import PageHero from "@/components/layout/PageHero";
import { isLocale, locales, type Locale } from "@/config/locales";
import { pathFor } from "@/config/routes";
import { galleryCategories } from "@/data/gallery";
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
    locales.map((item) => [item, pathFor("gallery", item)]),
  ) as Record<Locale, string>;

  return {
    title: dict.gallery.metaTitle,
    description: dict.gallery.metaDescription,
    alternates: buildAlternates(paths, locale),
    openGraph: {
      type: "website",
      title: dict.gallery.metaTitle,
      description: dict.gallery.metaDescription,
      url: `${paths[locale]}`,
    },
  };
}

export default async function GalleryPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);

  const cards = galleryCategories.map((category) => ({
    key: category.key,
    title: category.title[locale],
    href: pathFor("gallery", locale, category.slug[locale]),
    tone: category.tone,
  }));

  return (
    <>
      <PageHero
        eyebrow={dict.gallery.eyebrow}
        title={dict.gallery.title}
        scrollLabel={dict.common.scrollDown}
        tone="sea"
      />
      <CollectionCards cards={cards} />
    </>
  );
}
