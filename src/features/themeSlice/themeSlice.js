import { createSlice } from "@reduxjs/toolkit";
import { theme } from "../../theme/colors";

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState: {
    defaultTheme: theme.light,
  },

  reducers: {
    changeTheme: (state) => {
      if (state.defaultTheme === theme.light) {
        state.defaultTheme = theme.dark;
      } else {
        state.defaultTheme = theme.light;
      }
    },
  },
});
