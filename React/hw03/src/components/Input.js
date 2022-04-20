import React from "react";
import PropTypes from "prop-types";

export const Input=({type,placeholder,onChange,value,name,mouseDown,mouseUp,setToggle})=>{
    return(
        <p>
            <input type={type} 
            placeholder={placeholder} 
            onChange={onChange} 
            value={value} 
            name={name}
         />
        {
            name === "password" &&
            <button type="button"
            className="eye-button"
            onMouseDown={mouseDown}
            onMouseUp={mouseUp}
            onMouseLeave={mouseUp}>
                <i className={type ==="password" ? "fa fa-eye-slash" : "fa fa-eye"}></i>
            </button>
        }
        </p>
    )
}

Input.propTypes ={
    type:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    onChange:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    setToggle:PropTypes.func,
    mouseDown:PropTypes.func,
    mouseUp:PropTypes.func
}