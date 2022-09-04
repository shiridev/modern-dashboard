import {
  Card,
  HambergerMenu,
  I3Dcube,
  Moon,
  Profile2User,
  Receipt21,
  RecordCircle,
  SearchNormal1,
  Sun1,
} from "iconsax-react";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { modalSlice } from "../../features/modalSlice/modalSlice";
import { sidebarSlice } from "../../features/sidebarSlice/sidebarSlice";
import { themeSlice } from "../../features/themeSlice/themeSlice";
import { CustomButton } from "../customButton/customButton";
import { CustomInput } from "../customInput/customInput";
import { CustomModal } from "../customModal/customModal";
import { DataCard } from "../dataCard/dataCard";
import styles from "./content.module.scss";

export const Content = () => {
  const theme = useSelector((state) => state.theme.defaultTheme);
  const colors = theme.colors;
  const mainColor = useSelector((state) => state.theme.mainColor);
  const showModal = useSelector((state) => state.modal.show);
  const dispatch = useDispatch();
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });

  const data1 = [
    {
      name: "Page A",
      uv: 0,
      pv: 0,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 4000,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 5000,
      pv: 3800,
      amt: 2500,
    },
  ];

  const data2 = [
    {
      name: "Page A",
      uv: 0,
      pv: 0,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 5000,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 5000,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page F",
      uv: 1500,
      pv: 3800,
      amt: 2500,
    },
  ];

  return (
    <div
      className={styles.mainContainer}
      style={{ backgroundColor: colors.lightGrey }}
    >
      <CustomModal show={showModal} header="Search">
        <CustomInput
          type="text"
          placeholder="Search..."
          borderColor={colors.grey}
          focusBorderColor={mainColor}
          placeholderColor={colors.grey}
          color={colors.carbon}
          width="100%"
          backgroundColor={colors.white}
        />
        <CustomButton className="mt-3 w-100" backgroundColor={mainColor}>
          Search
        </CustomButton>
      </CustomModal>
      <div
        className={`px-3 ${styles.topContainer} ${
          isTabletOrMobile ? "justify-content-between" : "justify-content-end"
        }`}
      >
        {isTabletOrMobile && (
          <button
            className={`${styles.topContentButton} me-3`}
            style={{ backgroundColor: colors.white }}
            onClick={() => dispatch(sidebarSlice.actions.toggleCollapse())}
          >
            <HambergerMenu color={mainColor} size="1.3em" variant="Bold" />
          </button>
        )}
        <div className="d-flex align-align-items-center">
          <button
            className={`${styles.topContentButton} me-3`}
            style={{ backgroundColor: colors.white }}
            onClick={() => dispatch(modalSlice.actions.toggleShowMoadl())}
          >
            <SearchNormal1 color={mainColor} size="1.3em" variant="Bold" />
          </button>
          <div
            className={`${styles.colorChangerContainer} me-3`}
            style={{ backgroundColor: colors.white }}
          >
            <button
              className={`${styles.topContentButton}`}
              style={{ backgroundColor: colors.white }}
              onClick={() =>
                dispatch(
                  themeSlice.actions.changeMainColor({ color: colors.red })
                )
              }
            >
              <RecordCircle color={colors.red} size="1.3em" variant="Bold" />
            </button>
            <button
              className={`${styles.topContentButton}`}
              style={{ backgroundColor: colors.white }}
              onClick={() =>
                dispatch(
                  themeSlice.actions.changeMainColor({ color: colors.purple })
                )
              }
            >
              <RecordCircle color={colors.purple} size="1.3em" variant="Bold" />
            </button>
            <button
              className={`${styles.topContentButton}`}
              style={{ backgroundColor: colors.white }}
              onClick={() =>
                dispatch(
                  themeSlice.actions.changeMainColor({ color: colors.blue })
                )
              }
            >
              <RecordCircle color={colors.blue} size="1.3em" variant="Bold" />
            </button>
          </div>
          <button
            className={styles.topContentButton}
            style={{ backgroundColor: colors.white }}
            onClick={() => dispatch(themeSlice.actions.changeTheme())}
          >
            {theme.type === "light" ? (
              <Sun1 color={mainColor} size="1.3em" variant="Bold" />
            ) : (
              <Moon color={mainColor} size="1.3em" variant="Bold" />
            )}
          </button>
        </div>
      </div>
      <Row className="g-4 px-4">
        <Col sm={12} md={6} lg={3}>
          <DataCard
            icon={<Card color="white" size="1.5em" variant="Bold" />}
            number="$220,000"
            text="Lorem ipsum"
            chartData={data1}
          />
        </Col>
        <Col sm={12} md={6} lg={3}>
          <DataCard
            icon={<I3Dcube color="white" size="1.5em" variant="Bold" />}
            number="2,500"
            text="Lorem ipsum"
            chartData={data2}
          />
        </Col>
        <Col sm={12} md={6} lg={3}>
          <DataCard
            icon={<Profile2User color="white" size="1.5em" variant="Bold" />}
            number="12,000"
            text="Lorem ipsum"
            chartData={data1}
          />
        </Col>
        <Col sm={12} md={6} lg={3}>
          <DataCard
            icon={<Receipt21 color="white" size="1.5em" variant="Bold" />}
            number="562,000"
            text="Lorem ipsum"
            chartData={data2}
          />
        </Col>
      </Row>
    </div>
  );
};
