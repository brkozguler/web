import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CollectionCards from "@/components/collection/CollectionCards";
import PageHero from "@/components/layout/PageHero";
import { isLocale, locales, type Locale } from "@/config/locales";
import { pathFor } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { bars } from "@/data/bars";
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
    locales.map((item) => [item, pathFor("bars", item)]),
  ) as Record<Locale, string>;

  return {
    title: dict.bars.metaTitle,
    description: dict.bars.metaDescription,
    alternates: buildAlternates(paths, locale),
    openGraph: {
      type: "website",
      title: dict.bars.metaTitle,
      description: dict.bars.metaDescription,
      url: `${siteConfig.domain}${paths[locale]}`,
    },
  };
}

export default async function BarsPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);

  const cards = bars.map((bar) => ({
    key: bar.key,
    title: bar.title[locale],
    href: pathFor("bars", locale, bar.slug[locale]),
    tone: bar.tone,
    description: bar.description[locale],
    properties: [
      { icon: "drinks" as const, label: bar.drinks[locale] },
      { icon: "location" as const, label: bar.location[locale] },
      { icon: "hours" as const, label: bar.hours },
    ],
  }));

  return (
    <>
      <PageHero
        eyebrow={dict.bars.eyebrow}
        title={dict.bars.title}
        scrollLabel={dict.common.scrollDown}
        tone="dark"
      />
      <CollectionCards cards={cards} />
    </>
  );
}
