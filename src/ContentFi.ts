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
  jobTitle: "web kehittäjä",
  cv: {
    fileUrl:
      "https://s3.eu-north-1.amazonaws.com/jaaskelainen.io-media-content/ansioluettelo_ari-pekka_jaaskelainen.pdf",
    filePosterUrl: "",
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
        text: "",
        list: {
          listDescription:
            "Olin tekemässä käyttöliittymää web-sovellukselle https://www.theyemma.com. Sovelluksen ideana on erilaisten media sisällöllisten projektien hallinnoimisen avustus. Tuotin perustavan laatuisia ominaisuuksia palveluun, kuten:",
          items: [
            "Kansio systeemi, (tiedostojen lataus, poisto, katselu, jako, yms)",
            "Media entiteettien kommentointi",
            "Chatti viestittely",
            "Käyttäjätietojen hallinta, (profiilikuva, sähköpostin vaihto, nimen vaihto, yms)",
          ],
        },
        listFirst: true,
      },
      {
        text:
          "Teknologisesti palvelun käyttöliittymä toteutettiin React.js kirjaston avulla. Globaalin tilan hallinnointiin käytettiin redux kirjastoa, testailuun react-testing-library. Tutuksi tuli myös serverless ympäristöinen AWS backend, jonka kanssa käyttöliittymä kommunikoi.",
        listFirst: false,
      },
    ],
    institute: "Digital factory oy",
    techKeywords: ["react.js", "redux", "react-testing-library", "aws-amplify"],
    image: "https://www.theyemma.com/assets/img/yemma-green.svg",
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
          "Teoreettinen ymmärrys yllä mainituista aihealueista on luonut minulle selkeän alustan ja laaja-alaisen näkökulman ohjelmistokehitykseen.",
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
          "Opintojen aikana tutustuin moniin kiinnostaviin teknologioihin ja suuntauksiin, web puolen kehitys vaikutti kuitenkin mielestäni kaikkein mielekkäämmältä ja näin ollen siirryin sen pariin kokoaikaisesti. Töihin siirryttyä kurssit yliopistolla jäivät pois.",
        listFirst: false,
      },
    ],
    institute: "Turun yliopisto",
  },
];

const projects = [
  {
    endingDate: {
      month: 1,
      year: 2021,
    },
    title: "Movie tinder (työn alla)",
    description: `Kehitän sovellusta parhaillaan, jonka ideana on tuottaa hauska palvelu pariskunnille, joilla on ongelmia leffan valitsemissa. Motivaationa projektiin oli tutustua paremmin aws cloud development kitin (aws-cdk) toimintaan. Sovelluksen avulla kaksi henkilöä voi "pariutua" ja tämän jälkeen swaippailla elokuvia, näinollen löytäen yhteisiä kiinnostuksen kohteita. Tällä hetkellä (02.02.2021) featureita on toteutettuna rekisteröityminen, parinmuodostus, elokuvien swaippaus, yhteisten elokuvien katselu`,
    repositoryLink: "https://github.com/Areii1/couples-movie-picker-frontend",
    secondaryRepositoryLink: "https://github.com/Areii1/couples-movie-picker-backend",
    displayLink:
      "http://couples-movie-picker-deployment-bucket-prod.s3-website.eu-central-1.amazonaws.com/movie/553604",
    poster: "sadasdsadasd",
    techKeywords: [
      "aws cdk",
      "aws sdk",
      "typescript",
      "react",
      "aws-amplify",
      "styled-components",
    ],
  },
  {
    endingDate: {
      month: 5,
      year: 2018,
    },
    title: "Movie finder",
    description: `Vuoden 2018 keväällä, React.js kirjastosta kiinnostuneena tein harjoitus projektina elokuvien selaus sovelluksen. Sovellus on tMBDI elokuva tietokannan kanssa yhteydessä heidän tarjoaman rajapinnan kautta. Elokuva informaation avulla niiden selaus ja hakeminen onnistuvat. Projektia tehdessä tuli tutuksi React.js :n fundamentaaliset aspektit.`,
    repositoryLink: "https://github.com/Areii1/movie-finder",
    displayLink: "https://areii1.github.io/movie-finder/#/",
    poster: "sadasdsadasd",
    techKeywords: ["React"],
  },
];

export const ContentFi: PageContent = {
  profile: profileDetails,
  description: [
    "Olen Helsingissä asuva ohjelmistokehittäjä. Minulla on kahden vuoden työkokemus alalta ja olen opiskellut myös kaksi vuotta tietojenkäsittelytiedettä Turun yliopistossa. Tähän mennessä työssäni web-kehittäjänä olen keskittynyt pääosin käyttöliittymien kehitykseen SPA (single page application) metodologialla. Suurimpana työkaluna minulla on tässä toiminut React.js, johon olen hyvin perehtynyt ja jonka avulla olen saanut tuotettua monimuotoisia käyttöliittymä ratkaisuja.",
    "Minua kiinnostaa web-kehitys päästä päätyyn kokonaisuutena ja asennoidun ratkaisukeskeisesti työhöni. Kaikkiin ongelmiin löytyy vastaus, jos ei olemassa olevan tietotaidon kautta, niin selvittämällä ja uutta opiskelemalla.",
  ],
  experience: experience,
  projects,
};
