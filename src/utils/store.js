import { configureStore } from "@reduxjs/toolkit";
import userSliceEn from '../features_en/user/userSlice';
import profileSliceEn from '../features_en/profile/profileSlice';
import guestSliceEn from '../features_en/guest/guestSlice';
import userSliceAr from '../features_ar/user/userSlice';
import profileSliceAr from '../features_ar/profile/profileSlice';
import guestSliceAr from '../features_ar/guest/guestSlice';


const store = configureStore({
  reducer: {
    userEn: userSliceEn,
    profileEn: profileSliceEn,
    guestEn: guestSliceEn,
    userAr: userSliceAr,
    profileAr: profileSliceAr,
    guestAr: guestSliceAr,
  },
  devTools: true,
});

export default store;