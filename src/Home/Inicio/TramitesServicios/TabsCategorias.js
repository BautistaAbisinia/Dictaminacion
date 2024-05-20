import React, { useState } from "react";
import {Row, Col, Button, Container} from "react-bootstrap";
import CardServiciosDigitales from "../../../Componentes/CardServiciosDigitales/CardServiciosDigitales";

const TabsCategorias = ({ cardsData }) => {
    const categories = Array.from(new Set(cardsData.map((card) => card.categoria)));

    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const renderCards = () => {
        return (
                <Row>
                    {cardsData
                        .filter((card) => card.categoria === activeCategory)
                        .map((card) => (
                            <CardServiciosDigitales
                                key={card.id}
                                titulo={card.titulo}
                                descripcion={card.descripcion}
                                precio={card.precio}
                                url1={card.url1}
                                className="my-card"
                            />
                        ))}
                </Row>

        );
    };

    return (
        <Row>
            <Col sm={3}>
                {categories.map((category, index) => (
                    <Button
                        key={index}
                        onClick={() => setActiveCategory(category)}
                        variant={activeCategory === category ? "primary" : "outline-primary"}
                        className="mb-2 w-100"
                    >
                        {category}
                    </Button>
                ))}
            </Col>
            <Col sm={9}>

                    <Container>
                        {renderCards()}
                    </Container>

            </Col>
        </Row>
    );
};

export default TabsCategorias;
