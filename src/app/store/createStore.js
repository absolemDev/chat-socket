import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appReducer from "./app";
import topicsReducer from "./topics";

const rootReducer = combineReducers({
  app: appReducer,
  topics: topicsReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
