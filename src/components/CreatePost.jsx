import "../styles/styleCreatePost.css";
import React, { useState, useEffect } from "react";

export default function CreatePost({ onPostCreated }) {
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedBody, setSelectedBody] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedUsername, setSelectedUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  // Hämtar användare från API när komponenten laddas
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Hämtar inlägg från API när komponenten laddas
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  // Jämför id från de olika objekten och hämtar data från den som matchar.
  useEffect(() => {
    if (selectedUser) {
      const matchingUser = users.find(
        (user) => user.id === parseInt(selectedUser)
      ); // Hitta användaren baserat på ID
      if (matchingUser) {
        setSelectedUsername(
          `${matchingUser.firstName} ${matchingUser.lastName}`
        ); // Sätt fullständigt namn för användaren
      }

      const matchingPost = posts.find(
        (post) => post.id === parseInt(selectedUser)
      );
      if (matchingPost) {
        setSelectedTitle(matchingPost.title);
        setSelectedBody(matchingPost.body);
        setSelectedTags(matchingPost.tags || []);
      }
    }
  }, [selectedUser, posts, users]); // Lägg till users i beroenden för att alltid få uppdaterad info

  // Funktion som körs vid formulärets onSubmit
  const handleNewPostSubmit = (event) => {
    event.preventDefault(); // Förhindrar att sidan laddas om efter submit

    // Skapar objektet för det nya inlägget
    const newPost = {
      title: selectedTitle,
      body: selectedBody,
      username: selectedUsername, // Använd användarens fullständiga namn
      reactions: 0,
      tags: selectedTags.join(" "),
    };

    // Anropa funktionen från props med det nya inlägget
    onPostCreated(newPost);

    // Tömmer fälten efter submit och resetar användaren
    setSelectedTitle(""); // Tömmer titel
    setSelectedBody(""); // Tömmer body
    setSelectedTags([]); // Tömmer tags
    setSelectedUser(""); // Återställ användare till inget vald
  };

  return (
    <aside>
      <h3>Create New Post</h3>
      <form onSubmit={handleNewPostSubmit}>
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
        <div>
          <label>Title</label>
          <input type="text" value={selectedTitle} disabled />
        </div>
        <div>
          <label>Body</label>
          <textarea value={selectedBody} disabled />
        </div>
        <div>
          <label>Tags</label>
          <input type="text" value={selectedTags.join(", ")} disabled />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </aside>
  );
}
