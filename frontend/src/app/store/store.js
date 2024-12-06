import { configureStore } from "@reduxjs/toolkit";
import postReducers from "../features/post/postSlice";
import userReducers from "../features/user/userSlice";
export const store = configureStore({
  reducer: {
    posts: postReducers,
    user: userReducers,
  },
});
