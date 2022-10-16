import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
} from '../../utils/localStorage';
import {
  profileCreationThunkEn,
  addProjectThunkEn,
  getCommunityUserThunkEn,
  updateProfileThunkEn,
  deleteProjectThunkEn,
  updateProjectThunkEn,
  reviewProjectThunkEn,
  addIdeaThunkEn,
  sendCommentThunkEn,
  getCommentsThunkEn,
  deleteIdeaThunkEn
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

export const profileCreationEn = createAsyncThunk('profile/profileCreationEn', profileCreationThunkEn);
export const getCommunityUserEn = createAsyncThunk('profile/getCommunityUserEn', getCommunityUserThunkEn);
export const updateProfileEn = createAsyncThunk('profile/updateProfileEn', updateProfileThunkEn);
export const deleteProjectEn = createAsyncThunk('profile/deleteProjectEn', deleteProjectThunkEn);
export const updateProjectEn = createAsyncThunk('profile/updateProjectEn', updateProjectThunkEn);
export const addProjectEn = createAsyncThunk('profile/addProjectEn', addProjectThunkEn);
export const reviewProjectEn = createAsyncThunk('profile/reviewProjectEn', reviewProjectThunkEn);
export const addIdeaEn = createAsyncThunk('profile/addIdeaEn', addIdeaThunkEn);
export const sendCommentEn = createAsyncThunk('profile/sendCommentEn', sendCommentThunkEn);
export const getCommentsEn = createAsyncThunk('profile/getCommentsEn', getCommentsThunkEn);
export const deleteIdeaEn = createAsyncThunk('profile/deleteIdeaEn', deleteIdeaThunkEn);

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
    [profileCreationEn.pending]: (state) => {
      state.isLoading = true;
    },
    [profileCreationEn.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;

      const user = getUserFromLocalStorage();
      user.profile = true;
      addUserToLocalStorage(user);

      toast.success(payload.message);

      state.regionFlag = null;
      state.categoryFlag = null;
    },
    [profileCreationEn.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);

      state.regionFlag = null;
      state.categoryFlag = null;
    },

    [getCommunityUserEn.pending]: (state) => {
      state.isLoading = true;
    },
    [getCommunityUserEn.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      state.projectsFlag = payload.profile.portfolio.length;
    },
    [getCommunityUserEn.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [updateProfileEn.pending]: (state) => {
      state.isLoading = true;
    },
    [updateProfileEn.fulfilled]: (state, { payload }) => {
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
    [updateProfileEn.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [deleteProjectEn.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteProjectEn.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast.success(payload.message);
      state.user = payload;
    },
    [deleteProjectEn.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [updateProjectEn.pending]: (state) => {
      state.isLoading = true;
    },
    [updateProjectEn.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast.success(payload.message);
      state.user = payload;
    },
    [updateProjectEn.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [addProjectEn.pending]: (state) => {
      state.isLoading = true;
    },
    [addProjectEn.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = payload;
    },
    [addProjectEn.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [reviewProjectEn.pending]: (state) => {
      state.isLoading = true;
    },
    [reviewProjectEn.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
    },
    [reviewProjectEn.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [addIdeaEn.pending]: (state) => {
      state.isLoading = true;
    },
    [addIdeaEn.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = payload;
    },
    [addIdeaEn.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [sendCommentEn.pending]: (state) => {
      state.isLoading = true;
    },
    [sendCommentEn.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = payload;
    },
    [sendCommentEn.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [getCommentsEn.pending]: (state) => {
      state.isLoading = true;
    },
    [getCommentsEn.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.comments = payload;
    },
    [getCommentsEn.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [deleteIdeaEn.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteIdeaEn.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast.success(payload.message);
      state.user = payload;
    },
    [deleteIdeaEn.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

  },
});

export const { reset, updateRegionFlag, updateCategoryFlag } = profileSlice.actions;
export default profileSlice.reducer;