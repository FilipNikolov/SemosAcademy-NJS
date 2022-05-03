import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {

    return (
        <div id="not-found">
            <h1>Error !!! No Route Matches this URL</h1>
            <h2><Link to="/home">Go back to Home Page</Link></h2>
        </div>
    )
}