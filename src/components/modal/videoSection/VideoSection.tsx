import React from "react";
import { Lan } from "../../../pages/index";
import { FileDetails } from "../../../Types";

type Props = {
  language: Lan;
  introductionVideo: FileDetails;
};

export const VideoSection = (props: Props) => {
  return (
    <>
      {props.language == Lan.ENGLISH && (
        <video
          preload="auto"
          poster={props.introductionVideo.filePosterUrl}
          controls
          width="300px"
        >
          <source src={props.introductionVideo.fileUrl} type="video/mp4" />
        </video>
      )}
      {props.language === Lan.FINNISH && (
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
