import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../store/slices/commentsSlice.jsx";

const CommentForm = ({ postId }) => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState("");

    const handleChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment.trim() !== "") {
            dispatch(addComment({ postId, body: comment }));
            setComment("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="field">
                <label className="label">Ajouter un commentaire</label>
                <div className="control">
          <textarea
              className="textarea"
              value={comment}
              onChange={handleChange}
              placeholder="Votre commentaire..."
          />
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button className="button is-info" type="submit">
                        Envoyer
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CommentForm;