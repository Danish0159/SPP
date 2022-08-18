import { customFetchProfile } from '../../utils/axios';
import { checkStatus, checkError } from '../../utils/helpers';
import axios from "axios";



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


export const getCommunityUserThunkAr = async (thunkAPI) => {
  try {
    const resp = await customFetchProfile.get("/user/getuserar");
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


export const deleteProjectThunkAr = async ({ profileId, projectId }, thunkAPI) => {
  try {
    const resp = await customFetchProfile.delete(`/profile/deleteprojectar/${profileId}/${projectId}`);
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};

export const updateProjectThunkAr = async ({ projectName, location, images, profileId, projectId }, thunkAPI) => {
  try {
    const resp = await customFetchProfile.patch(`/profile/updateprojectar/${profileId}/${projectId}`, { projectName, location, images });
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};

export const addProjectThunkAr = async ({ projectName, location, images, id }, thunkAPI) => {
  try {
    const resp = await customFetchProfile.patch(`/profile/addprojectar/${id}`, { projectName, location, images });
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};

export const reviewProjectThunkAr = async ({ name, title, stars, phoneNumber, review, profileId, projectId }, thunkAPI) => {
  try {
    // No Header Needed for reviewAPI (So we are using axios direct).
    const resp = await axios.patch(`https://maqawaltemp.herokuapp.com/api/profile/reviewar/${profileId}/${projectId}`, { name, title, stars, phoneNumber, review });
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};