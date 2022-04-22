import React from "react";
import PropTypes from "prop-types"

export const Dropdown=({elements, onChange})=>{
//    console.log(ele)
    return(
        <p>
            <label htmlFor="app-select">Choose an App</label>
            <select  onChange={onChange} id="app-select">
                {
                    elements.map((elem,i)=>{
                     return(   <option key={i} value={elem.value}>
                            {elem.name}
                        </option>)
                    })
                }
            </select>
        </p>
    )
};
Dropdown.propTypes={
    elements:PropTypes.arrayOf(PropTypes.object),
    onChange:PropTypes.func
}