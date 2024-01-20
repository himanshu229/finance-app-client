import { createSlice } from "@reduxjs/toolkit";

type AuthType = {
  isAppLoading: boolean;
};

const initialState: AuthType = {
  isAppLoading: false,
};

export const LoadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isAppLoading = true;
    },
    stopLoading: (state) => {
      state.isAppLoading = false;
    },
  },
});

export const { startLoading, stopLoading } = LoadingSlice.actions;

export default LoadingSlice.reducer;
