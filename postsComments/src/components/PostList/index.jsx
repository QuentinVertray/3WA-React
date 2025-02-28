import PostItem from "../PostItem/index.jsx";
import { useSelector } from "react-redux";
import { selectPosts } from "../../store/selector/post-selector.js";

const PostList = () => {
    const posts = useSelector(selectPosts);

    return (
        <div className="container">
            <div className="columns is-multiline">
                {posts.map((post) => (
                    <div className="column is-half" key={post.id}>
                        <PostItem post={post} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostList;
