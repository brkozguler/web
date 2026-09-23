import type { RouteKey } from "@/config/routes";

export type NavLink = {
  key: RouteKey;
  label: string;
  slug?: string;
};

export type Dictionary = {
  meta: {
    homeTitle: string;
    homeDescription: string;
  };
  nav: {
    menu: string;
    close: string;
    hotel: string;
    rooms: string;
    dining: string;
    bars: string;
    experiences: string;
    spa: string;
    meetings: string;
    gallery: string;
    side: string;
    blog: string;
    contact: string;
    booking: string;
  };
  common: {
    learnMore: string;
    discover: string;
    bookNow: string;
    scrollDown: string;
    backHome: string;
    previous: string;
    next: string;
    close: string;
    photos: string;
    allRights: string;
    privacy: string;
    language: string;
  };
  home: {
    hero: { eyebrow: string; titleLines: string[] };
    intro: string;
    overview: { eyebrow: string; title: string; body: string };
    about: { eyebrow: string; title: string; body: string };
    experiences: {
      eyebrow: string;
      title: string;
      body: string;
      items: { slug: string; title: string; text: string }[];
    };
    rooms: {
      eyebrow: string;
      title: string;
      body: string;
      items: { slug: string; title: string }[];
    };
    moments: {
      title: string;
      body: string;
      items: { key: RouteKey; title: string; text: string }[];
    };
    explore: {
      title: string;
      links: { key: RouteKey; label: string }[];
    };
  };
  footer: {
    groups: { title: string; links: NavLink[] }[];
    contactTitle: string;
    phoneLabel: string;
    emailLabel: string;
  };
  restaurants: {
    eyebrow: string;
    title: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
  };
  rooms: {
    eyebrow: string;
    title: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
  };
  activities: {
    eyebrow: string;
    title: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
  };
  bars: {
    eyebrow: string;
    title: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
    previousGallery: string;
    nextGallery: string;
  };
  notFound: {
    title: string;
    body: string;
  };
};
