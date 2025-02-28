import './App.css';
import HomePage from "./pages/Home/index.page.jsx";
import { Route, Routes } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "./store/slices/postsSlice.jsx";
import { fetchUsers } from "./store/slices/usersSlice.jsx";
import Nav from "./components/Nav/index.jsx";
import AddPostPage from "./pages/AddPost/index.page.jsx";
import PostDetailPage from "./pages/PostDetail/index.page.jsx";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
        dispatch(fetchUsers());
    }, [dispatch]);

  return (
    <>
        <div className="App">
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add" element={<AddPostPage />} />
                <Route path="/post/:id" element={<PostDetailPage />} />
            </Routes>
        </div>
    </>
  )
}

export default App
