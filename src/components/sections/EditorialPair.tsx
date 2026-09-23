import Media from "@/components/ui/Media";

/**
 * Referanstaki metinsiz iki görsellik editorial blok (bölüm 4): solda 2.
 * kolondan başlayan 7 kolonluk yatay görsel, sağda 10. kolondan başlayan
 * 3 kolonluk dikey görsel — alt hizalı ve aşağı taşan. Grid desktop'ta
 * 5.9rem sola kayarak referanstaki asimetriyi veriyor.
 */
export default function EditorialPair() {
  return (
    <section className="py-0 l:pt-80 l:pb-100">
      <div className="site-max site-grid items-end l:-ml-59">
        <div className="col-span-6 aspect-[3/4] s:col-span-12 s:aspect-[4/3] l:col-span-7 l:col-start-2">
          <Media tone="light" className="h-full w-full" parallax />
        </div>

        <div className="col-span-4 col-start-1 max-l:hidden s:col-span-4 s:col-start-9 l:col-span-3 l:col-start-10 l:-mb-80">
          <div className="aspect-[4/3] s:aspect-[3/4]">
            <Media tone="sand" className="h-full w-full" parallax />
          </div>
        </div>
      </div>
    </section>
  );
}
