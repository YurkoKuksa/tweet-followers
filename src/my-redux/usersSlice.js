import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./operations";

const initialState = {
  users: [],
  filter: "all",
  loading: false,
  error: null,
  currentPage: 1,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { setLoading, setCurrentPage } = usersSlice.actions;

export default usersSlice.reducer;
