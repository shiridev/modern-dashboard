import { ArrowDown2 } from "iconsax-react";
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import styles from "./customSelect.module.scss";

export const CustomSelect = (props) => {
  const theme = useSelector((state) => state.theme.defaultTheme);
  const colors = theme.colors;
  const mainColor = useSelector((state) => state.theme.mainColor);
  const [dropdownItemMouseEnter, setDropdownItemMouseEnter] = useState(false);

  const handlDropdownItemMouseEnter = (e) => {
    setDropdownItemMouseEnter(e.target.text);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-basic"
        className={styles.dropdownToggle}
        style={{
          color: colors.carbon,
          borderColor: colors.grey,
          backgroundColor: colors.white,
        }}
      >
        <span>{props.data[0].name}</span>
        <ArrowDown2 color={colors.carbon} size="1.1em" className="ms-3" />
      </Dropdown.Toggle>

      <Dropdown.Menu
        className={styles.dropdownMenu}
        style={{ borderColor: colors.grey, backgroundColor: colors.white }}
      >
        {props.data.map((v, i) => (
          <Dropdown.Item
            key={v.id}
            className={styles.dropdownItem}
            style={{
              color: colors.carbon,
              backgroundColor:
                dropdownItemMouseEnter === v.name
                  ? colors.lightGrey
                  : colors.white,
            }}
            onMouseEnter={handlDropdownItemMouseEnter}
          >
            {v.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
