import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SmoothScroll from "@/components/layout/SmoothScroll";
import {
  hrefLangMap,
  isLocale,
  locales,
  type Locale,
} from "@/config/locales";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/i18n";

import "../globals.css";

type LayoutParams = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutParams): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = await getDictionary(locale);
  const languages = Object.fromEntries(
    locales.map((item) => [hrefLangMap[item], `${siteConfig.domain}/${item}/`]),
  );

  return {
    metadataBase: new URL(siteConfig.domain),
    title: {
      default: dict.meta.homeTitle,
      template: `%s | ${siteConfig.name}`,
    },
    description: dict.meta.homeDescription,
    applicationName: siteConfig.name,
    alternates: {
      canonical: `${siteConfig.domain}/${locale}/`,
      languages: { ...languages, "x-default": `${siteConfig.domain}/en/` },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: dict.meta.homeTitle,
      description: dict.meta.homeDescription,
      url: `${siteConfig.domain}/${locale}/`,
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.homeTitle,
      description: dict.meta.homeDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    formatDetection: { email: false, address: false, telephone: false },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const typedLocale = locale as Locale;
  const dict = await getDictionary(typedLocale);

  return (
    <html lang={typedLocale}>
      <head>
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="" />
        {/* ivymode — başlık fontu */}
        <link rel="stylesheet" href="https://use.typekit.net/ydu6tej.css" />
        {/* inter — gövde fontu */}
        <link rel="stylesheet" href="https://use.typekit.net/ugt4asf.css" />
      </head>
      <body className="min-h-screen">
        <SmoothScroll />
        <Header locale={typedLocale} dict={dict} />
        <main>{children}</main>
        <Footer locale={typedLocale} dict={dict} />
      </body>
    </html>
  );
}
