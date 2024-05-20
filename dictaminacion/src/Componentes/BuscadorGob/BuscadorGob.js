import React from 'react';
import { Container, Row, Col, Form, FormControl, InputGroup } from 'react-bootstrap';
import './BuscadorGob.css';

const BuscadorGob = () => {

    const busquedasFrecuentes = [
        { text: 'Consulta e impresión de la CURP', url: '#' },
        { text: 'Copia certificada acta de nacimiento', url: '#' },
        { text: 'Pago de agua', url: '#' },
        { text: 'Duplicado cédula profesional', url: '#' },
        { text: 'Copia certificada acta de nacimiento', url: '#' },
        { text: 'Ruta centro histórico de Mexicali', url: '#' },
    ];


    return (
        <div className="buscador-gob">
            <Container>
                <Row>
                    <Col>
                        <h1 className="header-buscador">¿QUÉ TRÁMITE O SERVICIO QUIERES REALIZAR?</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form className="d-flex">
                            <InputGroup>

                                <FormControl
                                    placeholder="Buscar trámite o servicio"
                                    className="search-input"
                                />

                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="busquedas-frecuentes mt-4">
                            <h5 style={{ color: "gray" }}>Búsquedas frecuentes:</h5>
                            <ul className="d-flex flex-wrap">
                                {busquedasFrecuentes.map((busqueda, index) => (
                                    <li key={index} className="frecuente-item">
                                        <a href={busqueda.url} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            {busqueda.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BuscadorGob;
