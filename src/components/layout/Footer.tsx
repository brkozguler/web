import Link from "next/link";

import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import Logo from "@/components/layout/Logo";
import type { Locale } from "@/config/locales";
import { pathFor } from "@/config/routes";
import { siteConfig } from "@/config/site";
import type { Dictionary } from "@/i18n/types";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export default function Footer({ locale, dict }: Props) {
  return (
    <footer className="bg-main text-white-pure pt-90 pb-40 s:pt-120 s:pb-50">
      <div className="site-max site-grid gap-y-60">
        <div className="col-span-4 s:col-span-8 l:col-span-3">
          <Logo className="items-start" />
        </div>

        {dict.footer.groups.map((group) => (
          <nav
            key={group.title}
            aria-label={group.title}
            className="col-span-2 s:col-span-4 l:col-span-2"
          >
            <p className="eyebrow mb-20 opacity-60">{group.title}</p>
            <ul className="flex flex-col gap-10">
              {group.links.map((link) => (
                <li key={`${link.key}-${link.label}`}>
                  <Link
                    href={pathFor(link.key, locale, link.slug ?? "")}
                    className="t-body inline-block opacity-85 transition-opacity duration-500 hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="col-span-4 s:col-span-4 l:col-span-3">
          <p className="eyebrow mb-20 opacity-60">{dict.footer.contactTitle}</p>
          <ul className="flex flex-col gap-10">
            <li>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="t-body opacity-85 transition-opacity hover:opacity-100"
              >
                {dict.footer.phoneLabel} {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="t-body opacity-85 transition-opacity hover:opacity-100"
              >
                {dict.footer.emailLabel} {siteConfig.email}
              </a>
            </li>
            <li className="t-body opacity-85">
              {siteConfig.address.street}, {siteConfig.address.locality} /{" "}
              {siteConfig.address.region}
            </li>
            <li>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="t-body opacity-85 transition-opacity hover:opacity-100"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-max border-white-subtle mt-80 flex flex-col gap-16 border-t pt-24 s:flex-row s:items-center s:justify-between">
        <p className="t-body-s opacity-60">
          © {new Date().getFullYear()} {siteConfig.name}. {dict.common.allRights}
        </p>
        <div className="flex items-center gap-32">
          <Link
            href={pathFor("privacy", locale)}
            className="t-body-s opacity-60 transition-opacity hover:opacity-100"
          >
            {dict.common.privacy}
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
