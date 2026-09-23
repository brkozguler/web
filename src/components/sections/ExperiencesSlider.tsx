import SectionReveal from "@/components/motion/SectionReveal";
import SplitTextReveal from "@/components/motion/SplitTextReveal";
import DragSlider from "@/components/ui/DragSlider";
import Eyebrow from "@/components/ui/Eyebrow";
import Media, { type MediaTone } from "@/components/ui/Media";
import type { Dictionary } from "@/i18n/types";

type Props = {
  dict: Dictionary;
};

const tones: MediaTone[] = ["sea", "sand", "light", "cream", "dark"];

/**
 * Referanstaki "In pursuit of wonder" bloğu (bölüm 9): ortalanmış başlık grubu
 * ve altında sürüklenebilir, başlıksız görsel dizisi. Kartlar referanstaki gibi
 * dönüşümlü olarak yatay (4:3) ve dikey (10:13) oranda, dikey eksende
 * ortalanmış ve kapsayıcının iki kenarından da taşıyor.
 */
export default function ExperiencesSlider({ dict }: Props) {
  const { experiences } = dict.home;

  return (
    <section className="relative overflow-hidden pt-70 pb-100 s:pt-150 s:px-60 l:pt-70">
      <div className="site-max">
        <div className="flex flex-col items-center text-center">
          <SectionReveal className="w-full s:max-w-[70rem]">
            <Eyebrow>{experiences.eyebrow}</Eyebrow>
          </SectionReveal>

          <SplitTextReveal
            as="h2"
            text={experiences.title}
            className="t-title-l text-ink-pure mt-24 block s:max-w-[70rem] l:mt-28"
          />

          <SectionReveal
            delay={0.1}
            className="mt-26 w-full s:max-w-[70rem] l:mt-28"
          >
            <p className="t-body">{experiences.body}</p>
          </SectionReveal>
        </div>
      </div>

      <DragSlider
        className="site-max mt-80 s:mt-100"
        trackClassName="items-center"
        clip={false}
        ariaLabel={experiences.title}
      >
        {experiences.items.map((item, index) => (
          <div
            key={item.slug}
            className="mr-32 min-w-[26.5rem] max-w-[26.5rem] shrink-0 s:min-w-[50rem] s:max-w-[50rem] l:mr-40"
          >
            <Media
              tone={tones[index % tones.length]}
              ratio={index % 2 === 0 ? "4/3" : "10/13"}
              alt={item.title}
            />
          </div>
        ))}
      </DragSlider>
    </section>
  );
}
