import React, { useState } from 'react';
import CardTramitesDigitales from "../../../Componentes/CardTramitesDigitales/CardTramitesDigitales";
import './DoubleFilterTabs.css';



const DoubleFilterTabs = ({ tramites }) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const categories = [...new Set(tramites.map((tramite) => tramite.Categoria))];

    const filteredTramites = tramites.filter(
        (tramite) => !selectedCategory || tramite.Categoria === selectedCategory
    );

    return (
        <div>
            <div className="categories-tabs">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={selectedCategory === category ? 'active' : ''}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <h1 className="selected-category">
                <strong>{selectedCategory}</strong>
            </h1>
            <div className="tramites-container">
                {filteredTramites.map((tramite) => (
                    <CardTramitesDigitales
                        key={tramite.id}
                        titulo={tramite.Nombre}
                        descripcion={tramite.Descripcion}
                        categoria={tramite.Categoria}
                        precio="0$"
                        url1="#"
                        url2="#"
                    />
                ))}
            </div>
        </div>
    );
};

export default DoubleFilterTabs;
