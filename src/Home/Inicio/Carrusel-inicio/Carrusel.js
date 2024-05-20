// src/components/Carrusel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import baner from './Banner4k.jpg';
import './Carrusel.css';

const Carrusel = () => {
    const handleImageClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="carrusel-container">
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={baner}
                    alt="Banner BC"
                    onClick={() => handleImageClick('https://www.google.com')}
                />
            </Carousel.Item>
            {/* <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imagen2}
                    alt="Imagen 2"
                    onClick={() => handleImageClick('https://www.google.com')}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imagen3}
                    alt="Imagen 3"
                    onClick={() => handleImageClick('https://www.google.com')}
                />
            </Carousel.Item>
            */}
        </Carousel>
        </div>
    );
};

export default Carrusel;
