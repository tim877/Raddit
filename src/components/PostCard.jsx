import "../styles/stylePostCard.css";
import { useState } from "react";

export default function PostCard({ post, user }) {
  const [reactions, setReactions] = useState(post.reactions);

  const { likes, dislikes } = reactions;

  let totalReactions;

  if (likes >= dislikes) {
    totalReactions = likes - dislikes;
  } else {
    totalReactions = 0;
  }

  function handleLikes() {
    setReactions((prevReactions) => {
      return {
        ...prevReactions,
        [likes]: prevReactions.likes + 1,
      };
    });
  }

  function handleDislikes() {
    setReactions((prevReactions) => {
      if (prevReactions.dislikes > 0) {
        return {
          ...prevReactions,
          [dislikes]: prevReactions.dislikes - 1,
        };
      } else {
        return {
          ...prevReactions,
          [dislikes]: 0,
        };
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
          {/* <span>+ </span>
          {totalReactions}
          <span> -</span> */}
        </button>
        <button>Kommentar</button>
      </article>
    </>
  );
}
