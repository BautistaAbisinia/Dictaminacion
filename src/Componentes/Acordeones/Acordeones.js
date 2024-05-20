import React from 'react';
import {Accordion, Container, Row} from 'react-bootstrap';
import './Acordeones.css';
import { Link } from 'react-router-dom';

function Acordeones() {
    return (

        <Container className="custom-accordion">
            <style>
                {
                    `
    .custom-accordion li {
        font-size: 28px !important;
        color: black !important;
    }
    
        .custom-accordion li a {
        font-size: 28px !important;
        color: #6a1c32 !important;
        font-weight: 550 !important; /* Esto hará que la fuente sea más gruesa */
    }

    .custom-accordion li a:hover {
        color: #b17a45 !important;
    }

    .custom-accordion .accordion-button:not(.collapsed) {
        color: #ffffff; /* color blanco del texto */
        background-color: #6a1c32; /* color guinda del fondo */
    }

    .custom-accordion .accordion-button:not(.collapsed):hover {
        background-color: #b17a45 !important; /* color de hover */
    }

       .custom-accordion .accordion-item { /* Agrega sombreado y bordes redondeados a los elementos del acordeón */
        box-shadow: 0px 0px 16px rgba(0,0,0,0.1);
        border-radius: 20px; /* Ajusta este valor para obtener la redondez que desees */
    }
    
    .custom-accordion .accordion-header, .custom-accordion .accordion-body {
        border-radius: 20px; /* Asegúrate de que los encabezados y cuerpos del acordeón también tengan bordes redondeados */
    }
    
    .custom-accordion .accordion-button {
        background-color: #6a1c32;
        color : white;
        border-radius: 20px; /* Puedes ajustar esto si quieres que los botones del acordeón también tengan bordes redondeados */
    }


    `
                }
            </style>
            <Row className="custom-accordion">

                <hr style={{  borderColor:'#eeeeee' }}/>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <h1>Lineamientos de Gobernanza Tecnologica</h1>
                        </Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                    <a href="https://drive.google.com/uc?export=download&id=13oJNhIaYyx1fyC2n375bl8cGaKi-sJ8h"
                                       download="PROYECTO DE LINEAMIENTO DE GOBERNANZA TECNOLÓGICA V21FEB2023.docx">Lineamientos para la Gobernanza Tecnologica Del Estado de Baja California</a>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <hr style={{  borderColor:'#eeeeee' }}/>
            </Row>

            <Row>
                <hr style={{  borderColor:'#eeeeee' }}/>


                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <h1>Estándares Técnicos</h1>
                        </Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                    <Link to="/hardware">Estándares Técnicos de Hardware</Link>
                                </li>
                                <li>
                                    <Link to="/software">Estándares Técnicos de Software</Link>
                                </li>
                                <li>
                                    <Link to="/equipos-electricos">Estándares Técnicos de Equipos Eléctricos</Link>
                                </li>
                                <li>
                                    <Link to="/redes-informaticas">Estándares Técnicos de Redes Informáticas</Link>
                                </li>
                                <li>
                                    <Link to="/accesorios">Estándares Técnicos de Accesorios</Link>
                                </li>
                                <li>
                                    <Link to="/perifericos">Estándares Técnicos de Periféricos</Link>
                                </li>
                                <li>
                                    <Link to="/consumibles">Estándares Técnicos de Consumibles</Link>
                                </li>
                                <li>
                                    <Link to="/componentes">Estándares Técnicos de Componentes</Link>
                                </li>
                                <li>
                                    <Link to="/ducteria">Estándares Técnicos Para la Instalación de Ductería en Infraestructura de Redes y Telecomunicaciones</Link>
                                </li>
                                <li>
                                    <Link to="/web">Estándares para el Desarrollo de Software de Aplicativos Web</Link>
                                </li>
                                <li>
                                    <Link to="/movil">Estándares para el Desarrollo de Software de Aplicativos Móviles</Link>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </Row>
            <hr style={{  borderColor:'#eeeeee' }}/>

            <Row>
                <hr style={{  borderColor:'#eeeeee' }}/>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <h1>Formatos Vigentes</h1>
                        </Accordion.Header>
                        <Accordion.Body>
                            <ul className="">
                                <li><a href="https://drive.google.com/uc?id=1rHMhkfHkkN2quPpLYX9HnSCOfjNRLFRv&export=download&authuser=0"
                                       download>Solicitud de Autorización</a></li>
                                <li><a href="https://drive.google.com/uc?id=19QvVgi9ZefxmvXVEtqMUFLh2TMVMRNMD&export=download&authuser=0"
                                       download>Solicitud de Dictamen Técnico</a></li>
                                <li><a href="https://drive.google.com/uc?id=11YZW_E2pRwj2UvKHXA6GMG6tz26zp77y&export=download&authuser=0"
                                       download>Solicitud de Visto Bueno</a></li>
                                <li><a href="https://drive.google.com/uc?id=1hTiucjmnCxwVhE-KfUWuCgWTWPt0Qqf6&export=download&authuser=0"
                                       download>Solicitud de Aceptación de Baja</a></li>
                            </ul>
                        </Accordion.Body>

                    </Accordion.Item>
                </Accordion>

                <hr style={{  borderColor:'#eeeeee' }}/>

            </Row>
            <Row>
                <hr style={{  borderColor:'#eeeeee' }}/>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <h1>Revisiones técnicas</h1>
                        </Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li><a href="https://baja_california_39446916.urbem.digital/baja_california_39446916/solicitud_de_autorizacion_1c167697-443b-49cc-9e4a-81a15a81d6bc/validate_citizen"
                                >Solicitud de Autorización</a> - Evalúa la adquisición con los lineamientos técnicos</li>
                                <li><a href="https://baja_california_39446916.urbem.digital/baja_california_39446916/solicitud_de_dictaminacion_420364b7-299e-45dc-a76c-9877c485ab67/validate_citizen"
                                >Solicitud de Dictamen Técnico</a> - Valora cuando son distintos a los lineamientos técnicos</li>
                                <li><a href="https://baja_california_39446916.urbem.digital/baja_california_39446916/solicitud_de_visto_bueno_8529cf2c-bb57-4081-9565-7c43a6519252/validate_citizen"
                                >Solicitud de Visto Bueno</a> - En los casos de traspaso o en caso de donación</li>
                                <li><a href="https://baja_california_39446916.urbem.digital/baja_california_39446916/solicitud_de_aceptacion_de_baja_f736fcc0-034f-4791-8f90-2bf604df878e/validate_citizen"
                                >Solicitud de Aceptación de Baja</a> - Valora para realización de baja y disposición final</li>
                                <li><a href="https://tramites.bajacalifornia.gob.mx/baja_california_39446916/solicitud_validacion_de_factura_0531906e-8e54-4959-8ade-1ddb0a2aa005/validate_citizen"
                                >Solicitud de Validación de Factura</a> - Revisión de factura para validar o reembolsar bienes adquiridos</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <hr style={{  borderColor:'#eeeeee' }}/>

            </Row>
            <Row>
                <hr style={{  borderColor:'#eeeeee' }}/>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <h1>Inventarios De TIC</h1>
                        </Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li><a href="https://www.dropbox.com/scl/fi/gymhtg6sr4w3b33ciz056/Inventario-de-bienes-de-TIC.docx?dl=1&rlkey=wkdhngkuvquc0adh9tv2rljyf"
                                       download>Inventario de Bienes de TIC </a></li>
                                <li><a href="https://www.dropbox.com/scl/fi/arc5pd0n8r5nvp8inoh8p/inventario-de-activos-intangibles-de-TIC.docx?dl=1&rlkey=5wgp00v0mpqcilfn66da1dxwd"
                                       download>Inventario de Activos Intangibles de TIC</a></li>
                            </ul>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <hr style={{  borderColor:'#eeeeee' }}/>

            </Row>
            <Row>

                <hr style={{  borderColor:'#eeeeee' }}/>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <h1>Preguntas Frecuentes para los Entes</h1>
                        </Accordion.Header>
                        <Accordion.Body>
                            <h3>Consulta  <Link to="/preguntas-frecuentes">AQUI</Link> las preguntas frecuentes
                                sobre dictaminación que facilitan a los Entes la información pertinente para pedir un dictamen técnico. </h3>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <hr style={{  borderColor:'#eeeeee' }}/>

            </Row>


        </Container>
    );
}


export default Acordeones;
