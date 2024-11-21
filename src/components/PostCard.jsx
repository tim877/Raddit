import "../styles/stylePostCard.css";
import { useState } from "react";
import CreateComment from "./CreateComment";

export default function PostCard({ post, user }) {

  const initialVote = post.reactions.likes;
  const [vote, setVote] = useState(initialVote);

   const handleUpvote = () => {
    setVote((prevVote) => prevVote + 1);
  };

  const handleDownvote = () => {
    setVote((prevVote) => {
      if (prevVote > 0) {
        return prevVote - 1;
      } else {
        return 0;
      }
    });
  };

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

        <div className="button-comment-container">
        <button className="vote">
          <span onClick={handleUpvote}>+ </span>
          {vote}
          <span onClick={handleDownvote}> -</span>
        </button>
        <CreateComment />
      </div>
        </article>
    </>
  );
}
