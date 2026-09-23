import SplitTextReveal from "@/components/motion/SplitTextReveal";
import Media from "@/components/ui/Media";
import type { Dictionary } from "@/i18n/types";

type Props = {
  dict: Dictionary;
};

/**
 * Hero'dan sonraki iki blok — referanstaki bölüm 1 ve 2:
 * ortalanmış açılış cümlesi (12 kolonun 8'i, 3. kolondan) ve ardından
 * scroll ile 0.85'ten 1'e büyüyen geniş görsel (10 kolon, 2. kolondan, 80vh).
 */
export default function Intro({ dict }: Props) {
  return (
    <>
      <section className="pt-55 pb-40 s:pt-90 s:pb-100 l:pt-120 l:pb-90 text-center">
        <div className="site-max site-grid gap-40">
          <div className="col-span-6 col-start-1 s:col-span-10 s:col-start-2 l:col-span-8 l:col-start-3">
            <SplitTextReveal
              as="h2"
              text={dict.home.intro}
              className="t-title-m text-ink-pure block"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="site-max mt-42 mb-40 l:mt-0 l:mb-60">
          <div className="site-grid">
            <div className="col-span-6 col-start-1 s:col-span-10 s:col-start-2">
              <Media
                tone="sea"
                scrollScale
                reveal={false}
                className="aspect-video w-full l:aspect-auto l:h-[80svh]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
