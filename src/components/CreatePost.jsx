// CreatePost.jsx
import "../styles/styleCreatePost.css";
import React, { useState, useEffect } from "react";

export default function CreatePost({ onPostCreated }) {
  // Skapar states för de olika delarna i formuläret, de är tomma från start.
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [users, setUsers] = useState([]);

  // Hämtar användare från API när komponenten laddas
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users); // Här sparar vi användarna
        console.log(data.users); // Logga användarna för att kontrollera att vi får rätt data
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Funktion som körs vid formulärets onSubmit
  const handleNewPostSubmit = (event) => {
    event.preventDefault(); // Förhindra att sidan uppdateras vid submit

    // Skapa objektet för det nya inlägget
    const newPost = {
      title,
      body,
      userId: selectedUser,
      reactions: 0,
      tags: [],
    };

    // Anropa funktionen från props med det nya inlägget
    onPostCreated(newPost);

    // Töm fälten efter submit
    setTitle("");
    setBody("");
    setSelectedUser("");
  };

  return (
    <aside>
      <h3>Create New Post</h3>
      {/* Använd handleNewPostSubmit som submit-funktion */}
      <form onSubmit={handleNewPostSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>
        <div>
          <label>Body</label>
          <textarea
            value={body}
            onChange={(event) => setBody(event.target.value)}
            required
          />
        </div>
        <div>
          <label>User</label>
          <select
            value={selectedUser}
            onChange={(event) => setSelectedUser(event.target.value)}
            required>
            <option value="">Select a user</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.firstName} {user.lastName}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Create Post</button>
      </form>
    </aside>
  );
}
