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
  projectsContentSectionsLabelsFi,
  projectsContentSectionsLabelsEn,
} from "./ProjectsContentSectionLabels";

type Props = {
  projects: Array<Project>;
  language: Lan;
};

export const ProjectsContentSection = (props: Props) => {
  const imageQueryData = useStaticQuery(profileImageQuery);
  const projectsContentSectionsLabels =
    props.language === Lan.ENGLISH
      ? projectsContentSectionsLabelsEn
      : projectsContentSectionsLabelsFi;
  const projectsListItems = props.projects.map(project => {
    return (
      <ListItem key={project.title}>
        <SecondaryTitle>{project.title}</SecondaryTitle>
        <ContentWrapper>
          <LinkButton
            href={project.repositoryLink} target="_blank" title={project.repositoryLink}
          >
            <ImageWrapper>
              <Image
                fluid={imageQueryData.file.childImageSharp.fluid}
                className="projects-content-queried-image"
                alt="project poster"
              />
              <ImageOverlay />
            </ImageWrapper>
          </LinkButton>
          <IntroductionParagraph content={project.description} />
        </ContentWrapper>
      </ListItem>
    );
  });
  return (
    <Wrapper>
      <Headline text={projectsContentSectionsLabels} isBlack />
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
    opacity: 0.3;
  }
`;

const LinkButton = styled.a`
  text-decoration: none;
  width: 45%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  height: var(--space-12);
  overflow: hidden;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: var(--space-12);
  width: 100%;
  background-color: white;
  opacity: 0;
  :hover {
    animation-name: ${changeOpacity};
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-top: var(--space-8);
`;

const Image = styled(Img)`
  width: 110%;
`;

const ContentWrapper = styled.div`
  margin-top: var(--space-6);
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: initial;
  }
`;
