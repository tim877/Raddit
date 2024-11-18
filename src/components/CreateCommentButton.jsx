import React, { useState } from "react";

export default function CommentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [author, setAuthor] = useState("");
  const [heading, setHeading] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState(["", "", ""]);

  const handleTagChange = (index, value) => {
    const newTags = [...tags];
    newTags[index] = value;
    setTags(newTags);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      author,
      heading,
      body,
      tags: tags.filter((tag) => tag.trim() !== ""),
    });
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Add Comment</button>

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
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
              </div>
              <div>
                <label>Heading</label>
                <input type="text" value={heading} onChange={(e) => setHeading(e.target.value)} required />
              </div>
              <div>
                <label>Body</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} rows="4" required />
              </div>
              <div>
                <label>Tags</label>
                {tags.map((tag, index) => (
                  <input
                    key={index}
                    type="text"
                    value={tag}
                    onChange={(e) => handleTagChange(index, e.target.value)}
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
