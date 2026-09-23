import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CollectionDetail from "@/components/collection/CollectionDetail";
import { isLocale, locales, type Locale } from "@/config/locales";
import { pathFor } from "@/config/routes";
import { siteConfig } from "@/config/site";
import {
  activities,
  activityBySlug,
  neighbours,
  photosFor,
} from "@/data/activities";
import { getDictionary } from "@/i18n";
import { buildAlternates } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    activities.map((activity) => ({ locale, slug: activity.slug[locale] })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const activity = activityBySlug(slug, locale);
  if (!activity) return {};

  const paths = Object.fromEntries(
    locales.map((item) => [
      item,
      pathFor("experiences", item, activity.slug[item]),
    ]),
  ) as Record<Locale, string>;

  return {
    title: activity.title[locale],
    description: activity.description[locale],
    alternates: buildAlternates(paths, locale),
    openGraph: {
      type: "website",
      title: activity.title[locale],
      description: activity.description[locale],
      url: `${siteConfig.domain}${paths[locale]}`,
    },
  };
}

export default async function ActivityPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const activity = activityBySlug(slug, locale);
  if (!activity) notFound();

  const dict = await getDictionary(locale);
  const { previous, next } = neighbours(activity);

  return (
    <CollectionDetail
      title={activity.title[locale]}
      photos={photosFor(activity).map((photo) => ({
        ...photo,
        alt: `${siteConfig.name} — ${activity.title[locale]}`,
      }))}
      previous={{
        href: pathFor("experiences", locale, previous.slug[locale]),
        title: previous.title[locale],
        label: dict.common.previous,
      }}
      next={{
        href: pathFor("experiences", locale, next.slug[locale]),
        title: next.title[locale],
        label: dict.common.next,
      }}
      closeLabel={dict.common.close}
      previousPhotoLabel={dict.common.previous}
      nextPhotoLabel={dict.common.next}
    />
  );
}
