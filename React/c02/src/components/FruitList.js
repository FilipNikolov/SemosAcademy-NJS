import React from "react";


export const FruitList = (props)=>{
    console.log(props)
    return(
        <div id="fruit-list">
            <h2>FruitList</h2>
            { <ul>{props.listOfFruits.map((fruit, i)=>{
                return(
                    <li key={i}>{fruit}</li>
                )
            })}
            </ul>
            }
            {/* <ul>{props.listofFruits.map((fruit,i)=>{<li key="i">{fruit</li>})</ul> */}
        </div>
    )
}