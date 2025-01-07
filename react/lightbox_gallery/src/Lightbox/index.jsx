import React, { useState, useRef } from 'react';
import { images } from '../images';
import '../style.css';
import useOnOutSideClick from '../hooks/useOnOutSideClick';

export default function Lightbox() {
    const [isModal, setIsModal] = useState(false);
    const [activeImage, setActiveImage] = useState(null);

    const ref = useRef();

    useOnOutSideClick(ref, closeModel);

    function onImageClickHandler(image) {
        setActiveImage(image);
        setIsModal(true);
    }

    function closeModel() {
        setIsModal(false);
    }

    return (
        <div className="main_container">
            <div className="images_container">
                {images.map((image) => {
                    return (
                        <img
                            className="image"
                            src={image}
                            onClick={() => onImageClickHandler(image)}
                        />
                    );
                })}

                {isModal && (
                    <div className="modal">
                        <img className="active_image" src={activeImage} />
                        <div ref={ref} className="thumbnail_div">
                            {images.map((image) => {
                                return (
                                    <img
                                        src={image}
                                        className={`thumbnail ${activeImage === image ? 'active_thumbnail' : ''
                                            }`}
                                        onClick={() => onImageClickHandler(image)}
                                    />
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
