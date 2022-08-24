import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
  border: none;
  height: 40px;
  color: white;
  transition: 0.3s;

  &:hover {
    filter: brightness(90%);
  }
`;

export const CustomButton = (props) => {
  return (
    <Button className={props.className} backgroundColor={props.backgroundColor}>
      {props.children}
    </Button>
  );
};
