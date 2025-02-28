import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPostsApi, updatePostApi, addPostApi } from "../../services/api.service.js";

export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async (_, thunkAPI) => {
        return await fetchPostsApi();
    }
);

export const updatePost = createAsyncThunk(
    "posts/updatePost",
    async (post) => {
        return await updatePostApi(post);
    }
);

export const addPost = createAsyncThunk(
    "posts/addPost",
    async (post) => {
        return await addPostApi(post);
    }
);

export const resetError = createAsyncThunk(
    "posts/resetError",
    async (time = 3500) => {
        return await new Promise((resolve) => {
            setTimeout(() => {
                resolve("");
            }, time);
        });
    }
);

const initialState = {
    posts: [],
    isLoading: false,
    error: ""
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.isLoading = false;
                state.error = "Une erreur est survenue";
            });

        builder
            .addCase(updatePost.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                state.posts = state.posts.map(post => post.id === action.payload.id ? action.payload : post);
                state.isLoading = false;
            })
            .addCase(updatePost.rejected, (state) => {
                state.isLoading = false;
                state.error = "Une erreur est survenue";
            });

        builder
            .addCase(addPost.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addPost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts.push({
                    ...action.payload,
                    id: state.posts.length + 1, // ou utiliser l'id retourné par l'API
                });
            })
            .addCase(addPost.rejected, (state) => {
                state.isLoading = false;
                state.error = "Une erreur est survenue";
            });

        builder
            .addCase(resetError.fulfilled, (state, action) => {
                state.error = action.payload;
            });
    }
});

export default postsSlice.reducer;
