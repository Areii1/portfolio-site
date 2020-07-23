import React from "react";
import styled from "styled-components";
import { Lan } from "../../pages/index";

type Props = {
  updateLanguage: (language: Lan) => void;
  isBlack: boolean;
  language: Lan;
};

export const ToggleLanguage = (props: Props) => {
  return (
    <List>
      <ListItem>
        <Button
          onClick={() => props.updateLanguage(Lan.ENGLISH)}
          title={props.language === Lan.ENGLISH ? "" : "english"}
          isActive={props.language === Lan.ENGLISH}
        >
          <ButtonText
            isBlack={props.isBlack}
            isActive={props.language === Lan.ENGLISH}
          >
            EN
          </ButtonText>
        </Button>
      </ListItem>
      <ListItem>
        <Button
          onClick={() => props.updateLanguage(Lan.FINNISH)}
          title={props.language === Lan.FINNISH ? "" : "finnish"}
          isActive={props.language === Lan.FINNISH}
        >
          <ButtonText
            isBlack={props.isBlack}
            isActive={props.language === Lan.FINNISH}
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
