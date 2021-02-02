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
  jobTitle: "Front-end developer",
  cv: {
    fileUrl:
      "https://s3.eu-north-1.amazonaws.com/jaaskelainen.io-media-content/resume_ari_jaaskelainen.pdf",
    filePosterUrl:
      "",
    fileName: "resume_ari_jaaskelainen.pdf",
  },
  introductionVideo: {
    fileUrl:
      "https://s3.eu-north-1.amazonaws.com/jaaskelainen.io-media-content/video-english.mp4",
    filePosterUrl:
      "https://s3.eu-north-1.amazonaws.com/jaaskelainen.io-media-content/video-poster.png",
    fileName: "video-english.mp4",
  },
  codeRepository: "https://github.com/Areii1/portfolio-site",
};

const experience: Array<ExperienceItem> = [
  {
    beginDate: {
      month: 6,
      year: 2018,
    },
    jobTitle: "Front-end developer",
    description: [
      {
        text:
          "I was developing the user interface of a web application aimed to assist project management for groups.",
        list: {
          listDescription: "I contributed to development of features such as:",
          items: [
            "file system, (folder hierarchy, viewing files, deleting, downloading, sharing etc)",
            "commenting on media files",
            "chat messaging",
            "account settings handling, (profile picture uploading, changing name etc)",
          ],
        },
        listFirst: false,
      },
      {
        text:
          "The main tool I used in my work was React.js, which the UI was created with. Global state management was done with redux, programmatic testing with Jest and react-testing-library. I also became familiar with the serverless AWS environment on the backend, which the UI communicated with.",
        listFirst: false,
      },
    ],
    institute: "Digital factory oy",
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
    jobTitle: "Computer science",
    description: [
      {
        text:
          "Theoretical understanding of these subjects has created a solid foundational background and a broad viewpoint on software development for me.",
        list: {
          listDescription:
            "I studied computer science, which included courses on subjects such as:",
          items: [
            "programming basics",
            "algorithmics",
            "computer networks",
            "databases",
            "mathematics",
          ],
        },
        listFirst: true,
      },
      {
        text:
          "During my studies I got introduced to many interesting technologies and methodologies, however web development struck out as the most favourable to me. I transitioned to focusing on front-end development full time, since I started working as a front-end developer university courses were left out.",
        listFirst: false,
      },
    ],
    institute: "Turku university",
  },
];

const projects = [
  {
    endingDate: {
      month: 1,
      year: 2021,
    },
    title: "Movie tinder (currently developing)",
    description: "I wanted to gain a better grasp of the aws cloud development kit (aws-cdk). The idea of the application is to aid undecided couples to find common interests on movies they would like to watch. The app allows two people pairing with each other, swiping on a list of movies and then reviewing common likes. Currently completed features include user registering, pairing up, swiping on movies, reviewing matched movies",
    repositoryLink: "https://github.com/Areii1/couples-movie-picker-frontend",
    secondaryRepositoryLink: "https://github.com/Areii1/couples-movie-picker-backend",
    displayLink:
      "http://couples-movie-picker-deployment-bucket-prod.s3-website.eu-central-1.amazonaws.com/movie/553604",
    poster: "sadasdsadasd",
    techKeywords: [
      "aws-cdk",
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
    description: "Two years ago, interested in React.js I developed a movie finder application with React.js. The app is connected with the tMBDI database by their given api. With the movie information, the user is able to browse and search for movies in the application. Developing the application, I became familiar with the fundamental aspects of React.js.",
    repositoryLink: "https://github.com/Areii1/movie-finder",
    displayLink: "https://areii1.github.io/movie-finder/#/",
    poster: "sadasdsadasd",
  },
];

export const ContentEn: PageContent = {
  profile: profileDetails,
  description: [
    'I am a web-developer from Helsinki, Finland. My experience in the field includes two years of work experience and studies on computer science. In my current job as a web-developer, I have mainly focused on building user interfaces with the "single page application" methodology. The tool for this has been React.js, which I have become familiar with and have created many kinds of user interface solutions with.',
    "I'm interested in web-development as a whole and I have a solutions oriented attitude towards my work. Every problem has a solution, if not via existing knowhow, then through further investigation and learning new things.",
  ],
  experience: experience,
  projects,
};
