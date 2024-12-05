import React, { useState } from "react";

export default function VoteButton({ post }) {
  // Extract reactions safely, default to 0
  const initialReactions =
    typeof post?.reactions === "number"
      ? post.reactions
      : post?.reactions?.likes || 0;

  const [likes, setLikes] = useState(initialReactions);

  const handleUpvote = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  const handleDownvote = () => {
    setLikes((prevLikes) => Math.max(0, prevLikes - 1));
  };

  return (
    <div>
      <button onClick={handleUpvote}>+</button>
      <span>{likes || 0}</span>
      <button onClick={handleDownvote}>-</button>
    </div>
  );
}
