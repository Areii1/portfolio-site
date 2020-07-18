import React from "react";
import { lan } from "../../../pages/index";
import styled from "styled-components";

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
  React.useEffect(() => {}, [props.language]);
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  const handleLoaded = () => {
    setIsLoaded(true);
  };
  return (
    <>
      {!isLoaded && <Image src={cvCover} />}
      <>
        {props.language == lan.ENGLISH && (
          <Iframe
            src={`${cvEn}#toolbar=0`}
            width="100%"
            height="100%"
            allow="allowfullscreen"
            onLoad={handleLoaded}
            loaded={isLoaded}
          />
        )}
        {props.language === lan.FINNISH && (
          <Iframe
            src={`${cvFi}#toolbar=0`}
            width="100%"
            height="100%"
            allow="allowfullscreen"
            onLoad={handleLoaded}
            loaded={isLoaded}
          />
        )}
      </>
    </>
  );
};

const Image = styled.img`
  margin: 0;
  width: 300px;
  max-height: 100%;
`;

type IframeProps = {
  loaded: boolean;
};

const Iframe = styled.iframe`
  display: ${(props: IframeProps) => (props.loaded ? "initial" : "none")};
`;
