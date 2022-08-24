import { createSlice } from "@reduxjs/toolkit";
import { theme } from "../../theme/theme";

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState: {
    defaultTheme: theme.light,
    mainColor: theme.light.colors.blue,
    showColorSelector: false,
  },

  reducers: {
    changeTheme: (state) => {
      if (state.defaultTheme.type === theme.light.type) {
        state.defaultTheme = theme.dark;
      } else {
        state.defaultTheme = theme.light;
      }
    },

    changeMainColor: (state, params) => {
      state.mainColor = params.payload.color;
    },

    toggleShowColorSelector: (state) => {
      state.showColorSelector = !state.showColorSelector;
    },
  },
});
