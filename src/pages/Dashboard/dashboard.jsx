import React from "react";
import { useSelector } from "react-redux";
import { Sidebar } from "../../components/Sidebar/sidebar";
import styles from "./dashboard.module.scss";

export const Dashboard = () => {
  const colors = useSelector((state) => state.theme.defaultTheme);

  return (
    <div className={styles.mainContainer} style={{ backgroundColor: colors.lightGrey }}>
      <Sidebar />
    </div>
  );
};
