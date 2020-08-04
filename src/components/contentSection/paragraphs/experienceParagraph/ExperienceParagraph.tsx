import React from "react";
import styled from "styled-components";
import { ExperienceItemDescriptionContent } from "../../../../Types";

type Props = {
  content: ExperienceItemDescriptionContent;
};

export const ExperienceParagrah = (props: Props) => {
  return (
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
