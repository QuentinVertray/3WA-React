import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { addCommentApi, fetchCommentsApi } from "../../services/api.service.js";

export const fetchComments = createAsyncThunk(
    "comments/fetchComments",
    async (postId) => {
        return await fetchCommentsApi(postId);
    }
);

export const addComment = createAsyncThunk(
    "comments/addComment",
    async (comment) => {
        return await addCommentApi(comment);
    }
);

export const deleteComment = createAsyncThunk(
    "comments/deleteComment",
    async (commentId) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
        return commentId;
    }
);

const initialState = {
    comments: [],
    isLoading: false,
    error: null
};

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                const postId = action.meta.arg;
                state.comments = [
                    ...state.comments.filter(comment => comment.postId !== postId),
                    ...action.payload
                ];
                state.isLoading = false;
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(addComment.fulfilled, (state, action) => {
                state.comments.push(action.payload);
            })
            .addCase(deleteComment.fulfilled, (state, action) => {
                const commentId = action.payload;
                state.comments = state.comments.filter(comment => comment.id !== commentId);
            });
    }
});

export default commentsSlice.reducer;
