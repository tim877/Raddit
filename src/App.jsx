import "./App.css";
import { useEffect, useState } from "react";
import { getAllUsers } from "./api/users";

import Header from "./components/Header.jsx";
import CreatePost from "./components/CreatePost.jsx";
import PostCardList from "./components/PostCardList.jsx";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);

  return (
    <>
      {/* // STARTPAGE */}
      <header>
        <Header />
      </header>

      <main>
        <aside>
          <CreatePost />
        </aside>

        <section>
          <PostCardList users={users} />
        </section>
      </main>
    </>
  );
}

export default App;
