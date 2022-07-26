import React from "react";
import styles from "./sidebar.module.scss";
import profile from "../../assets/images/profile.jpg";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { SidebarMenu } from "../sidebarMenu/sidebarMenu";
import { Home, Menu, ShoppingCart, Money, Box, LogoutCurve } from "iconsax-react";
import { sidebarSlice } from "../../features/sidebarSlice/sidebarSlice";

export const Sidebar = () => {
  const colors = useSelector((state) => state.theme.defaultTheme);
  const sidebarMenus = useSelector((state) => state.sidebar.menus);
  const dispatch = useDispatch();

  return (
    <div className={styles.mainContainer} style={{ backgroundColor: colors.white }}>
      <div>
        <div className={`${styles.topContainer} p-3 border-bottom border-light`}>
          <img src={profile} alt="profile" className={styles.profileImage} style={{ borderColor: colors.blue }} />
          <h4 style={{ color: colors.blue }} className="ms-3">
            Lorem Ipsum
          </h4>
        </div>
        <div>
          <p className="fw-bold p-3" style={{ color: colors.blue, fontSize: "1.1em" }}>
            Title Test
          </p>
          <SidebarMenu
            icon={Home}
            active={sidebarMenus[0].active}
            text="Home"
            onClick={() => dispatch(sidebarSlice.actions.selectMenu({ index: 0 }))}
          />
          <SidebarMenu
            icon={Menu}
            active={sidebarMenus[1].active}
            text="Apps"
            onClick={() => dispatch(sidebarSlice.actions.selectMenu({ index: 1 }))}
          />
          <SidebarMenu
            icon={ShoppingCart}
            active={sidebarMenus[2].active}
            text="Cart"
            badge={3}
            onClick={() => dispatch(sidebarSlice.actions.selectMenu({ index: 2 }))}
          />
          <div className="border-bottom border-light mx-3 mt-3"></div>
          <p className="fw-bold p-3" style={{ color: colors.blue, fontSize: "1.1em" }}>
            Title Test
          </p>
          <SidebarMenu
            icon={Money}
            active={sidebarMenus[3].active}
            text="Payments"
            onClick={() => dispatch(sidebarSlice.actions.selectMenu({ index: 3 }))}
          />
          <SidebarMenu
            icon={Box}
            active={sidebarMenus[4].active}
            text="Products"
            onClick={() => dispatch(sidebarSlice.actions.selectMenu({ index: 4 }))}
          />
        </div>
      </div>
      <button className={`${styles.logoutBtn} px-3 py-4 border-top border-light mt-3`} style={{ backgroundColor: colors.white }}>
        <LogoutCurve variant="Bold" color={colors.red} />
        <span style={{ color: colors.red }} className="ms-3">
          Log out
        </span>
      </button>
    </div>
  );
};
