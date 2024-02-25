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

import usersSlice from "./usersSlice";

const persistConfig = {
  key: "users",
  version: 1,
  storage,
  whitelist: ["follower"],
};

export const store = configureStore({
  reducer: {
    users: persistReducer(persistConfig, usersSlice),

    // tweets: tweetsSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
