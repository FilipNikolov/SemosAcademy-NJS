import React from "react";
import { Link } from "react-router-dom";

export function Nav() {
    return (
        <ul type="circle">
            {/* <li><Link to="/">BackToApp</Link></li> */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <ul type="none">
                <li><Link to="/contact/us">US</Link></li>
            </ul>
            <li><Link to="/class-component">ClassComponents</Link></li>
            <li><Link to="/users">Users</Link></li>
        </ul>
    )
};