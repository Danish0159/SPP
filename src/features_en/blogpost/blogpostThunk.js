import { customFetchProfile, customFetch } from '../../utils/axios';
import { checkStatus, checkError } from '../../utils/helpers';


export const blogpostCreationThunkEn = async (blogpost, thunkAPI) => {
    try {
        const resp = await customFetchProfile.post('/blogpost/createblogposten', blogpost);
        if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
        return resp.data;
    } catch (error) {
        const message = checkError(error);
        return thunkAPI.rejectWithValue(message);
    }
};


export const searchBlogPostsThunkEn = async (thunkAPI) => {
    try {
        const resp = await customFetch.get('/blogpost/searchen');
        if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
        return resp.data;
    } catch (error) {
        const message = checkError(error);
        return thunkAPI.rejectWithValue(message);
    }
};


export const searchBlogPostThunkEn = async ({ blogpostId }, thunkAPI) => {
    try {
        const resp = await customFetch.get(`/blogpost/searchen/${blogpostId}`);
        if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
        return resp.data;
    } catch (error) {
        const message = checkError(error);
        return thunkAPI.rejectWithValue(message);
    }
};


export const searchBlogPostsByIdThunkEn = async ({ profileId }, thunkAPI) => {
    try {
        const resp = await customFetchProfile.get(`/blogpost/searchbyiden/${profileId}`);
        if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
        return resp.data;
    } catch (error) {
        const message = checkError(error);
        return thunkAPI.rejectWithValue(message);
    }
};


export const sendMessageThunkEn = async ({ blogpostId, message, profileId }, thunkAPI) => {
    try {
        const resp = await customFetch.patch(`/blogpost/sendmessageen/${blogpostId}`, { message, profileId });
        if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
        return resp.data;
    } catch (error) {
        const message = checkError(error);
        return thunkAPI.rejectWithValue(message);
    }
};


export const sendLikeThunkEn = async ({ blogpostId, like, profileId }, thunkAPI) => {
    try {
        const resp = await customFetch.patch(`/blogpost/sendlikeen/${blogpostId}`, { like, profileId });
        if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
        return resp.data;
    } catch (error) {
        const message = checkError(error);
        return thunkAPI.rejectWithValue(message);
    }
};


export const getMessagesByIdThunkEn = async ({ blogpostId }, thunkAPI) => {
    try {
        const resp = await customFetch.get(`/blogpost/getmessagesen/${blogpostId}`);
        if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
        return resp.data;
    } catch (error) {
        const message = checkError(error);
        return thunkAPI.rejectWithValue(message);
    }
};


export const getLikesByIdThunkEn = async ({ blogpostId }, thunkAPI) => {
    try {
        const resp = await customFetch.get(`/blogpost/getlikesen/${blogpostId}`);
        if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
        return resp.data;
    } catch (error) {
        const message = checkError(error);
        return thunkAPI.rejectWithValue(message);
    }
};


export const deleteBlogPostThunkEn = async ({ profileId, blogpostId }, thunkAPI) => {
    try {
        const resp = await customFetchProfile.delete(`/blogpost/deleteblogposten/${profileId}/${blogpostId}`);
        if (checkStatus(resp)) { return thunkAPI.rejectWithValue(resp.data.message); }
        return resp.data;
    } catch (error) {
        const message = checkError(error);
        return thunkAPI.rejectWithValue(message);
    }
};