import { customFetchProfile, customFetch } from '../../utils/axios';
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


export const updateProfileThunkEn = async ({ id, userName, email, roleEn, roleAr, categoryEn, categoryAr, subCategoryEn, subCategoryAr, companyName, companyAddress, companyVision, contactNumber, profilePhoto }, thunkAPI) => {
  try {
    const resp = await customFetchProfile.patch(`/profile/updateprofileen/${id}`, { userName, email, roleEn, roleAr, categoryEn, categoryAr, subCategoryEn, subCategoryAr, companyName, companyAddress, companyVision, contactNumber, profilePhoto });
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};


export const deleteProjectThunkEn = async ({ profileId, projectId }, thunkAPI) => {
  try {
    const resp = await customFetchProfile.patch(`/profile/deleteprojecten/${profileId}/${projectId}`);
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};


export const updateProjectThunkEn = async ({ projectName, projectLocation, projectDescription, images, profileId, projectId }, thunkAPI) => {
  try {
    const resp = await customFetchProfile.patch(`/profile/updateprojecten/${profileId}/${projectId}`, { projectName, projectLocation, projectDescription, images });
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};


export const addProjectThunkEn = async ({ id, projectName, projectLocation, projectDescription, images }, thunkAPI) => {
  try {
    const resp = await customFetchProfile.patch(`/profile/addprojecten/${id}`, { projectName, projectLocation, projectDescription, images });
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
    const resp = await axios.patch(`https://backendsaudia.herokuapp.com/api/profile/reviewen/${profileId}/${projectId}`, { name, title, stars, phoneNumber, review });
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};


export const addIdeaThunkEn = async ({ id, ideaCaption, images }, thunkAPI) => {
  try {
    const resp = await customFetchProfile.patch(`/profile/addideaen/${id}`, { ideaCaption, images });
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};


export const sendCommentThunkEn = async ({ comment, profileId, ideaId }, thunkAPI) => {
  try {
    const resp = await customFetch.patch(`/profile/sendcommenten/${profileId}/${ideaId}`, { comment });
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};


export const getCommentsThunkEn = async ({ profileId, ideaId }, thunkAPI) => {
  try {
    const resp = await customFetch.get(`/profile/getcommentsen/${profileId}/${ideaId}`);
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};


export const deleteIdeaThunkEn = async ({ profileId, ideaId }, thunkAPI) => {
  try {
    const resp = await customFetchProfile.patch(`/profile/deleteideaen/${profileId}/${ideaId}`);
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};