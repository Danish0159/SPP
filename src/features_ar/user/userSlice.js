import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage,
} from '../../utils/localStorage';
import { loginUserThunkAr, registerUserThunkAr } from './userThunk';

const initialState = {
  isLoading: false,
  isSuccess: false,
  user: getUserFromLocalStorage(),
};

export const registerUserAr = createAsyncThunk('user/registerUserAr', registerUserThunkAr);
export const loginUserAr = createAsyncThunk('user/loginUserAr', loginUserThunkAr);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
    },
    logoutUser: (state) => {
      state.user = null;
      removeUserFromLocalStorage();
    },
  },
  extraReducers: {

    [registerUserAr.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUserAr.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      toast.success(payload.message);
    },
    [registerUserAr.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [loginUserAr.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUserAr.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const user = {
        userId: payload.user._id,
        name_en: payload.user.name_en,
        name_ar: payload.user.name_ar,
        token: payload.token,
        profile: payload.user.profile,
        role_en: payload.user.role_en,
        role_ar: payload.user.role_ar
      }
      state.user = user;
      addUserToLocalStorage(user);
    },
    [loginUserAr.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const { logoutUser, reset } = userSlice.actions;
export default userSlice.reducer;