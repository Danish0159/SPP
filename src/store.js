import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import userReducer from "./slices/users";

const reducer = {
  auth: authReducer,
  users: userReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
