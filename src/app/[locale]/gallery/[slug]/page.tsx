import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CollectionDetail from "@/components/collection/CollectionDetail";
import { isLocale, locales, type Locale } from "@/config/locales";
import { pathFor } from "@/config/routes";
import { siteConfig } from "@/config/site";
import {
  categoryBySlug,
  galleryCategories,
  neighbours,
  photosFor,
} from "@/data/gallery";
import { getDictionary } from "@/i18n";
import { buildAlternates } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    galleryCategories.map((category) => ({
      locale,
      slug: category.slug[locale],
    })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const category = categoryBySlug(slug, locale);
  if (!category) return {};

  const dict = await getDictionary(locale);
  const paths = Object.fromEntries(
    locales.map((item) => [
      item,
      pathFor("gallery", item, category.slug[item]),
    ]),
  ) as Record<Locale, string>;

  const title = `${category.title[locale]} — ${dict.gallery.metaTitle}`;

  return {
    title,
    description: dict.gallery.metaDescription,
    alternates: buildAlternates(paths, locale),
    openGraph: {
      type: "website",
      title,
      description: dict.gallery.metaDescription,
      url: `${siteConfig.domain}${paths[locale]}`,
    },
  };
}

export default async function GalleryCategoryPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const category = categoryBySlug(slug, locale);
  if (!category) notFound();

  const dict = await getDictionary(locale);
  const { previous, next } = neighbours(category);

  return (
    <CollectionDetail
      title={category.title[locale]}
      photos={photosFor(category).map((photo) => ({
        ...photo,
        alt: `${siteConfig.name} — ${category.title[locale]}`,
      }))}
      previous={{
        href: pathFor("gallery", locale, previous.slug[locale]),
        title: previous.title[locale],
        label: dict.common.previous,
      }}
      next={{
        href: pathFor("gallery", locale, next.slug[locale]),
        title: next.title[locale],
        label: dict.common.next,
      }}
      closeLabel={dict.common.close}
      previousPhotoLabel={dict.common.previous}
      nextPhotoLabel={dict.common.next}
    />
  );
}
