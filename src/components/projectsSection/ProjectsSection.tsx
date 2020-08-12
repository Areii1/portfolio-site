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
  /* margin-top: var(--space-minus-10); */
  @media (max-width: 800px) {
    margin-top: var(--space-minus-6);
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;
