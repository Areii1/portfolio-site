export type FileDetails = {
  fileUrl: string;
  filePosterUrl: string;
  fileName: string;
};

export type Location = {
  city: string;
  district: string;
  mapsLink: string;
};

export type ProfileDetails = {
  firstName: string;
  lastName: string;
  age?: number;
  location: Location;
  email: string;
  gitlabUsername?: string;
  githubUsername: string;
  linkedInPageName: string;
  phoneNumber?: string;
  jobTitle: string;
  cv: FileDetails;
  introductionVideo: FileDetails;
  codeRepository?: string;
};

type ExperienceItemDate = {
  month: number;
  year: number;
};

type ExperienceItemDescriptionList = {
  listDescription: string;
  items: Array<string>;
};

export type ExperienceItemDescriptionContent = {
  text: string;
  list?: ExperienceItemDescriptionList;
  listFirst: boolean;
};

export type ExperienceItemDescription =
  | [ExperienceItemDescriptionContent, ExperienceItemDescriptionContent]
  | ExperienceItemDescriptionContent;

export type ExperienceItem = {
  beginDate: ExperienceItemDate;
  endingDate?: ExperienceItemDate;
  jobTitle: string;
  description: ExperienceItemDescription;
  institute: string;
  techKeywords?: Array<string>;
};

export type PageContent = {
  profile: ProfileDetails;
  description: Description;
  experience: Array<ExperienceItem>;
  projects: Array<Project>;
};

export type Description = [string, string] | string;

export type Project = {
  endingDate: ExperienceItemDate;
  title: string;
  description: string;
  repositoryLink: string;
  displayLink: string;
  techKeywords?: Array<string>;
  poster: string;
};
