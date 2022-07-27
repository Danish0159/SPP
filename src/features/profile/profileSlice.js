import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
} from '../../utils/localStorage';
import {
  profileCreationThunk,
  addProjectThunk,
  getCommunityUserThunk,
  updateProfileThunk,
  deleteProjectThunk,
  updateProjectThunk,
  reviewProjectThunk,
} from './profileThunk';

const initialState = {
  user: null,
  isLoading: false,
  isSuccess: false,
  conditionalFlag: null,
  projectsFlag: null,
};

export const profileCreation = createAsyncThunk('profile/profileCreation', profileCreationThunk);
export const getCommunityUser = createAsyncThunk('profile/getCommunityUser', getCommunityUserThunk);
export const updateProfile = createAsyncThunk('profile/updateProfile', updateProfileThunk);
export const deleteProject = createAsyncThunk('profile/deleteProject', deleteProjectThunk);
export const updateProject = createAsyncThunk('profile/updateProject', updateProjectThunk);
export const addProject = createAsyncThunk('profile/addProject', addProjectThunk);
export const reviewProject = createAsyncThunk('profile/reviewProject', reviewProjectThunk);

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
    },
    updateConditionalFlag: (state, { payload }) => {
      state.conditionalFlag = payload;
    },
    updateProjectsFlag: (state, { payload }) => {
      state.projectsFlag = payload;
    },
  },
  extraReducers: {
    [profileCreation.pending]: (state) => {
      state.isLoading = true;
    },
    [profileCreation.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;

      const user = getUserFromLocalStorage();
      user.profile = true;
      addUserToLocalStorage(user);

      toast.success(payload.message);

      state.conditionalFlag = null;
      state.projectsFlag = null;
    },
    [profileCreation.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);

      state.conditionalFlag = null;
      state.projectsFlag = null;
    },

    [getCommunityUser.pending]: (state) => {
      state.isLoading = true;
    },
    [getCommunityUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
    },
    [getCommunityUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [updateProfile.pending]: (state) => {
      state.isLoading = true;
    },
    [updateProfile.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast.success(payload.message);
      state.user = payload;
    },
    [updateProfile.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [deleteProject.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteProject.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast.success(payload.message);
      state.user = payload;
    },
    [deleteProject.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [updateProject.pending]: (state) => {
      state.isLoading = true;
    },
    [updateProject.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast.success(payload.message);
      state.user = payload;
    },
    [updateProject.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [addProject.pending]: (state) => {
      state.isLoading = true;
    },
    [addProject.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast.success(payload.message);
      state.user = payload;
    },
    [addProject.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [reviewProject.pending]: (state) => {
      state.isLoading = true;
    },
    [reviewProject.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast.success("Your Review has been submitted.");
    },
    [reviewProject.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const { reset, updateConditionalFlag, updateProjectsFlag } = profileSlice.actions;
export default profileSlice.reducer;