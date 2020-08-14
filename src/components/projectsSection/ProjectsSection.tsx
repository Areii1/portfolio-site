import React from "react";
import styled from "styled-components";
import { Project } from "../../Types";
import { Wrapper } from "../contentSection/ContentSection";
import { Headline } from "../headline/Headline";
import { Lan } from "../../pages/index";
import {
  projectsSectionsLabelsFi,
  projectsSectionsLabelsEn,
} from "./ProjectsSectionLabels";
import { ProjectsSectionListItem } from "./projectsSectionListItem/ProjectsSectionListItem";

type Props = {
  projects: Array<Project>;
  language: Lan;
};

export const ProjectsSection = (props: Props) => {
  const projectsSectionsLabels =
    props.language === Lan.ENGLISH
      ? projectsSectionsLabelsEn
      : projectsSectionsLabelsFi;
  const projectsListItems = props.projects.map(project => (
    <ProjectsSectionListItem
      key={project.title}
      project={project}
      projectsSectionsLabels={projectsSectionsLabels}
      language={props.language}
    />
  ));
  return (
    <Wrapper>
      <ContentWrapper>
        <Headline text={projectsSectionsLabels.headline} isBlack />
        <List>{projectsListItems}</List>
      </ContentWrapper>
    </Wrapper>
  );
};

const ContentWrapper = styled.div`
  margin: auto;
  width: var(--space-19);
  padding: var(--space-9) var(--space-4);
  @media (max-width: 1300px) {
    width: var(--space-15);
  }
  @media (max-width: 800px) {
    width: var(--space-13);
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  @media (max-width: 400px) {
    padding: 0 var(--space-4);
    width: 100%;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;