import SectionReveal from "@/components/motion/SectionReveal";
import SplitTextReveal from "@/components/motion/SplitTextReveal";
import MomentsCarousel from "@/components/sections/MomentsCarousel";
import { type MediaTone } from "@/components/ui/Media";
import type { Locale } from "@/config/locales";
import { pathFor } from "@/config/routes";
import type { Dictionary } from "@/i18n/types";

type Props = {
  dict: Dictionary;
  locale: Locale;
};

const tones: MediaTone[] = ["light", "sand", "sea", "cream"];

/**
 * Referanstaki "Moments You'll Never Forget" bloğu (bölüm 11): ortalanmış
 * başlık (12 kolonun 6'sı, 4. kolondan) ve altında 3. kolondan başlayan
 * 8 kolonluk, kapsayıcıdan taşan carousel.
 */
export default function Moments({ dict, locale }: Props) {
  const { moments } = dict.home;

  const slides = moments.items.map((item, index) => ({
    key: item.key,
    title: item.title,
    href: pathFor(item.key, locale),
    tone: tones[index % tones.length],
  }));

  return (
    <div className="relative overflow-hidden pt-76 pb-100 s:pt-120 s:pb-120 l:pt-100 l:pb-100">
      <div className="site-max site-grid relative z-2">
        <div className="col-span-6 mb-50 text-center s:col-span-12 s:mb-70 l:col-span-6 l:col-start-4">
          <SplitTextReveal
            as="h2"
            text={moments.title}
            className="t-title-l text-ink-pure block"
          />
          <SectionReveal delay={0.1} className="mt-26 l:mt-28">
            <p className="t-body">{moments.body}</p>
          </SectionReveal>
        </div>

        <div className="col-span-6 s:col-span-10 s:col-start-2 l:col-span-8 l:col-start-3">
          <MomentsCarousel
            slides={slides}
            ctaLabel={dict.common.learnMore}
            previousLabel={dict.common.previous}
            nextLabel={dict.common.next}
            ariaLabel={moments.title}
          />
        </div>
      </div>
    </div>
  );
}
