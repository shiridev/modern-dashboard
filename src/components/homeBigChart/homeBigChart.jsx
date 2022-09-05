import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  Bar,
  BarChart,
  CartesianGrid, ResponsiveContainer,
  XAxis
} from "recharts";
import { CustomSelect } from "../customSelect/customSelect";
import styles from "./homeBigChart.module.scss";

export const HomeBigChart = (props) => {
  const theme = useSelector((state) => state.theme.defaultTheme);
  const mainColor = useSelector((state) => state.theme.mainColor);
  const colors = theme.colors;

  return (
    <div
      className={`${styles.mainContainer} p-3`}
      style={{ backgroundColor: colors.white }}
    >
      <div className={styles.titleContainer}>
        <Row className="g-0 w-100">
          <Col sm={12} md={6}>
            <h5 style={{ color: mainColor, fontWeight: "bold" }}>
              {props.title}
            </h5>
            <p style={{ color: colors.grey }}>Lorem ipsume</p>
          </Col>
          <Col sm={12} md={6}>
            <div className="d-flex justify-content-md-end mt-3 mt-md-0">
              <CustomSelect
                data={[
                  { name: "Weekly (2020)", id: 1 },
                  { name: "Monthly (2020)", id: 2 },
                  { name: "Yearly (2020)", id: 3 },
                ]}
              />
            </div>
          </Col>
        </Row>
      </div>
      <ResponsiveContainer width="100%" height={250} className="mt-3">
        <BarChart data={props.chartData}>
          <XAxis
            dataKey="name"
            stroke={colors.carbon}
            style={{ fontSize: "0.9em" }}
          />
          <CartesianGrid stroke={colors.grey} vertical={false} />
          <Bar dataKey="pv" fill={colors.blue} />
          <Bar dataKey="uv" fill={colors.green} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
