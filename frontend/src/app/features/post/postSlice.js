import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = import.meta.env.VITE_BASEURL;

const initialState = {
  Post: [],
};

export const createPost = createAsyncThunk(
  "create/post",
  async (data, thunkAPI) => {
    try {
      const res = await axios.post(`${baseUrl}/post`, data, {
        withCredentials: true,
      });
      allpost();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
);
export const allpost = createAsyncThunk(
  "allpost/Post",
  async (data, thunkAPI) => {
    try {
      const res = await axios.get(`${baseUrl}`, {
        withCredentials: true,
      });
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPost.fulfilled, (state, action) => {})
      .addCase(allpost.fulfilled, (state, action) => {
        state.Post = action.payload;
      });
  },
});
export default postSlice.reducer;
