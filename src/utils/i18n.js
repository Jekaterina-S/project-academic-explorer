// utils/i18n.js
const translations = {
  en: {
    title: 'Academic Explorer',
    intro: 'Explore relevant academic publications from trusted sources like CrossRef and Europe PMC. Currently supports title search only.',
    loading: 'Loading...',
    noResults: 'No results found.',
    settingsTitle: 'Settings',
    settings: {
      theme: 'Theme',
      language: 'Language',
      fontSize: 'Font Size',
      themeLight: 'Light',
      themeDark: 'Dark',
      textSmall: 'Small',
      textBase: 'Base',
      textLarge: 'Large',
    },
    resultNoTitle: 'No Title',
    searchPlaceholder: 'Search academic articles...',
    searchButton: 'Search',
    filterTitle: 'Filter by Source',
    authors: 'Authors:',
    published: 'Published',
    source: 'Source',
    noAbstract: 'No abstract available.',
    viewFull: 'View full article ↗',
    unknownAuthors: 'Unknown',
    unknownPublished: 'N/A',
    noOnlineSource: 'No online source',
    notFound: {
      title: '404 - Page Not Found',
      message: 'Sorry, we couldn’t find that page.',
      back: 'Back to Home',
    },
    sources: {
      crossref: {
        description: 'Cross-publisher metadata aggregator; all disciplines, global.',
      },
      europepmc: {
        description: 'Biomedical and life sciences, Europe-centric; includes open access.',
      },
    },
  },
  et: {
    title: 'Akadeemiline Otsing',
    intro: 'Otsi teadusartikleid usaldusväärsetest allikatest nagu CrossRef ja Europe PMC. Praegu toetab ainult pealkirjaotsingut.',
    loading: 'Laadimine...',
    noResults: 'Tulemusi ei leitud.',
    settingsTitle: 'Seaded',
    settings: {
      theme: 'Teema',
      language: 'Keel',
      fontSize: 'Fondi suurus',
      themeLight: 'Hele',
      themeDark: 'Tume',
      textSmall: 'Väike',
      textBase: 'Tavaline',
      textLarge: 'Suur',
    },
    resultNoTitle: 'Puudub pealkiri',
    searchPlaceholder: 'Otsi teadusartikleid...',
    searchButton: 'Otsi',
    filterTitle: 'Filtreeri allika järgi',
    authors: 'Autorid:',
    published: 'Avaldatud',
    source: 'Allikas',
    noAbstract: 'Kokkuvõte puudub.',
    viewFull: 'Vaata artiklit ↗',
    unknownAuthors: 'Tundmatu',
    unknownPublished: 'Puudub',
    noOnlineSource: 'Puudub veebipõhine allikas',
    notFound: {
      title: '404 - Lehte ei leitud',
      message: 'Vabandust, seda lehte ei leitud.',
      back: 'Tagasi avalehele',
    },
    sources: {
      crossref: {
        description: 'Kirjastustevaheline metainfo koguja; kõik valdkonnad, ülemaailmne.',
      },
      europepmc: {
        description: 'Biomeditsiini- ja eluteadused, Euroopa-keskne; sisaldab avatud juurdepääsu.',
      },
    },
  },
};

export default translations;
