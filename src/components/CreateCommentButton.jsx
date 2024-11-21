import React, { useState } from "react";

export default function CommentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [author, setAuthor] = useState("");
  const [heading, setHeading] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState(["", "", ""]);
  const [comments, setComments] = useState([]);

  const handleTagChange = (index, value) => {
    const newTags = [...tags];
    newTags[index] = value;
    setTags(newTags);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new comment as a object
    const newComment = {
      id: Date.now(), // Use timestamp as unique id
      author,
      heading,
      body,
      tags: tags.filter((tag) => tag.trim() !== ""),
    };

    // Add the new comment to the comments array
    setComments([...comments, newComment]);

    // Reset form fields, so its empty when you open them next time.
    setAuthor("");
    setHeading("");
    setBody("");
    setTags(["", "", ""]);

    // Close the popup
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Add Comment</button>

      {/* Display Section For Comments*/}
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <h3>{comment.heading}</h3>
            <p>By: {comment.author}</p>
            <p>{comment.body}</p>
            {comment.tags.length > 0 && (
              <div>
                <strong>Tags:</strong>
                {comment.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div>
          <div>
            <div>
              <h2>Add New Comment</h2>
              <button onClick={() => setIsOpen(false)}>✕</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Author</label>
                <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} required />
              </div>
              <div>
                <label>Heading</label>
                <input type="text" value={heading} onChange={(event) => setHeading(even.target.value)} required />
              </div>
              <div>
                <label>Body</label>
                <textarea value={body} onChange={(event) => setBody(event.target.value)} rows="4" required />
              </div>
              <div>
                <label>Tags</label>
                {tags.map((tag, index) => (
                  <input
                    key={index}
                    type="text"
                    value={tag}
                    onChange={(event) => handleTagChange(index, event.target.value)}
                    placeholder={`Tag ${index + 1}`}
                  />
                ))}
              </div>
              <div>
                <button type="button" onClick={() => setIsOpen(false)}>
                  Cancel
                </button>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
