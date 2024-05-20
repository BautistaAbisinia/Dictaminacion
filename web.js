import React from 'react'
import {Accordion, Container} from "react-bootstrap";

const Ducteria = () => {
  return (
      <Container className="custom-accordion">
        <style>
            {
                `
                h4{
                    text-align: justify;
                }
                `
            }
        </style>
      <hr style={{  borderColor:'#eeeeee' }}/>
      <Container>
        <div>
         <h2 className="encabezadoEstandar">ESTÁNDARES TÉCNICOS PARA LA INSTALACIÓN DE DUCTERÍA EN INFRAESTRUCTURA DE REDES Y TELECOMUNICACIONES</h2>
          <h4>La presente guía ofrece los requisitos esenciales necesarios para llevar a cabo adecuaciones de infraestructura destinadas a la instalación óptima de servicios de datos, voz y telefonía. Asimismo, se abordan los requisitos mínimos esenciales para la preparación de un "site" donde se ubicará el equipamiento de redes y telecomunicaciones, asegurando un entorno idóneo para el despliegue eficiente de sistemas de comunicación modernos y eficaces.</h4>
          <h4>En este sentido, se incluyen normativas aplicables, estándares de diseño, documentación necesaria, requisitos de adecuación del site, materiales recomendados, y consideraciones tanto para la instalación en interiores como en exteriores. El objetivo último es garantizar la calidad, seguridad y rendimiento óptimo de los servicios de datos, voz y telefonía en un entorno local.</h4>        
        </div>
      </Container>

      <hr style={{  borderColor:'#eeeeee' }}/>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header><h2>REQUISITOS DE ADECUACIONES DE INFRAESTRUCTURA </h2></Accordion.Header>
          <Accordion.Body>
            <div className='Text'>
                <h6>Estos son algunos de los requisitos mínimos que podrías considerar para garantizar una infraestructura adecuada para la instalación de servicios de datos, voz y telefonía en un local. </h6>
                <br/>
                <h6><strong>Dimensiones Adecuadas:</strong></h6>
                <ol>
                    <li>Las ducterías deben tener dimensiones apropiadas para alojar los cables de red y telecomunicaciones de manera ordenada y sin obstrucciones. Se deben tener en cuenta tanto el tamaño como la cantidad de cables que se instalarán.</li>
                    <li>Para cables de datos y voz, se recomienda una ductería con un diámetro interno de al menos 1.25 pulgadas (31.75 mm) para permitir una fácil instalación y manipulación de los cables.</li>
                    <li>Para cables de fibra óptica, se debe utilizar una ductería con un diámetro interno de al menos 2 pulgadas (50.8 mm) para evitar curvaturas excesivas que puedan dañar la fibra.</li>
              </ol>
              <br/>
                <h6><strong>Material de Calidad:</strong></h6>
                <ol>
                    <li>Asegúrate de que las ducterías estén fabricadas con materiales resistentes y duraderos que cumplan con las especificaciones necesarias para el entorno en el que se instalarán.</li>
                    <li>Se recomienda certificación Panduit, no especifica materiales específicos para la ductería en términos de marcas o fabricantes particulares, pero ofrece pautas generales sobre los tipos de materiales que son adecuados para su uso en diferentes entornos, ya sea en interiores o exteriores o utilizar o cualquier otra normativa aplicable.</li>
                    <h6><strong>Interior:</strong></h6>
                    <ol>
                        <li>Para instalaciones en interiores, los materiales más comunes y recomendados son el PVC (Policloruro de Vinilo) y el PVC-U (Policloruro de Vinilo no Plastificado). Estos materiales son duraderos, resistentes a la corrosión, fáciles de trabajar y ofrecen una buena protección para los cables en entornos controlados. Además del PVC, también se pueden utilizar materiales como el acero galvanizado para ductería metálica, especialmente en entornos donde se requiere una mayor resistencia mecánica o donde existe el riesgo de daños físicos.</li>
                    </ol>
                    <h6><strong>Exterior:</strong></h6>
                    <ol>
                        <li>Para instalaciones en exteriores, es importante utilizar materiales que sean resistentes a la intemperie, la humedad, los rayos UV y otros elementos ambientales. El PVC y el PVC-U pueden ser adecuados en algunos casos, especialmente si están diseñados para uso en exteriores y cuentan con protección adicional contra la radiación UV.</li>
                        <li>Otros materiales comunes para la ductería en exteriores incluyen el PVC corrugado, que ofrece una mayor flexibilidad y resistencia a la tracción, así como el acero inoxidable, que es altamente resistente a la corrosión.</li>
                    </ol>
              </ol>
              <br/>
                <h6><strong>Rutas Claras y Directas:</strong></h6>
                <ol>
                    <li>Las ducterías deben proporcionar rutas claras y directas para el tendido de cables, evitando giros bruscos o curvas cerradas que puedan dañar los cables o dificultar el acceso para futuras modificaciones o mantenimiento.</li>
                    <li>Se recomienda que los ángulos en las curvas no excedan los 90 grados. Ángulos mayores pueden causar estrés excesivo en los cables y reducir su vida útil.</li>
                    <li>Se recomienda seguir las directrices proporcionadas por el fabricante de los cables y los componentes de la infraestructura. Esto garantiza que se cumplan las especificaciones técnicas y se mantenga la garantía del producto.</li>
                    <li>Se recomienda seguir las normativas locales o estándares de la industria que establezcan requisitos específicos para la instalación de ducterías y cables. Es importante consultar estas normativas y asegurarse de cumplirlas en todo momento.</li>
                </ol>
                <br/>
                <h6><strong>Separación Adecuada:</strong></h6>
                <ol>
                    <li>Si se van a alojar cables de diferentes tipos (datos, voz, telefonía, etc.), es importante asegurarse de que haya una separación adecuada entre ellos para evitar interferencias y garantizar un rendimiento óptimo.</li>
                    <li>Se recomienda una separación mínima de 2 pulgadas (50.8 mm) entre los cables de datos y voz, y una separación mínima de 4 pulgadas (101.6 mm) entre los cables de datos/voz y los cables de energía eléctrica para reducir el riesgo de interferencias.</li>
                </ol>
                <br/>
                <h6><strong>Etiquetado y Documentación:</strong></h6>
                <ol>
                    <li>Cada ductería debe estar etiquetada de manera clara y precisa para identificar los cables que contiene y su destino. Además, se debe mantener una documentación detallada que registre la ubicación y la ruta de cada ductería.</li>
                    <li>Cada ductería debe estar etiquetada de manera clara y precisa para identificar los cables que contiene, su origen y su destino.</li>
                    <li>Se debe mantener una documentación detallada que registre la ubicación, la ruta y la capacidad de cada ductería, así como cualquier otra información relevante para su gestión y mantenimiento.</li>
                    <li>Las ducterías deben ser accesibles para facilitar la instalación inicial de los cables y el acceso posterior para tareas de mantenimiento, inspección o reparación.</li>
                </ol>
                <br/>
                <h6><strong>Cumplimiento de Normativas:</strong></h6>
                <ol>
                    <li>Asegúrate de que las ducterías cumplan con las normativas y regulaciones locales relacionadas con la seguridad, el cableado y la infraestructura de telecomunicaciones. </li>
                </ol>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr style={{  borderColor:'#eeeeee' }}/>

      <hr style={{  borderColor:'#eeeeee' }}/>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header><h2>REQUISITOS DE ADECUACIONES DE SITE</h2></Accordion.Header>
          <Accordion.Body>
          <div className='Text'>
                <h6>Los requisitos mínimos para un “site", refiriéndose a un lugar físico donde se instalará equipamiento de redes y telecomunicaciones.  Pueden variar dependiendo de varios factores, incluyendo el tamaño del sitio, el tipo de servicios que se van a proporcionar, las necesidades de los usuarios y las regulaciones algunos requisitos mínimos que podrían aplicar:</h6>
                <br/>
                <h6><strong>Conexión a la red eléctrica confiable:</strong></h6>
                <ol>
                    <li>El sitio debe contar con una conexión eléctrica estable y confiable para alimentar el equipamiento de redes y telecomunicaciones, así como cualquier otro equipo necesario. </li>
                    <li>Considerar la instalación de sistemas de protección contra sobretensiones para proteger el equipamiento de daños causados por picos de voltaje.</li>
              </ol>
              <br/>
                <h6><strong>Conexión a la red de telecomunicaciones:</strong></h6>
                <ol>
                    <li>Se necesita contar con una conexión a la red de telecomunicaciones que permita la comunicación externa, ya sea mediante líneas terrestres, fibra óptica u otros medios. Es importante garantizar que se cumplan los estándares de seguridad y calidad de la señal para asegurar un rendimiento óptimo de los servicios de datos, voz y video.</li>
              </ol>
              <br/>
                <h6><strong>Espacio físico adecuado:</strong></h6>
                <ol>
                    <li>Proporcionar un espacio físico adecuado y suficiente para alojar todos los equipos de red y telecomunicaciones, incluyendo racks, servidores, switches, routers y otros dispositivos considerando la disponibilidad de espacio adicional para futuras expansiones o actualizaciones de la infraestructura.</li>
                </ol>
                <br/>
                <h6><strong>Seguridad física:</strong></h6>
                <ol>
                    <li>Se deben implementar medidas de seguridad física, como cerraduras en las puertas, sistemas de vigilancia por video, control de acceso y sistemas de alarma, para proteger el sitio y el equipamiento contra el acceso no autorizado y el robo.</li>
                </ol>
                <br/>
                <h6><strong>Climatización adecuada:</strong></h6>
                <ol>
                    <li>Es importante considerar la utilización de sistemas de ventilación, aire acondicionado o refrigeración líquida según las necesidades y el tamaño del sitio y prevenir el sobrecalentamiento del equipamiento </li>
                </ol>
                <br/>
                <h6><strong>Sistema de respaldo de energía:</strong></h6>
                <ol>
                    <li>Se recomienda tener un sistema de respaldo de energía, como UPS (Sistema de Alimentación Ininterrumpida) o generadores, para garantizar la continuidad del servicio en caso de cortes de energía.</li>
                </ol>
                <br/>
                <h6><strong>Conectividad de red interna:</strong></h6>
                <ol>
                    <li>Se debe proporcionar una infraestructura de red interna que permita la conectividad entre todos los dispositivos y equipos instalados utilizando cableado estructurado de alta calidad y certificado para garantizar un rendimiento óptimo de la red y minimizar la interferencia electromagnética.</li>
                </ol>
                <br/>
                <h6><strong>Climatización adecuada:</strong></h6>
                <ol>
                    <li>Es importante contar con un sistema de monitoreo y gestión remota que permita supervisar y controlar el equipamiento de forma remota.</li>
                </ol>
                <br/>
                <h6><strong>Sistema de respaldo de energía:</strong></h6>
                <ol>
                    <li>Se deben cumplir con todas las normativas y estándares relevantes en el campo de las telecomunicaciones y la infraestructura de redes, tanto a nivel nacional como local según las necesidades de la operación. </li>
                </ol>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr style={{  borderColor:'#eeeeee' }}/>

      <hr style={{  borderColor:'#eeeeee' }}/>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header><h2>ENTREGABLES PARA VALIDACIÓN</h2></Accordion.Header>
          <Accordion.Body>
          <div className='Text'>
                <h6>Esta documentación debe estar disponible en formato digital para su revisión y referencia mostrando adecuadamente el proceso de instalación y verifiquen el cumplimiento de los estándares y especificaciones pertinentes</h6>
                <br/>
                <h6><strong>Planos de diseño y layout:</strong></h6>
                <ol>
                    <li>Planos deben proporcionar información clara y precisa que muestren la disposición de la ductería desde la acera hasta el sitio, incluyendo la ubicación de las cámaras de acceso, los registros, las curvas, los cambios de dirección, así como cualquier otro detalle importante para la instalación y la accesibilidad.</li>
              </ol>
              <br/>
                <h6><strong>Documentación fotográfica:</strong></h6>
                <ol>
                    <li>Las fotografías deben mostrar claramente la calidad de la instalación, la correcta disposición de la ductería, los ángulos de curvatura, las conexiones y cualquier otro aspecto relevante.</li>
              </ol>
              <br/>
                <h6><strong>Informes de inspección:</strong></h6>
                <ol>
                    <li>Informes detallados de inspección que documenten la evaluación de la ductería en términos de dimensiones, materiales, rutas, separación adecuada, etiquetado, accesibilidad y cumplimiento de normativas.</li>
                    <li>Los informes deben incluir observaciones, recomendaciones y cualquier acción correctiva necesaria para garantizar el cumplimiento de los estándares y especificaciones.</li>
                </ol>
                <br/>
                <h6><strong>Certificados de cumplimiento y garantía:</strong></h6>
                <ol>
                    <li>Certificados emitidos por el contratista o el instalador que certifiquen que la ductería ha sido instalada de acuerdo con los estándares y especificaciones pertinentes.</li>
                    <li>Los certificados deben incluir información sobre el cumplimiento de normativas, la calidad de los materiales utilizados y cualquier garantía ofrecida por el contratista.</li>
                </ol>
                <br/>
                <h6><strong>Documentación técnica de los materiales:</strong></h6>
                <ol>
                    <li>Especificaciones técnicas de los materiales utilizados en la instalación de la ductería, incluyendo información sobre el tipo de material, las dimensiones, la resistencia mecánica, la resistencia a la corrosión y cualquier otro detalle relevante.</li>
                </ol>
                
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr style={{  borderColor:'#eeeeee' }}/>

    </Container>
  )
}

export default Ducteria
