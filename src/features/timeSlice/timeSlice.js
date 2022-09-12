import { createSlice } from "@reduxjs/toolkit";

var date = new Date();

export const timeSlice = createSlice({
  name: "timeSlice",
  initialState: {
    hour:
      date.getHours().toString().length === 1
        ? `0${date.getHours()}`
        : date.getHours(),
    minute:
      date.getMinutes().toString().length === 1
        ? `0${date.getMinutes()}`
        : date.getMinutes(),
  },
  reducers: {
    updateTime: (state, params) => {
      state.hour = params.payload.hour;
      state.minute = params.payload.minute;
    },
  },
});
