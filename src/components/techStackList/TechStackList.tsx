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
  margin-left: var(--space-minus-5);
  max-width: 45%;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--space-11);
  margin: 0 var(--space-3);
  color: var(--information-section-bg-color);
`;

const ListItemText = styled.h5`
  margin: 0 0 0 var(--space-2);
  font-size: var(--font-size-5);
  font-weight: 400;
  color: var(--secondary-headline-color);
`;
