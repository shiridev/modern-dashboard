import React from "react";
import styles from "./customModal.module.scss";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CloseCircle } from "iconsax-react";
import { modalSlice } from "../../features/modalSlice/modalSlice";

export const CustomModal = (props) => {
  const modalShow = useSelector((state) => state.modal.show);
  const mainColor = useSelector((state) => state.theme.mainColor);
  const theme = useSelector((state) => state.theme.defaultTheme);
  const colors = useSelector((state) => state.theme.defaultTheme.colors);
  const dispatch = useDispatch();

  return (
    <Modal
      show={modalShow}
      onHide={() => dispatch(modalSlice.actions.toggleShowMoadl())}
      contentClassName={styles.content}
      centered={true}
      size={props.size}
    >
      <Modal.Header
        className={styles.header}
        style={{
          borderColor: colors.lightGrey,
          backgroundColor: colors.white,
        }}
      >
        <Modal.Title className={styles.title}>
          <h5 style={{ color: mainColor }}>{props.header}</h5>
        </Modal.Title>
        <button
          onClick={() => dispatch(modalSlice.actions.toggleShowMoadl())}
          style={{
            backgroundColor: colors.white,
            boxShadow: theme.type === "light" ? "" : "none",
          }}
        >
          <CloseCircle variant="Bold" size="1.1em" color={mainColor} />
        </button>
      </Modal.Header>
      <Modal.Body
        style={{
          backgroundColor: colors.white,
        }}
      >
        {props.children}
      </Modal.Body>
    </Modal>
  );
};
