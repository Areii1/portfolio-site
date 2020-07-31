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
        text: "---",
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
        text: "---",
      },
    ],
    institute: "Turku university",
  },
];

export const ContentFi: PageContent = {
  profile: profileDetails,
  description: [
    "Olen Frontend kehittäjä kahden vuoden työkokemuksella React.js kirjaston parissa",
    ".",
  ],
  experience: experience,
};
