import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1>welcome Header</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/friends">Friends</a>
        <a href="/about">About</a>
      </nav>
    </div>
  );
};

export default Header;
