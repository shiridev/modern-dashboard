import { configureStore } from "@reduxjs/toolkit";
import { sidebarSlice } from "../features/sidebarSlice/sidebarSlice";
import { themeSlice } from "../features/themeSlice/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    sidebar: sidebarSlice.reducer,
  },
});
