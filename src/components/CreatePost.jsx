import "../styles/styleCreatePost.css";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { postsState } from "../atoms/posts.jsx";
import { usersState } from "../atoms/users.jsx";

export default function CreatePost() {
  const [posts, setPosts] = useRecoilState(postsState);
  const [users] = useRecoilState(usersState);

  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedBody, setSelectedBody] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedTags, setSelectedTags] = useState("");

  const handleNewPostSubmit = async (event) => {
    event.preventDefault();

    // Hitta den valda användaren
    const selectedUserObj = users.find(
      (user) => user.id === parseInt(selectedUser)
    );

    if (!selectedUserObj) {
      alert("Please select a valid user");
      return;
    }

    // Skapa nytt inlägg med API-liknande struktur
    const newPost = {
      id: Date.now(), // Använd timestamp istället för array-längd
      title: selectedTitle,
      body: selectedBody,
      userId: selectedUserObj.id,
      tags: selectedTags
        ? selectedTags.split(",").map((tag) => tag.trim())
        : [],
      reactions: 0,
    };

    try {
      // Uppdatera global state direkt
      setPosts((prevPosts) => [...prevPosts, newPost]);

      // Återställ formuläret
      setSelectedTitle("");
      setSelectedBody("");
      setSelectedUser("");
      setSelectedTags("");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <aside>
      <h3>Create New Post</h3>
      <form onSubmit={handleNewPostSubmit}>
        {/* Användarval */}
        <div>
          <label>User</label>
          <select
            value={selectedUser}
            onChange={(event) => setSelectedUser(event.target.value)}
            required>
            <option value="">Select a user</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.username}
              </option>
            ))}
          </select>
        </div>

        {/* Titel */}
        <div>
          <label>Title</label>
          <input
            type="text"
            value={selectedTitle}
            onChange={(event) => setSelectedTitle(event.target.value)}
            required
          />
        </div>

        {/* Body */}
        <div>
          <label>Body</label>
          <textarea
            value={selectedBody}
            onChange={(event) => setSelectedBody(event.target.value)}
            required
          />
        </div>

        {/* Tags */}
        <div>
          <label>Tags</label>
          <input
            type="text"
            value={selectedTags}
            onChange={(event) => setSelectedTags(event.target.value)}
            placeholder="Separate tags with commas"
          />
        </div>

        <button type="submit">Create Post</button>
      </form>
    </aside>
  );
}
