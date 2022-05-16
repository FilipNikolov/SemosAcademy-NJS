import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function CommentsComponent(props) {
    console.log(props)
    return (
        <div id="comments-component">
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {prop}
                </tbody>
            </table>
        </div>
    )
}