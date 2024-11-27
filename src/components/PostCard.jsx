import "../styles/stylePostCard.css";
// import { useState } from "react";
import { post_page } from "../App";
import VoteButton from "./VoteButton";

export default function PostCard({ post, user, setPage, setPageData }) {

  function navigateToPostPage () {
    setPageData({postId: post.id});
    setPage(post_page);
  }


  return (
    <>
      <article onClick={navigateToPostPage}>
        <p>{user.username}</p>
        <h2>{post.title}</h2>
        <p>{post.body.slice(0, 60)}...</p>

        <ol>
          {post.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ol>

        <VoteButton post={post}/>

        <button>Kommentar</button>
      </article>
    </>
  );
}
