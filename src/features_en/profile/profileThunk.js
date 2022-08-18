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



export const getCommunityUserThunkEn = async (thunkAPI) => {
  try {
    const resp = await customFetchProfile.get("/user/getuseren");
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




export const deleteProjectThunkEn = async ({ profileId, projectId }, thunkAPI) => {
  try {
    const resp = await customFetchProfile.delete(`/profile/deleteprojecten/${profileId}/${projectId}`);
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};



export const updateProjectThunkEn = async ({ projectName, location, images, profileId, projectId }, thunkAPI) => {
  try {
    const resp = await customFetchProfile.patch(`/profile/updateprojecten/${profileId}/${projectId}`, { projectName, location, images });
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};



export const addProjectThunkEn = async ({ projectName, location, images, id }, thunkAPI) => {
  try {
    const resp = await customFetchProfile.patch(`/profile/addprojecten/${id}`, { projectName, location, images });
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};



export const reviewProjectThunkEn = async ({ name, title, stars, phoneNumber, review, profileId, projectId }, thunkAPI) => {
  try {
    // No Header Needed for reviewAPI (So we are using axios direct).
    const resp = await axios.patch(`https://maqawaltemp.herokuapp.com/api/profile/reviewen/${profileId}/${projectId}`, { name, title, stars, phoneNumber, review });
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};

