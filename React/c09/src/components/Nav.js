import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
    return (
        <ul type="none" id="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/comments">Comments</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
        </ul>
    )
}