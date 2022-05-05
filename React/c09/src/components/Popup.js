import React from "react";

export const Popup = (props) => {
    return (
        <div id="popup">
            <button className='close-popup' onClick={props.closePhoto}>
                &times;
            </button>
            <button className='delete-popup' onClick={props.deleteSelectedPhoto}>
                R
            </button>
            <div className="popup-container" >
                <img src={props.selectedImage} alt="" />
            </div>
        </div>
    )
}
