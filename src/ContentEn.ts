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
  codeRepository: "https://github.com/Areii1/portfolio-site",
};

const experience: Array<ExperienceItem> = [
  {
    beginDate: {
      month: 6,
      year: 2018,
    },
    jobTitle: "front-end developer",
    description: [
      {
        text:
          "lacus ut orci dignissim porttitor. Proin tristique lectus orci, a dapibus justo fermentum id. Donec quis augue eu odio semper porttitor sit amet",
      },
      { text: "Suspendisse sit amet elit non tellus vulputate elementum. Phasellus fermentum egestas mi vitae placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras egestas urna a elit efficitur suscipit. Integer dignissim non quam placerat euismod." },
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
    educationProgramWasAbandoned: true,
    description: [
      {
        text:
          "Curabitur vel tincidunt lacus. Curabitur dui elit, vulputate ac sollicitudin vel, vestibulum nec neque. Morbi vehicula in tortor non lobortis. Suspendisse porta ligula tellus, et bibendum nibh sollicitudin ut. Proin vel accumsan sem.",
      },
      { text: "Maecenas aliquet vel quam id aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed nec felis vel neque dapibus sagittis quis non massa. Vivamus tincidunt, nisl consectetur maximus porta, eros metus tincidunt tortor, ac sollicitudin sem neque eget erat." },
    ],
    institute: "Turku university",
  },
];

const projects = [
  {
    endingDate: {
      month: 5,
      year: 2018,
    },
    title: "movie finder",
    description: "jPellentesque vulputate elit bibendum felis ultrices lacinia. Maecenas aliquam, massa vel elementum sollicitudin, leo orci aliquet velit, nec aliquet enim mauris ac tellus. Nunc at commodo metus. Quisque mattis diam pharetra interdum venenatis. Etiam dui mauris, suscipit feugiat velit a, semper posuere augue.",
    repositoryLink: "sadsdsad",
    poster: "sadasdsadasd",
  },
];

export const ContentEn: PageContent = {
  profile: profileDetails,
  description: [
    'I am a web-developer with work experience of two years and some studies. In my current job I have focused mainly on building user interfaces, with the "single page application" methodology. The tool of choice for this has been React.js, which I have become familiar with and created all kinds of user interface solutions.  ',
    "I'm interested in web-development as a whole and I have a solutions oriented attitude towards my work. So every problem has a solution, if not with existing knowhow then through investigation and learning new things. I'm looking for new challenges in web-development",
  ],
  experience: experience,
  projects,
};
