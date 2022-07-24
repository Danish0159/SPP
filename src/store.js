import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import userReducer from "./slices/users";
import userSlice from './features/user/userSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    auth: authReducer,
    users: userReducer,
  },
  devTools: true,
});

export default store;
