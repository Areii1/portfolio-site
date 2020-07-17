import React from "react";
// import styled from "styled-components";
import { lan } from "../../../pages/index";

type Props = {
  language: lan;
};

const cvEn =
  "https://portfolio-page-2-cv-videos.s3.eu-north-1.amazonaws.com/resume_ari_jaaskelainen.pdf";
const cvFi =
  "https://portfolio-page-2-cv-videos.s3.eu-north-1.amazonaws.com/ansioluettelo_ari-pekka_jaaskelainen.pdf";
const cvCover =
  "https://portfolio-page-2-cv-videos.s3.eu-north-1.amazonaws.com/cv-cover.png";

export const PdfSection = (props: Props) => {
  return (
    <>
      {props.language == lan.ENGLISH && (
        <iframe src={cvEn} width="400px" height="800px" />
      )}
      {props.language === lan.FINNISH && (
        <iframe src={cvFi} width="400px" height="800px" />
      )}
    </>
  );
};
