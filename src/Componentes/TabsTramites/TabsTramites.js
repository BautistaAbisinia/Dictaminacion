import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';

import './TabsTramites.css';
import CardTramitesDigitales from "../CardTramitesDigitales/CardTramitesDigitales";

const TabsTramites = () => {
    const [key, setKey] = useState('masBuscados');

    const tramites = [
        { titulo: 'Trámite 1', descripcion: 'Descripción del trámite 1', categoria: 'Categoría 1', precio: '$10', url: '#' },
        { titulo: 'Trámite 2', descripcion: 'Descripción del trámite 2', categoria: 'Categoría 2', precio: '$20', url: '#' },
        { titulo: 'Trámite 3', descripcion: 'Descripción del trámite 3', categoria: 'Categoría 3', precio: '$20', url: '#' },
        { titulo: 'Trámite 4', descripcion: 'Descripción del trámite 4', categoria: 'Categoría 2', precio: '$20', url: '#' },
        { titulo: 'Trámite 5', descripcion: 'Descripción del trámite 5', categoria: 'Categoría 2', precio: '$20', url: '#' },
        { titulo: 'Trámite 6', descripcion: 'Descripción del trámite 6', categoria: 'Categoría 2', precio: '$20', url: '#' },
        // ... Agrega tramites lim. 6
    ];

    return (
        <Container className="tabs-tramites">
            <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="masBuscados">Más Buscados</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="enLinea">En Línea</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="masBuscados">
                                <Row>
                                    {tramites.map((tramite, index) => (
                                        <Col sm={12} md={6} lg={4} key={index}>
                                            <CardTramitesDigitales {...tramite} variante="botones"/>
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="enLinea">
                                <Row>
                                    {tramites.map((tramite, index) => (
                                        <Col sm={12} md={6} lg={4} key={index}>
                                            <CardTramitesDigitales {...tramite} variante="botones" />
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default TabsTramites;
