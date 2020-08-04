import React from "react";
import styled from "styled-components";
import {
  Description,
  ExperienceItemDescriptionContent,
} from "../../../../Types";

type Props = {
  content: Description | ExperienceItemDescriptionContent;
  isExperienceInstace: boolean;
};

export const Paragraph = (props: Props) => {
  return (
    <>
      {!props.isExperienceInstace && (
        <ParagraphElement>{props.content}</ParagraphElement>
      )}
      {props.isExperienceInstace && (
        <ParagraphElement>
          <p>{props.content.text}</p>
          {props.content.list && (
            <>
              <p>{props.content.list.listDescription}</p>
              <List>
                {props.content.list.items.map(listItem => (
                  <li>{listItem}</li>
                ))}
              </List>
            </>
          )}
        </ParagraphElement>
      )}
    </>
  );
};

const ParagraphElement = styled.p`
  width: 45%;
  font-size: var(--font-size-4);
  font-weight: 300;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const List = styled.ul`
  text-align: start;
`;
