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
};

type ExperienceItemDate = {
  month: number;
  year: number;
};

export type ExperienceItem = {
  beginDate: ExperienceItemDate;
  endingDate?: ExperienceItemDate;
  jobTitle: string;
  description: Description;
  institute: string;
};

export type PageContent = {
  profile: ProfileDetails;
  description: Description;
  experience: Array<ExperienceItem>;
  education: Array<ExperienceItem>;
};

export type Description = [string, string] | string;
