import React, { useState, useEffect } from "react";

export const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
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
                            <>
                                <p>Name:{comment.name}</p>
                                <p>Email:{comment.email}</p>
                                <p>Body:{comment.body}</p>
                                <br />
                                <br />
                            </>

                        )
                    })}
                </div> : <p>Loading Comments...</p>}
        </div>
    )
}