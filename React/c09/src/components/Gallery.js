import React from "react";
import PropTypes from "prop-types";
import { Popup } from "./Popup"

export const Gallery = ({ photoList, openPhoto, selectedImage, closePhoto }) => {
    console.log(photoList)
    return (
        <div id="gallery">
            <div>Gallery:{photoList.slice(0, 10).map(photo => {
                return (
                    <div onClick={() => openPhoto(photo)}
                        key={photo.id}>

                        <img src={photo.thumbnailUrl} alt={photo.title} />
                    </div>
                )
            })}
                {
                    selectedImage && selectedImage !== "" && <Popup selektiranaSlika={selectedImage} zatvoriSlika={closePhoto} />
                }</div>
        </div>
    )
}

Gallery.propTypes = {
    photoList: PropTypes.arrayOf(PropTypes.object).isRequired,
    openPhoto: PropTypes.func,
    selectedImage: PropTypes.string,
    closePhoto: PropTypes.func
}