import React from "react";
import styled from "styled-components";
import CVFileEn from "../../assets/resume_ari_jaaskelainen.pdf";
import CVFileFi from "../../assets/ansioluettelo_ari-pekka_jaaskelainen.pdf";
import { lan } from "../../pages/index";

type Props = {
  language: lan;
};

const buttonTextFi = "LATAA CV";
const buttonTextEn = "DOWNLOAD CV";

export const DownloadCVButton = (props: Props) => {
  const file = props.language === lan.ENGLISH ? CVFileEn : CVFileFi;
  const buttonText =
    props.language === lan.ENGLISH ? buttonTextEn : buttonTextFi;
  return (
    <a href={file} download>
      <Button type="button" title={buttonText.toLowerCase()}>
        {buttonText}
      </Button>
    </a>
  );
};

const Button = styled.button`
  background-color: transparent;
  width: 15rem;
  height: 3rem;
  border: 1px solid black;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
`;
