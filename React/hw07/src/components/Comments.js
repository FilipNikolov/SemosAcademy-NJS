import React, { useState, useEffect } from "react";

export function Comments() {
    const [comments, setComments] = useState([])

    function getComments() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(json => setComments(json))
            .catch(err => alert(err))
    }

    useEffect(() => {
        getComments()
    }, []);

    return (
        <div>
            <div>
                {comments.length > 0 ?
                    <table border='1'>
                        <thead>
                            <tr>
                                <td>PostId</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Body</td>
                            </tr>
                        </thead>
                        <tbody>
                            {comments.map(comment => {
                                return (
                                    <tr key={comment.id}>
                                        <td>{comment.postId}</td>
                                        <td>{comment.name}</td>
                                        <td>{comment.email}</td>
                                        <td>{comment.body}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table> : <p>Loading...</p>}
            </div>
        </div>
    )
}