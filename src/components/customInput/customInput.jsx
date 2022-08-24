import React from "react";
import styled from "styled-components";

const Input = styled.input`
  border-radius: 10px;
  border: 1px solid ${(props) => props.borderColor};
  height: 40px;
  outline: none;
  width: ${(props) => props.width};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  transition: 0.3s;
  &:focus {
    border: 1px solid ${(props) => props.focusBorderColor};
  }
  &::placeholder {
    color: ${(props) => props.placeholderColor};
  }
`;

export const CustomInput = (props) => {
  return (
    <Input
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      className="px-3"
      width={props.width}
      borderColor={props.borderColor}
      focusBorderColor={props.focusBorderColor}
      placeholderColor={props.placeholderColor}
      backgroundColor={props.backgroundColor}
      color={props.color}
    />
  );
};
