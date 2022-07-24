import React from "react";
import styles from "./sidebar.module.scss";
import profile from "../../assets/images/profile.jpg";
import { useSelector } from "react-redux/es/exports";
import { SidebarMenu } from "../sidebarMenu/sidebarMenu";
import { Home, Menu, ShoppingCart, Money, Box } from "iconsax-react";

export const Sidebar = () => {
  const colors = useSelector((state) => state.theme.defaultTheme);
  return (
    <div className={styles.mainContainer} style={{ backgroundColor: colors.white }}>
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
        <SidebarMenu icon={Home} active={true} text="Home" />
        <SidebarMenu icon={Menu} active={false} text="Apps" />
        <SidebarMenu icon={ShoppingCart} active={false} text="Cart" badge={3} />
        <div className="border-bottom border-light mx-3 my-3"></div>
        <p className="fw-bold p-3" style={{ color: colors.blue, fontSize: "1.1em" }}>
          Title Test
        </p>
        <SidebarMenu icon={Money} active={false} text="Payments" />
        <SidebarMenu icon={Box} active={false} text="Products" />
        <div className="border-bottom border-light mx-3 my-3"></div>
      </div>
    </div>
  );
};
