import PostList from "../../components/PostList/index.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../../store/selector/post-selector.js";
import Loader from "../../components/Loader/index.jsx";
import { useEffect } from "react";
import { resetError } from "../../store/slices/postsSlice.jsx";

const HomePage = () => {
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();

    useEffect(() => {
        if (error !== "") {
            dispatch(resetError(2500));
        }
    }, [error, dispatch]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <section className="section">
            <div className="container">
                {error && <div className="notification is-danger">{error}</div>}
                <PostList />
            </div>
        </section>
    );
};

export default HomePage;
