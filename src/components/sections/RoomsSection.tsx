import SectionReveal from "@/components/motion/SectionReveal";
import SplitTextReveal from "@/components/motion/SplitTextReveal";
import RoomShowcase from "@/components/sections/RoomShowcase";
import Eyebrow from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import type { Locale } from "@/config/locales";
import { pathFor } from "@/config/routes";
import type { Dictionary } from "@/i18n/types";

type Props = {
  dict: Dictionary;
  locale: Locale;
};

/**
 * Referanstaki krem zeminli "Real Estate" bloğunun karşılığı (bölüm 10):
 * solda 2. kolondan 4 kolonluk metin ve otomatik ilerleyen oda listesi,
 * sağda 7. kolondan 5 kolonluk görsel yığını.
 */
export default function RoomsSection({ dict, locale }: Props) {
  const { rooms } = dict.home;

  const items = rooms.items.map((item) => ({
    slug: item.slug,
    title: item.title,
    href: pathFor("rooms", locale, item.slug),
  }));

  return (
    <section className="bg-cream pt-80 pb-100 s:py-120">
      <RoomShowcase
        items={items}
        cta={
          <ButtonLink
            href={pathFor("rooms", locale)}
            label={dict.common.learnMore}
          />
        }
      >
        <div className="flex flex-col items-start">
          <SectionReveal className="mb-30 s:mb-25">
            <Eyebrow className="opacity-80">{rooms.eyebrow}</Eyebrow>
          </SectionReveal>

          <SplitTextReveal
            as="h2"
            text={rooms.title.replace(/\n/g, " ")}
            className="t-title-m text-ink-pure block"
          />

          <SectionReveal delay={0.08} className="mt-30 s:mt-25">
            <p className="t-body">{rooms.body}</p>
          </SectionReveal>
        </div>
      </RoomShowcase>
    </section>
  );
}
