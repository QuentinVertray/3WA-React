import React from "react";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../store/slices/commentsSlice.jsx";

const CommentItem = ({ comment }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteComment(comment.id));
    };

    return (
        <div className="box comment-item">
            <p>{comment.body}</p>
            <button className="button is-small is-danger" onClick={handleDelete}>
                Supprimer
            </button>
        </div>
    );
};

export default CommentItem;
