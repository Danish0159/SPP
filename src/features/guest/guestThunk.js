import { customFetch } from '../../utils/axios';
import { checkStatus, checkError } from '../../utils/helpers';

export const fetchUsersThunk = async ({ user, category, country, city, subCategory }, thunkAPI) => {
  try {
    const resp = await customFetch.get(`/public/search?role=${user}&category=${category}&country=${country}&city=${city}&subCategory=${subCategory}`);
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};

export const fetchSingleUserThunk = async ({ id }, thunkAPI) => {
  try {
    const resp = await customFetch.get(`/public/search/${id}`);
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};

export const fetchProjectsThunk = async ({ id }, thunkAPI) => {
  try {
    const resp = await customFetch.get(`/public/search/project/${id}`);
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};

export const fetchSingleProjectThunk = async ({ userId, id }, thunkAPI) => {
  try {
    const resp = await customFetch.get(`/public/search/project/${userId}/${id}`);
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};