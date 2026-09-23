import SectionReveal from "@/components/motion/SectionReveal";
import SplitTextReveal from "@/components/motion/SplitTextReveal";
import Eyebrow from "@/components/ui/Eyebrow";
import type { Dictionary } from "@/i18n/types";

type Props = {
  dict: Dictionary;
};

/**
 * Referanstaki OVERVIEW bloğu: solda 2. kolondan başlayan 4 kolonluk başlık,
 * sağda 7. kolondan başlayan 5 kolonluk paragraf.
 */
export default function Overview({ dict }: Props) {
  const { overview } = dict.home;

  return (
    <section className="max-s:pt-40 py-80 s:py-110">
      <div className="site-max site-grid">
        <div className="col-span-6 mb-32 s:col-span-5 s:mb-0 l:col-span-4 l:col-start-2">
          <SectionReveal className="mb-30">
            <Eyebrow>{overview.eyebrow}</Eyebrow>
          </SectionReveal>
          <SplitTextReveal
            as="h3"
            text={overview.title.replace(/\n/g, " ")}
            className="t-title-s text-ink-pure block"
          />
        </div>

        <div className="col-span-6 s:col-span-6 s:col-start-7 l:col-span-5 l:col-start-7">
          <SectionReveal delay={0.1}>
            <p className="t-body">{overview.body}</p>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
