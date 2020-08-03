import React from "react";
import styled, { keyframes } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { PlayIcon } from "../icons/PlayIcon";
import { Lan } from "../../pages/index";
import { ProfileBalLabelEn, ProfileBalLabelFi } from "./ProfileBallLabels";
import "./ProfileBall.css";

type Props = {
  language: Lan;
  handleClick: () => void;
};

export const ProfileBall = (props: Props) => {
  const [isHovering, setIsHovering] = React.useState<boolean>(false);
  const label =
    props.language === Lan.ENGLISH ? ProfileBalLabelEn : ProfileBalLabelFi;

  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const imageQueryData = useStaticQuery(profileImageQuery);
  return (
    <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ProfileImageWrapper title={label} onClick={props.handleClick}>
        <Img
          fluid={imageQueryData.file.childImageSharp.fluid}
          className="profile-ball-queried-image"
          alt="profile"
        />
        {isHovering && (
          <>
            <ImageOverlay />
            <IconWrapper>
              <PlayIcon
                startFillColor="blue"
                endFillColor="blue"
                size={50}
                animation={false}
              />
            </IconWrapper>
          </>
        )}
      </ProfileImageWrapper>
    </Wrapper>
  );
};

const profileImageQuery = graphql`
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
  width: var(--space-12);
  height: var(--space-12);
  border-radius: var(--space-12);
  background-color: var(--profile-ball-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1300px) {
    width: var(--space-10);
    height: var(--space-10);
    border-radius: var(--space-10);
  }
`;

const ProfileImageWrapper = styled.button`
  border: none;
  padding: 0;
  cursor: pointer;
  width: calc(var(--space-12) - 20px);
  height: calc(var(--space-12) - 20px);
  border-radius: calc(var(--space-12) - 20px);
  position: relative;
  overflow: hidden;
  @media (max-width: 1300px) {
    width: calc(var(--space-10) - 15px);
    height: calc(var(--space-10) - 15px);
    border-radius: calc(var(--space-10) - 15px);
  }
`;

const changeOpacity = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 0.3;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-color: var(--secondary-headline-color);
  animation-name: ${changeOpacity};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
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
