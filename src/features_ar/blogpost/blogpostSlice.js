import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
    blogpostCreationThunkAr,
    searchBlogPostsThunkAr,
    searchBlogPostThunkAr,
    searchBlogPostsByIdThunkAr,
    sendMessageThunkAr,
    sendLikeThunkAr,
    getMessagesByIdThunkAr,
    getLikesByIdThunkAr,
    deleteBlogPostThunkAr
} from './blogpostThunk';

const initialState = {
    blogposts: null,
    blogpost: null,
    messages: null,
    likes: null,
    isLoading: false,
    isLoadingMessages: false,
    isLoadingLikes: false,
    isSuccess: false,
    isSuccessMessages: false,
    isSuccessLikes: false,
};

export const blogpostCreationAr = createAsyncThunk('blogpost/blogpostCreationAr', blogpostCreationThunkAr);
export const searchBlogPostsAr = createAsyncThunk('blogpost/searchBlogPostsAr', searchBlogPostsThunkAr);
export const searchBlogPostAr = createAsyncThunk('blogpost/searchBlogPostAr', searchBlogPostThunkAr);
export const searchBlogPostsByIdAr = createAsyncThunk('blogpost/searchBlogPostsByIdAr', searchBlogPostsByIdThunkAr);
export const sendMessageAr = createAsyncThunk('blogpost/sendMessageAr', sendMessageThunkAr);
export const sendLikeAr = createAsyncThunk('blogpost/sendLikeAr', sendLikeThunkAr);
export const getMessagesByIdAr = createAsyncThunk('blogpost/getMessagesByIdAr', getMessagesByIdThunkAr);
export const getLikesByIdAr = createAsyncThunk('blogpost/getLikesByIdAr', getLikesByIdThunkAr);
export const deleteBlogPostAr = createAsyncThunk('blogpost/deleteBlogPostAr', deleteBlogPostThunkAr);


const blogpostSlice = createSlice({
    name: 'blogpost',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
        }
    },
    extraReducers: {

        [blogpostCreationAr.pending]: (state) => {
            state.isLoading = true;
        },
        [blogpostCreationAr.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = true;

        },
        [blogpostCreationAr.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },

        [searchBlogPostsAr.pending]: (state) => {
            state.isLoading = true;
        },
        [searchBlogPostsAr.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.blogposts = payload;
        },
        [searchBlogPostsAr.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },

        [searchBlogPostAr.pending]: (state) => {
            state.isLoading = true;
        },
        [searchBlogPostAr.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.blogpost = payload;
        },
        [searchBlogPostAr.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },

        [searchBlogPostsByIdAr.pending]: (state) => {
            state.isLoading = true;
        },
        [searchBlogPostsByIdAr.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.blogposts = payload;
        },
        [searchBlogPostsByIdAr.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },

        [sendMessageAr.pending]: (state) => {
            state.isLoadingMessages = true;
        },
        [sendMessageAr.fulfilled]: (state, { payload }) => {
            state.isLoadingMessages = false;
            state.isSuccessMessages = true;
            state.blogposts = payload;
        },
        [sendMessageAr.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },

        [sendLikeAr.pending]: (state) => {
            state.isLoadingLikes = true;
        },
        [sendLikeAr.fulfilled]: (state, { payload }) => {
            state.isLoadingLikes = false;
            state.isSuccessMessages = true;
            state.blogposts = payload;
        },
        [sendLikeAr.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },

        [getMessagesByIdAr.pending]: (state) => {
            state.isLoadingMessages = true;
        },
        [getMessagesByIdAr.fulfilled]: (state, { payload }) => {
            state.isLoadingMessages = false;
            state.isSuccessMessages = true;
            state.messages = payload;
        },
        [getMessagesByIdAr.rejected]: (state, { payload }) => {
            state.isLoadingMessages = false;
            toast.error(payload);
        },

        [getLikesByIdAr.pending]: (state) => {
            state.isLoadingLikes = true;
        },
        [getLikesByIdAr.fulfilled]: (state, { payload }) => {
            state.isLoadingLikes = false;
            state.isSuccessLikes = true;
            state.likes = payload;
        },
        [getLikesByIdAr.rejected]: (state, { payload }) => {
            state.isLoadingLikes = false;
            toast.error(payload);
        },

        [deleteBlogPostAr.pending]: (state) => {
            state.isLoading = true;
        },
        [deleteBlogPostAr.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            toast.success(payload.message);
            state.blogposts = payload;
        },
        [deleteBlogPostAr.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        }
    }
});

export const { reset } = blogpostSlice.actions;
export default blogpostSlice.reducer;