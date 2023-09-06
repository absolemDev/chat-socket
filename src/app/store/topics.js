import { createSlice } from "@reduxjs/toolkit";
import topicService from "../services/topic.service";

const initialState = {
  entities: [],
  isLoading: false,
  error: null,
};

const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    topicRequested: (state) => {
      state.isLoading = true;
    },
    topicRequestSuccess: (state, action) => {
      state.isLoading = false;
    },
    topicRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: topicsReducer, actions } = topicsSlice;

const { topicRequested, topicRequestSuccess, topicRequestFailed } = actions;

export const loadTopicList = () => async (dispatch) => {
  dispatch(topicRequested());
  try {
    const data = await topicService.fetchAll();
    dispatch(topicRequestSuccess({ userId: data.userId }));
  } catch (error) {
    dispatch(topicRequestFailed(error));
  }
};

export const getTopicsLoadingStatus = () => (state) => state.topics.isLoading;

export default topicsReducer;
