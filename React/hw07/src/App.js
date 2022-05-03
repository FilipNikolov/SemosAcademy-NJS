import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { Posts } from "./components/Posts";
import { Comments } from "./components/Comments";
import { Nav } from "./components/Nav";
import { NotFound } from "./components/NotFound";
import { Home } from "./components/Home";

export function App() {
  const [posts, setPosts] = useState([]);


  function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => setPosts(json))
      .catch(err => alert(err))
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div id="app">
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/posts" element={<Posts postList={posts} />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}