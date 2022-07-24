import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "../features/themeSlice/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});
