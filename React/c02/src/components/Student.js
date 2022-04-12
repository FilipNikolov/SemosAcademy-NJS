import React from "react";

export const Student = (props)=>{
    console.log(props)
    return(
        <div id="student">
            <p>Name:{props.student.name}</p>
            <p>Last Name:{props.student.lastname}</p>
            <p>College:{props.student.college}</p>
        </div>
    )
};