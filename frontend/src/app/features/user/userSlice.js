import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = import.meta.env.VITE_BASEURL;
const initialState = {
  User: null,
};
export const loginUser = createAsyncThunk(
  "user/login",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/login`, data, {
        withCredentials: true,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const signUpUser = createAsyncThunk(
  "user/signup",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/signup`, data, {
        withCredentials: true,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const fetchUser = createAsyncThunk("usesr/get", async () => {
  try {
    const response = await axios.get(`${baseUrl}/user`, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    console.log(err, "error");
  }
});
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.User = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.User = action.payload;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.User = action.payload;
      });
  },
});

export default userSlice.reducer;
