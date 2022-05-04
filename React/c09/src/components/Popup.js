import React from "react";

export const Popup = (props) => {
    return (
        <div id="popup">
            <button className='close-popup' onClick={props.zatvoriSlika}>
                &times;
            </button>
            <div className="popup-container" >
                <img src={props.selektiranaSlika} alt="" />
            </div>
        </div>
    )
}