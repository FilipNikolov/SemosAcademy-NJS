import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div id="not-found">
            <h1>Error !!! URL NOT FOUND </h1>
            <h2><Link to="/">Begaj Doma!</Link></h2>
        </div>
    )
};