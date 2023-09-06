import { createSlice } from "@reduxjs/toolkit";
import topicService from "../services/topic.service";

const initialState = {
  entities: [],
  isLoading: true,
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
      state.entities = action.payload;
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
    const { result } = await topicService.fetchAll();
    dispatch(
      topicRequestSuccess(
        Object.keys(result.topics).map((key) => ({
          id: key,
          title: result.topics[key],
        }))
      )
    );
  } catch (error) {
    dispatch(topicRequestFailed(error));
  }
};

export const getTopicsLoadingStatus = () => (state) => state.topics.isLoading;
export const getTopicList = () => (state) => state.topics.entities;

export default topicsReducer;
