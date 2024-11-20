// App.jsx
import "./App.css";
// import { useEffect, useState } from "react";
import { useState } from "react";

import Header from "./components/Header.jsx";
import CreatePost from "./components/CreatePost.jsx";
import PostCardList from "./components/PostCardList.jsx";

function App() {

  const [posts, setPosts] = useState([]);

  // Funktion som hanterar skapandet av nytt inlägg
  const onPostCreated = (newPost) => {
    // Uppdaterar tillståndet med det nya inlägget
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  // Funktion för att hantera nytt inlägg
  const handleNewPost = (newPost) => {
    setPosts([...posts, newPost]); // Lägg till det nya inlägget i posts-arrayen
  };

  return (
    <>
      <h2>hello</h2>
      {/* STARTPAGE */}
      <header>
        <Header />
      </header>

      <main>
        <aside>
          {/* Skicka handleNewPost som prop till CreatePost */}
          <CreatePost onPostCreated={handleNewPost} />
          <div>
            {posts.map((post, index) => (
              <div key={index}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <p style={{ textTransform: "capitalize" }}>Tags: {post.tags}</p>
                <p>By user: {post.username}</p>
              </div>
            ))}
          </div>
        </aside>

        <section>
          {/* <PostCardList users={users} /> */}
          <PostCardList />
        </section>
      </main>
    </>
  );
}

export default App;
