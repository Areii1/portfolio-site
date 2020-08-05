import React from "react";
import styled from "styled-components";
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
          <Image
            fluid={imageQueryData.file.childImageSharp.fluid}
            className="projects-content-queried-image"
            alt="project poster"
          />
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

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-top: var(--space-8);
`;

const Image = styled(Img)`
  width: 45%;
`;

const ContentWrapper = styled.div`
  margin-top: var(--space-6);
  display: flex;
  justify-content: space-between;
`;
