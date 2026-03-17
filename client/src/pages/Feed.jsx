import React, { useEffect, useState } from "react";
import API from "../services/api";

function Feed() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {

    const res = await API.get("/posts");

    setPosts(res.data);

  };

  return (

    <div>

      <h2>Campus Feed</h2>

      {posts.map((post) => (

        <div key={post._id}>

          <h3>{post.title}</h3>

          <p>{post.content}</p>

          <p>Score: {post.score}</p>

        </div>

      ))}

    </div>

  );

}

export default Feed;