import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api/apiFollowers";

export const getUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("/users");
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
