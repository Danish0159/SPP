import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  fetchUsersThunkEn,
  fetchSingleUserThunkEn,
  fetchProjectsThunkEn,
  fetchSingleProjectThunkEn,
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
export const fetchSingleUserEn = createAsyncThunk('guest/fetchSingleUserEn', fetchSingleUserThunkEn);
export const fetchProjectsEn = createAsyncThunk('guest/fetchProjectsEn', fetchProjectsThunkEn);
export const fetchSingleProjectEn = createAsyncThunk('guest/fetchSingleProjectEn', fetchSingleProjectThunkEn);

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

  },
});

export const { reset } = guestSlice.actions;
export default guestSlice.reducer;