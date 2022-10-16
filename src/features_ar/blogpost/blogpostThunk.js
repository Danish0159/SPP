import { customFetchProfile, customFetch } from '../../utils/axios';
import { checkStatus, checkError } from '../../utils/helpers';


export const blogpostCreationThunkAr = async (blogpost, thunkAPI) => {
    try {
        const resp = await customFetchProfile.post('/blogpost/createblogpostar', blogpost);
        if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
        return resp.data;
    } catch (error) {
        const message = checkError(error);
        return thunkAPI.rejectWithValue(message);
    }
};


export const searchBlogPostsThunkAr = async (thunkAPI) => {
    try {
        const resp = await customFetch.get('/blogpost/searchar');
        if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
        return resp.data;
    } catch (error) {
        const message = checkError(error);
        return thunkAPI.rejectWithValue(message);
    }
};


export const searchBlogPostThunkAr = async ({ blogpostId }, thunkAPI) => {
    try {
        const resp = await customFetch.get(`/blogpost/searchar/${blogpostId}`);
        if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
        return resp.data;
    } catch (error) {
        const message = checkError(error);
        return thunkAPI.rejectWithValue(message);
    }
};


export const searchBlogPostsByIdThunkAr = async ({ profileId }, thunkAPI) => {
    try {
        const resp = await customFetchProfile.get(`/blogpost/searchbyidar/${profileId}`);
        if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
        return resp.data;
    } catch (error) {
        const message = checkError(error);
        return thunkAPI.rejectWithValue(message);
    }
};


export const sendMessageThunkAr = async ({ blogpostId, message, profileId }, thunkAPI) => {
    try {
        const resp = await customFetch.patch(`/blogpost/sendmessagear/${blogpostId}`, { message, profileId });
        if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
        return resp.data;
    } catch (error) {
        const message = checkError(error);
        return thunkAPI.rejectWithValue(message);
    }
};


export const sendLikeThunkAr = async ({ blogpostId, like, profileId }, thunkAPI) => {
    try {
        const resp = await customFetch.patch(`/blogpost/sendlikear/${blogpostId}`, { like, profileId });
        if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
        return resp.data;
    } catch (error) {
        const message = checkError(error);
        return thunkAPI.rejectWithValue(message);
    }
};


export const getMessagesByIdThunkAr = async ({ blogpostId }, thunkAPI) => {
    try {
        const resp = await customFetch.get(`/blogpost/getmessagesar/${blogpostId}`);
        if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
        return resp.data;
    } catch (error) {
        const message = checkError(error);
        return thunkAPI.rejectWithValue(message);
    }
};


export const getLikesByIdThunkAr = async ({ blogpostId }, thunkAPI) => {
    try {
        const resp = await customFetch.get(`/blogpost/getlikesar/${blogpostId}`);
        if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
        return resp.data;
    } catch (error) {
        const message = checkError(error);
        return thunkAPI.rejectWithValue(message);
    }
};


export const deleteBlogPostThunkAr = async ({ profileId, blogpostId }, thunkAPI) => {
    try {
        const resp = await customFetchProfile.delete(`/blogpost/deleteblogpostar/${profileId}/${blogpostId}`);
        if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
        return resp.data;
    } catch (error) {
        const message = checkError(error);
        return thunkAPI.rejectWithValue(message);
    }
};