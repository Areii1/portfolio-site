import React from "react";
import styled from "styled-components";
import { lan } from "../../pages/index";

type Props = {
  updateLanguage: (language: lan) => void;
};

export const LanguageList = (props: Props) => {
  return (
    <List>
      <ListItem>
        <Button onClick={() => props.updateLanguage(lan.ENGLISH)}>EN</Button>
      </ListItem>
      <ListItem>
        <Button onClick={() => props.updateLanguage(lan.FINNISH)}>FI</Button>
      </ListItem>
    </List>
  );
};

const List = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  list-style-type: none;
  padding: 1rem;
  margin: 0;
  display: flex;
`;

const ListItem = styled.li`
  margin-left: 1rem;
`;

const Button = styled.button`
  padding: 0;
  background-color: transparent;
  border: 1px solid transparent;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;
