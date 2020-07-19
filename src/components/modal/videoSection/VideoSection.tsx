import React from "react";
import { lan } from "../../../pages/index";
import { FileDetails } from "../../../Types";

type Props = {
  language: lan;
  introductionVideo: FileDetails;
};

export const VideoSection = (props: Props) => {
  return (
    <>
      {props.language == lan.ENGLISH && (
        <video
          preload="auto"
          poster={props.introductionVideo.filePosterUrl}
          controls
          width="300px"
        >
          <source src={props.introductionVideo.fileUrl} type="video/mp4" />
        </video>
      )}
      {props.language === lan.FINNISH && (
        <video
          preload="auto"
          poster={props.introductionVideo.filePosterUrl}
          controls
          width="300px"
        >
          <source src={props.introductionVideo.fileUrl} type="video/mp4" />
        </video>
      )}
    </>
  );
};
