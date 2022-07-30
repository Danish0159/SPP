import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  fetchUsersThunkEn,
  fetchUsersThunkAr,
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

export const fetchUsersEn = createAsyncThunk('guest/fetchUsersEn', fetchUsersThunkEn);
export const fetchUsersAr = createAsyncThunk('guest/fetchUsersAr', fetchUsersThunkAr);
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
    [fetchUsersEn.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchUsersEn.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.users = payload;
    },
    [fetchUsersEn.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isError = payload;
      state.users = null;
    },
    [fetchUsersAr.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchUsersAr.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.users = payload;
    },
    [fetchUsersAr.rejected]: (state, { payload }) => {
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