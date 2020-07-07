import React from "react";
import SEO from "../components/seo";
import { Header } from "../components/header/Header";
import { ContentEn } from "../ContentEn";
import { ContentFi } from "../ContentFi";
import "./index.css";

export enum lan {
  FINNISH,
  ENGLISH,
}

const IndexPage = () => {
  const [language, setLanguage] = React.useState<lan>(lan.FINNISH);
  const updateLanguage = (lan: lan) => {
    setLanguage(lan);
  };
  const content = language === lan.ENGLISH ? ContentEn : ContentFi;
  return (
    <div>
      <SEO title="Home" />
      <Header
        name={`${content.profile.firstName} ${content.profile.lastName}`}
        jobTitle={content.profile.jobTitle}
        updateLanguage={updateLanguage}
      />
    </div>
  );
};

export default IndexPage;
