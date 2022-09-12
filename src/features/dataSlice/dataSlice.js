import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "modalSlice",
  initialState: {
    products: [],
    productsLoading: false,
    users: [],
    usersLoading: false,
    error: "",
  },

  reducers: {
    setProducts: (state, params) => {
      state.products = params.payload.data;
    },
    setUsers: (state, params) => {
      state.users = params.payload.data;
    },
    setError: (state, params) => {
      state.error = params.payload.error;
    },
  },
});

export { dataSlice };
