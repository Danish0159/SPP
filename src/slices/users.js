import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Initial State.
const initialState = {
  users: [],
  single_user: {},
  projects: [],
  single_project: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async ({ user, category, location }, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://warm-cove-25020.herokuapp.com/api/public/search?role=${user}&category=${category}&location=${location}`
      );
      if (response.data.status !== "SUCCESS") {
        return thunkAPI.rejectWithValue(response.data.message);
      }
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

export const fetchSingleUser = createAsyncThunk(
  "users/fetchSingleUser",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://warm-cove-25020.herokuapp.com/api/public/search/${id}`
      );
      if (response.data.status !== "SUCCESS") {
        return thunkAPI.rejectWithValue(response.data.message);
      }
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

export const fetchProjects = createAsyncThunk(
  "users/fetchProjects",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://warm-cove-25020.herokuapp.com/api/public/search/project/${id}`
      );
      if (response.data.status !== "SUCCESS") {
        return thunkAPI.rejectWithValue(response.data.message);
      }
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

export const fetchSingleProject = createAsyncThunk(
  "users/fetchSingleProject",
  async ({ userId, id }, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://warm-cove-25020.herokuapp.com/api/public/search/project/${userId}/${id}`
      );
      if (response.data.status !== "SUCCESS") {
        return thunkAPI.rejectWithValue(response.data.message);
      }
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
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    resetData: (state) => {
      state.users = [];
      state.single_user = {};
      state.projects = [];
      state.single_project = {};
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
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(fetchSingleUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSingleUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.single_user = action.payload;
      })
      .addCase(fetchSingleUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(fetchProjects.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(fetchSingleProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSingleProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.single_project = action.payload;
      })
      .addCase(fetchSingleProject.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

// export const selectAllPosts = (state) => state.posts.posts;

// export const selectPostById = (state, postId) =>
//   state.posts.posts.find((post) => post.id === postId);

export const { reset, resetData } = userSlice.actions;
const { reducer } = userSlice;
export default reducer;

// https://codesandbox.io/s/vigorous-kirch-zrftxw?file=/src/api/client.js
