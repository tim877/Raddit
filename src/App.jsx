import "./App.css";
import { useState } from "react";
import { useRecoilState } from "recoil";

import { postsState } from "./atoms/posts.jsx";
import { usersState } from "./atoms/users.jsx";

import Header from "./components/Header.jsx";
import CreatePost from "./components/CreatePost.jsx";
import PostCardList from "./components/PostCardList.jsx";
import PostPage from "./pages/PostPage.jsx";

const page_name = ["home", "post"];

export const home_page = page_name[0];
export const post_page = page_name[1];

function App() {
  const [page, setPage] = useState(home_page);
  const [pageData, setPageData] = useState({});

  const [posts] = useRecoilState(postsState);

  let content;
  if (page === home_page) {
    content = <PostCardList setPage={setPage} setPageData={setPageData} />;
  } else if (page === post_page) {
    content = <PostPage pageData={pageData} setPage={setPage} />;
  }

  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <aside>
          <CreatePost />
        </aside>

        <section>{content}</section>
      </main>
    </>
  );
}

export default App;
