import { configureStore } from "@reduxjs/toolkit";
import listingReducer from "./reducers/listingPage";
export const store = configureStore({
  reducer: {
    list: listingReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
