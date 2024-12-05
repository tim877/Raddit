import "../styles/stylePostCard.css";
import { post_page } from "../App";
import VoteButton from "./VoteButton";

export default function PostCard({ post, user, setPage, setPageData }) {
  function navigateToPostPage() {
    setPageData({ postId: post.id });
    setPage(post_page);
  }

  return (
    <article>
      <div onClick={navigateToPostPage} style={{ cursor: "pointer" }}>
        <p>{user?.username || "Unknown User"}</p>
        <h2>{post.title}</h2>
        <p>{post.body.slice(0, 60)}...</p>

        <ol>{post.tags && post.tags.map((tag) => <li key={tag}>{tag}</li>)}</ol>
      </div>

      <VoteButton post={post} />

      <button onClick={navigateToPostPage}>Kommentar</button>
    </article>
  );
}
