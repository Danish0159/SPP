import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
    blogpostCreationThunkEn,
    searchBlogPostsThunkEn,
    searchBlogPostThunkEn,
    searchBlogPostsByIdThunkEn,
    sendMessageThunkEn,
    sendLikeThunkEn,
    getMessagesByIdThunkEn,
    getLikesByIdThunkEn,
    deleteBlogPostThunkEn
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

export const blogpostCreationEn = createAsyncThunk('blogpost/blogpostCreationEn', blogpostCreationThunkEn);
export const searchBlogPostsEn = createAsyncThunk('blogpost/searchBlogPostsEn', searchBlogPostsThunkEn);
export const searchBlogPostEn = createAsyncThunk('blogpost/searchBlogPostEn', searchBlogPostThunkEn);
export const searchBlogPostsByIdEn = createAsyncThunk('blogpost/searchBlogPostsByIdEn', searchBlogPostsByIdThunkEn);
export const sendMessageEn = createAsyncThunk('blogpost/sendMessageEn', sendMessageThunkEn);
export const sendLikeEn = createAsyncThunk('blogpost/sendLikeEn', sendLikeThunkEn);
export const getMessagesByIdEn = createAsyncThunk('blogpost/getMessagesByIdEn', getMessagesByIdThunkEn);
export const getLikesByIdEn = createAsyncThunk('blogpost/getLikesByIdEn', getLikesByIdThunkEn);
export const deleteBlogPostEn = createAsyncThunk('blogpost/deleteBlogPostEn', deleteBlogPostThunkEn);


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

        [blogpostCreationEn.pending]: (state) => {
            state.isLoading = true;
        },
        [blogpostCreationEn.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = true;

        },
        [blogpostCreationEn.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },

        [searchBlogPostsEn.pending]: (state) => {
            state.isLoading = true;
        },
        [searchBlogPostsEn.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.blogposts = payload;
        },
        [searchBlogPostsEn.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },

        [searchBlogPostEn.pending]: (state) => {
            state.isLoading = true;
        },
        [searchBlogPostEn.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.blogpost = payload;
        },
        [searchBlogPostEn.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },

        [searchBlogPostsByIdEn.pending]: (state) => {
            state.isLoading = true;
        },
        [searchBlogPostsByIdEn.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.blogposts = payload;
        },
        [searchBlogPostsByIdEn.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },

        [sendMessageEn.pending]: (state) => {
            state.isLoadingMessages = true;
        },
        [sendMessageEn.fulfilled]: (state, { payload }) => {
            state.isLoadingMessages = false;
            state.isSuccessMessages = true;
            state.blogposts = payload;
        },
        [sendMessageEn.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },

        [sendLikeEn.pending]: (state) => {
            state.isLoadingLikes = true;
        },
        [sendLikeEn.fulfilled]: (state, { payload }) => {
            state.isLoadingLikes = false;
            state.isSuccessMessages = true;
            state.blogposts = payload;
        },
        [sendLikeEn.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },

        [getMessagesByIdEn.pending]: (state) => {
            state.isLoadingMessages = true;
        },
        [getMessagesByIdEn.fulfilled]: (state, { payload }) => {
            state.isLoadingMessages = false;
            state.isSuccessMessages = true;
            state.messages = payload;
        },
        [getMessagesByIdEn.rejected]: (state, { payload }) => {
            state.isLoadingMessages = false;
            toast.error(payload);
        },

        [getLikesByIdEn.pending]: (state) => {
            state.isLoadingLikes = true;
        },
        [getLikesByIdEn.fulfilled]: (state, { payload }) => {
            state.isLoadingLikes = false;
            state.isSuccessLikes = true;
            state.likes = payload;
        },
        [getLikesByIdEn.rejected]: (state, { payload }) => {
            state.isLoadingLikes = false;
            toast.error(payload);
        },

        [deleteBlogPostEn.pending]: (state) => {
            state.isLoading = true;
        },
        [deleteBlogPostEn.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            toast.success(payload.message);
            state.blogposts = payload;
        },
        [deleteBlogPostEn.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        }
    }
});

export const { reset } = blogpostSlice.actions;
export default blogpostSlice.reducer;