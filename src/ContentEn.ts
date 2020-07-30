import { PageContent, ExperienceItem, ProfileDetails } from "./Types";

const profileDetails: ProfileDetails = {
  firstName: "Ari-Pekka",
  lastName: "Jääskeläinen",
  age: 28,
  location: {
    city: "Helsinki",
    district: "Kallio",
    mapsLink: "https://www.google.fi/maps/@60.1851122,24.9418612,16.83z"
  },
  email: "ari.jaaskelainen1@gmail.com",
  githubUsername: "areii1",
  linkedInPageName: "ari-pekka-jaaskelainen",
  jobTitle: "front-end developer",
  cv: {
    fileUrl:
      "https://portfolio-page-2-cv-videos.s3.eu-north-1.amazonaws.com/resume_ari_jaaskelainen.pdf",
    filePosterUrl:
      "https://portfolio-page-2-cv-videos.s3.eu-north-1.amazonaws.com/cv-cover.png",
    fileName: "resume_ari_jaaskelainen.pdf",
  },
  introductionVideo: {
    fileUrl:
      "https://portfolio-page-2-cv-videos.s3.eu-north-1.amazonaws.com/video-english.mp4",
    filePosterUrl:
      "https://portfolio-page-2-cv-videos.s3.eu-north-1.amazonaws.com/poster.png",
    fileName: "video-english.mp4",
  },
};

const experience: Array<ExperienceItem> = [
  {
    beginDate: {
      month: 6,
      year: 2018,
    },
    jobTitle: "front-end developer",
    description:
      "lacus ut orci dignissim porttitor. Proin tristique lectus orci, a dapibus justo fermentum id. Donec quis augue eu odio semper porttitor sit amet",
    institute: "Digital factory stream oy",
  },
  {
    beginDate: {
      month: 1,
      year: 2018,
    },
    endingDate: {
      month: 6,
      year: 2018,
    },
    jobTitle: "assembler",
    description:
      "Proin ut mattis felis, in aliquet nibh. Duis finibus lorem et arcu interdum tempus. Quisque pellentesque tortor vel gravida mattis. Donec quis sagittis dolor, id pulvinar erat.",
    institute: "",
  },
  {
    beginDate: {
      month: 1,
      year: 2015,
    },
    endingDate: {
      month: 8,
      year: 2015,
    },
    jobTitle: "storage worker",
    description:
      "Vestibulum congue sed augue quis tempus. Maecenas sagittis, felis placerat rutrum auctor, leo nisi congue quam, non imperdiet mi justo ac tellus. Donec ipsum est, rhoncus in felis vel, mollis ullamcorper mauris.",
    institute: "Transval oy",
  },
];

const education: Array<ExperienceItem> = [
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
  {
    beginDate: {
      month: 8,
      year: 2007,
    },
    endingDate: {
      month: 12,
      year: 2010,
    },
    jobTitle: "High school graduate",
    description:
      "Suspendisse at nibh in ex commodo suscipit. Maecenas maximus ligula ut erat tempor iaculis. Donec posuere neque eget quam aliquet mollis.",
    institute: "Kerava High school",
  },
];

export const ContentEn: PageContent = {
  profile: profileDetails,
  description: [
    "Nam at porttitor sem, vel consectetur libero. Donec pulvinar lacus ut orci dignissim porttitor. Proin tristique lectus orci, a dapibus justo fermentum id. Donec quis augue eu odio semper porttitor sit amet et augue. Nullam tincidunt sem non consequat tristique. Ut sit amet elit sed arcu feugiat consequat vel eu nunc.",
    "Sed varius tempus turpis, nec dictum turpis varius sed. Cras cursus finibus lacinia. Pellentesque sit amet metus non diam blandit aliquet. In non sem magna. Nam et pharetra sem, eget convallis nisi.",
  ],
  experience: experience,
  education: education,
};
