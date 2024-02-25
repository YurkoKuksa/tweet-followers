import { createSlice } from "@reduxjs/toolkit";
import { updateUserThunk, getUsers } from "./operations";

const initialState = {
  users: [],
  filter: "all",
  loading: false,
  error: null,
  currentPage: 1,
  follower: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  selectors: {
    selectUsers: (state) => state.users,
    selectLoading: (state) => state.loading,
    selectCurrentpage: (state) => state.currentPage,
    selectFollower: (state) => state.follower,
  },
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },

    addToFollower(state, action) {
      state.follower.push(action.payload);
    },

    deleteFollower(state, action) {
      state.follower = state.follower.filter((item) => item !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(updateUserThunk.fulfilled, (state, action) => {
        const { id, followers } = action.payload;
        state.users = state.users.map((user) =>
          user.id === id ? { ...user, followers } : user
        );
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { selectUsers, selectLoading, selectCurrentpage, selectFollower } =
  usersSlice.selectors;

export const {
  setCurrentPage,
  setLoading,
  setFollowingStatus,
  addToFollower,
  deleteFollower,
} = usersSlice.actions;

export default usersSlice.reducer;
