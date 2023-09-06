import { createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";

const initialState =
  localStorageService.getAccessToken() &&
  localStorageService.getTokenExpiresDate() > new Date().getTime()
    ? {
        auth: { userLogin: localStorageService.getUserLogin() },
        isLoading: false,
        error: null,
      }
    : {
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
      state.auth = { userLogin: action.payload };
    },
    authRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: appReducer, actions } = appSlice;

const { authRequested, authRequestSuccess, authRequestFailed } = actions;

export const logIn =
  ({ login, password }, redirect) =>
  async (dispatch) => {
    dispatch(authRequested());
    try {
      const accessToken = await authService.login({ login, password });
      localStorageService.setTokens(accessToken, login);
      dispatch(authRequestSuccess(login));
      redirect();
    } catch (error) {
      console.log(error);
      dispatch(authRequestFailed(error.response.data.message));
    }
  };

export const getAppLoadingStatus = () => (state) => state.app.isLoading;
export const getUserLogin = () => (state) => state.app.auth.userLogin;

export default appReducer;
