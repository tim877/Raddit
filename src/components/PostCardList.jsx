import "../styles/stylePostCardList.css";
import PostCard from "./PostCard.jsx";

import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { getAllPosts } from "../api/posts.js";
import { postsState } from "../atoms/posts.jsx";

import { getAllUsers } from "../api/users.js";
import { usersState } from "../atoms/users.jsx";

export default function PostCardList({ setPage, setPageData }) {
  const [posts, setPosts] = useRecoilState(postsState);
  const [users, setUsers] = useRecoilState(usersState);

  useEffect(() => {
    // Ladda poster och användare endast om de är tomma
    if (posts.length === 0) {
      getAllPosts().then(setPosts);
    }
    if (users.length === 0) {
      getAllUsers().then(setUsers);
    }
  }, [posts, users, setPosts, setUsers]);

  function createPostCard(post) {
    const user = users.find((user) => user.id === post.userId) || {
      username: "Unknown User",
      id: post.userId,
    };

    return (
      <PostCard
        key={post.id}
        post={post}
        user={user}
        setPage={setPage}
        setPageData={setPageData}
      />
    );
  }

  return <>{posts.map(createPostCard)}</>;
}
