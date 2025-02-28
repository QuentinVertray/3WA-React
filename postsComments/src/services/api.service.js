import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});

export const fetchPostsApi = async () => {
    const response = await api.get("/posts");
    return response.data;
};

export const updatePostApi = async (post) => {
    const response = await api.put(`/posts/${post.id}`, post);
    return response.data;
};

export const addPostApi = async (post) => {
    const response = await api.post("/posts", post);
    return response.data;
};

export const fetchCommentsApi = async (postId) => {
    const response = await api.get(`/posts/${postId}/comments`);
    return response.data;
};

export const addCommentApi = async (comment) => {
    const response = await api.post("/comments", comment);
    return response.data;
};
