import "../styles/stylePostCardList.css";
import PostCard from "./PostCard.jsx";

import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { getAllPosts } from "../api/posts.js";
import { postsState } from "../atoms/posts.jsx";

import { getAllUsers } from "../api/users.js";
import { usersState } from "../atoms/users.jsx";


export default function PostCardList() {

  const [posts, setPosts] = useRecoilState(postsState);
  const [users, setUsers] = useRecoilState(usersState);

  useEffect(() => {
    getAllPosts().then(setPosts);
    getAllUsers().then(setUsers);
  }, [])

  function createPostCard(post) {
    const user = users.find((user) => user.id === post.userId);

    return <PostCard post={post} user={user} />;
  }

  return <>{posts.map(createPostCard)}</>;
}
