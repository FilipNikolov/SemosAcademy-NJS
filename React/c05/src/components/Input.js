import React from "react";
import PropTypes from "prop-types"

export const Input=({type,placeholder,value,onChange,name})=>{
    return(
        <p><input type={type} placeholder={placeholder} value={value} onChange={onChange} name={name}/>
       
        </p>
        
        )
}

Input.propTypes={
    type:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    onChange:PropTypes.string.isRequired,
    namne:propTypes.string.isRequired

};