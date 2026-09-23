import { notFound } from "next/navigation";

import About from "@/components/sections/About";
import EditorialPair from "@/components/sections/EditorialPair";
import ExperiencesSlider from "@/components/sections/ExperiencesSlider";
import ExploreMore from "@/components/sections/ExploreMore";
import FullScreenMedia from "@/components/sections/FullScreenMedia";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Moments from "@/components/sections/Moments";
import Overview from "@/components/sections/Overview";
import RoomsSection from "@/components/sections/RoomsSection";
import { isLocale } from "@/config/locales";
import { getDictionary } from "@/i18n";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);

  return (
    <>
      <Hero dict={dict} />
      <Intro dict={dict} />
      <Overview dict={dict} />
      <EditorialPair />
      <FullScreenMedia tone="sea" />
      <About dict={dict} locale={locale} />
      <ExperiencesSlider dict={dict} />
      <RoomsSection dict={dict} locale={locale} />
      <Moments dict={dict} locale={locale} />
      <ExploreMore dict={dict} locale={locale} />
    </>
  );
}
