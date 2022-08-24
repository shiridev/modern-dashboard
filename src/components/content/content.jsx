import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./content.module.scss";
import { Sun1, RecordCircle, Moon, SearchNormal1 } from "iconsax-react";
import { themeSlice } from "../../features/themeSlice/themeSlice";
import { BlockPicker } from "react-color";
import { CustomModal } from "../customModal/customModal";
import { modalSlice } from "../../features/modalSlice/modalSlice";
import { CustomInput } from "../customInput/customInput";
import { CustomButton } from "../customButton/customButton";

export const Content = () => {
  const theme = useSelector((state) => state.theme.defaultTheme);
  const colors = theme.colors;
  const mainColor = useSelector((state) => state.theme.mainColor);
  const showModal = useSelector((state) => state.modal.show);
  const showColorSelector = useSelector(
    (state) => state.theme.showColorSelector
  );
  const dispatch = useDispatch();

  const handleChangeColor = (color) => {
    dispatch(themeSlice.actions.changeMainColor({ color: color.hex }));
  };

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
      <div className={`px-3 ${styles.topContainer}`}>
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
        <div className={`${styles.changeMainColorButtonContainer} me-3`}>
          <button
            className={`${styles.topContentButton}`}
            style={{ backgroundColor: colors.white }}
            onClick={() =>
              dispatch(themeSlice.actions.toggleShowColorSelector())
            }
          >
            <RecordCircle color={mainColor} size="1.3em" variant="Bold" />
          </button>
          <div
            className={styles.blockPickerContainer}
            style={{ display: showColorSelector ? "block" : "none" }}
          >
            <BlockPicker
              className={styles.blockPicker}
              onChange={handleChangeColor}
              colors={[colors.blue, colors.red, colors.purple]}
              color={mainColor}
            />
          </div>
        </div>
        <button
          className={`${styles.topContentButton} me-3`}
          style={{ backgroundColor: colors.white }}
          onClick={() => dispatch(modalSlice.actions.toggleShowMoadl())}
        >
          <SearchNormal1 color={mainColor} size="1.3em" variant="Bold" />
        </button>
      </div>
    </div>
  );
};
