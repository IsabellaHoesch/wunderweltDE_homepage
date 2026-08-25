import type { BusinessBookAnimationContent } from './businessBookContent';

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
    imageAlt: string;
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
      visualAlt: string;
    }>;
  };
  uses: {
    heading: string;
    items: string[];
  };
  implementation: {
    heading: string;
    text: string[];
    processLabel: string;
    steps: Array<{
      title: string;
      text: string;
      imageKey: 'briefing' | 'style' | 'result';
      imageAlt: string;
    }>;
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
  embeddedBook: BusinessBookAnimationContent;
  footer: string;
}

export const businessContent: Record<'de' | 'en', BusinessContentStrings> = {
  de: {
    navigation: {
      business: 'Für Hotels',
      menu: 'Menü',
      closeMenu: 'Menü schließen',
    },
    hero: {
      heading: 'Ein Kinderbuch, das Ihr Familienhotel unvergesslich macht',
      introduction: [
        'Verwandeln Sie Ihr Familienhotel oder Familienresort in eine liebevoll illustrierte Kinderbuchwelt.',
        'Ihre Räume, Maskottchen, Aktivitäten und Ausflugsziele werden zu einer Geschichte, die Kinder entdecken und Familien gerne mit nach Hause nehmen.',
      ],
      cta: 'Kinderbuch anfragen',
      imageAlt:
        'Geöffnetes Wimmelbuch mit einem Familienhotel in den Bergen, Pool, Spielplatz, Garten und einer Suchaufgabe',
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
      heading: 'So kann Ihr Kinderbuch für Ihr Familienresort aussehen',
      items: [
        {
          title: 'Individuelles Wimmelbuch',
          text: 'Ihre Zimmer, Erlebnisbereiche, Angebote und Maskottchen werden Teil einer detailreichen Wimmelwelt mit kleinen Geschichten und Suchaufgaben.',
          visualAlt:
            'Illustration einer detailreichen Familienhotel-Wimmelwelt mit Bergen, Pool, Kindern und einer freundlichen Ziege',
        },
        {
          title: 'Eigene Markengeschichte',
          text: 'Eine liebevoll erzählte Geschichte, die Ihr Familienresort, seine Werte und seine Figuren kindgerecht zum Leben erweckt.',
          visualAlt:
            'Illustration eines Kindes und eines freundlichen Fuchses auf einem Weg durch eine blühende Landschaft',
        },
        {
          title: 'Kleine Geschenkformate',
          text: 'Wimmelbilder, Malhefte und Suchkarten für Zimmer, Familienaktionen, Events oder als Aufmerksamkeit vor Ort.',
          visualAlt:
            'Fotografische Aufnahme eines geöffneten Malhefts mit Ausmalmotiven, zusätzlichen Malheften und kleinen Willkommensgeschenken',
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
      heading: 'So entsteht Ihre individuelle Hotelwelt',
      text: [
        'Jedes Projekt wird individuell entwickelt. Wir können auf bestehenden Markenwelten aufbauen oder einen passenden Illustrationsstil für Ihr Hotel entwickeln.',
        'Dabei integrieren wir die Besonderheiten Ihres Hauses – Räume, Maskottchen, Aktivitäten, Lieblingsorte und besondere Angebote – in eine persönliche Geschichte für Ihre Familiengäste.',
      ],
      processLabel: 'Ablauf der individuellen Entwicklung',
      steps: [
        {
          title: 'Ihre Hotelwelt kennenlernen',
          text: 'Wir sammeln Orte, Farben, Figuren, Maskottchen und besondere Erlebnisse Ihres Familienhotels.',
          imageKey: 'briefing',
          imageAlt: 'Textfreie Aquarellszene mit Hotelräumen, Ausflugszielen, Farbfeldern und ersten Maskottchen-Entwürfen',
        },
        {
          title: 'Stil und Geschichte entwickeln',
          text: 'Aus diesen Bausteinen entsteht ein passender Illustrationsstil mit Figuren- und Szenenideen.',
          imageKey: 'style',
          imageAlt: 'Textfreie Gouache-Studie mit mehreren Figurenvarianten, Stilproben und kleinen Hotelszenen',
        },
        {
          title: 'Ihre Familienwelt zum Leben erwecken',
          text: 'Die fertigen Illustrationen werden zu einer zusammenhängenden Kinderbuch- und Erlebniswelt.',
          imageKey: 'result',
          imageAlt: 'Textfreie hochwertige Kinderbuchszene mit Familienhotel, Frühstücksterrasse, Spielplatz, Maskottchen und Ausflugsweg',
        },
      ],
    },
    form: {
      heading: 'Erzählen Sie uns von Ihrem Familienhotel',
      text: [
        'Welche Orte, Angebote und Geschichten sollen Kinder in Ihrem Familienhotel entdecken?',
        'Erzählen Sie uns von Ihrer Idee. Wir entwickeln gemeinsam ein passendes Kinderbuchkonzept für Ihre Familiengäste.',
      ],
      labels: {
        name: 'Name',
        email: 'E-Mail-Adresse',
        company: 'Unternehmen',
        message: 'Nachricht',
      },
      messagePlaceholder:
        'Wie möchten Sie das Kinderbuch in Ihrem Familienhotel einsetzen? Nennen Sie uns gerne Orte, Zielgruppe, Anlass und ungefähre Stückzahl.',
      requiredHint: 'Pflichtfeld',
      cta: 'Unverbindliches Angebot anfragen',
      trust: [
        'Persönliche Beratung',
        'Individuelle Gestaltung',
        'Kleine und große Auflagen möglich',
      ],
      subject: 'Unverbindliche Anfrage für ein Kinderbuch im Familienhotel',
      status:
        'Ihr E-Mail-Programm wird geöffnet. Bitte prüfen und senden Sie die vorbereitete Nachricht dort ab.',
    },
    embeddedBook: {
      navigation: {
        label: 'Kapitelübersicht',
        open: 'Kapitelübersicht öffnen',
        close: 'Kapitelübersicht schließen',
      },
      spreads: [
        {
          id: 'markenwelt',
          navLabel: 'Markenwelt',
          heading: 'Ihre Familienwelt als liebevoll illustrierte Geschichte',
          text: [
            'Vom Frühstücksraum über den Spielplatz bis zum Abenteuer in der Umgebung: Kinder entdecken vertraute Orte und Angebote Ihres Familienresorts auf spielerische Weise.',
            'So wird aus Ihrem Familienhotel eine eigene Wimmelbuchwelt, in der sich kleine Gäste sofort wiederfinden.',
          ],
          imageKey: 'world',
          imageAlt: 'Aquarellillustration einer lebendigen Familienhotel-Welt mit Familien, Pool, Garten und Maskottchen',
        },
        {
          id: 'bindung',
          navLabel: 'Markenbindung',
          heading: 'Ein Andenken, das Familien mit Ihrem Haus verbindet',
          text: [
            'Der Aufenthalt endet nicht mit dem Check-out. Ein individuelles Kinderbuch erinnert Familien an gemeinsame Erlebnisse und bringt die besondere Atmosphäre Ihres Hauses mit nach Hause.',
            'So bleibt Ihr Familienhotel über den Aufenthalt hinaus Teil einer schönen Familiengeschichte.',
          ],
          imageKey: 'connection',
          imageAlt: 'Aquarellillustration einer Familie, die gemeinsam in einer warmen Hotellounge ein Kinderbuch liest',
        },
        {
          id: 'einsatzbereiche',
          navLabel: 'Einsatzbereiche',
          heading: 'Vielseitig einsetzbar – im Resort und darüber hinaus',
          text: [],
          imageKey: 'uses',
          imageAlt: 'Aquarellszene mit einem Kinderbuch als Willkommensgeschenk, Reisebeschäftigung, Eventmaterial und Shop-Produkt',
          list: [
            { text: 'als Willkommensgeschenk auf dem Zimmer' },
            { text: 'als Beschäftigung bei Anreise oder Wartezeiten' },
            { text: 'als Erinnerung an den Familienurlaub' },
            { text: 'als Begleitung von Familienaktionen und Events' },
            { text: 'als hochwertiges Geschenk für Ihre Gäste' },
            { text: 'als Produkt im hoteleigenen Shop' },
          ],
        },
      ],
    },
    footer: 'Von der Natur inspiriert. Mit Liebe personalisiert.',
  },
  en: {
    navigation: {
      business: 'For hotels',
      menu: 'Menu',
      closeMenu: 'Close menu',
    },
    hero: {
      heading: 'A children’s book that makes your family hotel unforgettable',
      introduction: [
        'Turn your family hotel or family resort into a beautifully illustrated world for children.',
        'Your rooms, mascots, activities, and local adventures become a story that children explore and families are happy to take home.',
      ],
      cta: 'Ask about a children’s book',
      imageAlt:
        'Open seek-and-find book showing a family hotel in the mountains, pool, playground, garden, and a search activity',
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
      heading: 'What your children’s book could look like for your family resort',
      items: [
        {
          title: 'Custom seek-and-find book',
          text: 'Your rooms, experience areas, services, and mascots become part of a richly detailed world with small stories and search activities.',
          visualAlt:
            'Illustration of a detailed family-hotel seek-and-find world with mountains, a pool, children, and a friendly goat',
        },
        {
          title: 'Original brand story',
          text: 'A warmly told story that brings your family resort, its values, and its characters to life in an age-appropriate way.',
          visualAlt:
            'Illustration of a child and a friendly fox walking through a flowering landscape',
        },
        {
          title: 'Small gift formats',
          text: 'Seek-and-find pictures, coloring books, and activity cards for rooms, family events, campaigns, or thoughtful on-site gifts.',
          visualAlt:
            'Photograph of an open coloring booklet with coloring motifs, additional booklets, and small welcome treats',
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
      heading: 'How your individual hotel world takes shape',
      text: [
        'Every project is developed individually. We can build on an existing brand world or develop an illustration style that fits your hotel.',
        'We integrate the distinctive features of your hotel – spaces, mascots, activities, favorite places, and special offers – into a personal story for your family guests.',
      ],
      processLabel: 'The individual development process',
      steps: [
        {
          title: 'Getting to know your hotel world',
          text: 'We gather the places, colors, characters, mascots, and special experiences that define your family hotel.',
          imageKey: 'briefing',
          imageAlt: 'Text-free watercolor scene with hotel spaces, destinations, color swatches, and first mascot studies',
        },
        {
          title: 'Developing style and story',
          text: 'These building blocks become a fitting illustration style with character and scene ideas.',
          imageKey: 'style',
          imageAlt: 'Text-free gouache study with character variations, style explorations, and small hotel scenes',
        },
        {
          title: 'Bringing your family world to life',
          text: 'The finished illustrations become one connected children’s book and guest experience.',
          imageKey: 'result',
          imageAlt: 'Text-free premium children’s-book scene with family hotel, breakfast terrace, playground, mascot, and nature path',
        },
      ],
    },
    form: {
      heading: 'Tell us about your family hotel',
      text: [
        'Which places, activities, and stories should children discover at your family hotel?',
        'Tell us about your idea. Together, we will develop a children’s book concept that fits your family guests.',
      ],
      labels: {
        name: 'Name',
        email: 'Email address',
        company: 'Company',
        message: 'Message',
      },
      messagePlaceholder:
        'How would you like to use the children’s book at your family hotel? Share your places, audience, occasion, and approximate quantity.',
      requiredHint: 'Required',
      cta: 'Request a no-obligation quote',
      trust: [
        'Personal consultation',
        'Custom design',
        'Small and large print runs available',
      ],
      subject: 'No-obligation enquiry for a family-hotel children’s book',
      status:
        'Your email application is opening. Please review and send the prepared message there.',
    },
    embeddedBook: {
      navigation: {
        label: 'Chapter overview',
        open: 'Open chapter overview',
        close: 'Close chapter overview',
      },
      spreads: [
        {
          id: 'brand-world',
          navLabel: 'Brand world',
          heading: 'Your family world as a lovingly illustrated story',
          text: [
            'From the breakfast room and play area to adventures nearby, children discover the familiar places and experiences of your family resort through play.',
            'Your family hotel becomes its own seek-and-find world, where young guests immediately feel at home.',
          ],
          imageKey: 'world',
          imageAlt: 'Watercolor illustration of a lively family-hotel world with families, a pool, a garden, and a mascot',
        },
        {
          id: 'connection',
          navLabel: 'Brand connection',
          heading: 'A keepsake that connects families with your hotel',
          text: [
            'The stay does not end at check-out. A custom children’s book reminds families of shared moments and brings the atmosphere of your hotel home with them.',
            'Your family hotel remains part of a positive family story long after the visit.',
          ],
          imageKey: 'connection',
          imageAlt: 'Watercolor illustration of a family reading a children’s book together in a warm hotel lounge',
        },
        {
          id: 'uses',
          navLabel: 'Ways to use it',
          heading: 'Flexible ways to use it – at the resort and beyond',
          text: [],
          imageKey: 'uses',
          imageAlt: 'Watercolor scene showing a children’s book as a welcome gift, travel activity, event material, and shop product',
          list: [
            { text: 'as a welcome gift in the room' },
            { text: 'as an activity during arrival or waiting times' },
            { text: 'as a keepsake from the family holiday' },
            { text: 'as part of family events and campaigns' },
            { text: 'as a high-quality guest gift' },
            { text: 'as a product in your hotel shop' },
          ],
        },
      ],
    },
    footer: 'Inspired by nature. Personalized with love.',
  },
};

export type BusinessContent = BusinessContentStrings;
