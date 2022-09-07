import { customFetch } from '../../utils/axios';
import { checkStatus, checkError } from '../../utils/helpers';

export const fetchUsersThunkAr = async ({ role, category, country, city, subCategory }, thunkAPI) => {
  try {
    const resp = await customFetch.get(`/public/searchar?role=${role}&category=${category}&country=${country}&city=${city}&subCategory=${subCategory}`);
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};



export const fetchSingleUserThunkAr = async ({ id }, thunkAPI) => {
  try {
    const resp = await customFetch.get(`/public/searchar/${id}`);
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};



export const fetchProjectsThunkAr = async ({ id }, thunkAPI) => {
  try {
    const resp = await customFetch.get(`/public/searchar/project/${id}`);
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};


export const fetchSingleProjectThunkAr = async ({ userId, id }, thunkAPI) => {
  try {
    const resp = await customFetch.get(`/public/searchar/project/${userId}/${id}`);
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};