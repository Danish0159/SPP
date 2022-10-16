import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
} from '../../utils/localStorage';
import {
  profileCreationThunkAr,
  addProjectThunkAr,
  getCommunityUserThunkAr,
  updateProfileThunkAr,
  deleteProjectThunkAr,
  updateProjectThunkAr,
  reviewProjectThunkAr,
  addIdeaThunkAr,
  sendCommentThunkAr,
  getCommentsThunkAr,
  deleteIdeaThunkAr
} from './profileThunk';

const initialState = {
  user: null,
  comments: null,
  isLoading: false,
  isSuccess: false,
  regionFlag: null,
  categoryFlag: null,
  projectsFlag: null,
};

export const profileCreationAr = createAsyncThunk('profile/profileCreationAr', profileCreationThunkAr);
export const getCommunityUserAr = createAsyncThunk('profile/getCommunityUserAr', getCommunityUserThunkAr);
export const updateProfileAr = createAsyncThunk('profile/updateProfileAr', updateProfileThunkAr);
export const deleteProjectAr = createAsyncThunk('profile/deleteProjectAr', deleteProjectThunkAr);
export const updateProjectAr = createAsyncThunk('profile/updateProjectAr', updateProjectThunkAr);
export const addProjectAr = createAsyncThunk('profile/addProjectAr', addProjectThunkAr);
export const reviewProjectAr = createAsyncThunk('profile/reviewProjectAr', reviewProjectThunkAr);
export const addIdeaAr = createAsyncThunk('profile/addIdeaAr', addIdeaThunkAr);
export const sendCommentAr = createAsyncThunk('profile/sendCommentAr', sendCommentThunkAr);
export const getCommentsAr = createAsyncThunk('profile/getCommentsAr', getCommentsThunkAr);
export const deleteIdeaAr = createAsyncThunk('profile/deleteIdeaAr', deleteIdeaThunkAr);

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
    },
    updateRegionFlag: (state, { payload }) => {
      state.regionFlag = payload;
    },
    updateCategoryFlag: (state, { payload }) => {
      state.categoryFlag = payload;
    },
  },
  extraReducers: {
    [profileCreationAr.pending]: (state) => {
      state.isLoading = true;
    },
    [profileCreationAr.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;

      const user = getUserFromLocalStorage();
      user.profile = true;
      addUserToLocalStorage(user);

      toast.success(payload.message);

      state.regionFlag = null;
      state.categoryFlag = null;
    },
    [profileCreationAr.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);

      state.regionFlag = null;
      state.categoryFlag = null;
    },

    [getCommunityUserAr.pending]: (state) => {
      state.isLoading = true;
    },
    [getCommunityUserAr.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      state.projectsFlag = payload.profile.portfolio.length;
    },
    [getCommunityUserAr.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [updateProfileAr.pending]: (state) => {
      state.isLoading = true;
    },
    [updateProfileAr.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast.success(payload.message);

      const oldUser = getUserFromLocalStorage();

      const user = {
        userId: payload.user._id,
        name_en: payload.user.name_en,
        role_en: payload.user.role_en,
        phoneNumber: payload.user.phoneNumber,
        token: oldUser.token,
        profile: payload.user.profile
      }
      state.user = payload;
      addUserToLocalStorage(user);
    },
    [updateProfileAr.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [deleteProjectAr.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteProjectAr.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast.success(payload.message);
      state.user = payload;
    },
    [deleteProjectAr.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [updateProjectAr.pending]: (state) => {
      state.isLoading = true;
    },
    [updateProjectAr.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast.success(payload.message);
      state.user = payload;
    },
    [updateProjectAr.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [addProjectAr.pending]: (state) => {
      state.isLoading = true;
    },
    [addProjectAr.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = payload;
    },
    [addProjectAr.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [reviewProjectAr.pending]: (state) => {
      state.isLoading = true;
    },
    [reviewProjectAr.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
    },
    [reviewProjectAr.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [addIdeaAr.pending]: (state) => {
      state.isLoading = true;
    },
    [addIdeaAr.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = payload;
    },
    [addIdeaAr.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [sendCommentAr.pending]: (state) => {
      state.isLoading = true;
    },
    [sendCommentAr.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = payload;
    },
    [sendCommentAr.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [getCommentsAr.pending]: (state) => {
      state.isLoading = true;
    },
    [getCommentsAr.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.comments = payload;
    },
    [getCommentsAr.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [deleteIdeaAr.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteIdeaAr.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast.success(payload.message);
      state.user = payload;
    },
    [deleteIdeaAr.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

  },
});

export const { reset, updateRegionFlag, updateCategoryFlag } = profileSlice.actions;
export default profileSlice.reducer;