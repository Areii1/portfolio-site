import React from "react";
import styled from "styled-components";
import { lan } from "../../pages/index";

type Props = {
  updateLanguage: (language: lan) => void;
  isBlack: boolean;
  language: lan;
};

export const LanguageList = (props: Props) => {
  return (
    <List>
      <ListItem>
        <Button onClick={() => props.updateLanguage(lan.ENGLISH)} title="english">
          <ButtonText
            isBlack={props.isBlack}
            isActive={props.language === lan.ENGLISH}
          >
            EN
          </ButtonText>
        </Button>
      </ListItem>
      <ListItem>
        <Button onClick={() => props.updateLanguage(lan.FINNISH)} title="finnish">
          <ButtonText
            isBlack={props.isBlack}
            isActive={props.language === lan.FINNISH}
          >
            FI
          </ButtonText>
        </Button>
      </ListItem>
    </List>
  );
};

const List = styled.ul`
  list-style-type: none;
  padding: 0;
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
  cursor: pointer;
`;

type ButtonTextProps = {
  isBlack: boolean;
  isActive: boolean;
};

const ButtonText = styled.h6`
  margin: 0;
  color: ${(props: ButtonTextProps) => {
    if (props.isActive) {
      if (props.isBlack) {
        return "black";
      } else {
        return "white";
      }
    } else {
      return "gray";
    }
  }};
  font-size: 1.5rem;
`;
