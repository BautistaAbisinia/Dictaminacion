import React from 'react';
import {Accordion, Container} from "react-bootstrap";
import './EstandarHardware.css';

function EstandarHardware() {

    return (
        <Container className="custom-accordion">
            <hr style={{  borderColor:'#eeeeee' }}/>

            <Container >
                <div >
                    <h2 className="encabezadoEstandar">ESTÁNDARES TÉCNICOS DE HARDWARE</h2>
                    <h3>Todo hardware que no figure en la siguiente lista debe ser dictaminado</h3>
                </div>
            </Container>

            <hr style={{  borderColor:'#eeeeee' }}/>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h2>PC ESCRITORIO (DESKTOP)</h2></Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <h6><strong>Válido a partir del 14 de Agosto de 2023.</strong></h6>
                        <h6><strong>Estatus:&nbsp;</strong>Vigente</h6>
                        <h6><strong>Categoría:&nbsp;</strong>Estándares técnicos de hardware</h6>
                        <ol>
                            <li>Excepto donde se indique, todos los requerimientos son mínimos.</li>
                            <li>Característica técnicas iguales o &nbsp;mayores a &nbsp;las aquí listadas, son válidas excepto donde se indique.</li>
                            <li>Las máquinas deben pertenecer a la línea de negocios del fabricante.</li>
                            <li>Para equipos <strong>C</strong><strong>OMPUTADORA DE ESCRITORIO TODO EN UNO (All in One)</strong> deben apegarse estrictamente para uso de personal administrativo acorde a las siguientes consideraciones.</li>
                        </ol>
                        <hr style={{  borderColor:'white' }}/>
                            <table className="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th scope="col">No.</th>
                                    <th scope="col">Componente</th>
                                    <th scope="col">Equipo para Administrativo</th>
                                    <th scope="col">Equipo para Desarrollador</th>
                                    <th scope="col">Equipo para Diseñador</th>
                                </tr>
                                </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>PROCESADOR</td>
                                <td>Con tecnología de 64 bits(x64). Desde 32 MHz o más en frecuencia base, de acuerdo a la necesidad del Ente. De 2 a 6 núcleos físicos máximo</td>
                                <td>Con tecnología de 64 bits(x64). Desde 700 MHz o más en frecuencia base, de acuerdo a la necesidad del Ente. De 4 a 12 núcleos físicos máximo.</td>
                                <td>Con tecnología de 64 bits(x64). De 700 MHz o más en frecuencia base, de acuerdo a la necesidad del Ente. 4 a 12 núcleos físicos máximo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>MEMORIA RAM</td>
                                <td>De 8 GB. Opcional dual channel memory</td>
                                <td>De 16 GB a 64 GB Máximo. Dual channel o Quad channel memory</td>
                                <td>De 16 GB a 64 GB Máximo. Dual channel o Quad channel memory</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>DISCO DURO</td>
                                <td>Elegir uno de las siguientes opciones:
                                    -1 TB mínimo HDD, interfaz SATA III.
                                    -128 GB mínimo en SSD, Interfaz SATA (Serial Advanced Technology Attachment), M2, PCI Express.

                                    Equipos con más de un disco duro, el Ente podrá definir el número, tipo y capacidades del disco duro de acuerdo a sus necesidades. Autocifrado opcional de acuerdo a las necesidades del Ente requirente</td>
                                <td>Elegir uno de las siguientes opciones: -1 TB mínimo en HDD o SSDH, interfaz SATA III. -128 GB mínimo en SSD, SATA (Serial Advanced Technology Attachment), M2, PCI Express. Equipos con más de un disco duro, el Ente podrá definir el número, tipo y capacidades del disco duro de acuerdo a sus necesidades. Autocifrado opcional de acuerdo a las necesidades del Ente requirente.</td>
                                <td>Elegir uno de las siguientes opciones: -1 TB mínimo en HDD o SSDH, interfaz SATA III. -128 GB mínimo en SSD, SATA (Serial Advanced Technology Attachment), M2, PCI Express. Equipos con más de un disco duro, el Ente podrá definir el número, tipo y capacidades del disco duro de acuerdo a sus necesidades. Autocifrado opcional de acuerdo a las necesidades del Ente requirente.</td>
                            </tr>
                            <tr>
                                <td >4

                                </td>
                                <td >GRÁFICOS

                                </td>
                                <td >Tarjeta gráfica dedicada o integrada
                                    con las siguientes especificaciones, de acuerdo a las necesidades del Ente.

                                        Frecuencia base de 200 MHz o más.



                                                        Soporte a tecnología Shader Model 5 (OpenGL 4 o DirectX 11)
                                                            o superior.

                                                                Salida de gráficos DVI, Display Port o HDMI.

                                </td>
                                <td >Tarjeta gráfica dedicada o integrada con las siguientes
                                    especificaciones de a cuerdo a las necesidades del Ente

                                        Frecuencia base de 300 MHz o más.



                                                        Soporte a tecnología Shader Model 5 (OpenGL 4 o DirectX 11)
                                                            o superior.

                                                                Salida de gráficos DVI, Display Port o HDMI.

                                </td>
                                <td >Tarjeta gráfica dedicada o integrada con las siguientes
                                    especificaciones mínimas.

                                        Frecuencia base de 300 MHz o más.

                                                Soporte a tecnología Shader Model 5 (OpenGL 4 o DirectX 11) o
                                                    superior.

                                                        Salida de gráficos DVI, Display Port o HDMI.

                                </td>
                            </tr>
                            <tr>
                                <td >5

                                </td>
                                <td >MONITOR

                                </td>
                                <td >Pantalla ancha de 18 a 24 pulgadas
                                    máximo
                                    Resolución mínima de 1920 x 1080 pixeles.

                                            Menú de ajustes.

                                                    Conector compatible con el conector de video de la tarjeta
                                                        gráfica (DVI o MiniDisplay Port o HDMI).

                                </td>
                                <td >Pantalla ancha de 19 a 35 pulgadas máximo

                                        Resolución mínima 1920 x 1080 pixeles o más pixeles.

                                                Menú de ajustes.

                                                        Conector compatible con el conector de video de la tarjeta
                                                            gráfica (DVI o MiniDisplay Port o HDMI).

                                </td>
                                <td >Pantalla ancha de 19 a 35 pulgadas maximo

                                        Resolución mínima 1920 x 1080 pixeles o más pixeles.

                                                Menú de ajustes.
                                                    Conector compatible con el conector de video de la tarjeta
                                                        gráfica (DVI o MiniDisplay Port o HDMI).

                                </td>
                            </tr>
                            <tr>
                                <td >6

                                </td>
                                <td >LECTOR DE TARJETA

                                </td>
                                <td >Secure Digital opcional: SD/SDHC UHS
                                    I-II/SDXC UHS I-II.

                                </td>
                                <td >Secure Digital opcional: SD/SDHC UHS I-II/SDXC UHS I-II.

                                </td>
                                <td >Secure Digital opcional: SD/SDHC UHS I-II/SDXC UHS I-II.

                                </td>
                            </tr>
                            <tr>
                                <td >7

                                </td>
                                <td >UNIDAD OPTICA

                                </td>
                                <td >CD/DVD+RW

                                </td>
                                <td >Opcional CD/DVD+RW o Blu-Ray de acuerdo a las necesidades del
                                    ente

                                </td>
                                <td >Opcional CD/DVD+RW o Blu-Ray &nbsp;de acuerdo a las
                                    necesidades del ente

                                </td>
                            </tr>
                            <tr>
                                <td >8

                                </td>
                                <td >PUERTOS

                                </td>
                                <td  ><span>Características:</span>Con
                                    un mínimo de 4 puertos USB, con 1 o 2 &nbsp;puertos USB de interfaz 3.0 o 3.1

                                        Un Puerto de red con terminal RJ-45.

                                                Un puerto para gráficos de alta definición: DVI, Display Port, HDMI
                                                    o VGA.

                                                        Puerto de audífonos.

                                                                Puerto de micrófono.

                                                                        Opcional Puerto de USB Tipo-C

                                </td>
                                <td  >Características:


                                            Con un mínimo de 4 puertos USB, con 1 o 2 &nbsp;puertos USB de interfaz
                                                3.0 o 3.1

                                                    Un Puerto de red con terminal RJ -45.

                                                            Un puerto para gráficos de alta definición: DVI, Display
                                                                Port, HDMI o VGA.

                                                                    Puerto de audífonos.

                                                                            Puerto de micrófono.

                                                                                    Opcional Puerto de USB Tipo-C

                                </td>
                                <td  >
                                    <span>Características:</span>Con un mínimo de 4 puertos USB, con 1 o
                                    2 &nbsp;puertos USB de interfaz 3.0 o 3.1

                                        Un Puerto de red con terminal RJ -45.

                                                Un puerto para gráficos de alta definición: DVI, Display Port, HDMI
                                                    o VGA.

                                                        Puerto de audífonos.

                                                                Puerto de micrófono.

                                                                        Opcional Puerto de USB Tipo-C

                                </td>
                            </tr>
                            <tr>
                                <td >9

                                </td>
                                <td >TECLADO

                                </td>
                                <td >Teclado español Latinoamérica.

                                        Con teclado numérico.

                                                Con 12 teclas de función, teclado numérico y tecla de menú de inicio
                                                    para Windows, con indicadores luminosos.

                                                        Misma marca que el fabricante.

                                                                Con conector USB.

                                </td>
                                <td >Teclado español Latinoamérica.

                                        Con teclado numérico.

                                                Con 12 teclas de función, teclado numérico y tecla de menú de inicio
                                                    para Windows, con indicadores luminosos.

                                                        Misma marca que el fabricante.

                                                                Con conector USB.

                                </td>
                                <td >Teclado español Latinoamérica.

                                        Con teclado numérico.

                                                Con 12 teclas de función, teclado numérico y tecla de menú de inicio
                                                    para Windows, con indicadores luminosos.

                                                        Misma marca que el fabricante.



                                                                        Con conector USB.

                                </td>
                            </tr>
                            <tr>
                                <td >10

                                </td>
                                <td >MOUSE

                                </td>
                                <td >Con dos botones y Scroll.

                                        Con conector USB.

                                </td>
                                <td >Con dos botones y Scroll.

                                        Con conector USB.

                                </td>
                                <td >Con dos botones y Scroll.

                                        Con conector USB.

                                </td>
                            </tr>
                            <tr>
                                <td >11

                                </td>
                                <td >TARJETA DE RED

                                </td>
                                <td >Ethernet 10/100/1000 Base-TX Rj45

                                        Wi-Fi: 802.11a/b/g/n/ac, (2x2) Dual Band Wireless interna instalada con su
                                            antena, e incluir el driver. (Opcional para computadoras Desktop).

                                </td>
                                <td >Ethernet 10/100/1000 Base-TX Rj45

                                        Wi-Fi: 802.11a/b/g/n/ac, (2x2) Dual Band Wireless interna instalada con su
                                            antena, e incluir el driver. (Opcional para computadoras Desktop).

                                </td>
                                <td >Ethernet 10/100/1000 Base-TX Rj45

                                        Wi-Fi: 802.11a/b/g/n/ac, (2x2) Dual Band Wireless interna instalada con su
                                            antena, e incluir el driver. (Opcional para computadoras Desktop).

                                </td>
                            </tr>
                            <tr>
                                <td >12

                                </td>
                                <td >GABINETE

                                </td>
                                <td >Misma marca del fabricante.

                                        Material de policarbonato o metálica.

                                                Opcional, alerta de apertura de gabinete.

                                </td>
                                <td >Misma marca del fabricante.

                                        Material de policarbonato o metálica.

                                                Opcional, alerta de apertura de gabinete.

                                </td>
                                <td >Misma marca del fabricante.

                                        Material de policarbonato o metálica.

                                                Opcional, alerta de apertura de gabinete.

                                </td>
                            </tr>
                            <tr>
                                <td >14

                                </td>
                                <td >MANUAL Y SOFTWARE

                                </td>
                                <td >Información necesaria para la
                                    recuperación de sistema operativo, drivers y configuración de fábrica en una
                                    partición en el disco duro.

                                        Sistema Operativo: de acuerdo a los requerimientos del ente requirente.

                                                Manual de instalación y configuración en español.

                                </td>
                                <td >Información necesaria para la recuperación de sistema
                                    operativo, drivers y configuración de fábrica en una partición en el disco duro.

                                        Sistema Operativo: de acuerdo a los requerimientos del ente requirente.

                                                Manual de instalación y configuración en español.

                                </td>
                                <td>Información necesaria para la recuperación de sistema
                                    operativo, drivers y configuración de fábrica en una partición en el disco duro.

                                        Sistema Operativo: de acuerdo a los requerimientos del ente requirente.

                                                Manual de instalación y configuración en español.

                                </td>
                            </tr>
                            <tr>
                                <td>15

                                </td>
                                <td >GARANTÍA

                                </td>
                                <td>Mínimo 3 años.

                                </td>
                                <td>Mínimo 3 años.

                                </td>
                                <td >Mínimo 3 años.

                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <hr style={{  borderColor:'white' }}/>

                        <h6><strong>NORMAS Y ESTÁNDARES</strong></h6>
                            <h8>Que el equipo cumpla con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</h8>
                        <hr style={{  borderColor:'white' }}/>
                        <h6><strong>SOFTWARE PREINSTALADO</strong></h6>
                        <h8>De acuerdo a los requerimientos del ente requirente. La ADBC no &nbsp;respalda ni favorece el uso de algún Sistema Operativo en específico.</h8>
                        <hr style={{  borderColor:'white' }}/>
                        <h6><strong>MANUALES</strong></h6>
                        <h8>Se debe de entregar manual del equipo para su instalación, configuración y operación en medio</h8>
                        <h6>electrónico y en idioma español.</h6>
                        <hr style={{  borderColor:'white' }}/>
                        <h6><strong>GARANTÍA</strong></h6>
                        <h6>Características que deberá cubrir:</h6>
                        <ol>
                            <li>El proveedor se compromete a dar cumplimiento a la garantía.</li>
                            <li>El servicio se prestará en las instalaciones del ente requirente.</li>
                            <li>El tiempo de atención será, como máximo, dos horas.</li>
                            <li>El tiempo de reparación será día siguiente laboralSiexcede este &nbsp; lapso, el proveedor deberá entregar un equipo de respaldo equivalente &nbsp; mientras se soluciona el problema.</li>
                            <li>Sí la reparación excede de 30 días naturales, el proveedor entregará a cambio un equipo nuevo con las características iguales al &nbsp; adquirido u otro equipo de mayores características.</li>
                        </ol>
                        <h6>Requerimientos de servicio:</h6>
                        <ol>
                            <li>El procedimiento de recepción de reportes y atención de fallas de los equipos.</li>
                            <li>Se debe de indicar una línea telefónica del fabricante o centro de &nbsp; atención telefónica certificado o aprobado por el fabricante sin costo &nbsp; de llamada para el usuario, como uno de los canales para hacer efectiva &nbsp; la garantía.</li>
                            <li>Se debe de especificar un correo electrónico de atención, como uno de los canales para hacer efectiva la garantía.</li>
                        </ol>

                        <hr style={{borderColor : "white"}}/>

                        <h6><strong>CONSIDERACIONES &nbsp;PARA EL PROCEDIMIENTO DE ADQUISICIÓN:</strong></h6>
                        <h8>Es estricta responsabilidad del Ente Requirente, como parte funcional &nbsp;durante el procedimiento de adquisición de estos componentes &nbsp;tecnológicos, el considerar todas las cartas respectivas que den soporte &nbsp;al proceso y aseguren el respaldo de los fabricantes de los mismos, en &nbsp;cuanto a especificaciones técnicas, vicios ocultos y condiciones de&nbsp;garantía. La ADBC no tiene responsabilidad alguna por alguna deficiencia &nbsp;administrativa en este sentido.</h8>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <hr style={{  borderColor:'#eeeeee' }}/>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h2>PC PORTÁTIL  (LAPTOP)</h2></Accordion.Header>
                    <Accordion.Body>
                    <div>
                            <h6><strong>Válido a partir del 14 de Agosto de 2023.</strong></h6>

                            <h6><strong>Estatus:&nbsp;</strong>Vigente</h6>

                            <h6><strong>Categoría:&nbsp;</strong>Estándares técnicos de hardware</h6>

                            <ol>
                                <li>Excepto donde se indique, todos los requerimientos son mínimos.</li>
                                <li>Característica técnicas iguales o &nbsp;mayores a &nbsp;las aquí listadas, son
                                    válidas excepto donde se indique.
                                </li>
                                <li>Las máquinas deben pertenecer a la línea de negocios del fabricante.</li>
                                <li>Los equipos Laptop-Tablet 2 en 1 son dictaminables ya que se consideran equipos
                                    especiales
                                </li>
                            </ol>

                        <table className="table table-striped table-bordered">
                            <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Componente</th>
                                <th scope="col">Equipo para Administrativo</th>
                                <th scope="col">Equipo para Desarrollador</th>
                                <th scope="col">Equipo para Diseñador</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td >1

                                    </td>
                                    <td >PROCESADOR

                                    </td>
                                    <td >Con tecnología 64 bits(x64).
                                        <div >

                                        </div>Desde 32 MHz o más en frecuencia base, de acuerdo a la necesidad del Ente.
                                        <div >

                                        </div>2 a 6 núcleos físicos máximo.

                                    </td>
                                    <td >Con tecnología 64 bits(x64).
                                        <div >

                                        </div>Desde 700 MHz o más en frecuencia base, de acuerdo a la necesidad del
                                        Ente.
                                        <div >

                                        </div>4 a 12 núcleos físicos máximo
                                        <div >

                                        </div>
                                    </td>
                                    <td >Con tecnología 64 bits(x64).
                                        <div >

                                        </div>Desde 700 MHz o más en frecuencia base, de acuerdo a la necesidad del
                                        Ente.
                                        <div >

                                        </div>4 a 12 núcleos físicos máximo
                                        <div >

                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td >2

                                    </td>
                                    <td >MEMORIA RAM

                                    </td>
                                    <td >De 8 GB, DDR4

                                    </td>
                                    <td >De 16 GB o 64 GB, DDR4

                                    </td>
                                    <td >De 16 GB o 64 GB, DDR4

                                    </td>
                                </tr>
                                <tr>
                                    <td >3

                                    </td>
                                    <td >DISCO DURO

                                    </td>
                                    <td >Elegir uno de las siguientes opciones:
                                       -1 TB <span>mínimo</span> HDD, interfaz SATA III.
                                           &nbsp;
                                               -128 GB <span>mínimo</span> en SSD, Interfaz SATA (Serial Advanced
                                                    Technology Attachment), M2, PCI Express.
                                                    <div >

                                                    </div><span>Equipos con más de un disco duro, el Ente podrá definir el número, tipo y &nbsp;capacidades del disco duro de acuerdo a sus necesidades.</span>
                                                    <div >

                                                    </div>
                                                    Autocifrado opcional de acuerdo a las necesidades del Ente
                                                    requirente
                                                    <div >

                                                    </div>
                                    </td>
                                    <td >Elegir uno de las siguientes opciones:
                                       <span>-1 TB&nbsp;</span><span>mínimo</span><span>&nbsp;</span>HDD, interfaz
                                            SATA III.
                                           &nbsp;
                                               <span>-128 GB&nbsp;</span><span>mínimo</span><span>&nbsp;</span>en
                                                    SSD, Interfaz SATA (Serial Advanced Technology Attachment), M2, PCI
                                                    Express.
                                                    <div >

                                                    </div>Equipos con más de un disco duro, el Ente podrá definir el
                                                    número, tipo y &nbsp;capacidades del disco duro de acuerdo a sus
                                                    necesidades.
                                                    <div >

                                                    </div>Autocifrado opcional de acuerdo a las necesidades del Ente
                                                    requirente

                                    </td>
                                    <td >Elegir uno de las siguientes opciones:
                                       <span>-1 TB&nbsp;</span><span>mínimo</span><span>&nbsp;</span>HDD, interfaz
                                            SATA III.
                                           &nbsp;
                                               <span>-128 GB&nbsp;</span><span>mínimo</span><span>&nbsp;</span>en
                                                    SSD, Interfaz SATA (Serial Advanced Technology Attachment), M2, PCI
                                                    Express.
                                                    <div >

                                                    </div>Equipos con más de un disco duro, el Ente podrá definir el
                                                    número, tipo y &nbsp;capacidades del disco duro de acuerdo a sus
                                                    necesidades.
                                                    <div >

                                                    </div>Autocifrado opcional de acuerdo a las necesidades del Ente
                                                    requirente

                                    </td>
                                </tr>
                                <tr>
                                    <td >4

                                    </td>
                                    <td >GRÁFICOS

                                    </td>
                                    <td >Tarjeta gráfica integrada con las siguientes
                                        especificaciones:
                                        <div >

                                        </div>
                                        <div >

                                        </div>
                                        <div >

                                        </div>
                                        Frecuencia base de 200 MHz o más.
                                        <div >

                                        </div>Soporte a tecnología Shader Model 5 (OpenGL 4 o DirectX 11) o superior.
                                        <div >

                                        </div>Salida de gráficos DVI, Display Port o HDMI.

                                    </td>
                                    <td >Tarjeta gráfica integrada con las siguientes
                                        especificaciones:
                                       Frecuencia base de 300 MHz o más.
                                            <div >

                                            </div>
                                            <div >

                                            </div>
                                            <div >

                                            </div>
                                            Soporte a tecnología Shader Model 5 (OpenGL 4 o DirectX 11) o superior.
                                            <div >

                                            </div>Salida de gráficos DVI, Display Port o HDMI.

                                    </td>
                                    <td >Tarjeta integrada con las siguientes especificaciones:
                                       Frecuencia base de 300 MHz o más.
                                            <div >

                                            </div>
                                            <div >

                                            </div>
                                            <div >

                                            </div>
                                            Soporte a tecnología Shader Model 5 (OpenGL 4 o DirectX 11) o superior.
                                            <div >

                                            </div>Salida de gráficos DVI, Display Port o HDMI.

                                    </td>
                                </tr>
                                <tr>
                                    <td >5

                                    </td>
                                    <td >PANTALLA

                                    </td>
                                    <td >Pantalla ancha con las siguientes características.
                                       14 o 16 pulgadas.
                                            <div >

                                            </div>Táctil (Opcional de acuerdo a las necesidades del ente requirente).
                                            <div >

                                            </div>Resolución menor o igual a1920 x 1080 pixeles.

                                    </td>
                                    <td >Pantalla ancha con las siguientes características.
                                       14 a 19 pulgadas.
                                            <div >

                                            </div>Táctil (Opcional de acuerdo a las necesidades del ente requirente).
                                            <div >

                                            </div>Resolución mínima1920 x 1080 pixeles o más pixeles.

                                    </td>
                                    <td >Pantalla ancha con las siguientes características.
                                       14 a 19 pulgadas.
                                            <div >

                                            </div>Táctil (Opcional de acuerdo a las necesidades del ente requirente).
                                            <div >

                                            </div>Resolución mínima 1920 x 1080 pixeles o más pixeles.

                                    </td>
                                </tr>
                                <tr>
                                    <td >6

                                    </td>
                                    <td >LECTOR DE TARJETAS

                                    </td>
                                    <td >Secure Digital opcional: SD/SDHC UHS I-II/SDXC UHS I-II.

                                    </td>
                                    <td >Secure Digital opcional: SD/SDHC UHS I-II/SDXC UHS I-II.

                                    </td>
                                    <td >Secure Digital opcional: SD/SDHC UHS I-II/SDXC UHS I-II.

                                    </td>
                                </tr>
                                <tr>
                                    <td >7

                                    </td>
                                    <td >UNIDAD ÓPTICA

                                    </td>
                                    <td >Opcional CD/DVD+RW

                                    </td>
                                    <td >CD/DVD+RW/ Blu-Ray

                                    </td>
                                    <td >CD/DVD+RW/Blu-Ray

                                    </td>
                                </tr>
                                <tr>
                                    <td >8

                                    </td>
                                    <td >BATERÍA

                                    </td>
                                    <td >Batería de Ion-Litio de 1 o más celdas, Duración mínima de
                                        2 o 4 horas

                                    </td>
                                    <td >Batería de Ion-Litio de 1 o más celdas, Duración mínima de
                                        4 horas (requerimiento mínimo).

                                    </td>
                                    <td >Batería de Ion-Litio de 1 más celdas, Duración mínima de 4
                                        horas (requerimiento mínimo).

                                    </td>
                                </tr>
                                <tr>
                                    <td >9

                                    </td>
                                    <td >PUERTOS

                                    </td>
                                    <td >Características:
                                       1 a 3 puertos USB 3.1 mínimo.
                                            <div >

                                            </div>Un Puerto de red con terminal RJ -45.
                                            <div >

                                            </div>Un puerto para gráficos de alta definición: DVI o Display Port o HDMI.
                                            <div >

                                            </div>Puerto de audífonos*.
                                            <div >

                                            </div>Puerto de micrófono*.
                                            <div >

                                            </div>*Los puertos de audífonos y micrófonos pueden estar integrados en uno
                                            solo.

                                    </td>
                                    <td >Características:
                                       1 a 3 puertos USB 3.1 mínimo.
                                            <div >

                                            </div>Un Puerto de red con terminal RJ -45.
                                            <div >

                                            </div>Un puerto para gráficos de alta definición: DVI o Display Port o HDMI.
                                            <div >

                                            </div>Puerto de audífonos*.
                                            <div >

                                            </div>Puerto de micrófono*.
                                            <div >

                                            </div>*Los puertos de audífonos y micrófonos pueden estar integrados en uno
                                            solo.

                                    </td>
                                    <td >Características:
                                       1 a 3 puertos USB 3.1 mínimo.
                                            <div >

                                            </div>Un Puerto de red con terminal RJ -45.
                                            <div >

                                            </div>Un puerto para gráficos de alta definición: DVI o Display Port o HDMI.
                                            <div >

                                            </div>Puerto de audífonos*.
                                            <div >

                                            </div>Puerto de micrófono*.
                                            <div >

                                            </div>*Los puertos de audífonos y micrófonos pueden estar integrados en uno
                                            solo.

                                    </td>
                                </tr>
                                <tr>
                                    <td >10

                                    </td>
                                    <td >TECLADO

                                    </td>
                                    <td >Teclado Español Latinoamérica.
                                        <div >

                                        </div>Con teclado numérico.
                                        <div >

                                        </div>Con 12 teclas de función, teclado numérico y con indicadores luminosos.

                                    </td>
                                    <td >Teclado Español Latinoamérica.
                                        <div >

                                        </div>Con teclado numérico.
                                        <div >

                                        </div>Con 12 teclas de función, teclado numérico y con indicadores luminosos.

                                    </td>
                                    <td >Teclado Español Latinoamérica.
                                        <div >

                                        </div>Con teclado numérico.
                                        <div >

                                        </div>Con 12 teclas de función, teclado numérico y con indicadores luminosos.

                                    </td>
                                </tr>
                                <tr>
                                    <td >11

                                    </td>
                                    <td >MANUAL Y SOFTWARE

                                    </td>
                                    <td >Información necesaria para la recuperación de sistema
                                        operativo, drivers y configuración de fábrica en una partición en el disco duro.
                                        <div >

                                        </div>Sistema Operativo: de acuerdo a los requerimientos del ente requirente.
                                        <div >

                                        </div>Manual de instalación y configuración en español.

                                    </td>
                                    <td >Información necesaria para la recuperación de sistema
                                        operativo, drivers y configuración de fábrica en una partición en el disco duro.
                                        <div >

                                        </div>Sistema Operativo: de acuerdo a los requerimientos del ente requirente.
                                        <div >

                                        </div>Manual de instalación y configuración en español.

                                    </td>
                                    <td >Información necesaria para la recuperación de sistema
                                        operativo, drivers y configuración de fábrica en una partición en el disco duro.
                                        <div >

                                        </div>Sistema Operativo: de acuerdo a los requerimientos del ente requirente.
                                        <div >

                                        </div>Manual de instalación y configuración en español.

                                    </td>
                                </tr>
                                <tr>
                                    <td >12

                                    </td>
                                    <td >GARANTÍA

                                    </td>
                                    <td >Mínimo 3 años

                                    </td>
                                    <td >Mínimo 3 años

                                    </td>
                                    <td >Mínimo 3 años

                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <h6>

                            </h6>
                        <hr style={{  borderColor:'white' }}/>
                            <h6><strong>NORMAS Y ESTÁNDARES</strong></h6>

                            <h6>Que el equipo cumpla con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</h6>

                            <h6><strong>SOFTWARE PREINSTALADO</strong></h6>

                            <h8>De &nbsp;acuerdo a los requerimientos del ente requirente. La ADBC no &nbsp;respalda, ni
                                favorece el uso de algún Sistema Operativo en específico.</h8>
                        <hr style={{  borderColor:'white' }}/>
                            <h6><strong>MANUALES</strong></h6>

                            <h8>Se debe de entregar manual del equipo para su instalación, configuración y operación en
                                medio</h8>

                            <h6>electrónico y en idioma español.</h6>
                        <hr style={{  borderColor:'white' }}/>
                            <h6><strong>GARANTÍA</strong></h6>

                            <h6>Características que deberá cubrir:</h6>

                            <ul>
                                <li>El proveedor se compromete a dar cumplimiento a la garantía.</li>
                                <li>El servicio se prestará en las instalaciones del ente requirente.</li>
                                <li>El tiempo de atención será, como máximo, dos horas.</li>
                                <li>El &nbsp;tiempo de reparación será día siguiente laboralSiexcede
                                    este &nbsp; &nbsp;lapso, el proveedor deberá entregar un equipo de respaldo
                                    equivalente &nbsp; &nbsp;mientras se soluciona el problema.
                                </li>
                                <li>Sí la reparación excede de 30 &nbsp;días naturales, el proveedor &nbsp; entregará a
                                    cambio un equipo nuevo con &nbsp;las características iguales al &nbsp; adquirido u
                                    otro equipo de mayores &nbsp;características.
                                </li>
                            </ul>

                            <h6>Requerimientos de servicio:</h6>

                            <ul>
                                <li>El procedimiento de recepción de reportes y atención de fallas de los equipos.</li>
                                <li>Se &nbsp;debe de indicar una línea telefónica del fabricante o centro
                                    de &nbsp; &nbsp;atención telefónica certificado o aprobado por el fabricante sin
                                    costo &nbsp; &nbsp;de llamada para el usuario, como uno de los canales para hacer
                                    efectiva &nbsp; &nbsp;la garantía.
                                </li>
                                <li>Se debe de especificar un correo electrónico de atención, como uno de los canales
                                    para hacer efectiva la garantía.
                                </li>
                            </ul>


                            <h6><strong>CONSIDERACIONES &nbsp;PARA EL PROCEDIMIENTO DE ADQUISICIÓN:</strong></h6>

                            <h8>Es &nbsp;estricta responsabilidad del Ente Requirente, como parte
                                funcional &nbsp; durante el procedimiento de adquisición de estos
                                componentes &nbsp; tecnológicos, el considerar todas las cartas respectivas que
                                den &nbsp;soporte &nbsp;al proceso y aseguren el respaldo de los fabricantes de
                                los &nbsp;mismos, en &nbsp;cuanto a especificaciones técnicas, vicios ocultos
                                y &nbsp;condiciones de &nbsp;garantía. La ADBC no tiene responsabilidad alguna
                                por &nbsp;alguna deficiencia &nbsp;administrativa en este sentido.</h8>

                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <hr style={{  borderColor:'#eeeeee' }}/>

            <hr style={{  borderColor:'#eeeeee' }}/>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h2>TABLET DE OFICINA </h2></Accordion.Header>
                    <Accordion.Body>
                        <div >
                            <h6><strong>Válido a partir del 14 de Agosto de 2023.</strong>                           </h6>

                            <h6><strong>Estatus:&nbsp;</strong>Vigente</h6>

                            <h6><strong>Categoría:&nbsp;</strong>Estándares técnicos de hardware</h6>

                            <ol>
                                <li>Excepto donde se indique, todos los requerimientos son mínimos.</li>
                                <li>Característica técnicas iguales o &nbsp;mayores a &nbsp;las aquí listadas son
                                    válidas, excepto donde se indique.
                                </li>
                                <li>Las máquinas deben pertenecer a la línea de negocios del fabricante.</li>
                                <li>Los equipos tipo Laptop-Tablet 2 en 1 son dictaminables ya que se consideran equipos
                                    especiales
                                </li>
                            </ol>

                            <table className="table table-striped table-bordered">
                                <tbody>
                                <tr>
                                    <td>
                                        <strong>No.</strong>
                                        
                                    </td>
                                    <td  >
                                        <strong>Descripción</strong>
                                        
                                    </td>
                                    <td 
                                        ><strong>Especificaciones</strong>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td >1
                                        
                                    </td>
                                    <td >Procesador
                                        
                                    </td>
                                    <td >Un mínimo de 1.3 GHz en el reloj del procesador
                                        Un máximo de 12 núcleos físicos
                                            
                                    </td>
                                </tr>
                                <tr>
                                    <td >2
                                        
                                    </td>
                                    <td >Memoria interna
                                        
                                    </td>
                                    <td >Un mínimo de 16 GB
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td >3
                                        
                                    </td>
                                    <td >Pantalla
                                        
                                    </td>
                                    <td >De 7” o superior con una resolución mínima de 1200 x 800px
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td >4
                                        
                                    </td>
                                    <td >Sistema Operativo
                                        
                                    </td>
                                    <td >A elegir, con la versión más reciente, la ADBC no respalda
                                        o favorece el uso de algún Sistema Operativo.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td >5
                                        
                                    </td>
                                    <td >Memoria RAM
                                        
                                    </td>
                                    <td >Un máximo de 16 GB
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td >6
                                        
                                    </td>
                                    <td >Procesador video GPU
                                        
                                    </td>
                                    <td >Sí
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td >7
                                        
                                    </td>
                                    <td >Wi-Fi
                                        
                                    </td>
                                    <td >versión reciente con 802.11a/b/g/n mínimo.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td >8
                                        
                                    </td>
                                    <td >Bluetooth
                                        
                                    </td>
                                    <td >4.0 o superior
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td >9
                                        
                                    </td>
                                    <td >Cámara
                                        
                                    </td>
                                    <td >Frontal y trasera
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td >10
                                        
                                    </td>
                                    <td >Conector
                                        
                                    </td>
                                    <td >Micro SD/SDHC Memory Card
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td >11
                                        
                                    </td>
                                    <td >Seguridad
                                        
                                    </td>
                                    <td >Password de usuario
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td >12
                                        
                                    </td>
                                    <td >Batería
                                        
                                    </td>
                                    <td >Batería recargable integrada
                                        Carga a través del adaptador de corriente o USB del sistema de la
                                            computadora
                                            
                                    </td>
                                </tr>
                                <tr>
                                    <td >13
                                        
                                    </td>
                                    <td >Conectividad LTE
                                        
                                    </td>
                                    <td >Opcional
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td >14
                                        
                                    </td>
                                    <td >Accesorios
                                        
                                    </td>
                                    <td >Cargador y cable micro SD.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td >15
                                        
                                    </td>
                                    <td >Garantía
                                        
                                    </td>
                                    <td >Mínimo de 3 años
                                        
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <h6>
                                
                           </h6>
                            <hr style={{  borderColor:'white' }}/>
                            <h6><strong>NORMAS Y ESTÁNDARES</strong></h6>

                            <h6>Que el equipo cumpla con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</h6>

                            <h6><strong>SOFTWARE PREINSTALADO</strong></h6>

                            <h8>De &nbsp;acuerdo a los requerimientos del ente requirente. La ADBC
                                no &nbsp;respalda &nbsp;ni favorece el uso de algún Sistema Operativo en específico.</h8>
                            <hr style={{  borderColor:'white' }}/>
                            <h6><strong>MANUALES</strong></h6>

                            <h8>Se debe de entregar manual del equipo para su instalación, configuración y operación en
                                medio</h8>

                            <h6>electrónico y en idioma español.</h6>
                            <hr style={{  borderColor:'white' }}/>
                            <h6><strong>GARANTÍA</strong></h6>

                            <h6>Características que deberá cubrir:</h6>

                            <ul>
                                <li>El proveedor se compromete a dar cumplimiento a la garantía.</li>
                                <li>El servicio se prestará en las instalaciones del ente requirente.</li>
                                <li>El tiempo de atención será, como máximo, dos horas.</li>
                                <li>El &nbsp;tiempo de reparación será día siguiente laboralSiexcede este lapso, el
                                    proveedor deberá entregar un equipo de respaldo equivalente mientras se soluciona el
                                    problema.
                                </li>
                                <li>Sí la reparación excede de 30 &nbsp;días naturales, el proveedor entregará a cambio
                                    un equipo nuevo con &nbsp;las características iguales al adquirido u otro equipo de
                                    mayores características.
                                </li>
                            </ul>

                            <h6>Requerimientos de servicio:</h6>

                            <ul>
                                <li>El procedimiento de recepción de reportes y atención de fallas de los equipos.</li>
                                <li>Se &nbsp;debe de indicar una línea telefónica del fabricante o centro
                                    de &nbsp; &nbsp;atención telefónica certificado o aprobado por el fabricante sin
                                    costo de llamada para el usuario, como uno de los canales para hacer
                                    efectiva &nbsp; &nbsp;la garantía.
                                </li>
                                <li>Se debe de especificar un correo electrónico de atención, como uno de los canales
                                    para hacer efectiva la garantía.
                                </li>
                            </ul>

                            <h6>
                                
                           </h6>

                            <h6><strong>CONSIDERACIONES &nbsp;PARA EL PROCEDIMIENTO DE ADQUISICIÓN:</strong></h6>

                            <h8>Es &nbsp;estricta responsabilidad del Ente Requirente, como parte
                                funcional &nbsp; durante el procedimiento de adquisición de estos componentes
                                tecnológicos, el considerar todas las cartas respectivas que den &nbsp;soporte &nbsp;al
                                proceso y aseguren el respaldo de los fabricantes de los &nbsp;mismos, en &nbsp;cuanto a
                                especificaciones técnicas, vicios ocultos y &nbsp;condiciones de&nbsp;garantía. La ADBC
                                no tiene responsabilidad alguna por &nbsp;alguna deficiencia &nbsp;administrativa en
                                este sentido.</h8>

                            <h6>
                                
                           </h6>
                        </div>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <hr style={{  borderColor:'#eeeeee' }}/>

            <hr style={{  borderColor:'#eeeeee' }}/>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h2>SERVIDORES TIPO 1 (RACK) Y SERVIDORES TIPO 2 (TORRE)</h2></Accordion.Header>
            <Accordion.Body>
                <div>
                            <h6><strong>Válido a partir del 14 de Agosto de 2023</strong></h6>

                            <h6><strong>Estatus:&nbsp;</strong>Vigente</h6>

                            <h6><strong>Categoría:&nbsp;</strong>Estándares técnicos de hardware</h6>

                            <ol>
                                <li>Excepto donde se indique, todos los requerimientos son mínimos.</li>
                                <li>Característica técnicas iguales o &nbsp;mayores a &nbsp;las aquí listadas son
                                    válidas, excepto donde se indique.
                                </li>
                                <li>Las máquinas deben pertenecer a la línea de negocios del fabricante.</li>
                            </ol>
                <hr style={{  borderColor:'white' }}/>
                        <h4><strong>SERVIDOR TIPO 1 - RACK</strong></h4>

                        <table className="table table-striped table-bordered">
                                <tbody>

                                <tr>
                                    <td  >
                                        <strong>No.</strong></td>
                                    <td  ><strong>Descripción</strong>
                                    </td>
                                    <td  ><strong>Especificación</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td ><strong>1</strong></td>
                                    <td >Procesador<strong></strong></td>
                                    <td >1 o 2 Procesadores con tecnología x86 a 64 bits con las
                                        siguientes características técnicas:
                                        - Un mínimo de 2.0 GHz en el reloj del procesador
                                            - Un mínimo de 2 núcleos físicos
                                                - Protección contra desbordamiento de búfer
                                                    - Tecnología de regulación bajo demanda
                                                        - Consumo de energía (TDP) máximo de
                                                            125W<strong></strong></td>
                                </tr>
                                <tr>
                                    <td ><strong>3</strong></td>
                                    <td >Tarjeta Madre
                                        
                                    </td>
                                    <td >Tarjeta madre diseñada por el fabricante del equipo,
                                        grabada con la marca, y debe contener un número de parte del fabricante del
                                        equipo, sin puentes, parches ni enmendaduras.<strong></strong></td>
                                </tr>
                                <tr>
                                    <td ><strong>4</strong></td>
                                    <td >BIOS<strong></strong></td>
                                    <td >Propietario del fabricante o con derechos reservados para
                                        el fabricante, almacenado en Flash ROM, actualizable vía red, que tenga manejo
                                        de plug and play en aquellos dispositivos que lo permitan.
                                        Con seguridad de password para encendido y
                                            configuración.<strong></strong></td>
                                </tr>
                                <tr>
                                    <td ><strong>5</strong></td>
                                    <td >Memoria RAM
                                        
                                    </td>
                                    <td >16GB mínimo <span>de DIMM &nbsp;y dos slots libres mínimo para crecimiento.&nbsp;</span>
                                        Expandible 64 Gbs Maximo.<strong></strong></td>
                                </tr>
                                <tr>
                                    <td ><strong>6</strong></td>
                                    <td >Almacenamiento<strong></strong></td>
                                    <td >1 Disco Duro de 1T mínimo Tipo SATA III, SAS (opcional) o
                                        SSD, para rack.
                                        <span>RAID 1 con controlador SATA , SAS (opcional) o SSD, con soporte para 2 discos duros mínimo.&nbsp;</span>
                                            <span>Hot Swap o Hot Plug, si lo requiere el ente requirente.</span><strong></strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td ><strong>7</strong></td>
                                    <td >Gráficos<strong></strong></td>
                                    <td ><strong></strong>Tarjeta de 8 MB de memoria y
                                        resolución mínima de 1280x1024 a 75 Hz
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td ><strong>8</strong></td>
                                    <td >Tarjeta De Red
                                        
                                    </td>
                                    <td >Puede tener como mínimo los siguientes:
                                        Ethernet Gigabit 10/100/1000 Base T Autosensing Full Duplex, integrada a la
                                            motherboard, con conector RJ-45 y soporte para SNMP y DMI.
                                            
                                    </td>
                                </tr>
                                <tr>
                                    <td ><strong>9</strong></td>
                                  
                                    <td>Unidad DVD+/-RW
                                        Interno tipo Sata, homologado por el fabricante y del mismo color que el
                                            gabinete.
                                            Velocidad mínima de escritura DVD: 8x<strong></strong></td>
                                </tr>
                                <tr>
                                    <td ><strong>10</strong></td>
                                    <td >Puertos<strong></strong></td>
                                    <td >De acuerdo a la necesidad del ente puede tener cómo mínimo
                                        los siguiente.
                                        2 ranuras PCIe (opcional)
                                            Un mínimo de 2 puertos USB 3.1 compatible con 2.0 en la parte posterior
                                                y 2 puertos frontales USB 3.1 (Para servidor de Rack 1U)
                                                Un Puerto de red con terminal RJ-45, soporte para un puerto de video
                                                    VGA..<strong></strong></td>
                                </tr>
                                <tr>
                                    <td ><strong>11</strong></td>
                                    <td >Gabinete<strong></strong></td>
                                    <td >Factor de forma: Rack (1U)
                                        Con kit de montaje para Rack opcional de acuerdo a las necesidades de la
                                            dependencia.
                                            Cubierta metálica o policarbonato, chasis de estructura metálica, el
                                                gabinete debe contar con sistema de apertura sin necesidad de utilizar
                                                herramienta alguna, tipo tool less en los dispositivos disco duro,
                                                unidad óptica y fuente de poder. Las grapas de sujeción de los
                                                dispositivos deberán estar identificadas para su fácil localización.
                                                Alerta de apertura de gabinete (opcional).
                                                    No se aceptan alteraciones.<strong></strong></td>
                                </tr>
                                <tr>
                                    <td ><strong>12</strong></td>
                                    <td >Fuente De Poder<strong></strong></td>
                                    <td >De un máximo de 400 W con capacidad de soportar todos los
                                        dispositivos planeados en operación a su máxima capacidad de crecimiento la cual
                                        deberá estar avalada con carta del fabricante.
                                        Cable de alimentación eléctrica
                                            Alimentación eléctrica monofásica polarizada con tierra
                                                física.<strong></strong></td>
                                </tr>
                                <tr>
                                    <td ><strong>13</strong></td>
                                    <td >Consumo de energía<strong></strong></td>
                                    <td >Se requiere declaración del consumo de energía del equipo
                                        encendido y apagado.<strong></strong></td>
                                </tr>
                                <tr>
                                    <td ><strong>14</strong></td>
                                    <td >Monitor (Opcional: en caso de requerirse debe
                                        especificarse y ser de acuerdo a las características aquí descritas)<strong></strong>
                                    </td>
                                    <td >18.5" Led con resolución compatible con la resolución
                                        máxima de gráficos.
                                        Misma marca del fabricante de la computadora, apreciable en etiqueta
                                            posterior donde señale características eléctricas.
                                            Debe contar con menú de ajustes.
                                                Debe traer el cable de alimentación eléctrica.
                                                    Debe traer el cable de video de acuerdo al conector de
                                                        video.<strong></strong></td>
                                </tr>
                                <tr>
                                    <td ><strong>15</strong></td>
                                    <td >Teclado (Opcional: en caso de requerirse debe
                                        especificarse y ser de acuerdo a las características aquí descritas)<strong></strong>
                                    </td>
                                    <td >Español Latinoamérica USB. Misma marca del equipo. Con 12
                                        teclas de función, teclado numérico y tecla de menú de inicio para Windows, con
                                        indicadores luminosos.<strong></strong></td>
                                </tr>
                                <tr>
                                    <td ><strong>16</strong></td>
                                    <td >Mouse (Opcional: en caso de requerirse debe especificarse
                                        y ser de acuerdo a las características aquí descritas)<strong></strong></td>
                                    <td >Óptico USB 2 Botones+Scroll de la misma marca del
                                        equipo.<strong></strong></td>
                                </tr>
                                <tr>
                                    <td ><strong>17</strong></td>
                                    <td >Discos de Recuperación y Drivers<strong></strong></td>
                                    <td >El equipo deberá de tener toda la información necesaria
                                        para la recuperación de sistema operativo preinstalado (cuando aplique), drivers
                                        y configuración de fábrica en una partición en el disco duro con acceso a través
                                        de una tecla de función o en un CD/DVD.<strong></strong></td>
                                </tr>
                                <tr>
                                    <td ><strong>18</strong></td>
                                    <td >Certificados<strong></strong></td>
                                    <td >Nom-019-scfi-1998: norma de seguridad de equipo de
                                        procesamiento de datos, o equivalente internacional.<strong></strong></td>
                                </tr>
                                </tbody>
                        </table>

                <hr style={{  borderColor:'white' }}/>
                                <h4><strong>SERVIDOR TIPO 2 - TORRE</strong></h4>
                <hr style={{  borderColor:'white' }}/>
                        <table className="table table-striped table-bordered">

                            <tbody>

                                <tr>
                                    <td ><strong>No.</strong></td>
                                    <td ><strong>Descripción</strong></td>
                                    <td ><strong>Especificación</strong></td>
                                </tr>
                                <tr>
                                    <td ><strong>1</strong></td>
                                    <td >Procesador<strong></strong></td>
                                    <td >1 o 2 Procesadores con tecnología x86 a 64 bits con las
                                        siguientes características técnicas:
                                        - Un mínimo de 2.0 GHz en el reloj del procesador
                                            - Un mínimo de 2 núcleos físicos
                                                - Protección contra desbordamiento de búfer
                                                    - Tecnología de regulación bajo demanda
                                                        - Consumo de energía (TDP) máximo de
                                                            125W<strong></strong></td>
                                </tr>
                                <tr>
                                    <td ><strong>3</strong></td>
                                    <td >Tarjeta Madre
                                        
                                    </td>
                                    <td >Tarjeta madre diseñada por el fabricante del equipo,
                                        grabada con la marca, y debe contener un número de parte del fabricante del
                                        equipo, sin puentes, parches ni enmendaduras.<strong></strong></td>
                                </tr>
                                <tr>
                                    <td ><strong>4</strong></td>
                                    <td >BIOS<strong></strong></td>
                                    <td >Propietario del fabricante o con derechos reservados para
                                        el fabricante, almacenado en Flash ROM, actualizable vía red, que tenga manejo
                                        de plug and play en aquellos dispositivos que lo permitan.
                                        Con seguridad de password para encendido y
                                            configuración.<strong></strong></td>
                                </tr>
                                <tr>
                                    <td ><strong>5</strong></td>
                                    <td >Memoria RAM
                                        
                                    </td>
                                    <td >16 GB en dos DIMM de 8GB c/u y dos slots libres mínimo
                                        para crecimiento.
                                        Expandible 64 Gbs Máximo.
                                            
                                    </td>
                                </tr>
                                <tr>
                                    <td ><strong>6</strong></td>
                                    <td >Almacenamiento<strong></strong></td>
                                    <td >1 Disco Duro de 500 GB Tipo SATA III, SAS (opcional) o SSD
                                        mínimo, para torre.
                                        RAID 1 con controlador SATA , SAS (opcional) o SSD, con soporte para 2
                                            discos duros mínimo.
                                            Hot Swap o Hot Plug, si lo requiere el ente
                                                requirente.<strong></strong></td>
                                </tr>
                                <tr>
                                    <td ><strong>7</strong></td>
                                    <td >Gráficos
                                        
                                    </td>
                                    <td >Tarjeta de 8 MB de memoria y resolución mínima de
                                        1280x1024 a 75 Hz.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td ><strong>8</strong></td>
                                    <td >Tarjeta De Red
                                        
                                    </td>
                                    <td >Ethernet Gigabit 10/100/1000 Base T Autosensing Full
                                        Duplex, integrada a la motherboard, con conector RJ-45 y soporte para SNMP y
                                        DMI.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td ><strong>9</strong></td>
                                    <td >Unidad óptica
                                        
                                    </td>
                                    <td >DVD-ROM o DVD-RW opcionales.
                                        Interno tipo Sata, homologado por el fabricante.
                                            
                                    </td>
                                </tr>
                                <tr>
                                    <td ><strong>10</strong></td>
                                    <td >Puertos<strong></strong></td>
                                    <td >Un mínimo de 4 puertos USB 3.1 compatible con 2.0 en la
                                        parte posterior y 2 puertos frontales USB 3.1 (Para servidor de Torre)
                                        Un Puerto de red con terminal RJ -45, soporte para un puerto de video
                                            VGA.<strong></strong></td>
                                </tr>
                                <tr>
                                    <td ><strong>11</strong></td>
                                    <td >Gabinete<strong></strong></td>
                                    <td >Factor de forma: Tipo Torre
                                        Con kit de montaje Para servidor de Torre, opcional de acuerdo a las
                                            necesidades de la dependencia.
                                            Cubierta metálica o policarbonato, chasis de estructura metálica, el
                                                gabinete debe contar con sistema de apertura sin necesidad de utilizar
                                                herramienta alguna, tipo tool less en los dispositivos disco duro,
                                                unidad óptica y fuente de poder. Las grapas de sujeción de los
                                                dispositivos deberán estar identificadas para su fácil localización.
                                                Alerta de apertura de gabinete (opcional).
                                                    No se aceptan alteraciones.
                                                        Al menos 4 bahías libres para discos duros(Para servidor de
                                                            Torre)<strong></strong></td>
                                </tr>
                                <tr>
                                    <td ><strong>12</strong></td>
                                    <td >Fuente De Poder
                                        
                                    </td>
                                    <td >De un máximo de 400 W con capacidad de soportar todos los
                                        dispositivos planeados en operación a su máxima capacidad de crecimiento la cual
                                        deberá estar avalada con carta del fabricante.
                                        Cable de alimentación eléctrica
                                            Alimentación eléctrica monofásica polarizada con tierra física.
                                                
                                    </td>
                                </tr>
                                <tr>
                                    <td ><strong>13</strong></td>
                                    <td >Consumo de energía
                                        
                                    </td>
                                    <td >Se requiere declaración del consumo de energía del equipo
                                        encendido y apagado.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td ><strong>14</strong></td>
                                    <td >Monitor (Opcional: en caso de requerirse debe
                                        especificarse y ser de acuerdo a las características aquí descritas)
                                        
                                    </td>
                                    <td >18.5" Led con resolución compatible con la resolución
                                        máxima de gráficos.
                                        Misma marca del fabricante de la computadora, apreciable en etiqueta
                                            posterior donde señale características eléctricas.
                                            Debe contar con menú de ajustes.
                                                Debe traer el cable de alimentación eléctrica.
                                                    Debe traer el cable de video de acuerdo al conector de video.
                                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td ><strong>15</strong></td>
                                    <td >Teclado (Opcional: en caso de requerirse debe
                                        especificarse y ser de acuerdo a las características aquí descritas)
                                        
                                    </td>
                                    <td >Español Latinoamérica USB 104 Teclas mínimo. Misma marca
                                        del equipo. Con 12 teclas de función, teclado numérico y tecla de menú de inicio
                                        para Windows, con indicadores luminosos.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td ><strong>16</strong></td>
                                    <td >Mouse (Opcional: en caso de requerirse debe especificarse
                                        y ser de acuerdo a las características aquí descritas)
                                        
                                    </td>
                                    <td >Óptico USB 2 Botones+Scroll de la misma marca del equipo.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td ><strong>17</strong></td>
                                    <td >Discos de Recuperación y Drivers
                                        
                                    </td>
                                    <td >El equipo deberá de tener toda la información necesaria
                                        para la recuperación de sistema operativo preinstalado (cuando aplique), drivers
                                        y configuración de fábrica en una partición en el disco duro con acceso a través
                                        de una tecla de función o en un CD/DVD.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td ><strong>18</strong></td>
                                    <td >Certificados
                                        
                                    </td>
                                    <td >Nom-019-scfi-1998: norma de seguridad de equipo de
                                        procesamiento de datos, o equivalente internacional.
                                        
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                <hr style={{  borderColor:'white' }}/>
                            <h6><strong>NORMAS Y ESTÁNDARES</strong></h6>

                            <h6>Que el equipo cumpla con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</h6>

                            <h6><strong>SOFTWARE PREINSTALADO</strong></h6>

                            <h8>De acuerdo a los requerimientos del ente requirente. La ADBC no respalda ni favorece el
                                uso de algún Sistema Operativo en específico.</h8>
                <hr style={{  borderColor:'white' }}/> {/*ESPACIO EN BLANCO*/}
                            <h6><strong>MANUALES</strong></h6>

                            <h8>Se debe de entregar manual del equipo para su instalación, configuración y operación en
                                medio</h8>

                            <h6>electrónico y en idioma español.</h6>
                <hr style={{  borderColor:'white' }}/> {/*ESPACIO EN BLANCO*/}

                <h6><strong>GARANTÍA</strong></h6>

                            <h6><strong>Características que deberá cubrir:</strong></h6>

                            <ul>
                                <li>El proveedor se compromete a dar cumplimiento a la garantía.</li>
                                <li>El servicio se prestará en las instalaciones del ente requirente.</li>
                                <li>El tiempo de atención será, como máximo, dos horas.</li>
                                <li>El &nbsp; tiempo de reparación será día siguiente laboralSiexcede este
                                    lapso, &nbsp;el proveedor deberá entregar un equipo de respaldo equivalente
                                    mientras &nbsp;se soluciona el problema.
                                </li>
                                <li>Sí la reparación excede de 30 &nbsp;días &nbsp;naturales, el proveedor entregará a
                                    cambio un equipo nuevo con &nbsp;las &nbsp;características iguales al adquirido u
                                    otro equipo de mayores &nbsp;características.
                                </li>
                            </ul>

                            <h6><strong>Requerimientos de servicio:</strong></h6>

                            <ul>
                                <li>El procedimiento de recepción de reportes y atención de fallas de los equipos.</li>
                                <li>Se &nbsp; debe de indicar una línea telefónica del fabricante o centro
                                    de &nbsp; &nbsp; atención telefónica certificado o aprobado por el fabricante sin
                                    costo &nbsp;de llamada para el usuario, como uno de los canales para hacer
                                    efectiva &nbsp; &nbsp; la garantía.
                                </li>
                                <li>Se debe de especificar un correo electrónico de atención, como uno de los canales
                                    para hacer efectiva la garantía.
                                </li>
                            </ul>

                            <h6><strong></strong></h6>

                            <h6><strong>CONSIDERACIONES &nbsp;PARA EL PROCEDIMIENTO DE ADQUISICIÓN:</strong></h6>

                            <h8>Es &nbsp; estricta responsabilidad del Ente Requirente, como parte
                                funcional &nbsp; &nbsp;durante el procedimiento de adquisición de estos
                                componentes &nbsp;tecnológicos, el considerar todas las cartas respectivas que
                                den &nbsp; soporte &nbsp;al proceso y aseguren el respaldo de los fabricantes de
                                los &nbsp; mismos, en &nbsp;cuanto a especificaciones técnicas, vicios ocultos
                                y &nbsp; condiciones de&nbsp;garantía. La ADBC no tiene responsabilidad alguna
                                por &nbsp; alguna deficiencia &nbsp;administrativa en este sentido.</h8>
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <hr style={{  borderColor:'#eeeeee' }}/>

            <hr style={{  borderColor:'#eeeeee' }}/>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h2> IMPRESORAS MONOCROMÁTICAS TIPO 1, TIPO 2, TIPO 3.</h2></Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <h6><strong>Válido a partir del 14 de Agosto de 2023.</strong></h6>

                            <h6><strong>Estatus:&nbsp;</strong>Vigente</h6>

                            <h6><strong>Categoría:&nbsp;</strong>Estándares técnicos de hardware</h6>

                            <ol>
                                <li>Excepto donde se indique, todos los requerimientos son mínimos.</li>
                                <li>Característica técnicas iguales o &nbsp;mayores a &nbsp;las aquí listadas son
                                    válidas, excepto donde se indique.
                                </li>
                                <li>Las máquinas deben pertenecer a la línea de negocios del fabricante.</li>
                            </ol>

                            <h6>
                                
                            </h6>

                            <table className="table table-striped table-bordered">
                                <tbody>
                                <tr>
                                    <td><strong>No.</strong>
                                    </td>
                                    <td 
                                        ><strong>Concepto</strong></td>
                                    <td  ><strong>TIPO
                                        1</strong></td>
                                    <td  ><strong>TIPO
                                        2</strong></td>
                                    <td  ><strong>TIPO
                                        3</strong></td>
                                </tr>

                                <tr>
                                    <td >1</td>
                                    <td >Tecnología de impresión</td>
                                    <td >Láser o Led</td>
                                    <td >Láser o Led</td>
                                    <td >Láser o Led</td>
                                </tr>
                                <tr>
                                    <td >2</td>
                                    <td >Tipo</td>
                                    <td >Monocromática</td>
                                    <td >Monocromática</td>
                                    <td >Monocromática</td>
                                </tr>
                                <tr>
                                    <td >3</td>
                                    <td >Resolución dpi</td>
                                    <td >600 x 600 dpi como mínimo o superior</td>
                                    <td >600 x 600 dpi como mínimo o superior</td>
                                    <td >600 x 600 dpi como mínimo o superior</td>
                                </tr>
                                <tr>
                                    <td >4</td>
                                    <td >Memoria RAM</td>
                                    <td >256 MB como mínimo o superior</td>
                                    <td >512 MB como mínimo o superior</td>
                                    <td >512 MB como mínimo o superior</td>
                                </tr>
                                <tr>
                                    <td >5</td>
                                    <td >Velocidad ppm</td>
                                    <td >De 20 ppm hasta 25 ppm como máximo</td>
                                    <td >De 26 ppm hasta 40 ppm como máximo</td>
                                    <td >De 41 ppm hasta 50 ppm como máximo</td>
                                </tr>
                                <tr>
                                    <td >6</td>
                                    <td >Puertos</td>
                                    <td >Puerto USB Version 2.0, Ethernet 10/100/1000 Base-TX RJ-45
                                        mínimo, opcional Wi-Fi
                                    </td>
                                    <td >Puerto USB Version 2.0, Ethernet 10/100/1000 Base-TX RJ-45
                                        mínimo, opcional Wi-Fi
                                    </td>
                                    <td >Puerto USB Version 2.0, Ethernet 10/100/1000 Base-TX RJ-45
                                        mínimo, opcional Wi-Fi
                                    </td>
                                </tr>
                                <tr>
                                    <td >7</td>
                                    <td >Dúplex</td>
                                    <td >La capacidad de impresión automática en ambas caras de la
                                        hoja, es opcional
                                    </td>
                                    <td >Deberá tener la capacidad de impresión automática en ambas
                                        caras de la hoja
                                    </td>
                                    <td >Deberá tener la capacidad de impresión automática en ambas
                                        caras de la hoja
                                    </td>
                                </tr>
                                <tr>
                                    <td >8</td>
                                    <td >Capacidad de Papel</td>
                                    <td >Bandeja multipropósito integrada de 100 hojas o superior y
                                        bandeja manual que debe tener los accesorios para sostener la hoja completa y el
                                        mecanismo de la impresora la tome automáticamente
                                    </td>
                                    <td >Bandeja multipropósito integrada de 250 hojas o superior y
                                        bandeja manual que debe tener los accesorios para sostener la hoja completa y el
                                        mecanismo de la impresora la tome automáticamente
                                    </td>
                                    <td >Bandeja multipropósito integrada de 250 hojas o superior y
                                        bandeja manual que debe tener los accesorios para sostener la hoja completa y el
                                        mecanismo de la impresora la tome automáticamente
                                    </td>
                                </tr>
                                <tr>
                                    <td >9</td>
                                    <td >Tamaño de papel</td>
                                    <td >Carta y Oficio mínimo</td>
                                    <td >Carta y Oficio mínimo</td>
                                    <td >Carta y Oficio mínimo</td>
                                </tr>
                                <tr>
                                    <td >10</td>
                                    <td >Sistemas soportados</td>
                                    <td >Windows, Mac OSX
                                        &nbsp;Si requiere alguna versión de Linux u otro SO deberá especificarlo
                                    </td>
                                    <td >Windows, Mac OSX
                                        &nbsp;Si requiere alguna versión de Linux u otro SO deberá especificarlo
                                    </td>
                                    <td >Windows, Mac OSX
                                        &nbsp;Si requiere alguna versión de Linux u otro SO deberá especificarlo
                                    </td>
                                </tr>
                                <tr>
                                    <td >11</td>
                                    <td >Manuales, Software y Accesorio</td>
                                    <td >Incluir los manuales en español, así como un disco con el
                                        controlador del equipo y se deberá adicionar un kit de de tóner nuevo al kit de
                                        prueba, mismo que deberá venir empacado adicional al equipo
                                    </td>
                                    <td >Incluir los manuales en español, así como un disco con el
                                        controlador del equipo y se deberá adicionar un kit de de tóner nuevo al kit de
                                        prueba, mismo que deberá venir empacado adicional al equipo
                                    </td>
                                    <td >Incluir los manuales en español, así como un disco con el
                                        controlador del equipo y se deberá adicionar un kit de de tóner nuevo al kit de
                                        prueba, mismo que deberá venir empacado adicional al equipo
                                    </td>
                                </tr>
                                <tr>
                                    <td >12</td>
                                    <td >Garantía</td>
                                    <td >1 año mínimo al momento de la entrega, el cual comprenderá
                                        refacciones nuevas y originales, así como la sustitución del equipo en caso de
                                        defecto de fabricación, en el área donde reside el equipo
                                    </td>
                                    <td >1 año mínimo al momento de la entrega, el cual comprenderá
                                        refacciones nuevas y originales, así como la sustitución del equipo en caso de
                                        defecto de fabricación, en el área donde reside el equipo
                                    </td>
                                    <td >1 año mínimo al momento de la entrega, el cual comprenderá
                                        refacciones nuevas y originales, así como la sustitución del equipo en caso de
                                        defecto de fabricación, en el área donde reside el equipo
                                    </td>
                                </tr>
                                <tr>
                                    <td >13</td>
                                    <td >Kit inicial de consumibles</td>
                                    <td >Instalado (s) de fábrica, cartucho(s) de tóner para 4,000
                                        impresiones mínimo.
                                    </td>
                                    <td >Instalado (s) de fábrica, cartucho(s) de tóner para 9,000
                                        impresiones mínimo.
                                    </td>
                                    <td >Instalado (s) de fábrica, cartucho(s) de tóner para 10,000
                                        impresiones mínimo.
                                    </td>
                                </tr>
                                <tr>
                                    <td >14</td>
                                    <td >Sistema para el ahorro de energía</td>
                                    <td >Energy Star y EPEAT vigentes para la marca del bien.</td>
                                    <td >Energy Star y EPEAT vigentes para la marca del bien.</td>
                                    <td >Energy Star y EPEAT vigentes para la marca del bien.</td>
                                </tr>
                                <tr>
                                    <td >15</td>
                                    <td >Estado físico</td>
                                    <td >La impresora láser o led monocromática propuesta, deberá
                                        ser 100 % nueva y original, empacada de fábrica y de la línea de negocios del
                                        fabricante
                                    </td>
                                    <td >La impresora láser o led monocromática propuesta, deberá
                                        ser 100 % nueva y original, empacada de fábrica y de la línea de negocios del
                                        fabricante
                                    </td>
                                    <td >La impresora láser o led monocromática propuesta, deberá
                                        ser 100 % nueva y original, empacada de fábrica y de la línea de negocios del
                                        fabricante
                                    </td>
                                </tr>
                                </tbody>
                            </table>


                        <hr style={{  borderColor:'white' }}/> {/*ESPACIO EN BLANCO*/}
                            <h6><strong>NORMAS Y ESTÁNDARES</strong></h6>

                            <h6>Que el equipo cumpla con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</h6>
                        <hr style={{  borderColor:'white' }}/> {/*ESPACIO EN BLANCO*/}
                            <h6><strong>MANUALES</strong></h6>

                            <h8>Se &nbsp; debe de entregar manual del equipo para su instalación, configuración
                                y &nbsp; operación en medio electrónico o físico &nbsp;y en idioma español.</h8>
                        <hr style={{  borderColor:'white' }}/> {/*ESPACIO EN BLANCO*/}
                            <h6><strong>GARANTÍA</strong></h6>

                            <h6>Características que deberá cubrir:</h6>

                            <ol>
                                <li>El proveedor se compromete a dar cumplimiento a la garantía.</li>
                                <li>El servicio se prestará en las instalaciones del ente requirente.</li>
                                <li>El tiempo de atención será, como máximo, dos horas.</li>
                                <li>El &nbsp; &nbsp;tiempo de reparación será día siguiente laboralSiexcede
                                    este &nbsp;lapso, el proveedor deberá entregar un equipo de respaldo
                                    equivalente &nbsp;mientras se soluciona el problema.
                                </li>
                                <li>Sí la reparación excede de &nbsp; 30 &nbsp;días naturales, el
                                    proveedor &nbsp;entregará a cambio un equipo nuevo &nbsp; con &nbsp;las
                                    características iguales al adquirido u otro equipo de
                                    mayores &nbsp; &nbsp;características.
                                </li>
                            </ol>

                            <h6>Requerimientos de servicio:</h6>

                            <ol>
                                <li>El procedimiento de recepción de reportes y atención de fallas de los equipos.</li>
                                <li>Se &nbsp; &nbsp;debe de indicar una línea telefónica del fabricante o centro
                                    de &nbsp;atención telefónica certificado o aprobado por el fabricante sin
                                    costo &nbsp;de llamada para el usuario, como uno de los canales para
                                    hacer &nbsp;efectiva &nbsp;la garantía.
                                </li>
                                <li>Se debe de especificar un correo electrónico de atención, como uno de los canales
                                    para hacer efectiva la garantía.
                                </li>
                            </ol>

                            <h6><strong>CONSIDERACIONES &nbsp;PARA EL PROCEDIMIENTO DE ADQUISICIÓN:</strong></h6>

                            <h8>Es &nbsp; &nbsp;estricta responsabilidad del Ente Requirente, como parte
                                funcional &nbsp;durante el procedimiento de adquisición de estos
                                componentes &nbsp;tecnológicos, el considerar todas las cartas respectivas que den
                                soporte &nbsp; al proceso y aseguren el respaldo de los fabricantes de los mismos,
                                en &nbsp; cuanto a especificaciones técnicas, vicios ocultos y condiciones
                                de &nbsp; garantía. La ADBC no tiene responsabilidad alguna
                                por &nbsp;alguna &nbsp;deficiencia administrativa en este sentido.</h8>

                            <h6>CONSUMUBLES KITS INICIALES</h6>

                            <ul>
                                <li><strong>Monocromática:</strong> Debe incluir &nbsp;adicionalmente al cartucho de
                                    tóner instalado de fábrica, un cartucho de tóner &nbsp;para 4,000 impresiones
                                    mínimo.
                                </li>
                            </ul>

                            <h6><em>En el proceso de adquisición, anexo a
                                las &nbsp; &nbsp;características técnicas &nbsp;del equipo, se debe proporcionar una
                                lista &nbsp; con los &nbsp;rendimientos y el &nbsp;precio de los consumibles del equipo,
                                para &nbsp; su evaluación en &nbsp;los costos &nbsp;de operación.</em></h6>

                            <h8><strong>SE &nbsp;RECOMIENDA QUE EL FABRICANTE TENGA UN SISTEMA DE &nbsp; RECOLECCION
                                Y &nbsp; DISPOSICIÓN DE LOS CARTUCHOS VACIOS PARA SU RECICLAJE &nbsp; ECOLOGICO,
                                SIN &nbsp;NINGUN &nbsp;CARGO ADICIONAL PARA LAS DEPENDENCIAS DEL &nbsp; GOBIERNO DE
                                CIUDAD DE MÉXICO.</strong></h8>
                            </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <hr style={{  borderColor:'#eeeeee' }}/>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h2> IMPRESORA A COLOR TIPO 1 Y TIPO 2</h2></Accordion.Header>
                    <Accordion.Body>
                        <div className="Text">
                            <h6><strong>Válido a partir del 14 de Agosto de 2023.</strong></h6>

                            <h6><strong>Estatus:&nbsp;</strong>Vigente</h6>

                            <h6><strong>Categoría:&nbsp;</strong>Estándares técnicos de hardware</h6>

                            <ol>
                                <li>Excepto donde se indique, todos los requerimientos son mínimos.</li>
                                <li>Característica técnicas iguales o &nbsp;mayores a &nbsp;las aquí listadas son
                                    válidas, excepto donde se indique.
                                </li>
                                <li>Las máquinas deben pertenecer a la línea de negocios del fabricante.</li>
                            </ol>

                            <table className="table table-striped table-bordered">
                                <tbody>
                                <tr>
                                    <td colSpan="1" data-sheets-value="{" rowSpan="2"
                                        >No.
                                    </td>
                                    <td colSpan="1" data-sheets-value="{" rowSpan="2"
                                        ><strong>Concepto</strong></td>
                                    <td data-sheets-value="{" ><strong>TIPO
                                        1</strong></td>
                                    <td data-sheets-value="{" ><strong>TIPO
                                        2</strong></td>
                                </tr>
                                <tr>
                                    <td data-sheets-value="{" >
                                        </td>
                                    <td data-sheets-value="{" >
                                        </td>
                                </tr>
                                <tr>
                                    <td data-sheets-value="{">1</td>
                                    <td data-sheets-value="{"><strong>Tecnología de impresión</strong></td>
                                    <td data-sheets-value="{">Láser o Led</td>
                                    <td data-sheets-value="{">Láser o Led</td>
                                </tr>
                                <tr>
                                    <td data-sheets-value="{">2</td>
                                    <td data-sheets-value="{"><strong>Tipo</strong></td>
                                    <td data-sheets-value="{">Color</td>
                                    <td data-sheets-value="{">Color</td>
                                </tr>
                                <tr>
                                    <td data-sheets-value="{">3</td>
                                    <td data-sheets-value="{"><strong>Resolución dpi</strong></td>
                                    <td data-sheets-value="{">600 x 600 dpi como mínimo o superior</td>
                                    <td data-sheets-value="{">600 x 600 dpi como mínimo o superior</td>
                                </tr>
                                <tr>
                                    <td data-sheets-value="{">4</td>
                                    <td data-sheets-value="{"><strong>Memoria RAM MB</strong></td>
                                    <td data-sheets-value="{">256 MB como mínimo o superior</td>
                                    <td data-sheets-value="{">512 MB como mínimo o superior</td>
                                </tr>
                                <tr>
                                    <td data-sheets-value="{">5</td>
                                    <td data-sheets-value="{"><strong>Velocidad ppm</strong></td>
                                    <td data-sheets-value="{">De 21 ppm hasta 25 ppm como máximo</td>
                                    <td data-sheets-value="{">De 26 ppm hasta 41 ppm como máximo</td>
                                </tr>
                                <tr>
                                    <td data-sheets-value="{">6</td>
                                    <td data-sheets-value="{"><strong>Puertos</strong></td>
                                    <td data-sheets-value="{">Puerto USB Version 2.0, Ethernet 10/100/1000 Base-TX RJ-45
                                        mínimo, opcional Wi-Fi
                                    </td>
                                    <td data-sheets-value="{">Puerto USB Version 2.0, Ethernet 10/100/1000 Base-TX RJ-45
                                        mínimo, opcional Wi-Fi
                                    </td>
                                </tr>
                                <tr>
                                    <td data-sheets-value="{">7</td>
                                    <td data-sheets-value="{"><strong>Dúplex</strong></td>
                                    <td data-sheets-value="{">La capacidad de impresión automática en ambas caras de la
                                        hoja, es opcional
                                    </td>
                                    <td data-sheets-value="{">Deberá tener la capacidad de impresión automática en ambas
                                        caras de la hoja
                                    </td>
                                </tr>
                                <tr>
                                    <td data-sheets-value="{">8</td>
                                    <td data-sheets-value="{"><strong>Capacidad de Papel</strong></td>
                                    <td data-sheets-value="{">Bandeja multipropósito integrada de 150 hojas o superior y
                                        bandeja manual que debe tener los accesorios para sostener la hoja completa y el
                                        mecanismo de la impresora la tome automáticamente
                                    </td>
                                    <td data-sheets-value="{">Bandeja multipropósito integrada de 250 hojas o superior y
                                        bandeja manual que debe tener los accesorios para sostener la hoja completa y el
                                        mecanismo de la impresora la tome automáticamente
                                    </td>
                                </tr>
                                <tr>
                                    <td data-sheets-value="{">9</td>
                                    <td data-sheets-value="{"><strong>Tamaño de papel</strong></td>
                                    <td data-sheets-value="{">Carta y Oficio mínimo</td>
                                    <td data-sheets-value="{">Carta y Oficio mínimo</td>
                                </tr>
                                <tr>
                                    <td data-sheets-value="{">10</td>
                                    <td data-sheets-value="{"><strong>Sistemas soportados</strong></td>
                                    <td data-sheets-value="{">Windows, Mac OSX
                                        &nbsp;Si requiere alguna versión de Linux u otro SO deberá especificarlo
                                    </td>
                                    <td data-sheets-value="{">Windows, Mac OSX
                                        &nbsp;Si requiere alguna versión de Linux u otro SO deberá especificarlo
                                    </td>
                                </tr>
                                <tr>
                                    <td data-sheets-value="{">11</td>
                                    <td data-sheets-value="{"><strong>Manuales, Software y Accesorio</strong></td>
                                    <td data-sheets-value="{">Incluir los manuales en español, así como un disco con el
                                        controlador del equipo y se deberá adicionar un kit de de tóner nuevo al kit de
                                        prueba, mismo que deberá venir empacado adicional al equipo
                                    </td>
                                    <td data-sheets-value="{">Incluir los manuales en español, así como un disco con el
                                        controlador del equipo y se deberá adicionar un kit de de tóner nuevo al kit de
                                        prueba, mismo que deberá venir empacado adicional al equipo
                                    </td>
                                </tr>
                                <tr>
                                    <td data-sheets-value="{">12</td>
                                    <td data-sheets-value="{"><strong>Garantía</strong></td>
                                    <td data-sheets-value="{">1 año mínimo al momento de la entrega, el cual comprenderá
                                        refacciones nuevas y originales, así como la sustitución del equipo en caso de
                                        defecto de fabricación, en el área donde reside el equipo
                                    </td>
                                    <td data-sheets-value="{">1 año mínimo al momento de la entrega, el cual comprenderá
                                        refacciones nuevas y originales, así como la sustitución del equipo en caso de
                                        defecto de fabricación, en el área donde reside el equipo
                                    </td>
                                </tr>
                                <tr>
                                    <td data-sheets-value="{">13</td>
                                    <td data-sheets-value="{"><strong>Kit inicial de consumibles</strong></td>
                                    <td data-sheets-value="{">Instalado (s) de fábrica, cartucho(s) de tóner para 20,000
                                        impresiones mínimo.
                                    </td>
                                    <td data-sheets-value="{">Instalado (s) de fábrica, cartucho(s) de tóner para 20,000
                                        impresiones mínimo.
                                    </td>
                                </tr>
                                <tr>
                                    <td data-sheets-value="{">14</td>
                                    <td data-sheets-value="{"><strong>Estado físico</strong></td>
                                    <td color="" data-sheets-value="{">La impresora láser o led a color propuesta,
                                        deberá ser 100 % nueva y original, empacada de fábrica y de la línea de negocios
                                        del fabricante
                                    </td>
                                    <td color="" data-sheets-value="{">La impresora láser o led a color propuesta,
                                        deberá ser 100 % nueva y original, empacada de fábrica y de la línea de negocios
                                        del fabricante
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <h6>
                                
                            </h6>

                            <h6><strong>NORMAS Y ESTÁNDARES</strong></h6>

                            <h6>Que el equipo cumpla con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</h6>

                            <h6><strong>MANUALES</strong></h6>

                            <h6>Se &nbsp; debe de entregar manual del equipo para su instalación, configuración
                                y &nbsp; operación en medio electrónico o físico &nbsp;y en idioma español.</h6>

                            <h6><strong>GARANTÍA</strong></h6>

                            <h6>Características que deberá cubrir:</h6>

                            <ul>
                                <li>El proveedor se compromete a dar cumplimiento a la garantía.</li>
                                <li>El servicio se prestará en las instalaciones del ente requirente.</li>
                                <li>El tiempo de atención será, como máximo, dos horas.</li>
                                <li>El &nbsp; &nbsp;tiempo de reparación será día siguiente laboralSiexcede
                                    este &nbsp;lapso, el proveedor deberá entregar un equipo de respaldo
                                    equivalente &nbsp;mientras se soluciona el problema.
                                </li>
                                <li>Sí la reparación excede de &nbsp; 30 &nbsp;días naturales, el
                                    proveedor &nbsp;entregará a cambio un equipo nuevo &nbsp; con &nbsp;las
                                    características iguales al adquirido u otro equipo de
                                    mayores &nbsp; &nbsp;características.
                                </li>
                            </ul>

                            <h6>Requerimientos de servicio:</h6>

                            <ul>
                                <li>El procedimiento de recepción de reportes y atención de fallas de los equipos.</li>
                                <li>Se &nbsp; &nbsp;debe de indicar una línea telefónica del fabricante o centro
                                    de &nbsp;atención telefónica certificado o aprobado por el fabricante sin
                                    costo &nbsp;de llamada para el usuario, como uno de los canales para
                                    hacer &nbsp;efectiva &nbsp;la garantía.
                                </li>
                                <li>Se debe de especificar un correo electrónico de atención, como uno de los canales
                                    para hacer efectiva la garantía.
                                </li>
                            </ul>

                            <h6><strong>CONSIDERACIONES &nbsp;PARA EL PROCEDIMIENTO DE ADQUISICIÓN:</strong></h6>

                            <h6>Es &nbsp; &nbsp;estricta responsabilidad del Ente Requirente, como parte
                                funcional &nbsp;durante el procedimiento de adquisición de estos
                                componentes &nbsp;tecnológicos, el considerar todas las cartas respectivas que den
                                soporte &nbsp; al proceso y aseguren el respaldo de los fabricantes de los mismos,
                                en &nbsp; cuanto a especificaciones técnicas, vicios ocultos y condiciones
                                de &nbsp; garantía. La ADIP no tiene responsabilidad alguna
                                por &nbsp;alguna &nbsp;deficiencia administrativa en este sentido.</h6>

                            <h6><strong>CONSUMUBLIS KITS INICIALES:</strong></h6>

                            <ul>
                                <li><strong>Color</strong>: Debe incluir &nbsp;adicionalmente al cartucho de tóner
                                    instalado de fábrica, un cartucho de tóner &nbsp;para 20,000 impresiones mínimo.
                                </li>
                            </ul>

                            <h6><em>En el proceso de adquisición, anexo a
                                las &nbsp;características &nbsp; técnicas &nbsp;del equipo, se debe proporcionar una
                                lista con los &nbsp; &nbsp;rendimientos y el &nbsp;precio de los consumibles del equipo,
                                para su &nbsp; evaluación en &nbsp;los costos &nbsp;de operación.</em></h6>

                            <h6><strong>SE &nbsp;RECOMIENDA QUE EL FABRICANTE TENGA UN SISTEMA DE &nbsp; RECOLECCION
                                Y &nbsp; DISPOSICIÓN DE LOS CARTUCHOS VACIOS PARA SU RECICLAJE &nbsp; ECOLOGICO,
                                SIN &nbsp;NINGUN &nbsp;CARGO ADICIONAL PARA LAS DEPENDENCIAS DEL &nbsp; GOBIERNO DE
                                CIUDAD DE MÉXICO.</strong></h6>

                            <h6>
                                
                            </h6>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <hr style={{  borderColor:'#eeeeee' }}/>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h2> IMPRESORA MULTIFUNCIONAL LASER</h2></Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <h6><strong>Válido a partir del 14 de Agosto de 2023.</strong></h6>

                            <h6><strong>Estatus:&nbsp;</strong>Vigente</h6>

                            <h6><strong>Categoría:&nbsp;</strong>Estándares técnicos de hardware</h6>

                            <ol>
                                <li>Excepto donde se indique, todos los requerimientos son mínimos.</li>
                                <li>Característica técnicas iguales o &nbsp;mayores a &nbsp;las aquí listadas son
                                    válidas, excepto donde se indique.
                                </li>
                                <li>Las máquinas deben pertenecer a la línea de negocios del fabricante.</li>
                            </ol>

                            <table className="table table-striped table-bordered"
                                   >
                                <tbody>
                                <tr>
                                    <td 
                                        ><strong>No.</strong>
                                        
                                    </td>
                                    <td
                                        ><strong>Concepto</strong>
                                        
                                    </td>
                                    <td ><strong>TIPO
                                        1</strong>
                                        
                                    </td>
                                    <td ><strong>TIPO
                                        2</strong>
                                        
                                    </td>
                                    <td ><strong>TIPO
                                        3</strong>
                                        
                                    </td>
                                </tr>

                                <tr>
                                    <td>1

                                    </td>
                                    <td><strong>Tecnología de impresión</strong>

                                    </td>
                                    <td>Láser monocromo

                                    </td>
                                    <td>Láser Color

                                    </td>
                                    <td>Láser monocromo

                                    </td>
                                </tr>
                                <tr>
                                    <td>2
                                        
                                    </td>
                                    <td><strong>Resolución</strong>
                                        
                                    </td>
                                    <td>1200 x 600 dpi
                                        
                                    </td>
                                    <td>600 x 600 dpi
                                        
                                    </td>
                                    <td>600 x 600 dpi para copiado, escaneado e impresión como
                                        mínimo.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>3
                                        
                                    </td>
                                    <td><strong>Velocidad de impresión</strong></td>
                                    <td>21 ppm como mínimo
                                        
                                    </td>
                                    <td color="">30 ppm negro y 15 ppm Color mínimo.
                                        
                                    </td>
                                    <td>50 ppm o superior.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>4
                                        
                                    </td>
                                    <td><strong>Área de la cama plana</strong></td>
                                    <td>Carta y Oficio mínimo.
                                        
                                    </td>
                                    <td>Carta y Oficio mínimo, escaneo a color, alimentación
                                        automática.
                                        
                                    </td>
                                    <td>Carta y Oficio mínimo.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>5
                                        
                                    </td>
                                    <td><strong>Capacidad de bandeja de alimentación</strong>
                                    </td>
                                    <td>Bandeja integrada de 100 páginas o superior.
                                        La bandeja manual debe tener los accesorios para sostener la hoja completa y
                                            el mecanismo de la impresora la tome automáticamente.
                                            Debe tener la capacidad de impresión automática en ambas caras de la
                                                hoja.
                                                
                                    </td>
                                    <td>Bandeja integrada de 250 hojas o superior.
                                        La bandeja manual debe tener los accesorios para sostener la hoja completa y
                                            el mecanismo de la impresora la tome
                                            automáticamente.
                                                Debe tener la capacidad de impresión automática en ambas caras de la
                                                    hoja.
                                                    
                                    </td>
                                    <td>2000 hojas como mínimo distribuido en las diferentes
                                        bandejas.
                                        La bandeja manual debe tener los accesorios para sostener la hoja completa y
                                            el mecanismo de la impresora la tome automáticamente.
                                            Debe tener la capacidad de impresión automática en ambas caras de la
                                                hoja.
                                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>6
                                        
                                    </td>
                                    <td><strong>Funciones estándar</strong></td>
                                    <td>Copiado, escaneo e impresión a doble cara (dúplex
                                        automático)
                                            
                                    </td>
                                    <td>Copiado, escaneo e impresión a doble cara (dúplex
                                        automático)
                                            
                                    </td>
                                    <td>Copiado, escaneo e impresión a doble cara (dúplex
                                        automático)
                                            
                                    </td>
                                </tr>
                                <tr>
                                    <td>7
                                        
                                    </td>
                                    <td><strong>Puertos</strong>
                                        
                                    </td>
                                    <td>USB 2.0 o USB 3.0, Ethernet 10/100 BASE-TX RJ-45,
                                        opcional: Wi-Fi
                                        
                                    </td>
                                    <td>USB 2.0 o USB 3.0, Ethernet 10/100 BASE-TX RJ-45,
                                        opcional: Wi-Fi
                                        
                                    </td>
                                    <td>USB 2.0 o USB 3.0, Ethernet 10/100 BASE-TX RJ-45,
                                        opcional: Wi-Fi
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>8
                                        
                                    </td>
                                    <td><strong>Tamaño de papel</strong></td>
                                    <td>Carta y Oficio mínimo
                                        
                                    </td>
                                    <td>Carta y Oficio mínimo. Doble carta opcional
                                        
                                    </td>
                                    <td>Carta y Oficio mínimo. Doble carta opcional
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>9
                                        
                                    </td>
                                    <td><strong>Manual, Software yAccesorios</strong>
                                        
                                    </td>
                                    <td>Incluir los manuales en español, así como un disco con el
                                        controlador del equipo y se deberá adicionar un kit de tóner nuevo
                                        diferente al kit de prueba, mismo que deberá venir empacado adicional al
                                            equipo.
                                            
                                    </td>
                                    <td>Incluir los manuales en español, así como un disco con el
                                        controlador del equipo y se deberá adicionar un kit de tóner nuevo
                                        diferente al kit de prueba, mismo que deberá venir empacado adicional al
                                            equipo.
                                            
                                    </td>
                                    <td>Incluir los manuales en español, así como un disco con el
                                        controlador del equipo y se deberá adicionar un kit de tóner nuevo diferente al
                                        kit de prueba, mismo que deberá venir empacado adicional al equipo.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>10
                                        
                                    </td>
                                    <td><strong>Compatibilidad</strong>
                                        
                                    </td>
                                    <td>Windows y MAC OS X.
                                        Si requiere alguna versión de Linux u otro SO deberá especificarlo
                                            
                                    </td>
                                    <td>Windows y MAC OS X.
                                        Si requiere alguna versión de Linux u otro SO deberá especificarlo
                                            
                                    </td>
                                    <td>Windows y MAC OS X.
                                        Si requiere alguna versión de Linux u otro SO deberá especificarlo
                                            
                                    </td>
                                </tr>
                                <tr>
                                    <td>11
                                        
                                    </td>
                                    <td><strong>Garantía</strong>
                                        
                                    </td>
                                    <td>1 año mínimo al momento de la entrega, el cual comprenderá
                                        refacciones nuevas y originales, así como la sustitución del equipo en caso
                                        de defecto de fabricación en el área donde reside el equipo
                                            
                                    </td>
                                    <td>3 años al momento de la entrega, el cual comprenderá
                                        refacciones nuevas y originales, así como la sustitución del equipo en caso
                                        de defecto de fabricación en el área donde reside el equipo
                                            
                                    </td>
                                    <td>3 años minimo al momento de la entrega, el cual comprenderá
                                        refacciones nuevas y originales, así como la sustitución del equipo en caso
                                        de defecto de fabricación en el área donde reside el equipo
                                            
                                    </td>
                                </tr>
                                <tr>
                                    <td>12
                                        
                                    </td>
                                    <td><strong>Sistema para ahorro de energía</strong></td>
                                    <td>Energy Star y EPEAT vigentes para la marca del bien.
                                        
                                    </td>
                                    <td>Energy Star y EPEAT vigentes para la marca del bien.
                                        
                                    </td>
                                    <td>Energy Star y EPEAT vigentes para la marca del bien.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>13
                                        
                                    </td>
                                    <td><strong>Estado físico</strong></td>
                                    <td>El multifuncional láser monocromático propuesto, deberá
                                        ser 100 % nuevo y original, empacado de fábrica y de la línea de negocios del
                                        fabricante
                                        
                                    </td>
                                    <td color="">El multifuncional láser color propuesto, deberá
                                        ser 100 % nuevo y original, empacado de fábrica y de la línea de negocios del
                                        fabricante
                                        
                                    </td>
                                    <td>El multifuncional láser monocromático propuesto, deberá
                                        ser 100 % nuevo y original, empacado de fábrica y de la línea de negocios del
                                        fabricante
                                        
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <h6>
                                
                            </h6>
                            <hr style={{  borderColor:'white' }}/>
                            <h6><strong>NORMAS Y ESTÁNDARES</strong></h6>

                            <h6>Que el equipo cumpla con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</h6>
                            <hr style={{  borderColor:'white' }}/>
                            <h6><strong>MANUALES</strong></h6>

                            <h6>Se &nbsp; debe de entregar manual del equipo para su instalación, configuración
                                y &nbsp; operación en medio electrónico o físico &nbsp;y en idioma español.</h6>
                            <hr style={{  borderColor:'white' }}/>
                            <h6><strong>GARANTÍA</strong></h6>

                            <h6>Características que deberá cubrir:</h6>

                            <ul>
                                <li>El proveedor se compromete a dar cumplimiento a la garantía.</li>
                                <li>El servicio se prestará en las instalaciones del ente requirente.</li>
                                <li>El tiempo de atención será, como máximo, dos horas.</li>
                                <li>El &nbsp; &nbsp;tiempo de reparación será día siguiente laboralSiexcede
                                    este &nbsp;lapso, el proveedor deberá entregar un equipo de respaldo
                                    equivalente &nbsp;mientras se soluciona el problema.
                                </li>
                                <li>Sí la reparación excede de &nbsp; 30 &nbsp;días naturales, el
                                    proveedor &nbsp;entregará a cambio un equipo nuevo &nbsp; con &nbsp;las
                                    características iguales al adquirido u otro equipo de
                                    mayores &nbsp; &nbsp;características.
                                </li>
                            </ul>

                            <h6>Requerimientos de servicio:</h6>

                            <ul>
                                <li>El procedimiento de recepción de reportes y atención de fallas de los equipos.</li>
                                <li>Se &nbsp; &nbsp;debe de indicar una línea telefónica del fabricante o centro
                                    de &nbsp;atención telefónica certificado o aprobado por el fabricante sin
                                    costo &nbsp;de llamada para el usuario, como uno de los canales para
                                    hacer &nbsp;efectiva &nbsp;la garantía.
                                </li>
                                <li>Se debe de especificar un correo electrónico de atención, como uno de los canales
                                    para hacer efectiva la garantía.
                                </li>
                            </ul>

                            <h6><strong>CONSIDERACIONES &nbsp;PARA EL PROCEDIMIENTO DE ADQUISICIÓN:</strong></h6>

                            <h6>Es &nbsp; &nbsp;estricta responsabilidad del Ente Requirente, como parte
                                funcional &nbsp;durante el procedimiento de adquisición de estos
                                componentes &nbsp;tecnológicos, el considerar todas las cartas respectivas que den
                                soporte &nbsp; al proceso y aseguren el respaldo de los fabricantes de los mismos,
                                en &nbsp; cuanto a especificaciones técnicas, vicios ocultos y condiciones
                                de &nbsp; garantía. La ADBC no tiene responsabilidad alguna
                                por &nbsp;alguna &nbsp;deficiencia administrativa en este sentido.</h6>

                            <h6><strong>SE &nbsp;RECOMIENDA QUE EL FABRICANTE TENGA UN SISTEMA
                                DE &nbsp; &nbsp;RECOLECCION Y &nbsp; DISPOSICIÓN DE LOS CARTUCHOS VACIOS PARA SU
                                RECICLAJE &nbsp; &nbsp;ECOLOGICO, SIN &nbsp;NINGUN &nbsp;CARGO ADICIONAL PARA LAS
                                DEPENDENCIAS DEL &nbsp; &nbsp;GOBIERNO DE CIUDAD DE MÉXICO.</strong></h6>

                            </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <hr style={{  borderColor:'#eeeeee' }}/>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h2> IMPRESORA MULTIFUNCIONAL INYECCIÓN DE TINTA</h2></Accordion.Header>
                    <Accordion.Body>
                        <div >
                            <h6><strong>Válido a partir del 14 de Agosto de 2023.</strong></h6>

                            <h6><strong>Estatus:&nbsp;</strong>Vigente</h6>

                            <h6><strong>Categoría:&nbsp;</strong>Estándares técnicos de hardware</h6>

                            <ol>
                                <li>Excepto donde se indique, todos los requerimientos son mínimos.</li>
                                <li>Característica técnicas iguales o &nbsp;mayores a &nbsp;las aquí listadas son
                                    válidas, excepto donde se indique.
                                </li>
                                <li>Las máquinas deben pertenecer a la línea de negocios del fabricante.</li>
                            </ol>

                            <table className="table table-striped table-bordered">
                                <tbody>
                                <tr>
                                    <td >No.</td>
                                    <td >
                                        <strong>Componente</strong></td>
                                    <td >
                                        <strong>Requerimientos</strong></td>
                                </tr>

                                <tr>
                                    <td><strong>1</strong></td>
                                    <td><strong>Color</strong></td>
                                    <td>Con cartuchos o botes de tinta separados</td>
                                </tr>
                                <tr>
                                    <td><strong>2</strong></td>
                                    <td><strong>Tecnología</strong></td>
                                    <td>De inyección de tinta de 4 colores (CMYK)&nbsp;</td>
                                </tr>
                                <tr>
                                    <td><strong>3</strong></td>
                                    <td><strong>Velocidad</strong></td>
                                    <td color="">15 ppm a color y 33 ppm en texto negro</td>
                                </tr>
                                <tr>
                                    <td><strong>4</strong></td>
                                    <td><strong>Resolución </strong></td>
                                    <td>1200 x 1200 dpi mínimo</td>
                                </tr>
                                <tr>
                                    <td><strong>5</strong></td>
                                    <td><strong>Puertos</strong></td>
                                    <td>USB 2.0, Ethernet y WI-FI</td>
                                </tr>
                                <tr>
                                    <td><strong>6</strong></td>
                                    <td><strong>Tarjeta de WI-FI</strong></td>
                                    <td>802.11b/g/n opcional</td>
                                </tr>
                                <tr>
                                    <td><strong>7</strong></td>
                                    <td><strong>Bandeja de Entrada</strong></td>
                                    <td>100 hojas mínimo</td>
                                </tr>
                                <tr>
                                    <td><strong>8</strong></td>
                                    <td><strong>Bandeja de Salida</strong></td>
                                    <td>30 hojas mínimo</td>
                                </tr>
                                <tr>
                                    <td><strong>9</strong></td>
                                    <td><strong>Tamaño de papel</strong></td>
                                    <td>Mínimo carta, oficio y sobres</td>
                                </tr>
                                <tr>
                                    <td><strong>10</strong></td>
                                    <td><strong>Compatibilidad</strong></td>
                                    <td>Mínimo GNU/Linux, Windows y MAC OS X</td>
                                </tr>
                                <tr>
                                    <td><strong>11</strong></td>
                                    <td><strong>Tinta</strong></td>
                                    <td>Incluir la cantidad de cartuchos o botes necesarios.</td>
                                </tr>
                                <tr>
                                    <td 
                                        ><strong>ESCÁNER</strong></td>
                                </tr>
                                <tr>
                                    <td><strong>1</strong></td>
                                    <td><strong>Resolución</strong></td>
                                    <td>1200 dpi</td>
                                </tr>
                                <tr>
                                    <td><strong>2</strong></td>
                                    <td><strong>Velocidad escaneo negro</strong></td>
                                    <td>5 ppm (200 ppi)</td>
                                </tr>
                                <tr>
                                    <td><strong>3</strong></td>
                                    <td><strong>Velocidad escaneo color</strong></td>
                                    <td>3 ppm (200 ppi)</td>
                                </tr>
                                <tr>
                                    <td><strong>4</strong></td>
                                    <td><strong>Formatos salida</strong></td>
                                    <td>Mínimo BMP, JPEG, TIFF, PDF</td>
                                </tr>
                                <tr>
                                    <td 
                                        ><strong>COPIADORA</strong></td>
                                </tr>
                                <tr>
                                    <td><strong>1</strong></td>
                                    <td><strong>Calidad</strong>
                                        
                                    </td>
                                    <td>Blanco y negro, color</td>
                                </tr>
                                <tr>
                                    <td><strong>2</strong></td>
                                    <td><strong>Velocidad</strong></td>
                                    <td>10 copias por minuto</td>
                                </tr>
                                <tr>
                                    <td 
                                        ><strong>OTROS</strong>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>1</strong></td>
                                    <td><strong>Garantía</strong>
                                        
                                    </td>
                                    <td>1 año en todas sus partes
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>2</strong></td>
                                    <td><strong>Contenido de la caja</strong></td>
                                    <td>Impresora, Cable USB de alta velocidad; adaptador de
                                        alimentación con cable de alimentación; CD-ROM con software de instalación y
                                        configuración y Guía de soporte y configuración y manuales
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <h6>
                                
                            </h6>
                            <hr style={{  borderColor:'white' }}/>
                            <h6><strong>NORMAS Y ESTÁNDARES</strong></h6>

                            <h6>Que el equipo cumpla con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</h6>
                            <hr style={{  borderColor:'white' }}/>
                            <h6><strong>MANUALES</strong></h6>

                            <h6>Se &nbsp; debe de entregar manual del equipo para su instalación, configuración
                                y &nbsp; operación en medio electrónico o físico &nbsp;y en idioma español.</h6>
                            <hr style={{  borderColor:'white' }}/>
                            <h6><strong>GARANTÍA</strong></h6>

                            <h6>Características que deberá cubrir:</h6>

                            <ul>
                                <li>El proveedor se compromete a dar cumplimiento a la garantía.</li>
                                <li>El servicio se prestará en las instalaciones del ente requirente.</li>
                                <li>El tiempo de atención será, como máximo, dos horas.</li>
                                <li>El &nbsp; &nbsp;tiempo de reparación será día siguiente laboralSiexcede
                                    este &nbsp;lapso, el proveedor deberá entregar un equipo de respaldo
                                    equivalente &nbsp;mientras se soluciona el problema.
                                </li>
                                <li>Sí la reparación excede de &nbsp; 30 &nbsp;días naturales, el
                                    proveedor &nbsp;entregará a cambio un equipo nuevo &nbsp; con &nbsp;las
                                    características iguales al adquirido u otro equipo de
                                    mayores &nbsp; &nbsp;características.
                                </li>
                            </ul>

                            <h6>Requerimientos de servicio:</h6>

                            <ul>
                                <li>El procedimiento de recepción de reportes y atención de fallas de los equipos.</li>
                                <li>Se &nbsp; &nbsp;debe de indicar una línea telefónica del fabricante o centro
                                    de &nbsp;atención telefónica certificado o aprobado por el fabricante sin
                                    costo &nbsp;de llamada para el usuario, como uno de los canales para
                                    hacer &nbsp;efectiva &nbsp;la garantía.
                                </li>
                                <li>Se debe de especificar un correo electrónico de atención, como uno de los canales
                                    para hacer efectiva la garantía.
                                </li>
                            </ul>

                            <h6><strong>CONSIDERACIONES &nbsp;PARA EL PROCEDIMIENTO DE ADQUISICIÓN:</strong></h6>

                            <h6>Es &nbsp; &nbsp;estricta responsabilidad del Ente Requirente, como parte
                                funcional &nbsp;durante el procedimiento de adquisición de estos
                                componentes &nbsp;tecnológicos, el considerar todas las cartas respectivas que den
                                soporte &nbsp; al proceso y aseguren el respaldo de los fabricantes de los mismos,
                                en &nbsp; cuanto a especificaciones técnicas, vicios ocultos y condiciones
                                de &nbsp; garantía. La ADBC no tiene responsabilidad alguna
                                por &nbsp;alguna &nbsp;deficiencia administrativa en este sentido.</h6>

                            <h6><strong>SE &nbsp;RECOMIENDA QUE EL FABRICANTE TENGA UN
                                SISTEMA &nbsp;DE &nbsp; RECOLECCION Y &nbsp; DISPOSICIÓN DE LOS CARTUCHOS VACIOS PARA
                                SU &nbsp;RECICLAJE &nbsp; ECOLOGICO, SIN &nbsp;NINGUN &nbsp;CARGO ADICIONAL PARA LAS
                                DEPENDENCIAS &nbsp;DEL &nbsp; GOBIERNO DE CIUDAD DE MÉXICO.</strong></h6>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <hr style={{  borderColor:'#eeeeee' }}/>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h2> ESCÁNER </h2></Accordion.Header>
                    <Accordion.Body>
                        <div >
                            <h6><strong>Válido a partir del 14 de Agosto de 2023.</strong></h6>

                            <h6><strong>Estatus:&nbsp;</strong>Vigente</h6>

                            <h6><strong>Categoría:&nbsp;</strong>Estándares técnicos de hardware</h6>

                            <ol>
                                <li>Excepto donde se indique, todos los requerimientos son mínimos.</li>
                                <li>Característica técnicas iguales o &nbsp;mayores a &nbsp;las aquí listadas son
                                    válidas, excepto donde se indique.
                                </li>
                                <li>Las máquinas deben pertenecer a la línea de negocios del fabricante.</li>
                            </ol>

                            <table className="table table-striped table-bordered">
                                <tbody>
                                <tr>
                                    <td >
                                        <strong>No</strong></td>
                                    <td >
                                        <strong>Especificación</strong>
                                        
                                    </td>
                                    <td >
                                        <strong>Descripción</strong>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>1
                                        
                                    </td>
                                    <td><strong>TAMAÑO DE DIGITALIZACIÓN</strong></td>
                                    <td>Maximo 29.7 cm x 609.6 cm
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td><strong>TIPO DE DIGITALIZACIÓN</strong></td>
                                    <td>Superficie plana, alimentador automático de documentos
                                        (ADF), <span>duplex opcional</span>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td><strong>RESOLUCIÓN DE ESCANEO, ÓPTICA</strong></td>
                                    <td>Maximo 1200 dpi, puntos por pulgada.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td><strong>NIVELES DE ESCALA DE GRISES</strong></td>
                                    <td>256 tonalidades de gris.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td><strong>CAPACIDAD DEL ALIMENTADOR AUTOMÁTICO DE DOCUMENTOS</strong>
                                    </td>
                                    <td>Maximo 200 hojas.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td><strong>VELOCIDAD DE ESCANEADO</strong></td>
                                    <td>Maximo de &nbsp;70 ppm (Páginas por minuto) en blanco y
                                        negro y/o color.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td><strong>CONECTIVIDAD</strong>
                                        
                                    </td>
                                    <td>Ethernet 10/100/1000, USB 2.0 o 3.0
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td><strong>COMPATIBILIDAD CON SISTEMAS
                                        OPERATIVOS</strong></td>
                                    <td>Compatible con una de las siguientes, Windows, GNU/Linux,
                                        Mac OS X, u otro, deacuerdo a las necesidades del Ente
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td><strong>GARANTÍA</strong>
                                        
                                    </td>
                                    <td>mínimo 3 años en todas sus partes
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>10
                                        
                                    </td>
                                    <td><strong>CONTENIDO DE LA CAJA</strong></td>
                                    <td>Escáner plano con alimentador automático de documentos
                                        (ADF); Cable USB de alta velocidad; adaptador de alimentación con cable de
                                        alimentación; CD-ROM con software de instalación y configuración y Guía de
                                        soporte y configuración y manuales
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <h6>
                                
                            </h6>

                            <h6><strong>NORMAS Y ESTÁNDARES</strong></h6>

                            <h6>Que el equipo cumpla con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</h6>
                            <hr style={{  borderColor:'white' }}/>
                            <h6><strong>MANUALES</strong></h6>

                            <h6>Se &nbsp;debe de entregar manual del equipo para su instalación, configuración
                                y &nbsp;operación en medio electrónico o físico &nbsp;y en idioma español.</h6>
                            <hr style={{  borderColor:'white' }}/>
                            <h6><strong>GARANTÍA</strong></h6>

                            <h6>Características que deberá cubrir:</h6>

                            <ul>
                                <li>El proveedor se compromete a dar cumplimiento a la garantía.</li>
                                <li>El servicio se prestará en las instalaciones del ente requirente.</li>
                                <li>El tiempo de atención será, como máximo, dos horas.</li>
                                <li>El &nbsp; tiempo de reparación será día siguiente laboralSiexcede este lapso, el
                                    proveedor deberá entregar un equipo de respaldo equivalente mientras se soluciona el
                                    problema.
                                </li>
                                <li>Sí la reparación excede de &nbsp;30 &nbsp;días naturales, el
                                    proveedor &nbsp;entregará a cambio un equipo nuevo &nbsp;con &nbsp;las
                                    características iguales al adquirido u otro equipo de
                                    mayores &nbsp; características.
                                </li>
                            </ul>

                            <h6>Requerimientos de servicio:</h6>

                            <ul>
                                <li>El procedimiento de recepción de reportes y atención de fallas de los equipos.</li>
                                <li>Se &nbsp; debe de indicar una línea telefónica del fabricante o centro de atención
                                    telefónica certificado o aprobado por el fabricante sin costo de llamada para el
                                    usuario, como uno de los canales para hacer &nbsp;efectiva la garantía.
                                </li>
                                <li>Se debe de especificar un correo electrónico de atención, como uno de los canales
                                    para hacer efectiva la garantía.
                                </li>
                            </ul>

                            <h6><strong>CONSIDERACIONES &nbsp;PARA EL PROCEDIMIENTO DE ADQUISICIÓN:</strong></h6>

                            <h6>Es &nbsp; estricta responsabilidad del Ente Requirente, como parte funcional durante el
                                procedimiento de adquisición de estos componentes tecnológicos, el considerar todas las
                                cartas respectivas que den soporte &nbsp;al proceso y aseguren el respaldo de los
                                fabricantes de los mismos, en &nbsp;cuanto a especificaciones técnicas, vicios ocultos y
                                condiciones de &nbsp;garantía. La ADBC no tiene responsabilidad alguna por &nbsp;alguna
                                deficiencia administrativa en este sentido.</h6>

                            <h6>
                                
                            </h6>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <hr style={{  borderColor:'#eeeeee' }}/>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h2> PLOTTER </h2></Accordion.Header>
                    <Accordion.Body>
                        <div >
                            <h6><strong>Válido a partir del 14 de Agosto de 2023.</strong></h6>

                            <h6><strong>Estatus:&nbsp;</strong>Vigente</h6>

                            <h6><strong>Categoría:&nbsp;</strong>Estándares técnicos de hardware</h6>

                            <ol>
                                <li>Excepto donde se indique, todos los requerimientos son mínimos.</li>
                                <li>Característica técnicas iguales o &nbsp;mayores a &nbsp;las aquí listadas son
                                    válidas, excepto donde se indique.
                                </li>
                                <li>Las máquinas deben pertenecer a la línea de negocios del fabricante.</li>
                            </ol>

                            <table className="table table-striped table-bordered">
                                <tbody>
                                <tr>
                                    <td >No
                                        
                                    </td>
                                    <td >
                                        <strong>Componente</strong>
                                        
                                    </td>
                                    <td >
                                        <strong>Descripción</strong>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>1
                                        
                                    </td>
                                    <td><strong>Cartuchos de tinta</strong></td>
                                    <td>Con al menos 4 tintas independientes.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>2
                                        
                                    </td>
                                    <td><strong>Ancho</strong>
                                        
                                    </td>
                                    <td>44 pulgadas máximo
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>3
                                        
                                    </td>
                                    <td><strong>Velocidad de impresión</strong></td>
                                    <td>Con un mínimo 25 segundos por página en A1, 70 impresiones
                                        A1 por hora
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>4
                                        
                                    </td>
                                    <td><strong>Resolución</strong>
                                        
                                    </td>
                                    <td>Máximo 2400 x 1200 dpi
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>5
                                        
                                    </td>
                                    <td><strong>Puertos</strong>
                                        
                                    </td>
                                    <td>Mínimo Ethernet 10/100/1000, USB 2.0 o 3.0
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>6
                                        
                                    </td>
                                    <td><strong>Tarjeta de red</strong></td>
                                    <td>Tarjeta de red Ethernet,Wi-Fi opcional.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>7
                                        
                                    </td>
                                    <td><strong>Memoria RAM</strong></td>
                                    <td>1GB máximo
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>8
                                        
                                    </td>
                                    <td><strong>Manuales, Software y Accesorio</strong></td>
                                    <td>Incluir los manuales en español, así como un disco con el
                                        controlador del equipo.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>9
                                        
                                    </td>
                                    <td><strong>Compatibilidad con Sistemas
                                        Operativos</strong></td>
                                    <td>Compatible con una de las siguientes, &nbsp;Windows,
                                        GNU/Linux, Mac OS X u otro, de acuerdo a las necesidades del Ente
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>10
                                        
                                    </td>
                                    <td><strong>Garantía</strong>
                                        
                                    </td>
                                    <td>Garantía de mínimo 3 años en todas sus partes.
                                        
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <h6>
                                
                            </h6>
                            <hr style={{  borderColor:'white' }}/>
                            <h6><strong>NORMAS Y ESTÁNDARES</strong></h6>

                            <h6>Que el equipo cumpla con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</h6>
                            <hr style={{  borderColor:'white' }}/>
                            <h6><strong>MANUALES</strong></h6>

                            <h6>Se &nbsp; debe de entregar manual del equipo para su instalación, configuración
                                y &nbsp; operación en medio electrónico o físico &nbsp;y en idioma español.</h6>
                            <hr style={{  borderColor:'white' }}/>
                            <h6><strong>GARANTÍA</strong></h6>

                            <h6>Características que deberá cubrir:</h6>

                            <ul>
                                <li>El proveedor se compromete a dar cumplimiento a la garantía.</li>
                                <li>El servicio se prestará en las instalaciones del ente requirente.</li>
                                <li>El tiempo de atención será, como máximo, dos horas.</li>
                                <li>El &nbsp; &nbsp;tiempo de reparación será día siguiente laboralSiexcede
                                    este &nbsp;lapso, el proveedor deberá entregar un equipo de respaldo
                                    equivalente &nbsp;mientras se soluciona el problema.
                                </li>
                                <li>Sí la reparación excede de &nbsp; 30 &nbsp;días naturales, el
                                    proveedor &nbsp;entregará a cambio un equipo nuevo &nbsp; con &nbsp;las
                                    características iguales al adquirido u otro equipo de
                                    mayores &nbsp; &nbsp;características.
                                </li>
                            </ul>

                            <h6>Requerimientos de servicio:</h6>

                            <ul>
                                <li>El procedimiento de recepción de reportes y atención de fallas de los equipos.</li>
                                <li>Se &nbsp; &nbsp;debe de indicar una línea telefónica del fabricante o centro
                                    de &nbsp;atención telefónica certificado o aprobado por el fabricante sin
                                    costo &nbsp;de llamada para el usuario, como uno de los canales para
                                    hacer &nbsp;efectiva &nbsp;la garantía.
                                </li>
                                <li>Se debe de especificar un correo electrónico de atención, como uno de los canales
                                    para hacer efectiva la garantía.
                                </li>
                            </ul>

                            <h6><strong>CONSIDERACIONES &nbsp;PARA EL PROCEDIMIENTO DE ADQUISICIÓN:</strong></h6>

                            <h6>Es &nbsp; &nbsp;estricta responsabilidad del Ente Requirente, como parte
                                funcional &nbsp;durante el procedimiento de adquisición de estos
                                componentes &nbsp;tecnológicos, el considerar todas las cartas respectivas que den
                                soporte &nbsp; al proceso y aseguren el respaldo de los fabricantes de los mismos,
                                en &nbsp; cuanto a especificaciones técnicas, vicios ocultos y condiciones
                                de &nbsp; garantía. La ADBC no tiene responsabilidad alguna
                                por &nbsp;alguna &nbsp;deficiencia administrativa en este sentido.</h6>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <hr style={{  borderColor:'#eeeeee' }}/>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h2> VÍDEO PROYECTOR </h2></Accordion.Header>
                    <Accordion.Body>
                        <div >
                            <h6><strong>Válido a partir del 14 de Agosto de 2023.</strong></h6>

                            <h6><strong>Estatus:&nbsp;</strong>Vigente</h6>

                            <h6><strong>Categoría:&nbsp;</strong>Estándares técnicos de hardware</h6>

                            <ol>
                                <li>Excepto donde se indique, todos los requerimientos son mínimos.</li>
                                <li>Característica técnicas iguales o &nbsp;mayores a &nbsp;las aquí listadas son
                                    válidas, excepto donde se indique.
                                </li>
                                <li>Las máquinas deben pertenecer a la línea de negocios del fabricante.</li>
                            </ol>

                            <table className="table table-striped table-bordered">
                                <tbody>
                                <tr>
                                    <td >
                                        <strong>No.</strong></td>
                                    <td >
                                        <strong>Especificación</strong>
                                        
                                    </td>
                                    <td >
                                        <strong>Descripción</strong>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>1
                                        
                                    </td>
                                    <td><strong>Fuente de alimentación</strong></td>
                                    <td>100 - 240V , &nbsp;50 /60 Hz
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>2
                                        
                                    </td>
                                    <td><strong>Tipo</strong>
                                        
                                    </td>
                                    <td>Portátil
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>4
                                        
                                    </td>
                                    <td><strong>Resolución mínima</strong></td>
                                    <td>800 x 600 pixeles
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>5
                                        
                                    </td>
                                    <td><strong>Resolución máxima</strong></td>
                                    <td>1920 x 1080 pixeles
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>7
                                        
                                    </td>
                                    <td><strong>Contraste</strong>
                                        
                                    </td>
                                    <td>Dentro del rango de 15000:1 a 2600:1.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>8
                                        
                                    </td>
                                    <td><strong>Brillo</strong>
                                        
                                    </td>
                                    <td color="">Brillo Máximo en Color - Salida de Luz en Color:
                                        4,500 Lúmenes
                                        Brillo Máximo en Blanco - Salida de Luz en Blanco: 4,500 Lúmenes
                                            
                                    </td>
                                </tr>
                                <tr>
                                    <td>9
                                        
                                    </td>
                                    <td><strong>Vida útil de lampara</strong></td>
                                    <td>2,500 horas en modo Normal y hasta 10,000 horas en modo
                                        ECO.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>10
                                        
                                    </td>
                                    <td><strong>Reproducción de color</strong></td>
                                    <td>Hasta 1.07 billón de colores
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>11
                                        
                                    </td>
                                    <td><strong>Interfaces</strong>
                                        
                                    </td>
                                    <td>De acuerdo a las necesidades del Ente pueden tener como
                                        mínimo:
                                        Entrada computadora x 1 D-sub15
                                            HDMI x 1
                                                USB tipo A x 1 o USB tipo B x 1 &nbsp;Opcional
                                                    Video &nbsp;RCA x 1
                                                        Entrada audio RCA x 2 RCA (Blanco x 1, Rojo x 1) opcional
                                                            Salida monitor x 1 Opcional
                                                                Entrada audio mini x 1 Opcional
                                                                    Salida audio mini x 1 Opcional
                                                                        Wireless / Inalámbrico Opcional
                                                                            LAN-RJ45 opcional
                                                                                RS-232C x 1 opcional
                                                                                    
                                    </td>
                                </tr>
                                <tr>
                                    <td>13
                                        
                                    </td>
                                    <td><strong>Tamaño de la pantalla</strong></td>
                                    <td>30 pulgadas a 300 pulgadas (0.89 m - 10.95 m)
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>14
                                        
                                    </td>
                                    <td><strong>Ruido del ventilador</strong></td>
                                    <td>Dentro del rango de 20 a 40 decibeles.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        15</td>
                                    <td><strong>Peso</strong>
                                        
                                    </td>
                                    <td>Dentro del rango de 1.7 a 4 kg
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        16</td>
                                    <td><strong>Temperatura de operación</strong></td>
                                    <td>0 a 40°C
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>17
                                        
                                    </td>
                                    <td><strong>Bocina integrada</strong></td>
                                    <td>Opcional de al menos 1 watt
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>18
                                        
                                    </td>
                                    <td><strong>Compatibilidad</strong>
                                        
                                    </td>
                                    <td>Con salida de video de cualquier equipo de cómputo.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>19
                                        
                                    </td>
                                    <td><strong>Configuración automática</strong></td>
                                    <td>SI (AUTO SETUP)
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>20</td>
                                    <td><strong>Manuales, Software y Accesorio</strong></td>
                                    <td>Maletín de transporte, cables de alimentación y conexión
                                        para equipos informáticos, los manuales en español, así como un disco con el
                                        controlador del equipo.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>21
                                        
                                    </td>
                                    <td><strong>Garantía</strong>
                                        
                                    </td>
                                    <td>Mínimo 3 años en todas sus partes
                                        
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <h6>
                                
                            </h6>
                            <hr style={{  borderColor:'white' }}/>
                            <h6><strong>NORMAS Y ESTÁNDARES</strong></h6>

                            <h6>Que el equipo cumpla con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</h6>
                            <hr style={{  borderColor:'white' }}/>
                            <h6><strong>MANUALES</strong></h6>

                            <h6>Se &nbsp; debe de entregar manual del equipo para su instalación, configuración
                                y &nbsp; operación en medio electrónico o físico &nbsp;y en idioma español.</h6>
                            <hr style={{  borderColor:'white' }}/>
                            <h6><strong>GARANTÍA</strong></h6>

                            <h6>Características que deberá cubrir:</h6>

                            <ul>
                                <li>El proveedor se compromete a dar cumplimiento a la garantía.</li>
                                <li>El servicio se prestará en las instalaciones del ente requirente.</li>
                                <li>El tiempo de atención será, como máximo, dos horas.</li>
                                <li>El &nbsp; &nbsp;tiempo de reparación será día siguiente laboralSiexcede
                                    este &nbsp;lapso, el proveedor deberá entregar un equipo de respaldo
                                    equivalente &nbsp;mientras se soluciona el problema.
                                </li>
                                <li>Sí la reparación excede de &nbsp; 30 &nbsp;días naturales, el
                                    proveedor &nbsp;entregará a cambio un equipo nuevo &nbsp; con &nbsp;las
                                    características iguales al adquirido u otro equipo de
                                    mayores &nbsp; &nbsp;características.
                                </li>
                            </ul>

                            <h6>Requerimientos de servicio:</h6>

                            <ul>
                                <li>El procedimiento de recepción de reportes y atención de fallas de los equipos.</li>
                                <li>Se &nbsp; &nbsp;debe de indicar una línea telefónica del fabricante o centro
                                    de &nbsp;atención telefónica certificado o aprobado por el fabricante sin
                                    costo &nbsp;de llamada para el usuario, como uno de los canales para
                                    hacer &nbsp;efectiva &nbsp;la garantía.
                                </li>
                                <li>Se debe de especificar un correo electrónico de atención, como uno de los canales
                                    para hacer efectiva la garantía.
                                </li>
                            </ul>

                            <h6><strong>CONSIDERACIONES &nbsp;PARA EL PROCEDIMIENTO DE ADQUISICIÓN:</strong></h6>

                            <h6>Es &nbsp; &nbsp;estricta responsabilidad del Ente Requirente, como parte
                                funcional &nbsp;durante el procedimiento de adquisición de estos
                                componentes &nbsp;tecnológicos, el considerar todas las cartas respectivas que den
                                soporte &nbsp; al proceso y aseguren el respaldo de los fabricantes de los mismos,
                                en &nbsp; cuanto a especificaciones técnicas, vicios ocultos y condiciones
                                de &nbsp; garantía. La ADBC no tiene responsabilidad alguna
                                por &nbsp;alguna &nbsp;deficiencia administrativa en este sentido.</h6>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <hr style={{  borderColor:'#eeeeee' }}/>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h2> CÁMARA DIGITAL </h2></Accordion.Header>
                    <Accordion.Body>
                        <div >
                            <h6><strong>Válido a partir del 14 de Agosto de 2023.</strong></h6>

                            <h6><strong>Estatus:&nbsp;</strong>Vigente</h6>

                            <h6><strong>Categoría:&nbsp;</strong>Estándares técnicos de hardware</h6>

                            <ol>
                                <li>Excepto donde se indique, todos los requerimientos son mínimos.</li>
                                <li>Característica técnicas iguales o &nbsp;mayores a &nbsp;las aquí listadas son
                                    válidas, excepto donde se indique.
                                </li>
                                <li>Las máquinas deben pertenecer a la línea de negocios del fabricante.</li>
                            </ol>

                            <table className="table table-striped table-bordered">
                                <tbody>
                                <tr>
                                    <td >
                                        <strong>No.</strong></td>
                                    <td >
                                        <strong>Especificación</strong>
                                        
                                    </td>
                                    <td >
                                        <strong>Descripción</strong>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>1
                                        
                                    </td>
                                    <td><strong>Fuente de alimentación</strong></td>
                                    <td>100 - 240V , &nbsp;50 /60 Hz
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>2
                                        
                                    </td>
                                    <td><strong>Tipo</strong>
                                        
                                    </td>
                                    <td>Portátil
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>4
                                        
                                    </td>
                                    <td><strong>Resolución mínima</strong></td>
                                    <td>800 x 600 pixeles
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>5
                                        
                                    </td>
                                    <td><strong>Resolución máxima</strong></td>
                                    <td>1920 x 1080 pixeles
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>7
                                        
                                    </td>
                                    <td><strong>Contraste</strong>
                                        
                                    </td>
                                    <td>Dentro del rango de 15000:1 a 2600:1.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>8
                                        
                                    </td>
                                    <td><strong>Brillo</strong>
                                        
                                    </td>
                                    <td color="">Brillo Máximo en Color - Salida de Luz en Color:
                                        4,500 Lúmenes
                                        Brillo Máximo en Blanco - Salida de Luz en Blanco: 4,500 Lúmenes
                                            
                                    </td>
                                </tr>
                                <tr>
                                    <td>9
                                        
                                    </td>
                                    <td><strong>Vida útil de lampara</strong></td>
                                    <td>2,500 horas en modo Normal y hasta 10,000 horas en modo
                                        ECO.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>10
                                        
                                    </td>
                                    <td><strong>Reproducción de color</strong></td>
                                    <td>Hasta 1.07 billón de colores
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>11
                                        
                                    </td>
                                    <td><strong>Interfaces</strong>
                                        
                                    </td>
                                    <td>De acuerdo a las necesidades del Ente pueden tener como
                                        mínimo:
                                        Entrada computadora x 1 D-sub15
                                            HDMI x 1
                                                USB tipo A x 1 o USB tipo B x 1 &nbsp;Opcional
                                                    Video &nbsp;RCA x 1
                                                        Entrada audio RCA x 2 RCA (Blanco x 1, Rojo x 1) opcional
                                                            Salida monitor x 1 Opcional
                                                                Entrada audio mini x 1 Opcional
                                                                    Salida audio mini x 1 Opcional
                                                                        Wireless / Inalámbrico Opcional
                                                                            LAN-RJ45 opcional
                                                                                RS-232C x 1 opcional
                                                                                    
                                    </td>
                                </tr>
                                <tr>
                                    <td>13
                                        
                                    </td>
                                    <td><strong>Tamaño de la pantalla</strong></td>
                                    <td>30 pulgadas a 300 pulgadas (0.89 m - 10.95 m)
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>14
                                        
                                    </td>
                                    <td><strong>Ruido del ventilador</strong></td>
                                    <td>Dentro del rango de 20 a 40 decibeles.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        15</td>
                                    <td><strong>Peso</strong>
                                        
                                    </td>
                                    <td>Dentro del rango de 1.7 a 4 kg
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        16</td>
                                    <td><strong>Temperatura de operación</strong></td>
                                    <td>0 a 40°C
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>17
                                        
                                    </td>
                                    <td><strong>Bocina integrada</strong></td>
                                    <td>Opcional de al menos 1 watt
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>18
                                        
                                    </td>
                                    <td><strong>Compatibilidad</strong>
                                        
                                    </td>
                                    <td>Con salida de video de cualquier equipo de cómputo.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>19
                                        
                                    </td>
                                    <td><strong>Configuración automática</strong></td>
                                    <td>SI (AUTO SETUP)
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>20</td>
                                    <td><strong>Manuales, Software y Accesorio</strong></td>
                                    <td>Maletín de transporte, cables de alimentación y conexión
                                        para equipos informáticos, los manuales en español, así como un disco con el
                                        controlador del equipo.
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>21
                                        
                                    </td>
                                    <td><strong>Garantía</strong>
                                        
                                    </td>
                                    <td>Mínimo 3 años en todas sus partes
                                        
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <hr style={{  borderColor:'white' }}/>
                            <h6><strong>NORMAS Y ESTÁNDARES</strong></h6>

                            <h6>Que el equipo cumpla con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</h6>
                            <hr style={{  borderColor:'white' }}/>
                            <h6><strong>MANUALES</strong></h6>

                            <h6>Se &nbsp; debe de entregar manual del equipo para su instalación, configuración
                                y &nbsp; operación en medio electrónico o físico &nbsp;y en idioma español.</h6>
                            <hr style={{  borderColor:'white' }}/>
                            <h6><strong>GARANTÍA</strong></h6>

                            <h6>Características que deberá cubrir:</h6>

                            <ul>
                                <li>El proveedor se compromete a dar cumplimiento a la garantía.</li>
                                <li>El servicio se prestará en las instalaciones del ente requirente.</li>
                                <li>El tiempo de atención será, como máximo, dos horas.</li>
                                <li>El &nbsp; &nbsp;tiempo de reparación será día siguiente laboralSiexcede
                                    este &nbsp;lapso, el proveedor deberá entregar un equipo de respaldo
                                    equivalente &nbsp;mientras se soluciona el problema.
                                </li>
                                <li>Sí la reparación excede de &nbsp; 30 &nbsp;días naturales, el
                                    proveedor &nbsp;entregará a cambio un equipo nuevo &nbsp; con &nbsp;las
                                    características iguales al adquirido u otro equipo de
                                    mayores &nbsp; &nbsp;características.
                                </li>
                            </ul>

                            <h6>Requerimientos de servicio:</h6>

                            <ul>
                                <li>El procedimiento de recepción de reportes y atención de fallas de los equipos.</li>
                                <li>Se &nbsp; &nbsp;debe de indicar una línea telefónica del fabricante o centro
                                    de &nbsp;atención telefónica certificado o aprobado por el fabricante sin
                                    costo &nbsp;de llamada para el usuario, como uno de los canales para
                                    hacer &nbsp;efectiva &nbsp;la garantía.
                                </li>
                                <li>Se debe de especificar un correo electrónico de atención, como uno de los canales
                                    para hacer efectiva la garantía.
                                </li>
                            </ul>

                            <h6><strong>CONSIDERACIONES &nbsp;PARA EL PROCEDIMIENTO DE ADQUISICIÓN:</strong></h6>

                            <h6>Es &nbsp; &nbsp;estricta responsabilidad del Ente Requirente, como parte
                                funcional &nbsp;durante el procedimiento de adquisición de estos
                                componentes &nbsp;tecnológicos, el considerar todas las cartas respectivas que den
                                soporte &nbsp; al proceso y aseguren el respaldo de los fabricantes de los mismos,
                                en &nbsp; cuanto a especificaciones técnicas, vicios ocultos y condiciones
                                de &nbsp; garantía. La ADBC no tiene responsabilidad alguna
                                por &nbsp;alguna &nbsp;deficiencia administrativa en este sentido.</h6>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <hr style={{  borderColor:'#eeeeee' }}/>
        </Container>
    );

}

export default EstandarHardware;

