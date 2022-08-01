import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  fetchUsersThunkEn,
  fetchUsersThunkAr,
  fetchSingleUserThunkEn,
  fetchSingleUserThunkAr,
  fetchProjectsThunkEn,
  fetchProjectsThunkAr,
  fetchSingleProjectThunkEn,
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

export const fetchUsersEn = createAsyncThunk('guest/fetchUsersEn', fetchUsersThunkEn);
export const fetchUsersAr = createAsyncThunk('guest/fetchUsersAr', fetchUsersThunkAr);
export const fetchSingleUserEn = createAsyncThunk('guest/fetchSingleUserEn', fetchSingleUserThunkEn);
export const fetchSingleUserAr = createAsyncThunk('guest/fetchSingleUserAr', fetchSingleUserThunkAr);
export const fetchProjectsEn = createAsyncThunk('guest/fetchProjectsEn', fetchProjectsThunkEn);
export const fetchProjectsAr = createAsyncThunk('guest/fetchProjectsAr', fetchProjectsThunkAr);
export const fetchSingleProjectEn = createAsyncThunk('guest/fetchSingleProjectEn', fetchSingleProjectThunkEn);
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

    [fetchSingleUserEn.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchSingleUserEn.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.single_user = payload;
    },
    [fetchSingleUserEn.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isError = payload;
      state.single_user = {};
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

    [fetchProjectsEn.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchProjectsEn.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.projects = payload;
    },
    [fetchProjectsEn.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
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

    [fetchSingleProjectEn.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchSingleProjectEn.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.single_project = payload;
    },
    [fetchSingleProjectEn.rejected]: (state, { payload }) => {
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