import React from "react";
// import styled from "styled-components";
import { lan } from "../../../pages/index";

type Props = {
  language: lan;
};

const videoSrcEn =
  "https://portfolio-page-2-cv-videos.s3.eu-north-1.amazonaws.com/video-english.mp4";
const videoSrcFi =
  "https://portfolio-page-2-cv-videos.s3.eu-north-1.amazonaws.com/video-finnish.mp4";
const posterSrc =
  "https://portfolio-page-2-cv-videos.s3.eu-north-1.amazonaws.com/poster.png";


export const VideoSection = (props: Props) => {
  return (
    <>
      {props.language == lan.ENGLISH && (
        <video preload="auto" poster={posterSrc} controls width="300px">
          <source src={videoSrcEn} type="video/mp4" />
        </video>
      )}
      {props.language === lan.FINNISH && (
        <video preload="auto" poster={posterSrc} controls width="300px">
          <source src={videoSrcFi} type="video/mp4" />
        </video>
      )}
    </>
  );
};
