import { customFetch } from '../../utils/axios';
import { checkStatus, checkError } from '../../utils/helpers';

export const registerUserThunkEn = async (user, thunkAPI) => {
  try {
    const resp = await customFetch.post("/user/signupen", user);
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};

export const registerUserThunkAr = async (user, thunkAPI) => {
  try {
    const resp = await customFetch.post("/user/signupar", user);
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};

export const loginUserThunkEn = async (user, thunkAPI) => {
  try {
    const resp = await customFetch.post('/user/signinen', user);
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};

export const loginUserThunkAr = async (user, thunkAPI) => {
  try {
    const resp = await customFetch.post('/user/signinar', user);
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};