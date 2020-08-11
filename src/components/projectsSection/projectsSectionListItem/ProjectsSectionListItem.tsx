import React from "react";
import styled from "styled-components";
import { Project } from "../../../Types";
import { IntroductionParagraph } from "../../contentSection/paragraphs/introductionParagraph/IntroductionParagraph";
import { SecondaryTitle } from "../../contentSection/experienceItemDetails/ExperienceItemDetails";
import { ProjectsImage } from "../projectsImage/ProjectsImage";
import { ProjectsSectionsLabels } from "../ProjectsSectionLabels";
import {
  GeneralButton,
  UseCase,
} from "../../buttons/generalButton/GeneralButton";
import { Lan } from "../../../pages/index";

type Props = {
  project: Project;
  projectsSectionsLabels: ProjectsSectionsLabels;
  language: Lan;
};

export const ProjectsSectionListItem = (props: Props) => {
  return (
    <ListItem>
      <SecondaryTitle>{props.project.title}</SecondaryTitle>
      <MainContentWrapper>
        <ProjectsImage
          text={props.projectsSectionsLabels.displayText}
          link={props.project.displayLink}
        />
        <IntroductionParagraph content={props.project.description} />
      </MainContentWrapper>
      <LinkItemWrapper>
        <ButtonWrapper>
          <GeneralButton
            link={props.project.repositoryLink}
            useCase={UseCase.VIEWDEMOPAGE}
            language={props.language}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <GeneralButton
            link={props.project.displayLink}
            useCase={UseCase.REPOSITORY}
            language={props.language}
          />
        </ButtonWrapper>
      </LinkItemWrapper>
    </ListItem>
  );
};

const ListItem = styled.li`
  margin-top: var(--space-8);
`;

const MainContentWrapper = styled.div`
  margin: var(--space-7) 0 var(--space-5) 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: initial;
  }
`;

const LinkItemWrapper = styled.div`
  width: 45%;
  margin: var(--space-2) 0 0 auto;
  @media (max-width: 800px) {
    width: 100%;
    margin: var(--space-2) 0;
  }
`;

const ButtonWrapper = styled.div`
  margin-bottom: var(--space-5);
`;
