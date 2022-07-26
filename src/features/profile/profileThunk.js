import { customFetchProfile } from '../../utils/axios';
import { checkStatus, checkError } from '../../utils/helpers';
import axios from "axios";

export const profileCreationThunk = async (profile, thunkAPI) => {
  try {
    const resp = await customFetchProfile.post('/profile/createprofile', profile);
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

export const updateProfileThunk = async ({ profilePhoto, name, email, phoneNumber, role, category, subCategory, id }, thunkAPI) => {
  try {
    const resp = await customFetchProfile.patch(`/profile/updateprofile/${id}`, { profilePhoto, name, email, phoneNumber, role, category, subCategory, });
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
    const resp = await axios.patch(`https://warm-cove-25020.herokuapp.com/api/profile/review/${profileId}/${projectId}`, { name, title, stars, phoneNumber, review });
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};