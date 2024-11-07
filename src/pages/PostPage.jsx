import Header from "../components/Header.jsx";
import PostCard from "../components/PostCard.jsx";
import CommentList from "../components/CommentList.jsx";

export default function PostPage() {
  return (
    <>
      {/* // POSTPAGE  */}

      <header>
        <Header />
      </header>

      <article>
        <section>
            <PostCard />
        </section>
        
        <section>
            <CommentList />
        </section>
        
      </article>
    </>
  );
}
