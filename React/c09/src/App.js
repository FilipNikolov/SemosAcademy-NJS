import React, { useEffect, useState, createContext } from "react";
import { Route, Routes } from 'react-router-dom';
import { Comments } from "./components/Comments";
import { Posts } from "./components/Posts";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { Gallery } from "./components/Gallery";
import { API_URL } from "./utils/contstants";

const UserContext = createContext(null);

export function App() {
    let [posts, setPosts] = useState([]);
    let [photos, setPhotos] = useState([]);
    let [selectedImage, setSelectedImage] = useState({});

    useEffect(() => {
        fetch(`${API_URL}/posts`)
            .then(res => res.json())
            .then(json => setPosts(json))
            .catch(err => alert(err))

        fetch(`${API_URL}/photos`)
            .then(res => res.json())
            .then(json => setPhotos(json)
            )
            .catch(err => alert(err))
    }, []);

    function openPhoto(photo) {
        setSelectedImage(photo)
    }

    function closePhoto() {
        setSelectedImage({});
    }

    function deleteSelectedPhoto() {
        setPhotos([...photos.filter(photo => photo.id != selectedImage.id)])
        closePhoto()
    }

    return (
        <div id="app">
            <Nav />
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/posts" element={
                    <UserContext.Provider value={{ posts }}>
                        <Posts postList={posts}
                        />
                    </UserContext.Provider>
                } />
                <Route path="/comments" element={<Comments />} />
                <Route path="/gallery" element={
                    <UserContext.Provider value={{ photos, selectedImage, closePhoto, openPhoto }}>
                        <Gallery

                            photoList={photos}
                            openPhoto={openPhoto}
                            selectedImage={selectedImage.url}
                            closePhoto={closePhoto}
                            deleteSelectedPhoto={deleteSelectedPhoto}
                        />
                    </UserContext.Provider>
                } />

            </Routes>
        </div >
    )
}