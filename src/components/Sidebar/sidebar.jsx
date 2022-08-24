import React, { useEffect } from "react";
import styles from "./sidebar.module.scss";
import profile from "../../assets/images/profile.jpg";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { SidebarMenu } from "../sidebarMenu/sidebarMenu";
import {
  Home,
  Menu,
  ShoppingCart,
  Money,
  Box,
  LogoutCurve,
  HambergerMenu,
  CloseCircle,
} from "iconsax-react";
import { sidebarSlice } from "../../features/sidebarSlice/sidebarSlice";
import { useMediaQuery } from "react-responsive";

export const Sidebar = () => {
  const theme = useSelector((state) => state.theme.defaultTheme);
  const colors = theme.colors;
  const mainColor = useSelector((state) => state.theme.mainColor);
  const sidebarCollapse = useSelector((state) => state.sidebar.collapse);
  const sidebarMenus = useSelector((state) => state.sidebar.menus);
  const dispatch = useDispatch();
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });

  useEffect(() => {
    if (isTabletOrMobile) {
      dispatch(sidebarSlice.actions.toggleCollapse({ collapse: false }));
    }
  }, [isTabletOrMobile]);

  return (
    <div
      className={styles.mainContainer}
      style={{
        left: sidebarCollapse ? -300 : 0,
      }}
    >
      <div
        className={styles.menusContainer}
        style={{
          backgroundColor: colors.white,
          boxShadow: sidebarCollapse ? "none" : "5px 0 20px 0 #0000000d",
        }}
      >
        <div>
          <div
            className={`${styles.topContainer} px-3`}
            style={{ borderColor: colors.lightGrey }}
          >
            <img
              src={profile}
              alt="profile"
              className={styles.profileImage}
              style={{ borderColor: mainColor }}
            />
            <h4 style={{ color: mainColor }} className="ms-3">
              Lorem Ipsum
            </h4>
          </div>
          <div>
            <p
              className="fw-bold p-3"
              style={{ color: mainColor, fontSize: "1.1em" }}
            >
              Title Test
            </p>
            <SidebarMenu
              icon={Home}
              active={sidebarMenus[0].active}
              text="Home"
              onClick={() =>
                dispatch(sidebarSlice.actions.selectMenu({ index: 0 }))
              }
            />
            <SidebarMenu
              icon={Menu}
              active={sidebarMenus[1].active}
              text="Apps"
              onClick={() =>
                dispatch(sidebarSlice.actions.selectMenu({ index: 1 }))
              }
            />
            <SidebarMenu
              icon={ShoppingCart}
              active={sidebarMenus[2].active}
              text="Cart"
              badge={3}
              onClick={() =>
                dispatch(sidebarSlice.actions.selectMenu({ index: 2 }))
              }
            />
            <div
              className="mx-3 mt-3"
              style={{
                borderBottom: "1px solid " + colors.lightGrey,
                transition: "0.3s",
              }}
            ></div>
            <p
              className="fw-bold p-3"
              style={{ color: mainColor, fontSize: "1.1em" }}
            >
              Title Test
            </p>
            <SidebarMenu
              icon={Money}
              active={sidebarMenus[3].active}
              text="Payments"
              onClick={() =>
                dispatch(sidebarSlice.actions.selectMenu({ index: 3 }))
              }
            />
            <SidebarMenu
              icon={Box}
              active={sidebarMenus[4].active}
              text="Products"
              onClick={() =>
                dispatch(sidebarSlice.actions.selectMenu({ index: 4 }))
              }
            />
          </div>
        </div>
        <button
          className={`${styles.logoutBtn} px-3 mt-3`}
          style={{
            backgroundColor: colors.white,
            borderColor: colors.lightGrey,
          }}
        >
          <LogoutCurve variant="Bold" color={colors.red} />
          <span style={{ color: colors.red }} className="ms-3">
            Log out
          </span>
        </button>
      </div>
      <button
        className={`${styles.sidebarToggleCollapse} ms-3`}
        style={{
          backgroundColor: colors.white,
          left: sidebarCollapse ? 0 : -60,
          boxShadow: sidebarCollapse ? "" : "none",
        }}
        onClick={() => dispatch(sidebarSlice.actions.toggleCollapse())}
      >
        {sidebarCollapse ? (
          <HambergerMenu color={mainColor} size="1.1em" variant="Bold" />
        ) : (
          <CloseCircle color={mainColor} size="1.1em" variant="Bold" />
        )}
      </button>
    </div>
  );
};
