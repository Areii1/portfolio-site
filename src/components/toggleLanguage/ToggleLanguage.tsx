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
        <Button
          onClick={() => props.updateLanguage(lan.ENGLISH)}
          title={props.language === lan.ENGLISH ? "" : "english"}
          isActive={props.language === lan.ENGLISH}
        >
          <ButtonText
            isBlack={props.isBlack}
            isActive={props.language === lan.ENGLISH}
          >
            EN
          </ButtonText>
        </Button>
      </ListItem>
      <ListItem>
        <Button
          onClick={() => props.updateLanguage(lan.FINNISH)}
          title={props.language === lan.FINNISH ? "" : "finnish"}
          isActive={props.language === lan.FINNISH}
        >
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

type ButtonProps = {
  isActive: boolean;
};

const Button = styled.button`
  padding: 0;
  background-color: transparent;
  border: 1px solid transparent;
  cursor: ${(props: ButtonProps) => (props.isActive ? "auto" : "pointer")};
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
