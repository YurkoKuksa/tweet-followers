import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api/apiFollowers";

import axios from "axios";

axios.defaults.baseURL = "https://65d65ebef6967ba8e3be074d.mockapi.io/";

export const getUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/users");
      console.log(data);
      return data;
    } catch (error) {
      console.log("ERROR->>> ", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCards = createAsyncThunk(
  "cards/addCards",
  async (cards, thunkAPI) => {
    try {
      console.log(cards);
      const { data } = await api.post("/cards", cards);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCards = createAsyncThunk(
  "cards/deleteCards",
  async (id, thunkAPI) => {
    try {
      await api.delete(`/cards/${id}`);
      return { id };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
