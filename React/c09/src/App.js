import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import { Comments } from "./components/Comments";
import { Posts } from "./components/Posts";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";



export function App() {

    const [posts, setPosts] = useState([]);



    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(json => setPosts(json))
            .catch(err => alert(err))
    }, []);

    return (
        <div id="app">
            <h2>Application</h2>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts" element={<Posts postList={posts} />} />
                <Route path="/comments" element={<Comments />} />

            </Routes>
        </div>
    )
}