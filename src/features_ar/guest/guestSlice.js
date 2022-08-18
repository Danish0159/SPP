import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  fetchUsersThunkAr,
  fetchSingleUserThunkAr,
  fetchProjectsThunkAr,
  fetchSingleProjectThunkAr,
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

export const fetchUsersAr = createAsyncThunk('guest/fetchUsersAr', fetchUsersThunkAr);
export const fetchSingleUserAr = createAsyncThunk('guest/fetchSingleUserAr', fetchSingleUserThunkAr);
export const fetchProjectsAr = createAsyncThunk('guest/fetchProjectsAr', fetchProjectsThunkAr);
export const fetchSingleProjectAr = createAsyncThunk('guest/fetchSingleProjectAr', fetchSingleProjectThunkAr);

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

    [fetchSingleUserAr.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchSingleUserAr.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.single_user = payload;
    },
    [fetchSingleUserAr.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isError = payload;
      state.single_user = {};
    },
    
    [fetchProjectsAr.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchProjectsAr.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.projects = payload;
    },
    [fetchProjectsAr.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [fetchSingleProjectAr.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchSingleProjectAr.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.single_project = payload;
    },
    [fetchSingleProjectAr.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

  },
});

export const { reset } = guestSlice.actions;
export default guestSlice.reducer;