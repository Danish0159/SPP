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

export const loginUserThunk = async (user, thunkAPI) => {
  try {
    const resp = await customFetch.post('/user/signin', user);
    if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
    return resp.data;
  } catch (error) {
    const message = checkError(error);
    return thunkAPI.rejectWithValue(message);
  }
};