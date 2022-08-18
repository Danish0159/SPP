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
} from './profileThunk';

const initialState = {
  user: null,
  isLoading: false,
  isSuccess: false,
  conditionalFlag: null,
  projectsFlag: null,
};

export const profileCreationEn = createAsyncThunk('profile/profileCreationEn', profileCreationThunkEn);
export const getCommunityUserEn = createAsyncThunk('profile/getCommunityUserEn', getCommunityUserThunkEn);
export const updateProfileEn = createAsyncThunk('profile/updateProfileEn', updateProfileThunkEn);
export const deleteProjectEn = createAsyncThunk('profile/deleteProjectEn', deleteProjectThunkEn);
export const updateProjectEn = createAsyncThunk('profile/updateProjectEn', updateProjectThunkEn);
export const addProjectEn = createAsyncThunk('profile/addProjectEn', addProjectThunkEn);
export const reviewProjectEn = createAsyncThunk('profile/reviewProjectEn', reviewProjectThunkEn);

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

      state.conditionalFlag = null;
      state.projectsFlag = null;
    },
    [profileCreationEn.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);

      state.conditionalFlag = null;
      state.projectsFlag = null;
    },

    [getCommunityUserEn.pending]: (state) => {
      state.isLoading = true;
    },
    [getCommunityUserEn.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
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
      const user = {
        userId: payload.user._id,
        name_en: payload.user.name_en,
        name_ar: payload.user.name_ar,
        token: payload.token,
        profile: payload.user.profile,
        role_en: payload.user.role_en,
        role_ar: payload.user.role_ar
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
      toast.success(payload.message);
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
      setTimeout(() => {
        window.location.replace("https://maqawalupdated.netlify.app/");
      }, 3000);
      toast.success("Your Review has been submitted.", {autoClose:2500});
      
    },
    [reviewProjectEn.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

  },
});

export const { reset, updateConditionalFlag, updateProjectsFlag } = profileSlice.actions;
export default profileSlice.reducer;