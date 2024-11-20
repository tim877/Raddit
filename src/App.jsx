// App.jsx
import "./App.css";

import { useState } from "react";
import { useRecoilState } from "recoil";

import { getAllPosts } from "./api/posts.js";
import { postsState } from "./atoms/posts.jsx";

import Header from "./components/Header.jsx";
import CreatePost from "./components/CreatePost.jsx";
import PostCardList from "./components/PostCardList.jsx";
import PostPage from "./pages/PostPage.jsx";

const page_name = ["home", "post"];

export const home_page = page_name[0];
export const post_page = page_name[1];

function App() {

  const [page, setPage] = useState(home_page);
  const [pageData, setPageData] = useState({});



  let content;
  if (page === home_page) {
    content = (
      <PostCardList setPage={setPage} setPageData={setPageData}/>
    )
  } else if (page === post_page) {
    content = (
      <PostPage pageData={pageData}/>
    )
  }


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
          {content}
        </section>
      </main>
    </>
  );
}

export default App;
