import { createSlice } from "@reduxjs/toolkit";
import { addTweet, addTweets, deleteTweet } from "./operations";

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: {
    tweets: [],
    loading: false,
    error: null,
  },
  reducers: {
    tweetDeleted(state, action) {
      state.tweets = state.tweets.filter(
        (tweet) => tweet.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTweets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTweets.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.tweets = action.payload;
      })
      .addCase(addTweets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteTweet.fulfilled, (state, action) => {
        state.tweets = state.tweets.filter(
          (tweet) => tweet.id !== action.payload
        );
      })
      .addCase(deleteTweet.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(addTweet.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTweet.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.tweets.push(action.payload);
      })
      .addCase(addTweet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectTweets = (state) => state.tweets.tweets;
export const selectTweetById = (tweetId) => (state) =>
  state.tweets.tweets.find((tweet) => tweet.id === tweetId);

export default tweetsSlice.reducer;
