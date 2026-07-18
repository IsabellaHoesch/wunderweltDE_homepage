interface BusinessContentStrings {
  navigation: {
    business: string;
    menu: string;
    closeMenu: string;
  };
  hero: {
    heading: string;
    introduction: string[];
    cta: string;
  };
  example: {
    heading: string;
    text: string;
    caption: string;
    imageAlt: string;
  };
  value: {
    heading: string;
    text: string[];
    benefits: string[];
  };
  formats: {
    heading: string;
    items: Array<{
      title: string;
      text: string;
    }>;
  };
  uses: {
    heading: string;
    items: string[];
  };
  implementation: {
    heading: string;
    text: string[];
  };
  form: {
    heading: string;
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
  };
  footer: string;
}

export const businessContent: Record<'de' | 'en', BusinessContentStrings> = {
  de: {
    navigation: {
      business: 'Für Unternehmen',
      menu: 'Menü',
      closeMenu: 'Menü schließen',
    },
    hero: {
      heading: 'Ein Kinderbuch, das Ihre Marke erlebbar macht',
      introduction: [
        'Verwandeln Sie Ihr Hotel, Ihre Fluglinie oder Ihr Unternehmen in eine liebevoll illustrierte Kinderbuchwelt.',
        'Wir entwickeln individuelle Wimmelbücher und Geschichten, die Ihre Marke für Familien erlebbar machen, emotional, hochwertig und lange in Erinnerung.',
      ],
      cta: 'Unverbindliches Angebot anfragen',
    },
    example: {
      heading: 'Eine Welt, in die Kinder eintauchen können',
      text: 'Wir verwandeln Ihre echten Orte, Angebote, Figuren und Maskottchen in ein individuelles Kinderbuch. Kinder entdecken darin Ihre Marke auf spielerische Weise und nehmen ein Stück davon mit nach Hause.',
      caption:
        'Beispiel: Ein individuelles Wimmelbuch für ein Familienhotel mit wiedererkennbaren Orten, Angeboten und einer tierischen Suchfigur.',
      imageAlt:
        'Geöffnetes Wimmelbuch mit einer Ziegen-Suchaufgabe und einer detailreich illustrierten Winterszene in einem Familienhotel',
    },
    value: {
      heading: 'Emotionale Markenbindung für Familien',
      text: [
        'Ein individuelles Kinderbuch ist mehr als ein klassischer Werbeartikel. Es wird gemeinsam angeschaut, vorgelesen und immer wieder aus dem Regal geholt.',
        'So entsteht eine positive Verbindung zu Ihrer Marke, die über den Besuch, die Reise oder die Kampagne hinaus bestehen bleibt.',
      ],
      benefits: [
        'Ihre Marke wird für Kinder spielerisch erlebbar',
        'Familien erinnern sich länger an gemeinsame Momente',
        'Ihre Angebote und Markenwerte werden emotional vermittelt',
        'Ein hochwertiges Geschenk, das gerne mitgenommen und behalten wird',
      ],
    },
    formats: {
      heading: 'So kann Ihr Kinderbuch aussehen',
      items: [
        {
          title: 'Individuelles Wimmelbuch',
          text: 'Ihre Orte, Angebote und Maskottchen werden Teil einer detailreichen Wimmelwelt mit kleinen Geschichten und Suchaufgaben.',
        },
        {
          title: 'Eigene Markengeschichte',
          text: 'Eine liebevoll erzählte Geschichte, die Ihre Markenwelt, Werte oder Figuren kindgerecht aufgreift.',
        },
        {
          title: 'Personalisiertes Kinderbuch',
          text: 'Der Name des Kindes wird Teil der Geschichte. So entsteht ein besonders persönliches Markenerlebnis.',
        },
        {
          title: 'Kleine Geschenkformate',
          text: 'Wimmelbilder, Malhefte und Suchkarten, passend für Aktionen, Events oder als Aufmerksamkeit vor Ort.',
        },
      ],
    },
    uses: {
      heading: 'Vielseitig einsetzbar',
      items: [
        'als Willkommensgeschenk',
        'als Erinnerung an einen Aufenthalt oder eine Reise',
        'als Weihnachts- oder Geburtstagsüberraschung',
        'als Begleitung einer Familienkampagne',
        'als hochwertiges Kundengeschenk',
        'als Beschäftigung vor Ort oder unterwegs',
        'als Produkt im eigenen Shop',
      ],
    },
    implementation: {
      heading: 'Passend zu Ihrer Marke und Ihrem Budget',
      text: [
        'Jedes Projekt wird individuell entwickelt. Dabei können wir auf Ihrer bestehenden Markenwelt aufbauen und vorhandene Farben, Figuren, Maskottchen oder Illustrationen integrieren.',
        'Je nach Einsatzzweck sind kleine Pilotauflagen ebenso möglich wie größere Stückzahlen.',
      ],
    },
    form: {
      heading: 'Lassen Sie uns Ihre Idee gemeinsam entwickeln',
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
      trust: [
        'Persönliche Beratung',
        'Individuelle Gestaltung',
        'Kleine und große Auflagen möglich',
      ],
      subject: 'Unverbindliche Anfrage für ein individuelles Kinderbuch',
      status:
        'Ihr E-Mail-Programm wird geöffnet. Bitte prüfen und senden Sie die vorbereitete Nachricht dort ab.',
    },
    footer: 'Von der Natur inspiriert. Mit Liebe personalisiert.',
  },
  en: {
    navigation: {
      business: 'For businesses',
      menu: 'Menu',
      closeMenu: 'Close menu',
    },
    hero: {
      heading: 'A children’s book that brings your brand to life',
      introduction: [
        'Turn your hotel, airline, or business into a beautifully illustrated world for children.',
        'We create custom seek-and-find books and stories that make your brand meaningful to families, with warmth, quality, and lasting emotional impact.',
      ],
      cta: 'Request a no-obligation quote',
    },
    example: {
      heading: 'A world children can step into',
      text: 'We turn your real locations, services, characters, and mascots into a custom children’s book. Children discover your brand through play and take a piece of the experience home with them.',
      caption:
        'Example: A custom seek-and-find book for a family hotel featuring recognizable places, activities, and an animal character to find.',
      imageAlt:
        'Open seek-and-find book with a goat search activity and a richly illustrated winter scene at a family hotel',
    },
    value: {
      heading: 'Emotional brand loyalty for families',
      text: [
        'A custom children’s book is more than a conventional promotional item. Families explore it together, read it aloud, and return to it again and again.',
        'This creates a positive connection with your brand that lasts beyond the visit, journey, or campaign.',
      ],
      benefits: [
        'Children experience your brand through play',
        'Families remember shared moments for longer',
        'Your services and brand values are communicated emotionally',
        'A high-quality gift families are happy to take home and keep',
      ],
    },
    formats: {
      heading: 'What your children’s book could look like',
      items: [
        {
          title: 'Custom seek-and-find book',
          text: 'Your locations, services, and mascots become part of a richly detailed world with small stories and search activities.',
        },
        {
          title: 'Original brand story',
          text: 'A warmly told story that brings your brand world, values, or characters to life in an age-appropriate way.',
        },
        {
          title: 'Personalized children’s book',
          text: 'The child’s name becomes part of the story, creating a particularly personal brand experience.',
        },
        {
          title: 'Small gift formats',
          text: 'Seek-and-find pictures, coloring books, and activity cards for campaigns, events, or thoughtful on-site gifts.',
        },
      ],
    },
    uses: {
      heading: 'Flexible ways to use it',
      items: [
        'as a welcome gift',
        'as a keepsake from a stay or journey',
        'as a Christmas or birthday surprise',
        'as part of a family campaign',
        'as a premium customer gift',
        'as an activity on site or while traveling',
        'as a product in your own shop',
      ],
    },
    implementation: {
      heading: 'Tailored to your brand and budget',
      text: [
        'Every project is developed individually. We can build on your existing brand world and integrate established colors, characters, mascots, or illustrations.',
        'Depending on your goals, both small pilot runs and larger quantities are possible.',
      ],
    },
    form: {
      heading: 'Let’s develop your idea together',
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
      trust: [
        'Personal consultation',
        'Custom design',
        'Small and large print runs available',
      ],
      subject: 'No-obligation enquiry for a custom children’s book',
      status:
        'Your email application is opening. Please review and send the prepared message there.',
    },
    footer: 'Inspired by nature. Personalized with love.',
  },
};

export type BusinessContent = BusinessContentStrings;
