import { createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";

const initialState = {
  auth: null,
  isLoading: false,
  error: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    authRequested: (state) => {
      state.isLoading = true;
    },
    authRequestSuccess: (state, action) => {
      state.isLoading = false;
    },
    authRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: appReducer, actions } = appSlice;

const { authRequested, authRequestSuccess, authRequestFailed } = actions;

export const logIn = (payload, redirect) => async (dispatch) => {
  dispatch(authRequested());
  try {
    const data = await authService.login(payload);
    localStorageService.setTokens(data);
    dispatch(authRequestSuccess({ userId: data.userId }));
    redirect();
  } catch (error) {
    dispatch(authRequestFailed(error));
  }
};

export const getAppLoadingStatus = () => (state) => state.app.isLoading;

export default appReducer;
