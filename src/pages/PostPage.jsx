import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { postsState } from "../atoms/posts.jsx";
import { getAllPosts } from "../api/posts.js";

import { getAllUsers } from "../api/users.js";
import { usersState } from "../atoms/users.jsx";

import { home_page } from "../App";

import Header from "../components/Header.jsx";
import CommentList from "../components/CommentList.jsx";
import VoteButton from "../components/VoteButton.jsx";



//optimera koden, finns nu dubletter av funktionerna handleUpVote och handleDownVote (i denna komponenten och i postCard-komponenten)
export default function PostPage({pageData, setPage}) {

  const [posts, setPosts] = useRecoilState(postsState);
  const [users, setUsers] = useRecoilState(usersState);

  useEffect(() => {
    getAllPosts().then(setPosts);
    getAllUsers().then(setUsers);
  }, [])

  function navigateToHomePage () {
    setPage(home_page);
  }

  const post = posts.find((post) => post.id === pageData.postId);


  const user = users.find((user) => user.id === post.userId);



  return (
    <>
      {/* // POSTPAGE  */}

      <header>
        <Header />
      </header>

      <article>
        <section>
        <div>
        <button onClick={navigateToHomePage}>Back to homepage</button><p>{user.username}</p>
        </div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>

        <ol>
          {post.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ol>

       

        <VoteButton post={post}/>

        <button>Kommentar</button>
        </section>
        
        <section>
            <CommentList />
        </section>
        
      </article>
    </>
  );
}
