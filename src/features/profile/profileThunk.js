import { customFetchProfile } from '../../utils/axios';
import { checkStatus, checkError } from '../../utils/helpers';
import axios from "axios";

export const profileCreationThunkEn = async (profile, thunkAPI) => {
  try {
    const resp = await customFetchProfile.post('/profile/createprofileen', profile);
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};

export const profileCreationThunkAr = async (profile, thunkAPI) => {
  try {
    const resp = await customFetchProfile.post('/profile/createprofilear', profile);
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};

export const getCommunityUserThunk = async (thunkAPI) => {
  try {
    const resp = await customFetchProfile.get("/user/getuser");
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};

export const updateProfileThunkEn = async ({ profilePhoto, name, email, phoneNumber, role_en, role_ar, category_en, category_ar, subCategory_en, subCategory_ar, id }, thunkAPI) => {
  try {
    const resp = await customFetchProfile.patch(`/profile/updateprofileen/${id}`, { profilePhoto, name, email, phoneNumber, role_en, role_ar, category_en, category_ar, subCategory_en, subCategory_ar });
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};


export const updateProfileThunkAr = async ({ profilePhoto, name, email, phoneNumber, role_en, role_ar, category_en, category_ar, subCategory_en, subCategory_ar, id }, thunkAPI) => {
  try {
    const resp = await customFetchProfile.patch(`/profile/updateprofilear/${id}`, { profilePhoto, name, email, phoneNumber, role_en, role_ar, category_en, category_ar, subCategory_en, subCategory_ar });
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};

export const deleteProjectThunk = async ({ profileId, projectId }, thunkAPI) => {
  try {
    const resp = await customFetchProfile.delete(`/profile/deleteproject/${profileId}/${projectId}`);
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};

export const updateProjectThunk = async ({ projectName, location, images, profileId, projectId }, thunkAPI) => {
  try {
    const resp = await customFetchProfile.patch(`/profile/updateproject/${profileId}/${projectId}`, { projectName, location, images });
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};

export const addProjectThunk = async ({ projectName, location, images, id }, thunkAPI) => {
  try {
    const resp = await customFetchProfile.patch(`/profile/addproject/${id}`, { projectName, location, images });
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};

export const reviewProjectThunk = async ({ name, title, stars, phoneNumber, review, profileId, projectId }, thunkAPI) => {
  try {
    // No Header Needed for reviewAPI (So we are using axios direct).
    const resp = await axios.patch(`https://maqawaltemp.herokuapp.com/api/profile/review/${profileId}/${projectId}`, { name, title, stars, phoneNumber, review });
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};