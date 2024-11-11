import "../styles/stylePostCard.css";
import { useState } from "react";

export default function PostCard({ post, user }) {
  const [reactions, setReactions] = useState({ ...post.reactions });

  function handleLikes() {
    setReactions((prevReactions) => {
      return { likes: prevReactions.likes + 1 };
    });
  }

  function handleDislikes() {
    setReactions((prevReactions) => {
      if (prevReactions > 0) {
        return { dislikes: prevReactions.dislikes - 1 };
      } else {
        return { dislikes: 0 };
      }
    });
  }

  return (
    <>
      <article>
        <p>{user.username}</p>
        <h2>{post.title}</h2>
        <p>{post.body.slice(0, 60)}...</p>

        <ol>
          {post.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ol>

        {/* Likes måste vara vara dynamisk */}
        <button>
          <span onClick={handleLikes}>+ </span>
          {reactions.likes}
          <span onClick={handleDislikes}> -</span>
        </button>
        <button>Kommentar</button>
      </article>
    </>
  );
}
