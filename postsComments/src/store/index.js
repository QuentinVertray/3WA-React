import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice.jsx";
import commentsReducer from "./slices/commentsSlice.jsx";
import usersReducer from "./slices/usersSlice.jsx";

const store = configureStore({
    reducer: {
        posts: postsReducer,
        comments: commentsReducer,
        users: usersReducer
    }
});

export default store;

