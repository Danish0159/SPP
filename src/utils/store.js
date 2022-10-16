import { configureStore } from "@reduxjs/toolkit";
import userSliceEn from '../features_en/user/userSlice';
import profileSliceEn from '../features_en/profile/profileSlice';
import guestSliceEn from '../features_en/guest/guestSlice';
import blogpostSliceEn from '../features_en/blogpost/blogpostSlice';
import userSliceAr from '../features_ar/user/userSlice';
import profileSliceAr from '../features_ar/profile/profileSlice';
import guestSliceAr from '../features_ar/guest/guestSlice';
import blogpostSliceAr from '../features_ar/blogpost/blogpostSlice';


const store = configureStore({
  reducer: {
    userEn: userSliceEn,
    profileEn: profileSliceEn,
    guestEn: guestSliceEn,
    blogpostEn: blogpostSliceEn,
    userAr: userSliceAr,
    profileAr: profileSliceAr,
    guestAr: guestSliceAr,
    blogpostAr: blogpostSliceAr,
  },
  devTools: true,
});

export default store;