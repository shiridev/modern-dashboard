import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "../features/dataSlice/dataSlice";
import { modalSlice } from "../features/modalSlice/modalSlice";
import { sidebarSlice } from "../features/sidebarSlice/sidebarSlice";
import { themeSlice } from "../features/themeSlice/themeSlice";
import { timeSlice } from "../features/timeSlice/timeSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    sidebar: sidebarSlice.reducer,
    modal: modalSlice.reducer,
    time: timeSlice.reducer,
    apiData: dataSlice.reducer,
  },
});
