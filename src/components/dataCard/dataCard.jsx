import React from "react";
import { useSelector } from "react-redux";
import {
    Area,
    AreaChart, ResponsiveContainer
} from "recharts";
import styles from "./dataCard.module.scss";

export const DataCard = (props) => {
  const theme = useSelector((state) => state.theme.defaultTheme);
  const mainColor = useSelector((state) => state.theme.mainColor);
  const colors = theme.colors;

  return (
    <div
      className={`${styles.mainContainer} p-3`}
      style={{ backgroundColor: colors.white }}
    >
      <div className="w-100 d-flex align-items-start justify-content-between">
        <div
          className={`${styles.icon}`}
          style={{ backgroundColor: mainColor }}
        >
          {props.icon}
        </div>
        <button className={styles.moreButton}>
          <div style={{ backgroundColor: mainColor }}></div>
          <div style={{ backgroundColor: mainColor }}></div>
          <div style={{ backgroundColor: mainColor }}></div>
        </button>
      </div>
      <div className="w-100 d-flex align-items-end justify-content-between">
        <div className="w-100">
          <h3
            style={{
              fontWeight: "bold",
              color: colors.carbon,
              transition: "0.3s",
            }}
          >
            {props.number}
          </h3>
          <h5
            className="mt-2"
            style={{ color: colors.grey, transition: "0.3s" }}
          >
            {props.text}
          </h5>
        </div>
        <div className="w-100 h-100">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={props.chartData}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={mainColor} stopOpacity={1.0} />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="uv"
                stroke={mainColor}
                strokeWidth={2}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
