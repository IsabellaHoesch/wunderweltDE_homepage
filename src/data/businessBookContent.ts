export type BusinessBookImageKey =
  | 'hero'
  | 'world'
  | 'connection'
  | 'formats'
  | 'uses'
  | 'implementation'
  | 'contact';

export interface BusinessBookListItem {
  title?: string;
  text: string;
}

export interface BusinessBookSpread {
  id: string;
  navLabel: string;
  heading: string;
  text: string[];
  imageKey: BusinessBookImageKey;
  imageAlt: string;
  list?: BusinessBookListItem[];
  kind?: 'content' | 'contact';
}

export interface BusinessBookNavigation {
  label: string;
  open: string;
  close: string;
}

export interface BusinessBookAnimationContent {
  navigation: BusinessBookNavigation;
  spreads: BusinessBookSpread[];
}

export interface BusinessBookFormContent {
  text: string[];
  labels: {
    name: string;
    email: string;
    company: string;
    message: string;
  };
  messagePlaceholder: string;
  requiredHint: string;
  cta: string;
  trust: string[];
  subject: string;
  status: string;
}

export interface BusinessBookContent {
  navigation: BusinessBookNavigation;
  spreads: BusinessBookSpread[];
  form: BusinessBookFormContent;
  footer: string;
}

