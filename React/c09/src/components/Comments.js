import React, { useState, useEffect } from "react";
import { API_URL } from "../utils/contstants";

export const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/comments`)
            .then(res => res.json())
            .then(json => setComments(json))
            .catch(err => alert(err))
    }, []);

    return (
        <div id="comments">
            {comments.length > 0 ?
                <div>
                    {comments.map(comment => {
                        return (

                            <React.Fragment key={comment.id}>
                                <p>Name: {comment.name}</p>
                                <p>Email: {comment.email}</p>
                                <p>Body: {comment.body}</p>
                                <br />
                                <br />
                            </React.Fragment>

                        )
                    })}
                </div> : <p>Loading Comments...</p>}
        </div>
    )
}