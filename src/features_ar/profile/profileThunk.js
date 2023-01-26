import { customFetchProfile } from "../../utils/axios";
import { checkStatus, checkError } from "../../utils/helpers";
import axios from "axios";

export const profileCreationThunkAr = async (profile, thunkAPI) => {
  try {
    const resp = await customFetchProfile.post(
      "/profile/createprofilear",
      profile
    );
    if (checkStatus(resp)) {
      return thunkAPI.rejectWithValue(resp.data.message);
    }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};

export const getCommunityUserThunkAr = async (thunkAPI) => {
  try {
    const resp = await customFetchProfile.get("/user/getuserar");
    if (checkStatus(resp)) {
      return thunkAPI.rejectWithValue(resp.data.message);
    }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};

export const updateProfileThunkAr = async (
  {
    id,
    userName,
    email,
    roleEn,
    roleAr,
    categoryEn,
    categoryAr,
    subCategoryEn,
    subCategoryAr,
    companyName,
    companyAddress,
    companyVision,
    contactNumber,
    profilePhoto,
  },
  thunkAPI
) => {
  try {
    const resp = await customFetchProfile.patch(
      `/profile/updateprofilear/${id}`,
      {
        userName,
        email,
        roleEn,
        roleAr,
        categoryEn,
        categoryAr,
        subCategoryEn,
        subCategoryAr,
        companyName,
        companyAddress,
        companyVision,
        contactNumber,
        profilePhoto,
      }
    );
    if (checkStatus(resp)) {
      return thunkAPI.rejectWithValue(resp.data.message);
    }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};

export const deleteProjectThunkAr = async (
  { profileId, projectId },
  thunkAPI
) => {
  try {
    const resp = await customFetchProfile.delete(
      `/profile/deleteprojectar/${profileId}/${projectId}`
    );
    if (checkStatus(resp)) {
      return thunkAPI.rejectWithValue(resp.data.message);
    }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};

export const updateProjectThunkAr = async (
  {
    projectName,
    projectLocation,
    projectDescription,
    images,
    profileId,
    projectId,
  },
  thunkAPI
) => {
  try {
    const resp = await customFetchProfile.patch(
      `/profile/updateprojectar/${profileId}/${projectId}`,
      { projectName, projectLocation, projectDescription, images }
    );
    if (checkStatus(resp)) {
      return thunkAPI.rejectWithValue(resp.data.message);
    }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};

export const addProjectThunkAr = async (
  { projectName, projectLocation, projectDescription, images, id },
  thunkAPI
) => {
  try {
    const resp = await customFetchProfile.patch(`/profile/addprojectar/${id}`, {
      projectName,
      projectLocation,
      projectDescription,
      images,
    });
    if (checkStatus(resp)) {
      return thunkAPI.rejectWithValue(resp.data.message);
    }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};

export const reviewProjectThunkAr = async (
  { name, title, stars, phoneNumber, review, profileId, projectId },
  thunkAPI
) => {
  try {
    // No Header Needed for reviewAPI (So we are using axios direct).
    const resp = await axios.patch(
      `https://sspbackend.onrender.com/api/profile/reviewar/${profileId}/${projectId}`,
      { name, title, stars, phoneNumber, review }
    );
    if (checkStatus(resp)) {
      return thunkAPI.rejectWithValue(resp.data.message);
    }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};
