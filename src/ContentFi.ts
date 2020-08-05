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
  jobTitle: "front-end kehittäjä",
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
    jobTitle: "front-end kehittäjä",
    description: [
      {
        text:
          "Olin tekemässä käyttöliittymää webissä toimivalle projektin hallinta työkalulle",
        list: {
          listDescription: "Palvelu sisälsi ominaisuuksia, kuten:",
          items: [
            "kansio systeemi, (tiedostojen lataus, poisto, katselu, jako yms, kansio hierarkia)",
            "projekti näkymässä kuvien videoiden tiedostojen kommentointi",
            "chatti projektin osallistujille",
            "käyttäjätietojen hallinta kuten profiilikuva, sähköpostin vaihto, nimen vaihto yms",
          ],
        },
      },
      {
        text:
          "Pellentesque vulputate elit bibendum felis ultrices lacinia. Maecenas aliquam, massa vel elementum sollicitudin, leo orci aliquet velit, nec aliquet enim mauris ac tellus. Nunc at commodo metus. Quisque mattis diam pharetra interdum venenatis. Etiam dui mauris, suscipit feugiat velit a, semper posuere augue.",
      },
    ],
    institute: "Digital factory stream oy",
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
    jobTitle: "Luonnontieteiden kandidaatti",
    educationProgramWasAbandoned: true,
    description: [
      {
        text:
          "Opiskelin tietojenkäsittelytiedettä joka sisälsi kursseja aihe-alueilta kuten perus ohjelmoinnin teoria, algoritmiikka, tietokanta rakenteet, matematiikka. Lopetin kahden vuoden jälkeen opetellakseni web-kehitystä yksityiskohtaisemmin.",
      },
      {
        text:
          "Suspendisse sit amet elit non tellus vulputate elementum. Phasellus fermentum egestas mi vitae placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras egestas urna a elit efficitur suscipit. Integer dignissim non quam placerat euismod.",
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
    title: "movie finder",
    description:
      "Maecenas aliquet vel quam id aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed nec felis vel neque dapibus sagittis quis non massa. Vivamus tincidunt, nisl consectetur maximus porta, eros metus tincidunt tortor, ac sollicitudin sem neque eget erat.",
    repositoryLink: "sadsdsad",
    poster: "sadasdsadasd",
  },
];

export const ContentFi: PageContent = {
  profile: profileDetails,
  description: [
    'Olen ohjelmistokehittäjä kahden vuoden työkokemuksella sekä opintotaustalla. Työssäni web-kehittäjänä olen pääosin tähän mennessä keskittynyt käyttöliittymien kehitykseen "single page application” metodologialla. Työkaluna minulla on tässä ollut React.js, johon olen hyvin kerinnyt perehtymään ja jonka avulla monimuotoisia käyttöliittymä ratkaisuja ollaan saatu valmiiksi.',
    "Minua kiinnostaa web-ohjelmointi päästä päätyyn kokonaisuutena ja asennoidun ratkaisu & funktionaalisuus keskeisesti työhöni. Eli kaikkiin ongelmiin kyllä löytyy vastaus jos ei olemassaolevan tietotaidon kautta niin sitten selvittämällä ja uutta opiskelemalla. Haluaisin löytääkin nyt uusia web-ohjelmointi haasteita.",
  ],
  experience: experience,
  projects,
};
