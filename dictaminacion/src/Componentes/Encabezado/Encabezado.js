import React, {useState} from 'react';
import { Container, Navbar, Nav, Modal, Button} from 'react-bootstrap';
import escudoBlanco from './logo blanco.png';
import './Encabezado.css';

function Encabezado() {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const contacts = [
        { name: 'Oscar Alfredo Reyes Espinosa', title: 'Director de Gobernanza Tecnológica', email: 'oareyes@baja.gob.mx' }
    ];

    return (
        <div className="custom-bg-gob">
            <Container>
                <Navbar expand="md" className="justify-content-between">
                    <Navbar.Brand className="d-none d-md-block">
                            <img width="350" height="77" src={escudoBlanco} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-navbar-toggler" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                        <h1 className="header-ventanilla-unica d-none d-md-block"><strong></strong></h1>
                    </Navbar.Collapse>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            {/*
<NavDropdown
    id="menu-dropdown"
    title="Menu"
    style={{ color: 'white !important', fontSize: '16px' }}
    onMouseEnter={(e) => (e.target.style.color = '#b17a45')}
    onMouseLeave={(e) => (e.target.style.color = 'white')}
>

    <NavDropdown.Item href="https://baja_california_39446916.urbem.digital/solicitud_de_autorizacion_1c167697-443b-49cc-9e4a-81a15a81d6bc">
        <span style={{ color: 'black', fontSize: '16px' }}>Iniciar Solicitud Autorización</span>
    </NavDropdown.Item>
    <NavDropdown.Item href="https://baja_california_39446916.urbem.digital/solicitud_de_dictaminacion_420364b7-299e-45dc-a76c-9877c485ab67">
        <span style={{ color: 'black', fontSize: '16px' }}>Iniciar Solicitud Dictamen Técnico</span>
    </NavDropdown.Item>
    <NavDropdown.Item href="https://baja_california_39446916.urbem.digital/solicitud_de_visto_bueno_8529cf2c-bb57-4081-9565-7c43a6519252">
        <span style={{ color: 'black', fontSize: '16px' }}>Iniciar Solicitud Visto Bueno</span>
    </NavDropdown.Item>
    <NavDropdown.Item href="https://baja_california_39446916.urbem.digital/solicitud_de_aceptacion_de_baja_f736fcc0-034f-4791-8f90-2bf604df878e">
        <span style={{ color: 'black', fontSize: '16px' }}>Iniciar Solicitud Aceptación de Baja</span>
    </NavDropdown.Item>
</NavDropdown>
*/}
                            <Nav.Link
                                href="/dictaminacion"
                                style={{ color: 'white', fontSize: '16px' }}
                                onMouseEnter={(e) => (e.target.style.color = '#b17a45')}
                                onMouseLeave={(e) => (e.target.style.color = 'white')}
                            >
                                Inicio
                            </Nav.Link>
                            <Nav.Link
                                href="#"
                                onClick={handleShow}
                                style={{ color: 'white', fontSize: '16px' }}
                                onMouseEnter={(e) => (e.target.style.color = '#b17a45')}
                                onMouseLeave={(e) => (e.target.style.color = 'white')}
                            >
                                Contáctanos
                            </Nav.Link>




                            <Modal show={showModal} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Contactos</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {contacts.map((contact, index) => (
                                        <div key={index}>
                                            <strong>{contact.title}</strong><br />
                                            {contact.name}<br />
                                            <a href={`mailto:${contact.email}`}>{contact.email}</a>
                                            <hr />
                                        </div>
                                    ))}
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Cerrar
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                            {/* <Nav.Link
        href="/tramites-digitales"
        style={{ color: 'white', fontSize: '16px' }}
        onMouseEnter={(e) => (e.target.style.color = '#b17a45')}
        onMouseLeave={(e) => (e.target.style.color = 'white')}
    >
        Trámites y Servicios
    </Nav.Link> */}

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
}

export default Encabezado;
