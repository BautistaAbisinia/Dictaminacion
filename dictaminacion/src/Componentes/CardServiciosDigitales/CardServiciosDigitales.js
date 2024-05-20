// src/components/ContenedorPersonalizado.js
import React from 'react';
import { Card} from 'react-bootstrap';
import './CardServiciosDigitales.css';

const CardServiciosDigitales = ({ titulo, descripcion, precio, url1 }) => {
    const handleClick = () => {
        window.open(url1, '_blank');
    };

    return (
        <Card  onClick={handleClick} className="contenedor-personalizado">
            <Card.Body className="h-100 d-flex flex-column">
                <div>
                    <Card.Title className="titulo">{titulo}</Card.Title>
                    <Card.Text className="descripcion">{descripcion}.</Card.Text>
                    <Card.Text className="precio">${precio}</Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
};



export default CardServiciosDigitales;
