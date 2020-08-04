import React from "react";
import styled from "styled-components";
import { ExperienceItemDescriptionContent } from "../../../../Types";

type Props = {
  content: ExperienceItemDescriptionContent;
};

export const ExperienceParagrah = (props: Props) => {
  return (
    <Wrapper>
      <p>{props.content.text}</p>
      {props.content.list && (
        <>
          <p>{props.content.list.listDescription}</p>
          <List>
            {props.content.list.items.map(listItem => (
              <li key={listItem}>{listItem}</li>
            ))}
          </List>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 45%;
  font-size: var(--font-size-4);
  font-weight: 300;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const List = styled.ul`
  text-align: start;
  padding-left: var(--space-5);
`;