import Link from "next/link";

import { defaultLocale } from "@/config/locales";
import { pathFor } from "@/config/routes";
import { getDictionary } from "@/i18n";

export default async function NotFound() {
  // not-found segment params alamadığı için varsayılan dil kullanılıyor.
  const dict = await getDictionary(defaultLocale);

  const links = [
    { key: "rooms" as const, label: dict.nav.rooms },
    { key: "experiences" as const, label: dict.nav.experiences },
    { key: "gallery" as const, label: dict.nav.gallery },
    { key: "contact" as const, label: dict.nav.contact },
  ];

  return (
    <section className="flex min-h-screen items-center py-120">
      <div className="site-max site-grid">
        <div className="col-span-4 s:col-span-8 l:col-span-6 l:col-start-4">
          <h1 className="t-title-m text-ink-pure mb-24">
            {dict.notFound.title}
          </h1>
          <p className="t-body mb-40">{dict.notFound.body}</p>
          <ul className="border-ink-pure/12 border-t">
            {links.map((link) => (
              <li key={link.key} className="border-ink-pure/12 border-b">
                <Link
                  href={pathFor(link.key, defaultLocale)}
                  className="group flex items-center justify-between py-18"
                >
                  <span className="t-title-s text-ink-pure transition-opacity duration-500 group-hover:opacity-60">
                    {link.label}
                  </span>
                  <span
                    aria-hidden
                    className="text-ink-pure transition-transform duration-500 group-hover:translate-x-6"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
