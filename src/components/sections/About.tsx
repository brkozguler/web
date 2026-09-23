import SectionReveal from "@/components/motion/SectionReveal";
import SplitTextReveal from "@/components/motion/SplitTextReveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import Media from "@/components/ui/Media";
import type { Locale } from "@/config/locales";
import { pathFor } from "@/config/routes";
import type { Dictionary } from "@/i18n/types";

type Props = {
  dict: Dictionary;
  locale: Locale;
};

/**
 * Referanstaki "ABOUT MĀKENA / Connecting cultures" bloğu (bölüm 8):
 * metin solda 2. kolondan 4 kolon, görsel sağda 7. kolondan 5 kolon.
 * Mobilde görsel üste, metin alta geçiyor.
 */
export default function About({ dict, locale }: Props) {
  const { about } = dict.home;

  return (
    <section className="py-90 s:py-100 l:py-120">
      <div className="site-max site-grid items-start l:items-center">
        <div className="col-span-6 max-s:order-1 s:order-2 s:col-span-6 s:col-start-7 l:col-span-5 l:col-start-7">
          <Media tone="cream" ratio="4/5" parallax />
        </div>

        <div className="col-span-6 max-s:order-2 s:order-1 s:col-span-5 s:col-start-1 s:mt-24 l:col-span-4 l:col-start-2 l:mt-0">
          <SectionReveal className="mt-40 mb-30 s:mt-0">
            <Eyebrow>{about.eyebrow}</Eyebrow>
          </SectionReveal>

          <SplitTextReveal
            as="h3"
            text={about.title}
            className="t-title-s text-ink-pure mb-28 block"
          />

          <SectionReveal delay={0.08}>
            <p className="t-body mb-40">{about.body}</p>
            <ButtonLink
              href={pathFor("hotel", locale)}
              label={dict.common.learnMore}
            />
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
