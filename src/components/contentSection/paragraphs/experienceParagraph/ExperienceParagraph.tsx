import React from "react";
import styled from "styled-components";
import { ExperienceItemDescriptionContent } from "../../../../Types";

type Props = {
  content: ExperienceItemDescriptionContent;
};

export const ExperienceParagrah = (props: Props) => {
  return (
    <Wrapper>
      {!props.content.listFirst && (
        <>
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
        </>
      )}
      {props.content.listFirst && (
        <>
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
          <p>{props.content.text}</p>
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
    text-align: left;
  }
`;

const List = styled.ul`
  text-align: start;
  padding-left: var(--space-5);
`;
