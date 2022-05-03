import React from "react";
import PropTypes from "prop-types";

export const Posts = ({ postList }) => {

    return (
        <div id="posts">
            {postList.length > 0 ?
                <div>
                    {postList.map(post => {
                        return (
                            <React.Fragment key={post.id}>
                                <p>Id: {post.id}</p>
                                <p>Title: {post.title}</p>
                                <p>Body: {post.body}</p>
                                <br />
                                <br />
                            </React.Fragment>
                        )
                    })}
                </div> : <p>Loading...</p>}
        </div>
    )
}

Posts.propTypes = {
    postList: PropTypes.arrayOf(PropTypes.object).isRequired
}