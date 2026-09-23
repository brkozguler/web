import Link from "next/link";

import SplitTextReveal from "@/components/motion/SplitTextReveal";
import DragSlider from "@/components/ui/DragSlider";
import Media, { type MediaTone } from "@/components/ui/Media";
import type { Locale } from "@/config/locales";
import { pathFor } from "@/config/routes";
import type { Dictionary } from "@/i18n/types";

type Props = {
  dict: Dictionary;
  locale: Locale;
};

const tones: MediaTone[] = ["sea", "sand", "cream", "light"];

/**
 * Referanstaki "Explore More" bloğu (bölüm 12): krem zemin, ortalanmış başlık
 * ve sürüklenebilir kare kart dizisi. Kart genişliği kapsayıcının üçte biri —
 * ekranda üç kart durur, dördüncüsü kenardan taşar (kırpma bölümde).
 */
export default function ExploreMore({ dict, locale }: Props) {
  const { explore } = dict.home;

  return (
    <section className="bg-cream relative overflow-hidden pt-80 pb-85 s:pt-80 s:pb-92 l:pt-120 l:pb-88">
      <div className="site-max site-grid select-none">
        <div className="col-span-6 mb-40 text-center s:col-span-10 s:col-start-2 l:mb-52">
          <SplitTextReveal
            as="h2"
            text={explore.title}
            className="t-title-l text-ink-pure block"
          />
        </div>

        <div className="col-span-6 s:col-span-12 s:col-start-1">
          <DragSlider
            clip={false}
            trackClassName="items-center"
            ariaLabel={explore.title}
          >
            {explore.links.map((link, index) => (
              <Link
                key={link.key}
                href={pathFor(link.key, locale)}
                className="group mr-20 max-w-full min-w-full shrink-0 s:mr-18 s:max-w-[calc((100%-3.6rem)/3)] s:min-w-[calc((100%-3.6rem)/3)]"
                draggable={false}
              >
                <div className="overflow-hidden">
                  <Media
                    tone={tones[index % tones.length]}
                    ratio="1/1"
                    className="transition-transform duration-[1100ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.035]"
                    alt={link.label}
                  />
                </div>
                <span className="eyebrow text-ink-pure mt-16 block transition-opacity duration-500 group-hover:opacity-60">
                  {link.label}
                </span>
              </Link>
            ))}
          </DragSlider>
        </div>
      </div>
    </section>
  );
}
