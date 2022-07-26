import React from "react";
import { useSelector } from "react-redux";
import styles from "./content.module.scss";

export const Content = () => {
  const colors = useSelector((state) => state.theme.defaultTheme);
  return (
    <div className={styles.mainContainer} style={{ backgroundColor: colors.lightGrey }}>
      Content
    </div>
  );
};
