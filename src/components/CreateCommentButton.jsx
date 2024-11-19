import { useState } from "react";

export default function CommentPopup() {
  const [isOpen, setIsOpen] = useState(fals);
  const [author, setAuthor] = useState("");
  const [heading, setHeading] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState(["", "", ""]);
  const [comments, setComments] = useState([]);

  const handleTagChange = (index, value) => {
    const newTag = [...tags];
    newTags[index] = value;
    setTags(newTags);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //Creat a new comment object
    const newComment = {
      id: Date.now(), // Useing dates as unique id
      author,
      heading,
      body,
      tags: tags.filter((tag) => tag.trim() !== ""),
    };
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Add Comment</button>
      {/* Comments Display Section */}
    </div>
  );
}
