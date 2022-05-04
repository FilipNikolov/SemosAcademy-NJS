import React from "react";
import PropTypes from "prop-types";
import { Popup } from "./Popup"

export const Gallery = ({ photoList, openPhoto, selectedImage, closePhoto }) => {
    // console.log(photoList)
    return (
        <div id="gallery">
            {photoList.slice(0, 50).map(photo => {
                return (
                    <div
                        className='image-holder'
                        onClick={() => openPhoto(photo)}
                        key={photo.id}>

                        <img src={photo.thumbnailUrl} alt={photo.title} />
                    </div>
                )
            })}
            {
                selectedImage && selectedImage !== "" &&
                <Popup selektiranaSlika={selectedImage} zatvoriSlika={closePhoto} />
            }
        </div>
    )
}

Gallery.propTypes = {
    photoList: PropTypes.arrayOf(PropTypes.object).isRequired,
    openPhoto: PropTypes.func,
    selectedImage: PropTypes.string,
    closePhoto: PropTypes.func
}