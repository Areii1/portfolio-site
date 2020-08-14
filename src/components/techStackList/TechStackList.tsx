import React from "react";
import styled from "styled-components";

type Props = {
  list?: Array<String>;
};

export const TechStackList = (props: Props) => {
  let techStackListItems;
  if (props.list) {
    techStackListItems = props.list.map(keyword => (
      <ListItem>
        &#8226;
        <ListItemText>{keyword}</ListItemText>
      </ListItem>
    ));
  }
  return <List>{techStackListItems}</List>;
};

const List = styled.ul`
  display: flex;
  align-items: flex-end;
  padding: 0;
  max-width: 45%;
  list-style-position: inside;
  @media (max-width: 1300px) {
    margin-top: var(--space-2);
    max-width: unset;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--space-11);
  margin: 0 var(--space-3);
  color: var(--information-section-bg-color);
  @media (max-width: 1300px) {
    justify-content: flex-start;
  }
`;

const ListItemText = styled.h5`
  margin: 0 0 0 var(--space-2);
  font-size: var(--font-size-5);
  font-weight: 400;
  color: var(--secondary-headline-color);

  @media (max-width: 1300px) {
    font-size: var(--font-size-4);
    font-weight: 300;
  }
`;
