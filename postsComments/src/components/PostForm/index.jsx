import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/slices/postsSlice.jsx";
import { useNavigate } from "react-router";

const PostForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if(name === "title") {
            setTitle(value);
        } else if(name === "body") {
            setBody(value);
        }
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === "") {
            setError("Veuillez remplir le champ titre");
            return;
        }
        dispatch(addPost({ title, body, userId: 1 }));
        setTitle("");
        setBody("");
        navigate(-1);
    };

    return (
        <div className="container">
            <div className="box">
                {error && <div className="notification is-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label">Titre</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                name="title"
                                value={title}
                                onChange={handleChange}
                                placeholder="Titre du post"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Contenu</label>
                        <div className="control">
              <textarea
                  className="textarea"
                  name="body"
                  value={body}
                  onChange={handleChange}
                  placeholder="Contenu du post"
              />
                        </div>
                    </div>
                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link" type="submit">
                                Ajouter
                            </button>
                        </div>
                        <div className="control">
                            <button className="button is-light" type="button" onClick={() => navigate(-1)}>
                                Annuler
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostForm;
