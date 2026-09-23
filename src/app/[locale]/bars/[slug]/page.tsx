import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CollectionDetail from "@/components/collection/CollectionDetail";
import { isLocale, locales, type Locale } from "@/config/locales";
import { pathFor } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { barBySlug, bars, neighbours, photosFor } from "@/data/bars";
import { getDictionary } from "@/i18n";
import { buildAlternates } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    bars.map((bar) => ({ locale, slug: bar.slug[locale] })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const bar = barBySlug(slug, locale);
  if (!bar) return {};

  const paths = Object.fromEntries(
    locales.map((item) => [item, pathFor("bars", item, bar.slug[item])]),
  ) as Record<Locale, string>;

  return {
    title: bar.title[locale],
    description: bar.description[locale],
    alternates: buildAlternates(paths, locale),
    openGraph: {
      type: "website",
      title: bar.title[locale],
      description: bar.description[locale],
      url: `${siteConfig.domain}${paths[locale]}`,
    },
  };
}

export default async function BarPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const bar = barBySlug(slug, locale);
  if (!bar) notFound();

  const dict = await getDictionary(locale);
  const { previous, next } = neighbours(bar);

  return (
    <CollectionDetail
      title={bar.title[locale]}
      photos={photosFor(bar).map((photo) => ({
        ...photo,
        alt: `${siteConfig.name} — ${bar.title[locale]}`,
      }))}
      previous={{
        href: pathFor("bars", locale, previous.slug[locale]),
        title: previous.title[locale],
        label: dict.common.previous,
      }}
      next={{
        href: pathFor("bars", locale, next.slug[locale]),
        title: next.title[locale],
        label: dict.common.next,
      }}
      closeLabel={dict.common.close}
      previousPhotoLabel={dict.common.previous}
      nextPhotoLabel={dict.common.next}
    />
  );
}
