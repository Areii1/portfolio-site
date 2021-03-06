import React from "react";
import styled from "styled-components";
import { Lan } from "../../pages/index";
import { Link } from "gatsby";

type Props = {
  isBlack: boolean;
  language: Lan;
};

export const ToggleLanguage = (props: Props) => {
  return (
    <List>
      <ListItem>
        <Button
          title={props.language === Lan.ENGLISH ? "" : "english"}
          isActive={props.language === Lan.ENGLISH}
        >
          <Link to="?lan=en" style={{ textDecoration: "none" }}>
            <ButtonText
              isBlack={props.isBlack}
              isActive={props.language === Lan.ENGLISH}
            >
              EN
            </ButtonText>
          </Link>
        </Button>
      </ListItem>
      <ListItem>
        <Button
          title={props.language === Lan.FINNISH ? "" : "finnish"}
          isActive={props.language === Lan.FINNISH}
        >
          <Link to="?lan=fi" style={{ textDecoration: "none" }}>
            <ButtonText
              isBlack={props.isBlack}
              isActive={props.language === Lan.FINNISH}
            >
              FI
            </ButtonText>
          </Link>
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
  margin-left: var(--space-4);
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
  font-size: var(--font-size-6);
`;
