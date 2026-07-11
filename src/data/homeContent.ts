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
  reviews: {
    summary: string;
    heading: string;
    subheading: string;
    cta: string;
    items: Array<{
      quote: string;
      author: string;
      date: string;
      context: string;
      source: string;
      imageKey?: 'sarahKoala' | 'annabelPapa' | 'brombeerPapa' | 'svenjaPapa';
      imageAlt?: string;
    }>;
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
    reviews: {
      summary: '★★★★★ 5.0 on Etsy',
      heading: 'What customers say',
      subheading: 'Real book reviews from our Etsy shop, as of July 2026.',
      cta: 'See all reviews on Etsy',
      items: [
        {
          quote:
            'A truly beautiful children\'s book and a wonderful gift for new dads! The individually designed, personalized illustration makes it extra special. Thank you so much for this fantastic idea!',
          author: 'Annabel',
          date: 'May 25, 2026',
          context: 'Dad birthday book with dedication page',
          source: 'Etsy review',
          imageKey: 'annabelPapa',
          imageAlt: 'Customer photo from an Etsy review of the dad birthday book',
        },
        {
          quote:
            'The personalization was perfect! They even captured my husband\'s tunnel and three-day stubble, and you can recognize them both at a glance. I\'m thrilled! :)',
          author: 'Svenja',
          date: 'May 19, 2026',
          context: 'Dad and child story',
          source: 'Etsy review',
          imageKey: 'svenjaPapa',
          imageAlt: 'Customer photo from an Etsy review of the personalized dad and child story',
        },
        {
          quote:
            'Absolutely wonderful gift, received a quick response',
          author: 'Sarah',
          date: 'June 5, 2026',
          context: 'Otter birthday book',
          source: 'Etsy review',
        },
        {
          quote:
            'The book is beautifully designed and appeals to both young and old. The pictures and text are very cute and child-friendly, encouraging thinking, talking, and playful interaction. Thank you so much for enriching our family life!',
          author: 'Sonja',
          date: 'June 3, 2026',
          context: 'Otter birthday book',
          source: 'Etsy review',
        },
        {
          quote:
            'The seller was incredibly kind. Isabella even altered the book especially for me! Thank you so much again :-) The book was very well received!',
          author: 'Lene',
          date: 'May 22, 2026',
          context: 'Sibling book',
          source: 'Etsy review',
        },
        {
          quote:
            'Dear Isabella, the book arrived today and I\'m absolutely thrilled! It\'s beautiful, the perfect size for our two-year-old\'s hands, and the little facts about the different animal dads are so lovingly written and designed. What I love most is that you use so many different adjectives to describe the dads, which helps expand their vocabulary beyond everyday language. I can\'t wait to let them both read it. And thank you so much again for your help with creating the illustration; I never would have been able to describe it so perfectly!',
          author: 'Brombeer',
          date: 'May 20, 2026',
          context: 'Dad and child story',
          source: 'Etsy review',
          imageKey: 'brombeerPapa',
          imageAlt: 'Customer photo from an Etsy review of the dad and child story',
        },
        {
          quote:
            'Beautiful illustration! Looks exactly as pictured ☺️ A really great gift',
          author: 'Etsy buyer',
          date: 'May 19, 2026',
          context: 'Dad and child story',
          source: 'Etsy review',
        },
        {
          quote:
            'A super sweet children\'s book and a great gift ☺️',
          author: 'Andra',
          date: 'May 19, 2026',
          context: 'Dad and child story',
          source: 'Etsy review',
        },
        {
          quote:
            'A very nice book and a great Father\'s Day gift. Dad was very happy.',
          author: 'Etsy buyer',
          date: 'May 19, 2026',
          context: 'Dad and child story',
          source: 'Etsy review',
        },
        {
          quote:
            'Very friendly customer service, lovingly designed book, great gift. Thanks again :)',
          author: 'Delia',
          date: 'May 18, 2026',
          context: 'Dad and child story',
          source: 'Etsy review',
        },
        {
          quote:
            'The book is very nice; I\'m curious to see how our daughter Johanna likes it.',
          author: 'Sarah',
          date: 'May 30, 2026',
          context: 'Personalized koala children\'s book',
          source: 'Etsy review',
          imageKey: 'sarahKoala',
          imageAlt: 'Customer photo from an Etsy review of the koala children\'s book',
        },
        {
          quote: 'A beautiful book to give as a gift. Thank you so much.',
          author: 'Bianca',
          date: 'June 11, 2026',
          context: 'Dad and child story',
          source: 'Etsy review',
        },
      ],
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
    reviews: {
      summary: '★★★★★ 5,0 auf Etsy',
      heading: 'Was Kund:innen sagen',
      subheading: 'Echte Buchbewertungen aus unserem Etsy-Shop, Stand Juli 2026.',
      cta: 'Alle Bewertungen auf Etsy ansehen',
      items: [
        {
          quote:
            'Ein wirklich wunderschönes Kinderbuch und ein tolles Geschenk für frischgebackene Papas! Besonders die individuell gestaltete, persönliche Illustration macht es zu etwas ganz Besonderem. Vielen Dank für diese tolle Idee!',
          author: 'Annabel',
          date: '25. Mai 2026',
          context: 'Papa-Geburtstagsbuch mit Widmungsseite',
          source: 'Etsy-Bewertung',
          imageKey: 'annabelPapa',
          imageAlt: 'Kundenfoto aus einer Etsy-Bewertung zum Papa-Geburtstagsbuch',
        },
        {
          quote:
            'Die Personalisierung hat perfekt gepasst! Sogar den Tunnel und 3-Tage-Bart von meinem Mann haben sie umgesetzt und man erkennt beide auf einen Blick. Ich bin begeistert :)',
          author: 'Svenja',
          date: '19. Mai 2026',
          context: 'Papa-Kind-Geschichte',
          source: 'Etsy-Bewertung',
          imageKey: 'svenjaPapa',
          imageAlt: 'Kundenfoto aus einer Etsy-Bewertung zur personalisierten Papa-Kind-Geschichte',
        },
        {
          quote:
            'Total super schönes Geschenk, schnelle Antwort bekommen',
          author: 'Sarah',
          date: '5. Juni 2026',
          context: 'Otter-Geburtstagsbuch',
          source: 'Etsy-Bewertung',
        },
        {
          quote:
            'Das Buch ist wunderschön gestaltet und gefällt sowohl Groß als auch Klein. Die Bilder und Texte sind sehr süß und kindgerecht und laden zum Denken, Sprechen und Herumalbern ein. Vielen Dank für diese Bereicherung unseres Familienalltages!',
          author: 'Sonja',
          date: '3. Juni 2026',
          context: 'Otter-Geburtstagsbuch',
          source: 'Etsy-Bewertung',
        },
        {
          quote:
            'Super liebe Verkäuferin. Isabella hat extra für mich das Buch abgeändert! Ganz vielen Dank nochmal :-) Das Buch kam sehr gut an!',
          author: 'Lene',
          date: '22. Mai 2026',
          context: 'Geschwisterbuch',
          source: 'Etsy-Bewertung',
        },
        {
          quote:
            'Liebe Isabella, das Buch kam heute an und ich bin absolut begeistert es ist wunderschön, hat eine perfekte Größe für die Hände unseres 2 jährigen und die kleinen Infos zu den verschiedenen Tierpapas sind liebevoll geschrieben und gestaltet. am meisten gefällt mir das du so viele verschiedene Adjektive zum beschreiben der Papas benutzt sodass der Wortschatz über den normalen Sprachgebrauch gefördert wird Ich kanns kaum erwarten es den beiden zum lesen zu geben. Und auch nochmal vielen vielen Dank für deine Hilfe mit dem erstellen des Bildes, das hätte ich nie im Leben so toll beschrieben bekommen',
          author: 'Brombeer',
          date: '20. Mai 2026',
          context: 'Papa-Kind-Geschichte',
          source: 'Etsy-Bewertung',
          imageKey: 'brombeerPapa',
          imageAlt: 'Kundenfoto aus einer Etsy-Bewertung zur Papa-Kind-Geschichte',
        },
        {
          quote:
            'Super schöne Illustration! Sieht echt aus wie angegeben☺️ Ein sehr tolles Geschenk',
          author: 'Etsy buyer',
          date: '19. Mai 2026',
          context: 'Papa-Kind-Geschichte',
          source: 'Etsy-Bewertung',
        },
        {
          quote:
            'Mega süßes Kinderbuch und ein tolles Geschenk ☺️',
          author: 'Andra',
          date: '19. Mai 2026',
          context: 'Papa-Kind-Geschichte',
          source: 'Etsy-Bewertung',
        },
        {
          quote:
            'Sehr schönes Buch und tolles Geschenk zum Vatertag. Der Papa hat sich sehr gefreut.',
          author: 'Etsy buyer',
          date: '19. Mai 2026',
          context: 'Papa-Kind-Geschichte',
          source: 'Etsy-Bewertung',
        },
        {
          quote:
            'Sehr freundlicher Kundenservice, liebevoll gestaltetes Buch, tolles Geschenk. Danke nochmal :)',
          author: 'Delia',
          date: '18. Mai 2026',
          context: 'Papa-Kind-Geschichte',
          source: 'Etsy-Bewertung',
        },
        {
          quote:
            'Das Buch ist sehr schön bin gespannt wie unsere Tochter Johanna es mag und es ihr gefällt.',
          author: 'Sarah',
          date: '30. Mai 2026',
          context: 'Personalisiertes Koala-Kinderbuch',
          source: 'Etsy-Bewertung',
          imageKey: 'sarahKoala',
          imageAlt: 'Kundenfoto aus einer Etsy-Bewertung zum Koala-Kinderbuch',
        },
        {
          quote: 'Wunderschönes Buch zum Verschenken. Vielen Dank',
          author: 'Bianca',
          date: '11. Juni 2026',
          context: 'Papa-Kind-Geschichte',
          source: 'Etsy-Bewertung',
        },
      ],
    },
    footer: 'Von der Natur inspiriert. Mit Liebe personalisiert.',
  },
};

export type HomeContent = ContentStrings;
