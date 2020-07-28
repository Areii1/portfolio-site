import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import "./ProfileBall.css";

type Props = {
  picture: string;
};

export const ProfileBall = (props: Props) => {
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
  width: 350px;
  height: 350px;
  border-radius: 350px;
  background-color: #e7e7e7;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    width: 220px;
    height: 220px;
    border-radius: 220px;
  }
`;

const ProfileImageWrapper = styled.div`
  width: 315px;
  height: 315px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  @media (max-width: 800px) {
    width: 200px;
    height: 200px;
    border-radius: 200px;
  }
`;
