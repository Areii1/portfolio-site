import React from "react";
import styled from "styled-components";
import { Description, ExperienceItemDescription } from "../../../Types";

type Props = {
  content: Description | ExperienceItemDescription;
  isExperienceInstace: boolean;
};

export const Paragraphs = (props: Props) => {
  const firstItem = Array.isArray(props.content)
    ? props.content[0]
    : props.content;
  const secondItem = Array.isArray(props.content)
    ? props.content[1]
    : undefined;
  return (
    <Wrapper>
      {!props.isExperienceInstace && (
        <>
          <Paragraph>{firstItem}</Paragraph>
          {secondItem && <Paragraph>{secondItem}</Paragraph>}
        </>
      )}
      {props.isExperienceInstace && (
        <>
          <Paragraph>
            <p>{props.content[0].text}</p>
            {props.content[0].list && (
              <>
                <p>{props.content[0].list.listDescription}</p>
                <ul>
                  {props.content[0].list.items.map(listItem => (
                    <li>{listItem}</li>
                  ))}
                </ul>
              </>
            )}
          </Paragraph>
          {props.content[1] && (
            <Paragraph>
              <p>{props.content[1].text}</p>
              {props.content[1].list && (
                <>
                  <p>{props.content[1].list.listDescription}</p>
                  <ul>
                    {props.content[1].list.items.map(listItem => (
                      <li>{listItem}</li>
                    ))}
                  </ul>
                </>
              )}
            </Paragraph>
          )}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: initial;
  justify-content: space-between;
  margin-top: var(--space-7);
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: initial;
    text-align: center;
  }
`;

const Paragraph = styled.p`
  width: 45%;
  font-size: var(--font-size-4);
  font-weight: 300;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
