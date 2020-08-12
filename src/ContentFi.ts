import { PageContent, ExperienceItem, ProfileDetails } from "./Types";

const profileDetails: ProfileDetails = {
  firstName: "Ari-Pekka",
  lastName: "Jääskeläinen",
  age: 28,
  location: {
    city: "Helsinki",
    district: "Kallio",
    mapsLink: "https://www.google.fi/maps/@60.1851122,24.9418612,16.83z",
  },
  email: "ari.jaaskelainen1@gmail.com",
  githubUsername: "areii1",
  linkedInPageName: "ari-pekka-jaaskelainen",
  jobTitle: "Front-end kehittäjä",
  cv: {
    fileUrl:
      "https://s3.eu-north-1.amazonaws.com/jaaskelainen.io-media-content/ansioluettelo_ari_pekka_jaaskelainen.pdf",
    filePosterUrl:
      "",
    fileName: "ansioluettelo_ari-pekka_jaaskelainen.pdf",
  },
  introductionVideo: {
    fileUrl:
      "https://s3.eu-north-1.amazonaws.com/jaaskelainen.io-media-content/video-finnish.mp4",
    filePosterUrl:
      "https://s3.eu-north-1.amazonaws.com/jaaskelainen.io-media-content/video-poster.png",
    fileName: "video-finnish.mp4",
  },
  codeRepository: "https://github.com/Areii1/portfolio-site",
};

const experience: Array<ExperienceItem> = [
  {
    beginDate: {
      month: 6,
      year: 2018,
    },
    jobTitle: "Front-end kehittäjä",
    description: [
      {
        text:
          "",
        list: {
          listDescription: "Olin tekemässä käyttöliittymää web-sovellukselle, jonka ideana oli projektien hallinnoimisen avustus. Tuotin perustavan laatuisia ominaisuuksia palveluun, kuten:",
          items: [
            "Kansio systeemi, (tiedostojen lataus, poisto, katselu, jako, yms)",
            "Media entiteettien kommentointi",
            "Chatti viestittely",
            "Käyttäjätietojen hallinta kuten profiilikuva, sähköpostin vaihto, nimen vaihto yms",
          ],
        },
        listFirst: true,
      },
      {
        text:
          "Työssäni suurimpana työkaluna oli React.js, jota palvelun käyttöliittymä tehtiin. Globaalin tilan hallinnointiin käytettiin redux kirjastoa, ohjelmalliseen testailuun Jest sekä react-testing-library. Tutuksi tuli myös AWS ympäristöinen backend, jonka kanssa käyttöliittymä kommunikoi aws-amplify kirjaston avulla.",
        listFirst: false,
      },
    ],
    institute: "Digital factory oy",
  },
  {
    beginDate: {
      month: 8,
      year: 2015,
    },
    endingDate: {
      month: 12,
      year: 2017,
    },
    jobTitle: "Tietojenkäsittelytiede",
    description: [
      {
        text:
          "Teoreettinen ymmärrys yllä mainituista aihealueista on luonut minulle kunnollisen alustan ja laaja-alaisen näkökulman ohjelmistokehitykseen.",
        list: {
          listDescription:
            "Opiskelin tietojenkäsittelytiedettä, joka sisälsi kursseja aihealueilta kuten:",
          items: [
            "Ohjelmoinnin käytännön perusteet",
            "Algoritmiikka",
            "Tietoliikenteet",
            "Tietokannat",
            "Matematiikka",
          ],
        },
        listFirst: true,
      },
      {
        text:
          "Opintojen aikana tutustuin moniin kiinnostaviin teknologioihin ja metodologioihin, web puolen kehitys kuitenkin vaikutti mielestäni kaikkein mielekkäämmältä ja näin ollen siirryin sen pariin kokoaikaisesti. Töihin siirryttyä kurssit yliopistolla jäivät pois.",
        listFirst: false,
      },
    ],
    institute: "Turun yliopisto",
  },
];

const projects = [
  {
    endingDate: {
      month: 5,
      year: 2018,
    },
    title: "Movie finder",
    description: `Vuoden 2018 keväällä React.js kirjastosta kiinnostuneena tein harjoitus projektina elokuvan selaus sovelluksen. Sovellus on yhteydessä elokuva tietokanta rajapinnan kanssa, jonka avulla elokuvien selaus ja haku toiminnot onnistuvat. Projektia tehdessä tuli tutuksi React.js :n fundamentaaliset aspektit: komponentti ajattelu, state, props.`,
    repositoryLink: "https://github.com/Areii1/movie-finder",
    displayLink: "https://areii1.github.io/movie-finder/#/",
    poster: "sadasdsadasd",
  },
];

export const ContentFi: PageContent = {
  profile: profileDetails,
  description: [
    'Olen Helsingissä toimiva ohjelmistokehittäjä kahden vuoden työkokemuksella sekä opintotaustalla. Työssäni web-kehittäjänä olen keskittynyt pääosin tähän mennessä käyttöliittymien kehitykseen SPA (single page application) metodologialla. Suurimpana työkaluna minulla on tässä toiminut React.js, johon olen hyvin kerinnyt perehtymään ja jonka avulla monimuotoisia käyttöliittymä ratkaisuja on saatu tuotettua.',
    "Minua kiinnostaa web-kehitys päästä päätyyn kokonaisuutena ja asennoidun ratkaisu keskeisesti työhöni. Kaikkiin ongelmiin kyllä löytyy vastaus, jos ei olemassa olevan tietotaidon kautta, niin sitten selvittämällä ja uutta opiskelemalla.",
  ],
  experience: experience,
  projects,
};
