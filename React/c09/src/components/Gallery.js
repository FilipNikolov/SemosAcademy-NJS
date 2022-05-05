import React, { createContext } from "react";
import PropTypes from "prop-types";
import { Popup } from "./Popup"

const UserContext = createContext(null);

export const Gallery = ({ photoList, openPhoto, selectedImage, closePhoto, deleteSelectedPhoto }) => {

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
                <UserContext.Provider value={{ selectedImage, closePhoto }}>
                    <Popup selectedImage={selectedImage} closePhoto={closePhoto} deleteSelectedPhoto={deleteSelectedPhoto} />
                </UserContext.Provider>
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