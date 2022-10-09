import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage,
} from '../../utils/localStorage';
import { loginUserThunkEn, registerUserThunkEn } from './userThunk';

const initialState = {
  isLoading: false,
  isSuccess: false,
  user: getUserFromLocalStorage(),
};

export const registerUserEn = createAsyncThunk('user/registerUserEn', registerUserThunkEn);
export const loginUserEn = createAsyncThunk('user/loginUserEn', loginUserThunkEn);

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
    [registerUserEn.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUserEn.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      toast.success(payload.message);
    },
    [registerUserEn.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [loginUserEn.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUserEn.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const user = {
        userId: payload.user._id,
        name_en: payload.user.name_en,
        role_en: payload.user.role_en,
        phoneNumber: payload.user.phoneNumber,
        token: payload.token,
        profile: payload.user.profile,
      }
      state.user = user;
      addUserToLocalStorage(user);
    },
    [loginUserEn.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

  }
});

export const { logoutUser, reset } = userSlice.actions;
export default userSlice.reducer;


