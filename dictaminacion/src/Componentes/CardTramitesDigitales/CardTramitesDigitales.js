import React from 'react';
import {Card, Button, Container} from 'react-bootstrap';
import './CardTramitesDigitales.css';

const CardTramitesDigitales = ({ titulo, descripcion, categoria, precio, url, variante}) => {
    const handleClick = (event) => {
        if (!event.target.closest('a')) {
            window.open(url, '_blank', 'noopener noreferrer');
        }
    };
    return (
        <Card onClick={handleClick} className="card-tramites-digitales flex-fill">
            <Card.Header className="card-header-tramite">{titulo}</Card.Header>
            <Card.Body>
                <Container>
                    <Card.Subtitle className="mb-2">{}</Card.Subtitle>
                    <Card.Text>{}</Card.Text>
                    <Card.Text className="precio">{descripcion}</Card.Text>
                </Container>
                {
                    variante === "botones" ? (
                        <div className="buttons-container">
                            {/* <Button className="btn btn-outline-custom" as="a" href={url} target="_blank" rel="noopener noreferrer">Ver Requisitos</Button>*/}
                            <Button className="btn btn-primary iniciar-tramite-btn" as="a" href={url} target="_blank" rel="noopener noreferrer">Iniciar Trámite</Button>
                        </div>
                    ) : (
                        <Card.Link href={url} style={{ color: '#b17a45' }}>
                            Ver Trámite
                        </Card.Link>
                    )
                }

            </Card.Body>

        </Card>
    );
};

export default CardTramitesDigitales;