export const businessBookContent: Record<'de' | 'en', BusinessBookContent> = {
  de: {
    navigation: {
      label: 'Kapitelübersicht',
      open: 'Kapitelübersicht öffnen',
      close: 'Kapitelübersicht schließen',
    },
    spreads: [
      {
        id: 'start',
        navLabel: 'Start',
        heading: 'Ein Kinderbuch, das Ihre Marke erlebbar macht',
        text: [
          'Verwandeln Sie Ihr Hotel, Ihre Fluglinie oder Ihr Unternehmen in eine liebevoll illustrierte Kinderbuchwelt.',
          'Wir entwickeln individuelle Wimmelbücher und Geschichten, die Ihre Marke für Familien erlebbar machen – emotional, hochwertig und so gestaltet, dass sie lange in Erinnerung bleiben.',
        ],
        imageKey: 'hero',
        imageAlt:
          'Watercolor illustration of a family discovering a custom children’s book in a welcoming family hotel',
      },
      {
        id: 'markenwelt',
        navLabel: 'Markenwelt',
        heading: 'Eine Welt, in die Kinder eintauchen können',
        text: [
          'Wir verwandeln Ihre echten Orte, Angebote, Figuren und Maskottchen in ein individuelles Kinderbuch. Kinder entdecken darin Ihre Marke auf spielerische Weise und nehmen ein Stück davon mit nach Hause.',
        ],
        imageKey: 'world',
        imageAlt:
          'Watercolor illustration of a family hotel transformed into a detailed illustrated world with a mascot, pool, garden, and families',
      },
      {
        id: 'bindung',
        navLabel: 'Markenbindung',
        heading: 'Emotionale Markenbindung für Familien',
        text: [
          'Ein individuelles Kinderbuch ist mehr als ein klassischer Werbeartikel. Es wird gemeinsam angeschaut, vorgelesen und immer wieder aus dem Regal geholt.',
          'So entsteht eine positive Verbindung zu Ihrer Marke, die über den Besuch, die Reise oder die Kampagne hinaus bestehen bleibt.',
        ],
        imageKey: 'connection',
        imageAlt:
          'Watercolor illustration of a family reading a custom children’s book together in a warm hotel lounge',
      },
      {
        id: 'formate',
        navLabel: 'Formate',
        heading: 'So kann Ihr Kinderbuch aussehen',
        text: [],
        imageKey: 'formats',
        imageAlt:
          'Watercolor still life showing a seek-and-find book, a storybook, activity cards, and small gift formats',
        list: [
          {
            title: 'Individuelles Wimmelbuch',
            text: 'Ihre Orte, Angebote und Maskottchen werden Teil einer detailreichen Wimmelwelt mit kleinen Geschichten und Suchaufgaben.',
          },
          {
            title: 'Eigene Markengeschichte',
            text: 'Eine liebevoll erzählte Geschichte, die Ihre Markenwelt, Werte oder Figuren kindgerecht aufgreift.',
          },
          {
            title: 'Kleine Geschenkformate',
            text: 'Wimmelbilder, Malhefte und Suchkarten, passend für Aktionen, Events oder als Aufmerksamkeit vor Ort.',
          },
        ],
      },
      {
        id: 'einsatzbereiche',
        navLabel: 'Einsatzbereiche',
        heading: 'Vielseitig einsetzbar',
        text: [],
        imageKey: 'uses',
        imageAlt:
          'Watercolor scene showing a custom children’s book as a welcome gift, travel activity, event material, and shop product',
        list: [
          { text: 'als Willkommensgeschenk' },
          { text: 'als Erinnerung an einen Aufenthalt oder eine Reise' },
          { text: 'als Weihnachts- oder Geburtstagsüberraschung' },
          { text: 'als Begleitung einer Familienkampagne' },
          { text: 'als hochwertiges Kundengeschenk' },
          { text: 'als Beschäftigung vor Ort oder unterwegs' },
          { text: 'als Produkt im eigenen Shop' },
        ],
      },
      {
        id: 'umsetzung',
        navLabel: 'Umsetzung',
        heading: 'Passend zu Ihrer Marke und Ihrem Budget',
        text: [
          'Jedes Projekt wird individuell entwickelt. Dabei können wir auf Ihrer bestehenden Markenwelt aufbauen und vorhandene Farben, Figuren, Maskottchen oder Illustrationen integrieren.',
          'Je nach Einsatzzweck sind kleine Pilotauflagen ebenso möglich wie größere Stückzahlen.',
        ],
        imageKey: 'implementation',
        imageAlt:
          'Watercolor illustration of a client and illustrator developing a custom children’s book with sketches, color swatches, and book proofs',
      },
      {
        id: 'anfrage',
        navLabel: 'Anfrage',
        heading: 'Lassen Sie uns Ihre Idee gemeinsam entwickeln',
        text: [],
        imageKey: 'contact',
        imageAlt:
          'Watercolor illustration of a finished children’s book, blank proofs, pencils, and a family hotel landscape at sunset',
        kind: 'contact',
      },
    ],
    form: {
      text: [
        'Sie haben bereits eine konkrete Vorstellung oder möchten zunächst herausfinden, welches Format zu Ihrer Marke passt?',
        'Erzählen Sie uns kurz von Ihrem Unternehmen und Ihrer Idee. Wir melden uns persönlich und erstellen Ihnen ein unverbindliches Angebot.',
      ],
      labels: {
        name: 'Name',
        email: 'E-Mail-Adresse',
        company: 'Unternehmen',
        message: 'Nachricht',
      },
      messagePlaceholder:
        'Wie möchten Sie das Kinderbuch einsetzen? Nennen Sie uns gerne Ihre Zielgruppe, den Anlass und die ungefähre Stückzahl.',
      requiredHint: 'Pflichtfeld',
      cta: 'Unverbindliches Angebot anfragen',
      trust: ['Persönliche Beratung', 'Individuelle Gestaltung', 'Kleine und große Auflagen möglich'],
      subject: 'Unverbindliche Anfrage für ein individuelles Kinderbuch',
      status:
        'Ihr E-Mail-Programm wird geöffnet. Bitte prüfen und senden Sie die vorbereitete Nachricht dort ab.',
    },
    footer: 'Von der Natur inspiriert. Mit Liebe personalisiert.',
  },
  en: {
    navigation: {
      label: 'Chapter overview',
      open: 'Open chapter overview',
      close: 'Close chapter overview',
    },
    spreads: [
      {
        id: 'start',
        navLabel: 'Start',
        heading: 'A children’s book that brings your brand to life',
        text: [
          'Turn your hotel, airline, or business into a beautifully illustrated world for children.',
          'We create custom seek-and-find books and stories that make your brand meaningful to families, with warmth, quality, and lasting emotional impact.',
        ],
        imageKey: 'hero',
        imageAlt:
          'Watercolor illustration of a family discovering a custom children’s book in a welcoming family hotel',
      },
      {
        id: 'brand-world',
        navLabel: 'Brand world',
        heading: 'A world children can step into',
        text: [
          'We turn your real locations, services, characters, and mascots into a custom children’s book. Children discover your brand through play and take a piece of the experience home with them.',
        ],
        imageKey: 'world',
        imageAlt:
          'Watercolor illustration of a family hotel transformed into a detailed illustrated world with a mascot, pool, garden, and families',
      },
      {
        id: 'connection',
        navLabel: 'Brand connection',
        heading: 'Emotional brand loyalty for families',
        text: [
          'A custom children’s book is more than a conventional promotional item. Families explore it together, read it aloud, and return to it again and again.',
          'This creates a positive connection with your brand that lasts beyond the visit, journey, or campaign.',
        ],
        imageKey: 'connection',
        imageAlt:
          'Watercolor illustration of a family reading a custom children’s book together in a warm hotel lounge',
      },
      {
        id: 'formats',
        navLabel: 'Formats',
        heading: 'What your children’s book could look like',
        text: [],
        imageKey: 'formats',
        imageAlt:
          'Watercolor still life showing a seek-and-find book, a storybook, activity cards, and small gift formats',
        list: [
          {
            title: 'Custom seek-and-find book',
            text: 'Your locations, services, and mascots become part of a richly detailed world with small stories and search activities.',
          },
          {
            title: 'Original brand story',
            text: 'A warmly told story that brings your brand world, values, or characters to life in an age-appropriate way.',
          },
          {
            title: 'Small gift formats',
            text: 'Seek-and-find pictures, coloring books, and activity cards for campaigns, events, or thoughtful on-site gifts.',
          },
        ],
      },
      {
        id: 'uses',
        navLabel: 'Use cases',
        heading: 'Flexible ways to use it',
        text: [],
        imageKey: 'uses',
        imageAlt:
          'Watercolor scene showing a custom children’s book as a welcome gift, travel activity, event material, and shop product',
        list: [
          { text: 'as a welcome gift' },
          { text: 'as a keepsake from a stay or journey' },
          { text: 'as a Christmas or birthday surprise' },
          { text: 'as part of a family campaign' },
          { text: 'as a premium customer gift' },
          { text: 'as an activity on site or while traveling' },
          { text: 'as a product in your own shop' },
        ],
      },
      {
        id: 'implementation',
        navLabel: 'Implementation',
        heading: 'Tailored to your brand and budget',
        text: [
          'Every project is developed individually. We can build on your existing brand world and integrate established colors, characters, mascots, or illustrations.',
          'Depending on your goals, both small pilot runs and larger quantities are possible.',
        ],
        imageKey: 'implementation',
        imageAlt:
          'Watercolor illustration of a client and illustrator developing a custom children’s book with sketches, color swatches, and book proofs',
      },
      {
        id: 'enquiry',
        navLabel: 'Enquiry',
        heading: 'Let’s develop your idea together',
        text: [],
        imageKey: 'contact',
        imageAlt:
          'Watercolor illustration of a finished children’s book, blank proofs, pencils, and a family hotel landscape at sunset',
        kind: 'contact',
      },
    ],
    form: {
      text: [
        'Do you already have a clear idea, or would you first like to explore which format best suits your brand?',
        'Tell us briefly about your company and your idea. We will respond personally and prepare a no-obligation quote.',
      ],
      labels: {
        name: 'Name',
        email: 'Email address',
        company: 'Company',
        message: 'Message',
      },
      messagePlaceholder:
        'How would you like to use the children’s book? Feel free to share your audience, occasion, and approximate quantity.',
      requiredHint: 'Required',
      cta: 'Request a no-obligation quote',
      trust: ['Personal consultation', 'Custom design', 'Small and large print runs available'],
      subject: 'No-obligation enquiry for a custom children’s book',
      status:
        'Your email application is opening. Please review and send the prepared message there.',
    },
    footer: 'Inspired by nature. Personalized with love.',
  },
};
