import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { timeSlice } from "../../features/timeSlice/timeSlice";
import styles from "./time.module.scss";

export const Time = () => {
  const theme = useSelector((state) => state.theme.defaultTheme);
  const mainColor = useSelector((state) => state.theme.mainColor);
  const colors = theme.colors;
  const time = useSelector((state) => state.time);
  const dispatch = useDispatch();

  useEffect(() => {
    var time = setInterval(() => {
      var date = new Date();
      dispatch(
        timeSlice.actions.updateTime({
          hour:
            date.getHours().toString().length === 1
              ? `0${date.getHours()}`
              : date.getHours(),
          minute:
            date.getMinutes().toString().length === 1
              ? `0${date.getMinutes()}`
              : date.getMinutes(),
        })
      );
    }, 1000);
    return () => {
      clearInterval(time);
    };
  });

  return (
    <div
      className={`${styles.mainContainer} p-3`}
      style={{ backgroundColor: colors.white }}
    >
      <div
        style={{ backgroundColor: mainColor }}
        className={`${styles.timeContainer} py-3 px-4`}
      >
        <span>{time.hour}</span>
        <span>{time.minute}</span>
      </div>
    </div>
  );
};
