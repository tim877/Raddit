import "../styles/stylePostCard.css";

export default function PostCard({ post }) {
  return (
    <>
      <article>
        <p>Användarnamn</p>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <ol>
          {post.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ol>

        {/* Likes måste vara vara dynamisk */}
        <button>{post.reactions.likes}</button>
        <button>Kommentar</button>
      </article>
    </>
  );
}
