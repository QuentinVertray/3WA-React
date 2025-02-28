import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { selectPosts } from "../../store/selector/post-selector.js";
import CommentForm from "../../components/CommentForm/index.jsx";
import { fetchComments } from "../../store/slices/commentsSlice.jsx";
import { useEffect } from "react";
import CommentItem from "../../components/CommentItem/index.jsx";

const PostDetailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const post = posts.find((post) => post.id === parseInt(id, 10));

    const users = useSelector((state) => state.users.users);
    const author = users.find((user) => user.id === post?.userId);

    const comments = useSelector((state) =>
        state.comments.comments.filter(comment => comment.postId === post?.id)
    );

    useEffect(() => {
        if (post) {
            dispatch(fetchComments(post.id));
        }
    }, [dispatch, post]);

    if (!post) {
        return (
            <section className="section">
                <div className="container">
                    <div className="notification is-warning">Post non trouvé</div>
                </div>
            </section>
        );
    }

    return (
        <section className="section">
            <div className="container">
                <h2 className="title">{post.title}</h2>
                <p className="subtitle">
                    Auteur: {author ? author.name : 'Auteur inconnu'}
                </p>
                <div className="content">
                    <p>{post.body}</p>
                </div>
                <h3 className="title is-4">Commentaires</h3>
                <CommentForm postId={post.id} />
                <div className="comments-list">
                    {comments.length > 0 ? (
                        comments.map(comment => (
                            <CommentItem key={comment.id} comment={comment} />
                        ))
                    ) : (
                        <p>Aucun commentaire pour ce post.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PostDetailPage;