interface ContentStrings {
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  notice: {
    text: string;
    cta: string;
  };
  footer: string;
}

export const homeContent: Record<'en' | 'de', ContentStrings> = {
  en: {
    hero: {
      headline: 'Personalized children\'s books for the big moments in little lives.',
      subheadline:
        'Whether for a birth, a sibling, or a declaration of love for dad. Discover books that come from the heart.',
      cta: 'Discover books on Etsy',
    },
    notice: {
      text: 'Our books are currently only available on Etsy. There you can personalize and order your book.',
      cta: 'Go to Etsy Shop',
    },
    footer: 'Inspired by nature. Personalized with love.',
  },
  de: {
    hero: {
      headline: 'Personalisierbare Kinderbücher für die großen Momente im kleinen Leben.',
      subheadline:
        'Ob zur Geburt, für das Geschwisterkind, oder als Liebeserklärung an den Papa. Entdecke Bücher, die von Herzen kommen.',
      cta: 'Bücher auf Etsy entdecken',
    },
    notice: {
      text: 'Unsere Bücher sind aktuell nur auf Etsy erhältlich. Dort kannst du dein Buch personalisieren und bestellen.',
      cta: 'Zum Etsy Shop',
    },
    footer: 'Von der Natur inspiriert. Mit Liebe personalisiert.',
  },
};

export type HomeContent = ContentStrings;
