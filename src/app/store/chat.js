import { createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";
import localStorageService from "../services/localStorage.service";

const socket = io("https://localhost:8008/chat", { extraHeaders: { token: localStorageService.getAccessToken() } });

const initialState = {
  messages: [],
  socketOpen: false,
  isLoading: true,
  error: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    chatConnected: (state) => {
      state.isLoading = true;
    },
    chatConnectionSuccess: (state) => {
      state.socketOpen = true;
    },
    chatConnectionFailed: (state, action) => {
      state.error = action.payload;
    },
    chatDisconnected: (state) => {
      state.socketOpen = true;
    },
    receiveMessageList: (state, action) => {
      state.messages = action.payload;
    },
    receiveNewMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

const { reducer: chatReducer, actions } = chatSlice;

const { chatConnected, chatConnectionSuccess, chatConnectionFailed, chatDisconnected, receiveNewMessage } = actions;

export const openChat = () => async (dispatch) => {
  dispatch(chatConnected());
  try {
    socket.on("connect", () => {
      dispatch(chatConnectionSuccess());
      console.log("Соединение установлено");
    });

    socket.on("message", (data) => {
      dispatch(receiveNewMessage(data));
    });

    socket.on("disconnect", () => {
      dispatch(chatDisconnected());
      console.log("Соединение закрыто");
    });
  } catch (error) {
    dispatch(chatConnectionFailed(error));
  }
};

export const sendMessage = (data) => async (dispatch) => {
  try {
    socket.emit("message", data);
  } catch (error) {
    console.log(error);
  }
};

export const getMessageList = () => async (dispatch) => {
  try {
    socket.emit("messages");
  } catch (error) {
    console.log(error);
  }
};

export const getChatLoadingStatus = () => (state) => state.chat.isLoading;
export const getChatMessages = () => (state) => state.chat.messages;

export default chatReducer;
