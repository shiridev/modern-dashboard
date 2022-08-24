import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import styled from "styled-components";

const Badge = styled.span`
  color: white;
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  font-size: 0.9em;
  background-color: ${(props) => props.colors.red};
`;

export const SidebarMenu = (props) => {
  const colors = useSelector((state) => state.theme.defaultTheme.colors);
  const mainColor = useSelector((state) => state.theme.mainColor);
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <button
      className="d-flex align-items-center justify-content-between py-3 w-100 px-0"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        height: 45,
        cursor: "pointer",
        border: "none",
        backgroundColor: colors.white,
        transition: "0.3s",
      }}
      onClick={props.onClick}
    >
      <div className="d-flex align-items-center">
        <div
          style={{
            height: 45,
            width: 5,
            backgroundColor: props.active ? mainColor : "transparent",
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
        ></div>
        {
          <props.icon
            style={{ transition: "0.3s" }}
            size="1.2em"
            variant="Bold"
            color={
              props.active ? mainColor : hover ? mainColor : colors.grey
            }
            className="ms-3"
          />
        }
        <span
          className="ms-3"
          style={{
            fontWeight: props.active ? "bold" : hover ? "bold" : "normal",
            color: props.active
              ? mainColor
              : hover
              ? mainColor
              : colors.grey,
            userSelect: "none",
          }}
        >
          {props.text}
        </span>
      </div>
      {props.badge && (
        <Badge className="me-3" colors={colors}>
          {props.badge}
        </Badge>
      )}
    </button>
  );
};
