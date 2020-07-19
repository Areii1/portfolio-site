import React from "react";
import styled from "styled-components";
import { ModalTypes, SetModalType } from "../../pages/index";

type Props = {
  text: string;
  setModalType?: SetModalType;
  type: ModalTypes;
};

export const Button = (props: Props) => {
  const onClick = props.setModalType ? props.setModalType : () => {};
  return (
    <ButtonElement
      type="button"
      title={props.text.toLowerCase()}
      onClick={() => onClick(props.type)}
    >
      {props.text}
    </ButtonElement>
  );
};

const ButtonElement = styled.button`
  background-color: transparent;
  width: 15rem;
  height: 3rem;
  border: 1px solid black;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
`;
