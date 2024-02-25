import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = "https://65d65ebef6967ba8e3be074d.mockapi.io/";

export const getUsers = createAsyncThunk(
  "users/fetchUsers",
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await axios.get("/users", {
        params: {
          page,
          limit,
        },
      });

      return data;
    } catch (error) {
      console.log("ERROR->>> ", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  "users/addusers",
  async ({ id, users }, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${id}`, { followers: users });
      return { id, followers: response.data.followers };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTweets = createAsyncThunk(
  "tweets/addtweet",
  async (tweets, thunkAPI) => {
    try {
      const { data } = await axios.get("/tweets", tweets);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTweet = createAsyncThunk(
  "tweets/deleteTweet",
  async (tweetId, thunkAPI) => {
    try {
      await axios.delete(`/tweets/${tweetId}`);
      return tweetId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTweet = createAsyncThunk(
  "tweets/addTweet",
  async (newTweet, thunkAPI) => {
    try {
      const { data } = await axios.post("/tweets", newTweet);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
