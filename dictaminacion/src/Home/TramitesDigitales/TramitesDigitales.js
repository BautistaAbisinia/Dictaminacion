import React from 'react';
import {
    Container,
    Image
} from 'react-bootstrap';
import './TramitesDigitales.css';
import banner from './BC-img-TramitesDigitales@4k.jpg'
import DoubleFilterTabs from "./TabsCategoriasTramites/DoubleFilterTabs";

const TramitesDigitales = ({ jsonData }) => {

    return (
        <Container className="bg-white">

            <h6><a href="/">Inicio</a> / Trámites Digitales</h6>
            <hr style={{  borderColor:'white'  }}/>
            <Image src={banner} className="responsive-banner" fluid />
            <hr style={{  borderColor:'white'  }}/>

            <DoubleFilterTabs tramites={jsonData} />

        </Container>
    );
};


export default TramitesDigitales;
