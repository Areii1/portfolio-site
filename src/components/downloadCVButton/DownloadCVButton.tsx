import React from "react";
import styled from "styled-components";
// import CVFileEn from "../../assets/resume_ari_jaaskelainen.pdf";
// import CVFileFi from "../../assets/ansioluettelo_ari-pekka_jaaskelainen.pdf";
import { lan, ModalTypes, SetModalType } from "../../pages/index";
import { Button } from "../generalButton/GeneralButton";

type Props = {
  language: lan;
  setModalType: SetModalType;
};

const buttonTextFi = "KATSO CV";
const buttonTextEn = "VIEW CV";

export const DownloadCVButton = (props: Props) => {
  // const file = props.language === lan.ENGLISH ? CVFileEn : CVFileFi;
  const buttonText =
    props.language === lan.ENGLISH ? buttonTextEn : buttonTextFi;
  return (
    // <DownloadLink href={file} download>
    <Button
      text={buttonText}
      type={ModalTypes.CV}
      setModalType={props.setModalType}
    />
    // </DownloadLink>
  );
};

const DownloadLink = styled.a`
  display: block;
  @media (max-width: 800px) {
    margin-top: 2rem;
  }
`;
