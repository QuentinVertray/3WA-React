import { Link } from "react-router";
import { useSelector } from "react-redux";

const PostItem = ({ post }) => {
    const users = useSelector((state) => state.users?.users || []);
    const author = users.find(user => user.id === post.userId);

    return (
        <div className="card post-item">
            <div className="card-content">
                <p className="title is-4">{post.title}</p>
                <p className="subtitle is-6">{author ? author.name : 'Auteur inconnu'}</p>
                <div className="content">
                    {post.body}
                </div>
            </div>
            <footer className="card-footer">
                <Link to={`/post/${post.id}`} className="card-footer-item">
                    Voir les détails
                </Link>
            </footer>
        </div>
    );
};

export default PostItem;
