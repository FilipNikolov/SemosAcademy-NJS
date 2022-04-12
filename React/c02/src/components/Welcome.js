import React from "react";

export function Welcome(props){
  console.log(props)
    return(
        <div className="welcome">
            <h2>Hi and welcome to my app, your name is {props.ime} {props.prezime}</h2>
           {props.godini && <h2>Age:{props.godini}</h2>}
        </div>
    )
};