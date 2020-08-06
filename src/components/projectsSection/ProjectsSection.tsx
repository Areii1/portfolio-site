import React from "react";
import styled, { keyframes } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Project } from "../../Types";
import { Wrapper } from "../contentSection/ContentSection";
import { Headline } from "../headline/Headline";
import { Lan } from "../../pages/index";
import { IntroductionParagraph } from "../contentSection/paragraphs/introductionParagraph/IntroductionParagraph";
import { SecondaryTitle } from "../contentSection/experienceItemDetails/ExperienceItemDetails";
import {
  projectsSectionsLabelsFi,
  projectsSectionsLabelsEn,
} from "./ProjectsSectionLabels";

type Props = {
  projects: Array<Project>;
  language: Lan;
};

export const ProjectsSection = (props: Props) => {
  const [hoveringOverImage, setHoveringOverImage] = React.useState<boolean>(
    false
  );
  const imageQueryData = useStaticQuery(profileImageQuery);
  const projectsSectionsLabels =
    props.language === Lan.ENGLISH
      ? projectsSectionsLabelsEn
      : projectsSectionsLabelsFi;
  const projectsListItems = props.projects.map(project => {
    return (
      <ListItem key={project.title}>
        <SecondaryTitle>{project.title}</SecondaryTitle>
        <MainContentWrapper>
          <LinkButton
            href={project.displayLink}
            target="_blank"
            onMouseEnter={() => setHoveringOverImage(true)}
            onMouseLeave={() => setHoveringOverImage(false)}
          >
            <ImageWrapper>
              <Image
                fluid={imageQueryData.file.childImageSharp.fluid}
                className="projects-content-queried-image"
                alt="project poster"
              />
              <ImageOverlay hoveringOverImage={hoveringOverImage} />
              <ImageOverlayButton hoveringOverImage={hoveringOverImage}>
                <ImageOverlayButtonText>
                  {projectsSectionsLabels.viewProjectDisplay}
                </ImageOverlayButtonText>
              </ImageOverlayButton>
            </ImageWrapper>
          </LinkButton>
          <IntroductionParagraph content={project.description} />
        </MainContentWrapper>
        <LinkItemWrapper>
          <LinkItemText>{`${projectsSectionsLabels.repositoryText}:`}</LinkItemText>
          <a
            href={project.repositoryLink}
            target="_blank"
            title={project.repositoryLink}
          >
            {project.repositoryLink}
          </a>
        </LinkItemWrapper>
        <LinkItemWrapper>
          <LinkItemText>{`${projectsSectionsLabels.displayText}:`}</LinkItemText>
          <a
            href={project.displayLink}
            target="_blank"
            title={project.displayLink}
          >
            {project.displayLink}
          </a>
        </LinkItemWrapper>
      </ListItem>
    );
  });
  return (
    <Wrapper>
      <Headline text={projectsSectionsLabels.headline} isBlack />
      <List>{projectsListItems}</List>
    </Wrapper>
  );
};

const profileImageQuery = graphql`
  query {
    file(relativePath: { eq: "project-poster.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

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
  text-decoration: none;
  width: 45%;
  max-height: var(--space-12);
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  max-height: var(--space-12);
  overflow: hidden;
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

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-top: var(--space-8);
`;

const Image = styled(Img)`
  object-fit: cover;
`;

const MainContentWrapper = styled.div`
  margin: var(--space-6) 0 var(--space-5) 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: initial;
  }
`;

const LinkItemWrapper = styled.div`
  display: flex;
`;

const LinkItemText = styled.h6`
  margin: 0 var(--space-2) 0 0;
  font-size: var(--space-4);
  width: var(--space-11);
`;
