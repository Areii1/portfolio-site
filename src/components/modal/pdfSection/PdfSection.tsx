import React from "react";
import { Lan } from "../../../pages/index";
import styled from "styled-components";
import { FileDetails } from "../../../Types";

type Props = {
  language: Lan;
  cv: FileDetails;
};

export const PdfSection = (props: Props) => {
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  return (
    <>
      {!isLoaded && <Image src={props.cv.filePosterUrl} />}
      <Iframe
        src={`${props.cv.fileUrl}#toolbar=0`}
        width="100%"
        height="100%"
        allow="allowfullscreen"
        onLoad={() => setIsLoaded(true)}
        loaded={isLoaded}
      />
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
