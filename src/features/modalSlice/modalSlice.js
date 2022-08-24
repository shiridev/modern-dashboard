import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    show: false,
  },

  reducers: {
    toggleShowMoadl: (state) => {
      state.show = !state.show;
    },
  },
});

export { modalSlice };
