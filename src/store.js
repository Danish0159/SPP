import { configureStore } from "@reduxjs/toolkit";
import userSlice from './features/user/userSlice';
import profileSlice from './features/profile/profileSlice';
import guestSlice from './features/guest/guestSlice';


const store = configureStore({
  reducer: {
    user: userSlice,
    profile: profileSlice,
    guest: guestSlice,
  },
  devTools: true,
});

export default store;