import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CollectionCards from "@/components/collection/CollectionCards";
import PageHero from "@/components/layout/PageHero";
import { isLocale, locales, type Locale } from "@/config/locales";
import { pathFor } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { activities } from "@/data/activities";
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
    locales.map((item) => [item, pathFor("experiences", item)]),
  ) as Record<Locale, string>;

  return {
    title: dict.activities.metaTitle,
    description: dict.activities.metaDescription,
    alternates: buildAlternates(paths, locale),
    openGraph: {
      type: "website",
      title: dict.activities.metaTitle,
      description: dict.activities.metaDescription,
      url: `${siteConfig.domain}${paths[locale]}`,
    },
  };
}

export default async function ActivitiesPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);

  const cards = activities.map((activity) => ({
    key: activity.key,
    title: activity.title[locale],
    href: pathFor("experiences", locale, activity.slug[locale]),
    tone: activity.tone,
    description: activity.description[locale],
    properties: [
      { icon: "concept" as const, label: activity.category[locale] },
      { icon: "capacity" as const, label: activity.audience[locale] },
      { icon: "hours" as const, label: activity.hours },
    ],
  }));

  return (
    <>
      <PageHero
        eyebrow={dict.activities.eyebrow}
        title={dict.activities.title}
        scrollLabel={dict.common.scrollDown}
        tone="sea"
      />
      <CollectionCards cards={cards} />
    </>
  );
}
