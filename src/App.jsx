import "./App.css";

import Header from "./components/Header.jsx";
import CreatePost from "./components/CreatePost.jsx";
import PostCardList from "./components/PostCardList.jsx";

function App() {
  return (
    <>
      <h2>hello</h2>
      {/* // STARTPAGE */}
      <header>
        <Header />
      </header>

      <main>
        <aside>
          <CreatePost />
        </aside>

        <section>
          <PostCardList />
        </section>
      </main>
    </>
  );
}

export default App;
