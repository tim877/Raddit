import "../styles/styleCreateComment.css";
import React, { useState } from "react";

const CreateComment = ({ post, user, showForm, setShowForm }) => {
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    title: "",
    body: "",
    tags: ["", "", ""],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTagChange = (index, value) => {
    const newTags = [...formData.tags];
    newTags[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      tags: newTags,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      ...formData,
      id: Date.now(), // Unikt ID för varje kommentar
    };
    setComments([newComment, ...comments]);
    setShowForm(false);
    setFormData({
      username: "",
      title: "",
      body: "",
      tags: ["", "", ""],
    });
  };

  return (
    <div>
      {showForm && (
        <div className="popup">
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Användarnamn:
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Rubrik:
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Kommentar:
                <textarea
                  name="body"
                  value={formData.body}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Taggar:
                <div>
                  {[0, 1, 2].map((index) => (
                    <input
                      key={index}
                      type="text"
                      value={formData.tags[index]}
                      onChange={(e) => handleTagChange(index, e.target.value)}
                      placeholder={`Tagg ${index + 1}`}
                    />
                  ))}
                </div>
              </label>
            </div>
            <button type="submit">Skicka</button>
            <button type="button" onClick={() => setShowForm(false)}>
              Avbryt
            </button>
          </form>
        </div>
      )}

      <div className="comment-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>
              <strong>{comment.username}</strong>
            </p>
            <h3>{comment.title}</h3>
            <p>{comment.body}</p>
            <p>Taggar: {comment.tags.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateComment;
