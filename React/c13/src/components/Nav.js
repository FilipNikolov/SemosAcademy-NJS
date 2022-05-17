import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css"
export const Nav = () => {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cities">Cities</Link></li>
        </ul>
    )
}