import React from 'react'
import {Accordion, Container} from "react-bootstrap";

const EstandarSoftware = () => {
  return (
      <Container className="custom-accordion">
        <hr style={{  borderColor:'#eeeeee' }}/>

        <Container>
            <div>
                <h2 className="encabezadoEstandar">ESTÁNDARES TÉCNICOS DE SOFTWARE</h2>
                <h3>Todo software que no figure en la siguiente lista debe ser dictaminado</h3>
            </div>
        </Container>



        <hr style={{  borderColor:'#eeeeee' }}/>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
                <Accordion.Header><h2>ANTIVIRUS</h2></Accordion.Header>
                <Accordion.Body>
                    <div>
                        <h6><strong>Válido a partir del 14 de Agosto de 2023</strong></h6>

                        <h6><strong>Estatus:&nbsp;</strong>Vigente &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h6>

                        <h6><strong>Categoría:</strong> Estándares Técnicos de Software</h6>

                        <h6>
                            
                        </h6>

                        <table className="table table-striped table-bordered">
                            <tbody>
                            <tr>
                                <td >No.
                                    
                                </td>
                                <td >
                                    <strong>COMPONENTE</strong>
                                    
                                </td>
                                <td >
                                    <strong>CARACTERISTICA</strong></td>
                            </tr>
                            <tr>
                                <td >1</td>
                                <td  ><strong>Versión</strong></td>
                                <td  >La más reciente al momento de su
                                    adquisición,o actualización de licenciamiento para:
                                    -Particulares (Oficina)
                                        -Empresarial (pequeña o mediana)
                                            -Corporativo
                                                
                                </td>
                            </tr>
                            <tr>
                                <td >2</td>
                                <td  ><strong>Tipo de seguridad,
                                    protección, prevención, detección, gestión y respuesta</strong></td>
                                <td  >Los antivirus deben de proveer alguna
                                    de los siguientes servicios indicados, esto de acuerdo a la necesidad del Ente:
                                    -Seguridad para la Nube, Nube Hibrida, Redes e Internet
                                        -Protección de &nbsp;Usuarios, Software.
                                            -Protección en endpoints, hosting, housing, datacenters, servidores,
                                                workloads en la nube, Correos electrónicos, Información, Datos.
                                                -Detección, respuesta, prevención y protección &nbsp;de amenazas
                                                    comunes y avanzadas
                                                    -Gestión de vulnerabilidades
                                                        
                                </td>
                            </tr>
                            <tr>
                                <td >3</td>
                                <td  ><strong>Sistemas operativos
                                    compatibles&nbsp;</strong></td>
                                <td  >Puede ser para alguna de las
                                    siguiente:
                                    GNU/Linux, Windows, Mac OS X, Android o iOS, indicar si es para otro tipo de
                                        Sistema Operativo</td>
                            </tr>
                            <tr>
                                <td >4</td>
                                <td  ><strong>Soporte y Servicios</strong>
                                </td>
                                <td  >Opcional, si el Ente lo requiere.
                                    -Soporte de Asesoramiento
                                        -Servicio de asistencia 24/7</td>
                            </tr>
                            <tr>
                                <td >5</td>
                                <td  ><strong>Recursos de computo</strong>
                                </td>
                                <td  >Garantizar que los recursos
                                    disponibles sea suficientes para su instalación, para asegurar la eficacia,
                                    usabilidad y soluciones del software de protección.&nbsp;</td>
                            </tr>
                            <tr>
                                <td >6</td>
                                <td  ><strong>Fabricantes&nbsp;</strong>
                                </td>
                                <td  >Pueden ser alguna de los siguientes
                                    fabricantes:
                                    
                                        -BITDEFENDER
                                            -BROADCOM (SYMANTEC)
                                                -ESET
                                                    -KASPERSKY
                                                        -McAfee
                                                            -TREND MICRO
                                                                -WITHSECURE (F-SECURE)
                                                                    
                                                                        Otros fabricantes deben ser dictaminados
                                </td>
                            </tr>
                            <tr>
                                <td >7</td>
                                <td  ><strong>Consola</strong></td>
                                <td  >Opcional: Consola de administración
                                    de antivirus
                                    Especificar número de usuarios y equipos que serán administrados mediante
                                        consola.&nbsp;</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <hr style={{  borderColor:'#eeeeee' }}/>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
                <Accordion.Header><h2>SERVIDORES WEB Y APP</h2></Accordion.Header>
                <Accordion.Body>
                    <div>
                        <h6><strong>Válido a partir del 14 de Agosto de 2023</strong></h6>

                        <h6>
                            <strong>Estatus:&nbsp;</strong>Vigente &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        </h6>

                        <h6><strong>Categoría:</strong> Estándares Técnicos de
                            Software &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h6>

                        <ul>
                            <li><strong>Apache HTTP Server&nbsp;</strong>V 2.4.54 o superior (<span>&nbsp;</span>
                                <a
                                    href="https://httpd.apache.org/download.cgi">https://httpd.apache.org/download.cgi</a> )
                            </li>
                            <li><strong>Lighthttpd</strong> V 1.4.68 o superior (<span>&nbsp;</span>
                                <a
                                    href="https://www.lighttpd.net/download/">https://www.lighttpd.net/download/</a>)
                            </li>
                            <li><strong>Apache Tomcat</strong><span>&nbsp;</span>V 8.5.50 o
                                superior <span>&nbsp;</span> (
                               <a
                                    href="https://tomcat.apache.org/download-80.cgi">https://tomcat.apache.org/download-80.cgi</a>
                             )
                            </li>
                            <li><strong>Ubuntu&nbsp;</strong>22.04 LTS Server Edition o superior<span>&nbsp;</span>(
                                <a
                                    href="https://ubuntu.com/download/server">https://ubuntu.com/download/server</a>)
                            </li>
                        </ul>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>


        <hr style={{  borderColor:'#eeeeee' }}/>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
                <Accordion.Header><h2>MANEJO DE IMÁGENES</h2></Accordion.Header>
                <Accordion.Body>
                    <div>
                        <h6><strong>Válido a partir del 14 de Agosto de 2023</strong></h6>

                        <h6>
                            <strong>Estatus:&nbsp;</strong>Vigente &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        </h6>

                        <h6><strong>Categoría:&nbsp;</strong>Estándares Técnicos de Software</h6>

                        <ul>
                            <li>GIMP V 2.10.14 o superior (Programa de Manipulación de Imágenes de GNU -
                               <a
                                    href="https://www.gimp.org/downloads/">https://www.gimp.org/downloads/</a><span>&nbsp;</span>)
                            </li>
                            <li>Blender &nbsp;V 2.81 (Programa multi plataforma, dedicado especialmente
                                al &nbsp;modelado, &nbsp;iluminación, renderizado, animación y creación de
                                gráficos &nbsp; tridimensionales.
                                <a
                                    href="https://www.blender.org/download/">https://www.blender.org/download/</a><span>&nbsp;</span>)
                            </li>
                        </ul>

                        <h6><strong>NOTA: Todos los productos de Adobe y otros &nbsp;no gratuitos requieren dictamen de
                            la ADBC.</strong></h6>
                    </div>

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>


        <hr style={{  borderColor:'#eeeeee' }}/>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
                <Accordion.Header><h2>SOFTWARE DE VIDEOCONFERENCIAS</h2></Accordion.Header>
                <Accordion.Body>

                    <div>
                        <h6><strong>Válido a partir del 14 de Agosto de 2023</strong></h6>

                        <h6>
                            <strong>Estatus:&nbsp;</strong>Vigente &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        </h6>

                        <h6><strong>Categoría:&nbsp;</strong>Estándares Técnicos de Software</h6>

                        <table className="table table-striped table-bordered">
                            <tbody>
                            <tr>
                                <td >
                                    <strong>CARACTERÍSTICAS</strong></td>
                                <td >
                                    <strong>FABRICANTES</strong></td>
                                <td>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td >
                                    <li>100 participantes mínimo.</li>
                                        <li>Número de reuniones ilimitadas.</li>
                                            <li>Grabación local y/o en nube, planificación de reuniones, tiempo en sala</li>
                                                <li>Ilimitada.</li>
                                                </td>
                                <td  >
                                    <li>G-MEET</li>
                                    <li>WEBEX</li>
                                </td>
                                <td>
                                    
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <hr style={{  borderColor:'#eeeeee' }}/>

    </Container>
  )
}

export default EstandarSoftware
