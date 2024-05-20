import React from 'react';
import {ListGroup , Dropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Banner.css';

function NewBanner() {


    return (
        <ListGroup horizontal className="custom-bg-gob">
            <Dropdown
                className="flex-grow-1 text-center">
                <Dropdown.Toggle variant="custom" className="w-100">
                    Inicio
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>Submenu 1</Dropdown.Item>
                    <Dropdown.Item>Submenu 2</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown
                className="flex-grow-1 text-center">
                <Dropdown.Toggle variant="custom" className="w-100">
                    Dependencia
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>Submenu 1</Dropdown.Item>
                    <Dropdown.Item>Submenu 2</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown
                className="flex-grow-1 text-center">
                <Dropdown.Toggle variant="custom" className="w-100">
                    Comunicación
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>Submenu 1</Dropdown.Item>
                    <Dropdown.Item>Submenu 2</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown
                className="flex-grow-1 text-center">
                <Dropdown.Toggle variant="custom" className="w-100">
                    Pensión para el Bienestar de las Personas con Discapacidad
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>Submenu 1</Dropdown.Item>
                    <Dropdown.Item>Submenu 2</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown
                className="flex-grow-1 text-center">
                <Dropdown.Toggle variant="custom" className="w-100">
                    Mejora regulatoria
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>Submenu 1</Dropdown.Item>
                    <Dropdown.Item>Submenu 2</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown
                className="flex-grow-1 text-center">
                <Dropdown.Toggle variant="custom" className="w-100">
                    Oficina de Cooperación Digital
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>Submenu 1</Dropdown.Item>
                    <Dropdown.Item>Submenu 2</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown
                className="flex-grow-1 text-center">
                <Dropdown.Toggle variant="custom" className="w-100">
                   Ver mas
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>Submenu 1</Dropdown.Item>
                    <Dropdown.Item>Submenu 2</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </ListGroup>
    );

}

export default NewBanner;

