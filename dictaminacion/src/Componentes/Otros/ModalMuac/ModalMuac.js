import React, { useState } from 'react';
import './ModalMuac.css';
import customer from '../../../Imagenes/customer.png';
import {Container} from "react-bootstrap";

const ModalMuac = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    /* global zE */
    const openWidget = () => {
        zE("messenger", "show");
        zE("messenger", "open");
        document.querySelector('#myLauncher').style.opacity = 0.4;
    };

    return (
        <Container>
            <a href="/#" className="whats-app" onClick={handleOpen}>
                <img src={customer} width="100px" alt="WhatsApp" />
            </a>

            {isOpen && (
                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close" onClick={handleClose}>&times;</span>
                            <h2>Forma de contacto con el Gobierno del Estado de Baja California</h2>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-6">
                                        <button type="button" className="btn btn-primary" id='myLauncher' onClick={openWidget}>ChatBot</button>
                                        <br />
                                        <button type="button" className="btn btn-primary" id="call-us-button">Llámanos</button>
                                        <br />
                                        <p>Facebook: <a href="https://www.facebook.com/BC.Gobierno" target="_blank" rel="noopener noreferrer">facebook.com/BC.Gobierno</a></p>
                                        <p>Whatsapp: <a href="https://api.whatsapp.com/send/?phone=5216869009091">(686)900-9091</a></p>
                                        <p><strong>Horario de Atención 24 horas 7 días a la semana</strong></p>
                                        <p>Correo Electrónico: <a href="mailto: atencionciudadana@bajacalifornia.gob.mx">atencionciudadana@bajacalifornia.gob.mx</a></p>
                                        <p><strong>Oficinas:</strong></p>
                                        <p><strong>Mexicali:</strong> Edificio Poder Ejecutivo, Calzada Independencia #994. Centro Cívico y Comercial, Mexicali, B.C. C.P. 21000
                                            <a href="https://goo.gl/maps/DD3XwaVt7dxhebsZA" target="_blank" rel="noopener noreferrer">Ver mapa</a></p>
                                        <p><strong>Tijuana:</strong> Edificio Poder Ejecutivo, Calzada Independencia #994. Centro Cívico y Comercial, Mexicali, B.C. C.P. 21000
                                            <a href="https://goo.gl/maps/DD3XwaVt7dxhebsZA" target="_blank" rel="noopener noreferrer">Ver mapa</a></p>
                                    </div>
                                    <div className="col-6">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <h3><a href="tel:526869009091">Teléfono: (686) 900-9091</a></h3>
                        </div>
                    </div>
                </div>
            )}
        </Container>
    );
};

export default ModalMuac;