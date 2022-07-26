import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import userReducer from "./slices/users";
import userSlice from './features/user/userSlice';
import profileSlice from './features/profile/profileSlice';


const store = configureStore({
  reducer: {
    user: userSlice,
    profile: profileSlice,
    auth: authReducer,
    users: userReducer,
  },
  devTools: true,
});

export default store;
