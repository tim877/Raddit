import "../styles/stylePostCardList.css";
import PostCard from "./PostCard.jsx";

import { useEffect, useState } from "react";
import { getAllPosts } from "../api/posts";

export default function PostCardList({ users }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  function createPostCard(post) {
    const user = users.find((user) => user.id === post.userId);

    return <PostCard post={post} user={user} />;
  }

  return <>{posts.map(createPostCard)}</>;
}
