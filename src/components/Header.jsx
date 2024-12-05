import "../styles/styleHeader.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Raddit</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/post">Post</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
      <div className="user-actions">
        <button className="login">Log In</button>
        <button className="signup">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
