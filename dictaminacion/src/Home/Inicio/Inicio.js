import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import fotoMUAC from "./BC-MUAC-desktop@4k.jpg";
import LineaSeparadora from "../../Componentes/Otros/LineaSeparadora/LineaSeparadora";
import CardTramitesDigitales from "../../Componentes/CardTramitesDigitales/CardTramitesDigitales";
import Banner4k from '../Inicio/Carrusel-inicio/Banner4k.jpg';
import icono from '../../Imagenes/icon-online@4k - copia.png';
import iconoRetys from '../../Imagenes/RETyS-img_flecha@4k - copia.png';
import BuscadorGob from "../../Componentes/BuscadorGob/BuscadorGob";
import TabsTramites from "../../Componentes/TabsTramites/TabsTramites";
import './Inicio.css';


const Inicio = () => {

  return (
    <Container className="bg-white">
        <hr style={{  borderColor:'white' }}/>

        <BuscadorGob/>

        <hr style={{  borderColor:'white'  }}/>

        <Row className="d-flex justify-content-between align-items-center">
            <Col xs={2} className="d-flex align-items-center">
                <img src={icono} alt="icono-online" height="90px" width="90px" />
            </Col>
            <Col xs={8} className="d-flex justify-content-center">
                <h1 style={{ color: "#6a1c32" }}>
                    <strong>TRÁMITES DIGITALES</strong>
                </h1>
            </Col>
            <Col xs={2} className="d-flex align-items-center justify-content-end">
                <img src={iconoRetys} alt="icono-retys" height="90px" width="90px" />
            </Col>
        </Row>
        <Row>
            <Col className="d-flex justify-content-center">
                <h4>
                    <strong> Realízalos en línea y ahorra tiempo </strong>
                </h4>
            </Col>
        </Row>
        <Row>
            <Col className="d-flex justify-content-center">
                <LineaSeparadora ancho="30%" grosor={4} />
            </Col>
        </Row>


        <Container className="d-flex flex-wrap gap-4 justify-content-center">

        {/*
            <CardTramitesDigitales titulo="Constancia de No habilitado"  duracion = "3 dias habiles" precio = "$96"/>
            <CardTramitesDigitales titulo="Certificado de Divorcio"  duracion = "al momento" precio = "$0"/>
            <CardTramitesDigitales titulo="Copia de certificado de Defuncion"  duracion = "1 dia habil" precio = "$96"/>

            <CardServiciosDigitales titulo="Constancia de No habilitado" descripcion="3 dias habiles" precio="96" />
            <CardServiciosDigitales titulo="Certificado de Divorcio" descripcion="Al momento " precio="0"/>
            <CardServiciosDigitales titulo="Copia de certificado de defuncion" descripcion="1 dia habil" precio="96"/>
            <CardServiciosDigitales titulo="Copia de certificado de defuncion" descripcion="1 dia habil" precio="96"/>
           */}
            <CardTramitesDigitales
                titulo="Constancia de No habilitado"
                descripcion="3 dias habiles"
                categoria="Categoria de Ejemplo"
                precio="$96"
                url="https://www.example.com/url1"
                variante="botones"     /*variante: botones u enlace (por defecto enlace)*/
            />
            <CardTramitesDigitales
                titulo="Copia Certificada de acta de Divorcio"
                descripcion="al momento"
                categoria="Categoria de Ejemplo"
                precio="$0"
                url="https://www.example.com/url1"
                variante="botones"     /*variante: botones u enlace (por defecto enlace)*/
            />
               <CardTramitesDigitales
                titulo="Copia certificada de acto de Defuncion"
                descripcion="1 dia habil"
                categoria="Categoria de Ejemplo"
                precio="$96"
                url="https://www.example.com/url1"
                variante="botones"
            />

        </Container>


        <hr style={{  borderColor:'white'  }}/>
        {/*  <Carrusel/> Componente que tiene las imagenes que se mueven*/}
        <img src={Banner4k} alt="Banner" className="responsive-image"/>

        <hr style={{  borderColor:'white'  }}/>

            <Row className="d-flex justify-content-between align-items-center">
                <Col xs={2} className="d-flex align-items-center">
                    <img src={icono} alt="icono-online" height="90px" width="90px" />
                </Col>
                <Col xs={8} className="d-flex justify-content-center">
                    <h1 style={{ color: "#6a1c32" }}>
                        <strong>TRÁMITES Y SERVICIOS</strong>
                    </h1>
                </Col>
                <Col xs={2} className="d-flex align-items-center justify-content-end">
                    <img src={iconoRetys} alt="icono-retys" height="90px" width="90px" />
                </Col>
            </Row>
        <Row>
            <Col className="d-flex justify-content-center">
                <h4>
                   <strong> Consulta o realiza tu solicitud presencial o de forma híbrida en línea </strong>
                </h4>
            </Col>
        </Row>
        <Row>
            <Col className="d-flex justify-content-center">
                <LineaSeparadora ancho="30%" grosor={4} />
            </Col>
        </Row>


        <hr style={{  borderColor:'white'  }}/>


        {/* <TabsCategorias cardsData={data}/>*/}
           <TabsTramites/>


        <hr style={{  borderColor:'white'  }}/>
        <hr style={{  borderColor:'white'  }}/>

        <div className="d-flex justify-content-center align-items-center">
            <img src={fotoMUAC} alt="MUAC" className="responsive-image"/>
        </div>

    </Container>
  )
}
/*
const data = [
    {
        id: 1,
        titulo: "Ruta Centro Histórico de Mexicali ",
        descripcion: "Descripcion 1",
        precio: 99.9,
        categoria: "Categoria 1",
        url1: "www.ejemplo1.com",
        url2: "www.ejemplo2.com",
    },
    {
        id: 2,
        titulo: "Solicitud de histórico de cargos",
        descripcion: "Solicitud de histórico de cargos y pagos correspondientes ante la Comisiòn de Servicios Pùblicos de Tecate.",
        precio: 22,
        categoria: "Categoria 2",
        url1: "www.ejemplo1.com",
        url2: "www.ejemplo2.com",
    },
    {
        id: 3,
        titulo: "Programa de Autorregulación Sanitaria ante COEPRIS BC",
        descripcion: "Programa de Autorregulación Sanitaria ante COEPRIS BC",
        precio: 23,
        categoria: "Categoria 3",
        url1: "www.ejemplo1.com",
        url2: "www.ejemplo2.com",
    },
    {
        id: 34,
        titulo: "Titulo 3",
        descripcion: "Descripcion 3",
        precio: 23,
        categoria: "Categoria 3",
        url1: "www.ejemplo1.com",
        url2: "www.ejemplo2.com",
    },
    {
        id: 33,
        titulo: "Titulo 3",
        descripcion: "Descripcion 3",
        precio: 23,
        categoria: "Categoria 3",
        url1: "www.ejemplo1.com",
        url2: "www.ejemplo2.com",
    },
    {
        id: 4,
        titulo: "Titulo 4",
        descripcion: "Descripcion 4",
        precio: 44,
        categoria: "Categoria 4",
        url1: "www.ejemplo1.com",
        url2: "www.ejemplo2.com",
    },
    {
        id: 5,
        titulo: "Titulo 1",
        descripcion: "Descripcion 1",
        precio: 99.9,
        categoria: "Categoria 5",
        url1: "www.ejemplo1.com",
        url2: "www.ejemplo2.com",
    },
    {
        id: 6,
        titulo: "Titulo 1",
        descripcion: "Descripcion 1",
        precio: 99.9,
        categoria: "Categoria 6",
        url1: "www.ejemplo1.com",
        url2: "www.ejemplo2.com",
    },
    {
        id: 7,
        titulo: "Titulo 1",
        descripcion: "Descripcion 1",
        precio: 99.9,
        categoria: "Categoria 1",
        url1: "www.ejemplo1.com",
        url2: "www.ejemplo2.com",
    },

];  */
export default Inicio
