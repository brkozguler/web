import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, isLocale } from "@/config/locales";
import { keyForSegment } from "@/config/routes";

const PUBLIC_FILE = /\.[^/]+$/;

/** Accept-Language başlığından desteklenen ilk dili seçer. */
function preferredLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;

  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    const base = tag.split("-")[0];
    if (isLocale(base)) return base;
  }
  return defaultLocale;
}

export default function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  const maybeLocale = segments[0];

  // Dil öneki yoksa tarayıcı tercihine göre yönlendir (tek seferlik 307).
  if (!maybeLocale || !isLocale(maybeLocale)) {
    const locale = preferredLocale(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname === "/" ? "/" : pathname}`;
    return NextResponse.redirect(url);
  }

  const locale = maybeLocale;
  const rest = segments.slice(1);
  if (rest.length === 0) return NextResponse.next();

  // Yerelleştirilmiş kategori segmentini canonical klasör adına çevir:
  // /de/zimmer/standardzimmer/ → /de/rooms/standardzimmer/
  const key = keyForSegment(rest[0], locale);
  if (!key) return NextResponse.next();

  const canonical = [locale, key, ...rest.slice(1)].join("/");
  const url = request.nextUrl.clone();
  url.pathname = `/${canonical}/`;
  url.search = search;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    /**
     * Statik dosyalar ve Next iç yolları dışındaki her istek.
     * Not: son gruptaki nokta kaçışı (`\\.`) şart — tek ters bölü ile
     * yazıldığında JS string'i onu yutuyor ve regex "içinde herhangi bir
     * karakter olan her yol" anlamına gelerek proxy'yi tamamen devre dışı
     * bırakıyor.
     */
    "/((?!_next/|api/|images/|videos/|icons/|fonts/|favicon\\.ico|.*\\.[^/]+$).*)",
  ],
};
