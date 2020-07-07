import { PageContent, ExperienceItem, ProfileDetails } from "./Types";

const profileDetails: ProfileDetails = {
  firstName: "Ari-Pekka",
  lastName: "Jääskeläinen",
  age: 28,
  email: "ari.jaaskelainen1@gmail.com",
  gitlabUsername: "arpejaa",
  githubUsername: "areii1",
  linkedInPageName: "ari-pekka-jaaskelainen",
  jobTitle: "front-end developer",
};

const experience: Array<ExperienceItem> = [
  {
    beginDate: {
      month: 6,
      year: 2018,
    },
    jobTitle: "front-end kehittäjä",
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
    jobTitle: "kokoaja",
    description:
      "Proin ut mattis felis, in aliquet nibh. Duis finibus lorem et arcu interdum tempus. Quisque pellentesque tortor vel gravida mattis. Donec quis sagittis dolor, id pulvinar erat.",
    institute: "opteam turku oy",
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
    jobTitle: "varastomies",
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
    jobTitle: "Ylioppilas",
    description:
      "Suspendisse at nibh in ex commodo suscipit. Maecenas maximus ligula ut erat tempor iaculis. Donec posuere neque eget quam aliquet mollis.",
    institute: "Keravan lukio",
  },
];

export const ContentFi: PageContent = {
  profile: profileDetails,
  description: [
    "Nam at porttitor sem, vel consectetur libero. Donec pulvinar lacus ut orci dignissim porttitor. Proin tristique lectus orci, a dapibus justo fermentum id. Donec quis augue eu odio semper porttitor sit amet et augue. Nullam tincidunt sem non consequat tristique. Ut sit amet elit sed arcu feugiat consequat vel eu nunc.",
    "Sed varius tempus turpis, nec dictum turpis varius sed. Cras cursus finibus lacinia. Pellentesque sit amet metus non diam blandit aliquet. In non sem magna. Nam et pharetra sem, eget convallis nisi.",
  ],
  experience: experience,
  education: education,
};
