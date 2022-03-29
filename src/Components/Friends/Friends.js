import React, { useEffect, useState } from "react";
import "./Friends.css";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div>
      <h1>Friends</h1>
    </div>
  );
};

export default Friends;
