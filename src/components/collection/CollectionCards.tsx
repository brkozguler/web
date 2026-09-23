import Link from "next/link";

import Media, { type MediaTone } from "@/components/ui/Media";
import {
  CapacityIcon,
  ConceptIcon,
  CuisineIcon,
  DrinksIcon,
  HoursIcon,
  LocationIcon,
  SizeIcon,
  ViewIcon,
} from "@/components/ui/icons";

export type CardProperty = {
  icon:
    | "capacity"
    | "size"
    | "view"
    | "cuisine"
    | "concept"
    | "hours"
    | "drinks"
    | "location";
  label: string;
};

export type CollectionCard = {
  key: string;
  title: string;
  href: string;
  tone: MediaTone;
  src?: string;
  /** Kart altında görünen kısa açıklama (konaklama kartlarında var) */
  description?: string;
  /** Kapasite, m² ve manzara gibi künye satırı */
  properties?: CardProperty[];
};

type Props = {
  cards: CollectionCard[];
};

const icons = {
  capacity: CapacityIcon,
  size: SizeIcon,
  view: ViewIcon,
  cuisine: CuisineIcon,
  concept: ConceptIcon,
  hours: HoursIcon,
  drinks: DrinksIcon,
  location: LocationIcon,
};

/**
 * Kategori kartları ızgarası — referanstaki galeri düzeni: desktop'ta 12
 * kolonun 4'erlisi (satırda üç kart) ve 4:3 görsel. Galeri kartlarında
 * görselin altında yalnızca ortalanmış eyebrow başlık durur; konaklama
 * kartlarında ise başlık, kısa açıklama ve künye satırı (kapasite, m²,
 * manzara) sola hizalı olarak görünür.
 */
export default function CollectionCards({ cards }: Props) {
  return (
    <section className="py-40 s:pt-80 s:pb-20">
      <div className="site-max site-grid">
        {cards.map((card) => {
          const detailed = Boolean(card.description || card.properties?.length);

          return (
            <div
              key={card.key}
              className="relative col-span-6 mb-60 flex flex-col s:col-span-4 s:mb-100"
            >
              <Link href={card.href} className="group flex h-full flex-col">
                <div className="overflow-hidden">
                  <Media
                    tone={card.tone}
                    ratio="4/3"
                    src={card.src}
                    alt={card.title}
                    sizes="(min-width: 650px) 30vw, 100vw"
                    className="transition-transform duration-[1100ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.035]"
                  />
                </div>

                {detailed ? (
                  <div className="mt-24 flex flex-1 flex-col">
                    <h2 className="t-title-s text-ink-pure transition-opacity duration-500 group-hover:opacity-60">
                      {card.title}
                    </h2>

                    {card.description ? (
                      <p className="t-body mt-12">{card.description}</p>
                    ) : null}

                    {card.properties?.length ? (
                      <ul className="mt-auto flex flex-wrap items-center gap-x-28 gap-y-10 pt-20">
                        {card.properties.map((property) => {
                          const Icon = icons[property.icon];
                          return (
                            <li
                              key={`${property.icon}-${property.label}`}
                              className="text-ink-soft flex items-center gap-x-10"
                            >
                              <Icon className="text-main size-20 shrink-0" />
                              <span className="t-body-s">{property.label}</span>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                  </div>
                ) : (
                  <h2 className="eyebrow text-ink-pure mt-32 block text-center transition-opacity duration-500 group-hover:opacity-60">
                    {card.title}
                  </h2>
                )}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
