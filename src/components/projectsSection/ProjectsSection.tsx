import React from "react";
import styled from "styled-components";
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
import { ProjectsImage } from "./projectsImage/ProjectsImage";

type Props = {
  projects: Array<Project>;
  language: Lan;
};

export const ProjectsSection = (props: Props) => {
  const projectsSectionsLabels =
    props.language === Lan.ENGLISH
      ? projectsSectionsLabelsEn
      : projectsSectionsLabelsFi;
  const projectsListItems = props.projects.map(project => {
    return (
      <ListItem key={project.title}>
        <SecondaryTitle>{project.title}</SecondaryTitle>
        <MainContentWrapper>
          <ProjectsImage
            text={projectsSectionsLabels.displayText}
            link={project.displayLink}
          />
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

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-top: var(--space-8);
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
