import React from "react";

export const Posts = ({ postList }) => {
    console.log(postList)
    return (
        <div>
            {postList.length > 0 ?
                <table border='1'>
                    <thead>
                        <tr>
                            <td>UserId</td>
                            <td>Title</td>
                            <td>Body</td>
                        </tr>
                    </thead>
                    <tbody>
                        {postList.map(post => {
                            return (
                                <tr key={post.id}>
                                    <td>{post.userId}</td>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table> : <p>Loading...</p>}
        </div>
    )
}   