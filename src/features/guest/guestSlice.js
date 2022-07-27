import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  fetchUsersThunk,
  fetchSingleUserThunk,
  fetchProjectsThunk,
  fetchSingleProjectThunk,
} from './guestThunk';

const initialState = {
  users: null,
  single_user: {},
  projects: [],
  single_project: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const fetchUsers = createAsyncThunk('guest/fetchUsers', fetchUsersThunk);
export const fetchSingleUser = createAsyncThunk('guest/fetchSingleUser', fetchSingleUserThunk);
export const fetchProjects = createAsyncThunk('guest/fetchProjects', fetchProjectsThunk);
export const fetchSingleProject = createAsyncThunk('guest/fetchSingleProject', fetchSingleProjectThunk);

const guestSlice = createSlice({
  name: 'guest',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.users = payload;
    },
    [fetchUsers.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isError = payload;
      state.users = null;
    },

    [fetchSingleUser.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchSingleUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.single_user = payload;
    },
    [fetchSingleUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [fetchProjects.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchProjects.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.projects = payload;
    },
    [fetchProjects.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [fetchSingleProject.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchSingleProject.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.single_project = payload;
    },
    [fetchSingleProject.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

  },
});

export const { reset } = guestSlice.actions;
export default guestSlice.reducer;