import React from "react";

export const DropDownOption=({i, name, value, onClick})=>{
    return(
        <option 
        key={i} 
        value={value}>
            {name}
        </option>
    )
};