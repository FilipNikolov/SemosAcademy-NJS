import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import { Comments } from "./components/Comments";
import { Posts } from "./components/Posts";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { Gallery } from "./components/Gallery";
import { API_URL } from "./utils/contstants";




export function App() {
    const [posts, setPosts] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [selectedImage, setSelectedImage] = useState({});

    useEffect(() => {
        fetch(`${API_URL}/posts`)
            .then(res => res.json())
            .then(json => setPosts(json))
            .catch(err => alert(err))

        fetch(`${API_URL}/photos`)
            .then(res => res.json())
            .then(json => setPhotos(json))
            .catch(err => alert(err))
    }, []);

    function openPhoto() {
        setSelectedImage(photos)
    }

    function closePhoto() {
        setSelectedImage({});
    }
    return (
        <div id="app">
            <h2>Application</h2>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts" element={<Posts postList={posts} />} />
                <Route path="/comments" element={<Comments />} />
                <Route path="/gallery" element={<Gallery photoList={photos} openPhoto={openPhoto} selectedImage={selectedImage.url} closePhoto={closePhoto} />} />

            </Routes>
        </div>
    )
}