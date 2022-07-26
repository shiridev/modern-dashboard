import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebarSlice",
  initialState: {
    menus: [
      { name: "Home", active: false },
      { name: "Apps", active: false },
      { name: "Cart", active: false },
      { name: "Payments", active: false },
      { name: "Products", active: false },
    ],
    collapse: false,
  },

  reducers: {
    selectMenu: (state, params) => {
      var index = params.payload.index;
      var length = state.menus.length;
      for (var i = 0; i < length; i++) {
        if (i === index) {
          state.menus[i].active = true;
        } else {
          state.menus[i].active = false;
        }
      }
    },
    toggleCollapse: (state) => {
      if (state.collapse === false) {
        state.collapse = true;
      } else {
        state.collapse = false;
      }
    },
  },
});
