import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import "./ProfileBall.css";
import { PlayIcon } from "../icons/PlayIcon";
import { Lan } from "../../pages/index";

const labelEn = "watch video";
const labelFi = "katso video";

type Props = {
  language: Lan;
  handleClick: () => void;
};

export const ProfileBall = (props: Props) => {
  const [isHovering, setIsHovering] = React.useState<boolean>(false);
  const imageQueryData = useStaticQuery(imageQuery);
  const label = props.language === Lan.ENGLISH ? labelEn : labelFi;

  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ProfileImageWrapper title={label} onClick={props.handleClick}>
        <Img
          fluid={imageQueryData.file.childImageSharp.fluid}
          className="profile-ball-queried-image"
          alt="profile ball"
        />
        {isHovering && (
          <>
            <ImageOverlay />
            <IconWrapper>
              <PlayIcon fillColor="blue" size={50} />
            </IconWrapper>
          </>
        )}
      </ProfileImageWrapper>
    </Wrapper>
  );
};

export const imageQuery = graphql`
  query {
    file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  width: var(--space-13);
  height: var(--space-13);
  border-radius: var(--space-13);
  background-color: var(--profile-ball-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1300px) {
    width: var(--space-11);
    height: var(--space-11);
    border-radius: var(--space-11);
  }
`;

const ProfileImageWrapper = styled.button`
  border: none;
  padding: 0;
  cursor: pointer;
  width: calc(var(--space-13) - 35px);
  height: calc(var(--space-13) - 35px);
  border-radius: calc(var(--space-13) - 35px);
  position: relative;
  overflow: hidden;
  @media (max-width: 1300px) {
    width: calc(var(--space-11) - 20px);
    height: calc(var(--space-11) - 20px);
    border-radius: calc(var(--space-11) - 20px);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-color: white;
  opacity: 0.5;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
