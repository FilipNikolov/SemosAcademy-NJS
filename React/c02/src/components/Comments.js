import React from "react";

export function Comments(props){
    console.log(props)
    return(
        <div className="comments">
            {props.has_comments &&<h2>Comments</h2>}
            {props.mutiple_comments === false ?<p>SomeComments</p>
            : <p>Only few comments</p>
            }
        </div>  
    )
};