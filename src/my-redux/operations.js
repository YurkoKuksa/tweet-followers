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

export const addFollower = createAsyncThunk(
  "follower/addfollower",
  async (followers, thunkAPI) => {
    try {
      const { data } = await axios.post("/followers", followers);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const deleteCards = createAsyncThunk(
//   "cards/deleteCards",
//   async (id, thunkAPI) => {
//     try {
//       await api.delete(`/cards/${id}`);
//       return { id };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
