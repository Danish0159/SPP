import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Initial State.
const initialState = {
  users: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// export const fetchUsers = createAsyncThunk("userSlice/fetchUsers", async ({for,category,location}) => {
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (thunkAPI) => {
    try {
      const response = await axios.get(
        "https://course-api.com/react-store-products"
      );
      //   if (response.data.status !== "SUCCESS") {
      //     return thunkAPI.rejectWithValue(response.data.message);
      //   }
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: (state) => {
      // state.users = [];
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload;
        // state.users = action.payload.users;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

// export const selectAllPosts = (state) => state.posts.posts;

// export const selectPostById = (state, postId) =>
//   state.posts.posts.find((post) => post.id === postId);

export const { reset } = userSlice.actions;
const { reducer } = userSlice;
export default reducer;

// https://codesandbox.io/s/vigorous-kirch-zrftxw?file=/src/api/client.js
