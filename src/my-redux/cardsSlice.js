// // import { createSlice } from "@reduxjs/toolkit";

// // const cardsSlice = createSlice({
// //   name: "cards",
// //   initialState: {
// //     followingStatus: "following",
// //   },
// //   reducers: {
// //     toggleFollowStatus: (state) => {
// //       state.followingStatus =
// //         state.followingStatus === "following" ? "follow" : "following";
// //     },
// //   },
// // });

// // export const { toggleFollowStatus } = cardsSlice.actions;
// // export default cardsSlice.reducer;
// // cardsSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const toggleFollowStatus = createAsyncThunk(
//   "cards/toggleFollowStatus",
//   async (id, thunkAPI) => {
//     try {
//       // Отримання даних з сервера та виконання необхідних дій, наприклад, відправлення запиту на сервер
//       // Ця функція має повернути результат асинхронної операції
//       return id;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// const cardsSlice = createSlice({
//   name: "cards",
//   initialState: {
//     cards: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     // Ваші інші редуктори, які не використовують асинхронні дії
//   },
//   extraReducers: {
//     [toggleFollowStatus.pending]: (state, action) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [toggleFollowStatus.fulfilled]: (state, action) => {
//       // Обробка успішного завершення асинхронної операції
//       state.loading = false;
//       state.error = null;
//       const id = action.payload;
//       const card = state.cards.find((card) => card.id === id);
//       if (card) {
//         card.followingStatus =
//           card.followingStatus === "following" ? "follow" : "following";
//       }
//     },
//     [toggleFollowStatus.rejected]: (state, action) => {
//       // Обробка помилки асинхронної операції
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export default cardsSlice.reducer;
