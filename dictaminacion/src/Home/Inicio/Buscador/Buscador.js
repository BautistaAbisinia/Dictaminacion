
import React, { useState } from 'react';
import './Buscador.css';

const Buscador = () => {
    const [searchValue, setSearchValue] = useState('');
    const busquedasFrecuentes = ['Consulta e impresión de la CURP', 'Copia certificada acta de nacimiento', 'Duplicado cédula profesional'];

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="buscador-container">
            <h2 className="encabezado"><strong>Bienvenido al Portal de busqueda de Agencia Digital </strong></h2>
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar..."
                    value={searchValue}
                    onChange={handleSearchChange}
                />
                <button className="btn btn-primary" type="button">
                    Buscar
                </button>
            </div>
            <div className="busquedas-frecuentes contenedor-gris">
                <h5>Busquedas Frecuentes:</h5>
                <ul>
                    {busquedasFrecuentes.map((busqueda, index) => (
                        <li key={index}>{busqueda}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Buscador;
