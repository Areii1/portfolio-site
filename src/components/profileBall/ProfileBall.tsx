import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import "./ProfileBall.css";

export const ProfileBall = () => {
  const imageQueryData = useStaticQuery(imageQuery);
  return (
    <Wrapper>
      <ProfileImageWrapper>
        <Img
          fluid={imageQueryData.file.childImageSharp.fluid}
          className="profile-ball-queried-image"
          alt="profile ball"
        />
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

const ProfileImageWrapper = styled.div`
  width: calc(var(--space-13) - 35px);
  height: calc(var(--space-13) - 35px);
  border-radius: calc(var(--space-13) - 35px);;
  position: relative;
  overflow: hidden;
  @media (max-width: 1300px) {
    width: calc(var(--space-11) - 20px);
    height: calc(var(--space-11) - 20px);
    border-radius: calc(var(--space-11) - 20px);
  }
`;
