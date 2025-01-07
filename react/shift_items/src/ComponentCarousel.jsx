import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleChevronLeft,
    faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function ComponentCarousel({ style, items, children }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const containerRef = useRef(null);
    const [startX, setStartX] = useState(null);
    const [swipeType, setSwipeType] = useState("");
    const nextImageHandler = () => {
        if (items.length - 1 > currentImageIndex) {
            let t = (currentImageIndex + 1) * 100;
            containerRef.current.style.transform = `translateX(-${t}%)`;
            setCurrentImageIndex(prev => prev + 1);
        }
    };

    const prevImageHandler = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(prev => prev - 1);
            let t = (currentImageIndex - 1) * 100
            containerRef.current.style.transform = `translateX(-${t}%)`;
        }
    };

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (startX === null) return;
        const currentX = e.touches[0].clientX;
        const diffX = currentX - startX;

        if (diffX > 0) {
            setSwipeType("RIGHT");
        } else if (diffX < 0) {
            setSwipeType("LEFT");
        }
    };

    const handleTouchEnd = (e) => {
        setStartX(null);
        if (swipeType === "RIGHT") {
            prevImageHandler();
        } else if (swipeType === "LEFT") {
            nextImageHandler();
        }
        setSwipeType("");
    };

    const jumpToHandler = (index) => {
        if (index < currentImageIndex) {
            prevImageHandler()
        }

        if (index > currentImageIndex) {
            nextImageHandler()
        }
    }

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
            }}
        >
            <div
                ref={containerRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{ ...style }}
            >
                {items?.map((item, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                flexShrink: 0,
                                flexGrow: 0,
                                width: "100%",
                                height: "100%",
                            }}>
                            {React.Children.map(children, child => {
                                return React.cloneElement(child, { item, index });
                            })}
                        </div>
                    );
                })}
            </div>
            <FontAwesomeIcon
                style={{
                    color: "white",
                    backgroundColor: "transparent",
                    width: "1.5rem",
                    height: "1.5rem",
                    position: "absolute",
                    top: "50%",
                    bottom: "50%",
                    left: "5px",
                    transform: "translateY(-50%)",
                }}
                onClick={prevImageHandler}
                icon={faCircleChevronLeft}
            />
            <FontAwesomeIcon
                style={{
                    color: "white",
                    backgroundColor: "transparent",
                    width: "1.5rem",
                    height: "1.5rem",
                    position: "absolute",
                    top: "50%",
                    bottom: "50%",
                    right: "5px",
                    transform: "translateY(-50%)",
                }}
                onClick={nextImageHandler}
                icon={faCircleChevronRight}
            />
            <div style={{
                position: 'absolute',
                bottom: '10px',
                right: 0,
                left: 0,
                display: 'flex',
                justifyContent: 'center',
                gap: '10px'
            }}>
                {items.map((_, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                width: "18px",
                                height: "6px",
                                boxShadow: "1px 1px 2px rgba(0,0,0,.9)",
                                borderRadius: "10px",
                                cursor: "pointer",
                                ...(currentImageIndex === index
                                    ? {
                                        border: "1px solid white",
                                        backgroundColor: 'white',
                                    }
                                    : {
                                        border: "1px solid white",
                                    }),
                            }}
                            onClick={() => {
                                jumpToHandler(index);
                            }}
                        ></div>
                    );
                })}
            </div>
        </div >
    );
}

export default ComponentCarousel;
