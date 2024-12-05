import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { postsState } from "../atoms/posts.jsx";
import { getAllPosts } from "../api/posts.js";

import { getAllUsers } from "../api/users.js";
import { usersState } from "../atoms/users.jsx";

import { home_page } from "../App";

import Header from "../components/Header.jsx";
import CommentList from "../components/CommentList.jsx";
import VoteButton from "../components/VoteButton.jsx";
import CreateComment from "../components/CreateComment.jsx";
import "../styles/styleArticle.css";

export default function PostPage({ pageData, setPage }) {
  const [posts, setPosts] = useRecoilState(postsState);
  const [users, setUsers] = useRecoilState(usersState);

  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Om poster och användare inte är laddade, hämta dem
        if (posts.length === 0) {
          const fetchedPosts = await getAllPosts();
          const fetchedUsers = await getAllUsers();

          setPosts(fetchedPosts);
          setUsers(fetchedUsers);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [posts, setPosts, setUsers]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Hitta posten baserat på postId från pageData
  const post = posts.find((post) => post.id === pageData.postId);

  // Om ingen post hittas, visa ett felmeddelande
  if (!post) {
    return (
      <div>
        <p>Post not found</p>
        <button onClick={() => setPage(home_page)}>Back to homepage</button>
      </div>
    );
  }

  // Hitta användaren baserat på userId från posten
  const user = users.find((user) => user.id === post.userId) || {
    username: "Unknown User",
    id: post.userId,
  };

  return (
    <>
      <article className="post-article">
        <section>
          <div className="post-meta">
            <button onClick={() => setPage(home_page)}>Back to homepage</button>
            <p>{user.username}</p>
          </div>
          <h2>{post.title || "Untitled Post"}</h2>
          <p>{post.body || "No content available"}</p>

          {post.tags && post.tags.length > 0 && (
            <ol>
              {post.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ol>
          )}

          <VoteButton post={post} />

          <button onClick={() => setShowForm(true)}>Kommentar</button>
        </section>

        <section>
          <CommentList />
        </section>

        {post.id && (
          <CreateComment
            post={post}
            user={user}
            showForm={showForm}
            setShowForm={setShowForm}
          />
        )}
      </article>
    </>
  );
}
