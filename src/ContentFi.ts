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
      "Olin tekemässä käyttöliittymää webissä toimivalle projektin hallinta työkalulle.",
      "Palvelu sisälsi ominaisuuksia, kuten: kansio systeemi, (tiedostojen lataus, poisto, katselu, jako yms, kansio hierarkia), projekti näkymässä kuvien videoiden tiedostojen kommentointi, chatti projektin osallistujille, käyttäjätietojen hallinta kuten profiilikuva, sähköpostin vaihto, nimen vaihto yms.",
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
    jobTitle: "bachelor of computer science",
    description:
      "Curabitur vel tincidunt lacus. Curabitur dui elit, vulputate ac sollicitudin vel, vestibulum nec neque. Morbi vehicula in tortor non lobortis. Suspendisse porta ligula tellus, et bibendum nibh sollicitudin ut. Proin vel accumsan sem.",
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
