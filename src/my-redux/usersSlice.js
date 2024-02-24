import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./operations";

const initialState = {
  users: [],
  filter: "all",
  loading: true,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    //   .addCase(addContactsThunk.fulfilled, (state, action) => {
    //     state.contacts = state.contacts.concat(action.payload);
    //   })
    //   .addCase(deleteContactsThunk.fulfilled, (state, action) => {
    //     state.contacts = state.contacts.filter(
    //       (contact) => contact.id !== action.payload.id
    //     );
    //   });
  },
});

export default usersSlice.reducer;
