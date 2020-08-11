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
      "https://portfolio-page-2-cv-videos.s3.eu-north-1.amazonaws.com/ansioluettelo_ari-pekka_jaaskelainen.pdf",
    filePosterUrl:
      "https://portfolio-page-2-cv-videos.s3.eu-north-1.amazonaws.com/cv-cover.png",
    fileName: "ansioluettelo_ari-pekka_jaaskelainen.pdf",
  },
  introductionVideo: {
    fileUrl:
      "https://portfolio-page-2-cv-videos.s3.eu-north-1.amazonaws.com/video-finnish.mp4",
    filePosterUrl:
      "https://portfolio-page-2-cv-videos.s3.eu-north-1.amazonaws.com/poster.png",
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
          listDescription: "Olin tekemässä käyttöliittymää web sovellukselle, jonka ideana oli projektien hallinnoimisen avustus, Tuotin perustavanlaatuisia ominaisuuksia palveluun, kuten:",
          items: [
            "kansio systeemi, (tiedostojen lataus, poisto, katselu, jako, yms)",
            "media entiteettien kommentointi",
            "chatti viestittely",
            "käyttäjätietojen hallinta kuten profiilikuva, sähköpostin vaihto, nimen vaihto yms",
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
          "Teoreettinen ymmärrys yllämainituista aihealueista on luonut minulle kunnollisen alustan ja laaja-alaisen näkökulman ohjelmistokehitykseen.",
        list: {
          listDescription:
            "Opiskelin tietojenkäsittelytiedettä joka sisälsi kursseja aihealueilta kuten:",
          items: [
            "ohjelmoinnin käytännön perusteet",
            "algoritmiikka",
            "tietoliikenteet",
            "tietokannat",
            "matematiikka",
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
    'Olen Helsingissä toimiva ohjelmistokehittäjä kahden vuoden työkokemuksella sekä opinto taustalla, työssäni web-kehittäjänä olen keskittynyt pääosin tähän mennessä käyttöliittymien kehitykseen. SPA (single page application) metodologisiin käyttöliittymä ratkaisuihin, suurimpana työkaluna minulla on tässä toiminut React.js, johon olen hyvin kerinnyt perehtymään ja jonka avulla monimuotoisia käyttöliittymä ratkaisuja ollaan saatu valmiiksi.',
    "Minua kiinnostaa web-ohjelmointi päästä päätyyn kokonaisuutena ja asennoidun ratkaisu sekä funktionaalisuus keskeisesti työhöni. Eli kaikkiin ongelmiin kyllä löytyy vastaus jos ei olemassa olevan tietotaidon kautta niin sitten selvittämällä ja uutta opiskelemalla.",
  ],
  experience: experience,
  projects,
};
