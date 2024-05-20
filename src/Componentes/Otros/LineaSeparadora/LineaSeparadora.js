// src/components/LineaSeparadora.js

import React from 'react';
import './LineaSeparadora.css';

const LineaSeparadora = ({ ancho  , grosor}) => {
    return <hr className="linea-separadora" style={{ width: ancho  , borderWidth : grosor}} />;
};

export default LineaSeparadora;
