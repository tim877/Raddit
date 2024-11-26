import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

import { postsState } from "../atoms/posts.jsx";
import { getAllPosts } from "../api/posts.js";

import { getAllUsers } from "../api/users.js";
import { usersState } from "../atoms/users.jsx";

import Header from "../components/Header.jsx";
import CommentList from "../components/CommentList.jsx";


//optimera koden, finns nu dubletter av funktionerna handleUpVote och handleDownVote (i denna komponenten och i postCard-komponenten)
export default function PostPage({pageData}) {

  const [posts, setPosts] = useRecoilState(postsState);
  const [users, setUsers] = useRecoilState(usersState);

  useEffect(() => {
    getAllPosts().then(setPosts);
    getAllUsers().then(setUsers);
  }, [])

  const post = posts.find((post) => post.id === pageData.postId);

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

  const user = users.find((user) => user.id === post.userId);



  return (
    <>
      {/* // POSTPAGE  */}

      <header>
        <Header />
      </header>

      <article>
        <section>
        <p>{user.username}</p>
        <h2>{post.title}</h2>
        <p>{post.body}</p>

        <ol>
          {post.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ol>

        <button>
          <span onClick={handleUpvote}>+ </span>
          {vote}
          <span onClick={handleDownvote}> -</span>
        </button>
        <button>Kommentar</button>
        </section>
        
        <section>
            <CommentList />
        </section>
        
      </article>
    </>
  );
}
