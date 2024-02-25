import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import tweetsReducer from "./tweetsSlice";

import usersSlice from "./usersSlice";

const persistConfig = {
  key: "users",
  version: 1,
  storage,
  whitelist: ["follower", "currentPage"],
};

export const store = configureStore({
  reducer: {
    users: persistReducer(persistConfig, usersSlice),
    tweets: tweetsReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
