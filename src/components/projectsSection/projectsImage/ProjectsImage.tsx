import React from "react";
import styled, { keyframes } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

type Props = {
  text: string;
  link: string;
  index: number;
};

const getImageFile = (index: number) => {
  const imageQueryData = useStaticQuery(profileImageQuery);
  if (index === 0) {
    return imageQueryData.image1.childImageSharp.fluid;
  } else {
    return imageQueryData.image2.childImageSharp.fluid;
  }
}

export const ProjectsImage = (props: Props) => {
  const [hoveringOverImage, setHoveringOverImage] = React.useState<boolean>(
    false
  );
  const imageFile = getImageFile(props.index);
  return (
    <LinkButton
      href={props.link}
      target="_blank"
      onMouseEnter={() => setHoveringOverImage(true)}
      onMouseLeave={() => setHoveringOverImage(false)}
    >
      <ImageWrapper>
        <Image
          fluid={imageFile}
          className="projects-content-queried-image"
          alt="project poster"
        />
        <ImageOverlay hoveringOverImage={hoveringOverImage} />
        <ImageOverlayButton hoveringOverImage={hoveringOverImage}>
          <ImageOverlayButtonText>{props.text}</ImageOverlayButtonText>
        </ImageOverlayButton>
      </ImageWrapper>
    </LinkButton>
  );
};

const profileImageQuery = graphql`
  query {
    image1: file(relativePath: { eq: "project-poster-2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "project-poster.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

// const profileImageQuery2 = graphql`
//   query {

//   }
// `;

const changeOpacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.2;
  }
`;

const changeOpacityStricter = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LinkButton = styled.a`
  display: block;
  text-decoration: none;
  width: 45%;
  max-height: var(--space-12);
  box-shadow: 3px 3px 9px black;
  @media (max-width: 1300px) {
    max-height: calc(var(--space-11) - var(--space-5));
  }
  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: var(--space-6);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  max-height: var(--space-12);
  overflow: hidden;
  @media (max-width: 1300px) {
    max-height: calc(var(--space-11) - var(--space-5));
  }
`;

const Image = styled(Img)`
  object-fit: cover;
`;

type OverlayProps = {
  hoveringOverImage: boolean;
};

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: white;
  opacity: 0;
  animation-name: ${(props: OverlayProps) =>
    props.hoveringOverImage ? changeOpacity : "unset"};
  animation-duration: ${(props: OverlayProps) =>
    props.hoveringOverImage ? "0.4s" : "unset"};
  animation-fill-mode: ${(props: OverlayProps) =>
    props.hoveringOverImage ? "forwards" : "unset"};
`;

const ImageOverlayButton = styled.button`
  position: absolute;
  top: calc(50% - var(--space-7) / 2);
  left: calc(50% - var(--space-11) / 2);
  width: var(--space-11);
  height: var(--space-7);
  background-color: var(--information-section-bg-color);
  border: none;
  opacity: 0;
  animation-name: ${(props: OverlayProps) =>
    props.hoveringOverImage ? changeOpacityStricter : "unset"};
  animation-duration: ${(props: OverlayProps) =>
    props.hoveringOverImage ? "0.4s" : "unset"};
  animation-fill-mode: ${(props: OverlayProps) =>
    props.hoveringOverImage ? "forwards" : "unset"};
  color: white;
  cursor: pointer;
`;

const ImageOverlayButtonText = styled.h5`
  font-weight: 500;
  font-size: var(--font-size-5);
  margin: 0;
`;
