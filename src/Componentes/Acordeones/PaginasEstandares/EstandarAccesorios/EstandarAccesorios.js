import React from 'react'
import {Accordion, Container} from "react-bootstrap";

const EstandarAccesorios = () => {
  return (
      <Container className="custom-accordion">
        <hr style={{  borderColor:'#eeeeee' }}/>
      <Container>
        <div>
         <h2 className="encabezadoEstandar">ESTÁNDARES TÉCNICOS DE ACCESORIOS</h2>
          <h3>Todo accesorio que no figure en la siguiente lista debe ser dictaminado</h3>
        </div>
      </Container>

        <hr style={{  borderColor:'#eeeeee' }}/>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
                <Accordion.Header><h2>CABLES, KIT DE MANTENIMIENTO PARA IMPRESORAS Y DE HERRAMIENTAS INFORMÁTICOS</h2></Accordion.Header>
                <Accordion.Body>
                    <div className="Text">
                        <h6><strong>Válido a partir del 14 de Agosto de 2023</strong></h6>

                        <h6><strong>Estatus:&nbsp;</strong>Vigente &nbsp; &nbsp;</h6>

                        <h6><strong>Categoría</strong>: Estándares Técnicos de accesorios</h6>

                        <ol>
                            <li>Excepto donde se indique, todos los requerimientos son mínimos.</li>
                            <li>Característica técnicas iguales o &nbsp;mayores a &nbsp;las aquí listadas, son
                                válidas.
                            </li>
                            <li>Los accesorios deben pertenecer a la línea de negocios del fabricante.</li>
                        </ol>

                        <h6>
                            
                        </h6>

                        <table className="table table-striped table-bordered">
                            <tbody>
                            <tr>
                                <td ><strong>Estándar</strong>
                                    
                                </td>
                                <td ><strong>Características técnicas</strong>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td >

                                    <h4><strong>CABLES</strong></h4>
                                </td>
                            </tr>
                            <tr>
                                <td ><strong>Patch panel</strong></td>
                                <td >Puertos: 12, 24, 48 y 96 puertos
                                    Categoría 5E, 6 y 6A
                                        Opcional: Modular o no Modular</td>
                            </tr>
                            <tr>
                                <td ><strong>Patch cords</strong></td>
                                <td >Tipo LC UPC, UTP, STP, Coaxial, Fibra Óptica
                                    Categoría 1, 2, 3, 4, 5, 6, 7
                                        
                                </td>
                            </tr>
                            <tr>
                                <td ><strong>High Definition Multimedia Interface
                                    (HDMI)</strong></td>
                                <td >Tipo A, C y D
                                    Versiones 1.1, 1.2, 1.3, 1.4, 2.0 y 2.1
                                        <strong>Nota: Incluye cables, conectores, adaptadores,
                                            convertidores.</strong></td>
                            </tr>
                            <tr>
                                <td ><strong>Universal Serial Bus (USB)</strong></td>
                                <td >Tipo A, mini A, micro A, B, mini B, micro B y C
                                    Versiones 2,0, 3.0, 3.1
                                        <strong>Nota: Incluye cables, conectores, adaptadores,
                                            convertidores.</strong></td>
                            </tr>
                            <tr>
                                <td  >

                                    <h4><strong>KITS DE MANTENIMIENTO PARA IMPRESORA</strong></h4>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>kit 1</strong></td>
                                <td >Kit de mantenimiento que incluye: Unidad de Cilindro, Unidad
                                    de Revelado, Unidad Fusora. Rendimiento Estimado 300.000 Páginas.
                                    
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    
                                        <strong>kit 2</strong></td>
                                <td >Kit de rodillos de arrastre de papel, y gomas alimentadoras
                                    para escáner.
                                    
                                </td>
                            </tr>
                            <tr>
                                <td><strong>kit 3</strong></td>
                                <td >Mica transparente autoadherible de aplicación manual, para
                                    mayor protección de datos personales y protección adicional a la credencial,
                                    identificación o tarjeta de plástica.
                                    
                                </td>
                            </tr>
                            <tr>
                                <td><strong>kit 4</strong></td>
                                <td >Tarjeta larga que limpia el cabezal y rodillos de transporte
                                    Tarjeta corta que limpia el módulo de alimentación de tarjetas
                                        Tarjeta larga que limpia el cabezal y rodillos de transporte
                                            Tarjeta corta que limpia el módulo de alimentación de tarjetas
                                                
                                </td>
                            </tr>
                            <tr>
                                <td><strong>kit 5</strong></td>
                                <td >Kit de mantenimiento para impresora ( pueden ser, FUSOR,
                                    RODILLO DE TRANFERENCIA, GOMAS PICK ROLLER, CABEZAL)
                                    
                                </td>
                            </tr>
                            <tr>
                                <td><strong>kit 6</strong></td>
                                <td >Tambor para 10,000 Páginas
                                    
                                </td>
                            </tr>
                            <tr>
                                <td><strong>kit 7</strong></td>
                                <td >Kit de mantenimiento para impresora fusor 110 voltios
                                    
                                </td>
                            </tr>
                            <tr>
                                <td><strong>kit 8</strong></td>
                                <td >Kit de unidad de imagen para impresora
                                    
                                </td>
                            </tr>
                            <tr>
                                <td><strong>kit 9</strong></td>
                                <td >Kit de mantenimiento y fusor para impresora
                                    
                                </td>
                            </tr>
                            <tr>
                                <td><strong>kit 10</strong></td>
                                <td >Kit de imagen negro y color para impresora
                                    
                                </td>
                            </tr>
                            <tr>
                                <td><strong>kit 11</strong></td>
                                <td >Kit de mantenimiento módulo de transferencia para impresora
                                    
                                </td>
                            </tr>
                            <tr>
                                <td><strong>kit 12</strong></td>
                                <td >Kit de Rodillo de Calor y Rodillo de Presión
                                    
                                </td>
                            </tr>
                            <tr>
                                <td><strong>kit 13</strong></td>
                                <td >Kit de Imagen de revelado.</td>
                            </tr>
                            <tr>
                                <td><strong>Kit 14</strong></td>
                                <td>Kit de limpieza:
                                    -Tarjeta larga para limpieza del cabezal y rodillos de transporte
                                        -Tarjeta corta para limpia el módulo de alimentación de tarjetas
                                            
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Kit 15</strong></td>
                                <td>Cinta Ribbon para 100 impresiones en adelante
                                    
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    
                                        
                                </td>
                                <td>
                                    
                                        
                                </td>
                            </tr>
                            <tr>
                                <td>

                                    <h4><strong>KITS &nbsp;DE HERRAMIENTAS INFORMATICOS</strong></h4>
                                </td>
                            </tr>
                            <tr>
                                <td ><strong>Multímetro profesional</strong>
                                    
                                </td>
                                <td >Multímetro profesional: Digital que permite medir con gran
                                    precisión, sin la necesidad de escoger escalas, para medir resistencia, voltaje de
                                    corriente alterna o directa, intensidad de corriente, capacitancia.
                                    
                                        Resistencia: 400 Ohms a 40 MOhms
                                            
                                                Voltaje cc: 400 mV a 1000 V
                                                    
                                                        Voltaje ca: 400 mV a 750 V
                                                            
                                                                Capacitancia: 4 nF a 200 uF
                                                                    
                                                                        Frecuencia: 9,9 Hz a 200 KHz
                                                                            
                                                                                Corriente cc: 0 a 10 Amperes
                                                                                    
                                                                                        Corriente ca: 0 a 20 Amperes
                                                                                            
                                                                                                Pantalla de 3 3/4
                                                                                                    dígitos LCD
                                                                                                    
                                                                                                        Temperatura
                                                                                                            de
                                                                                                            operación:
                                                                                                            0-40°C (80%
                                                                                                            de humedad
                                                                                                            relativa, &lt;10°C
                                                                                                            no
                                                                                                            condensada)
                                                                                                            
                                                                                                                Voltaje
                                                                                                                    máximo
                                                                                                                    entre
                                                                                                                    terminales
                                                                                                                    y
                                                                                                                    tierra:
                                                                                                                    750V
                                                                                                                    CA
                                                                                                                    rms
                                                                                                                    o
                                                                                                                    1000V
                                                                                                                    CD
                                                                                                                    
                                                                                                                        Selección
                                                                                                                            de
                                                                                                                            rango:
                                                                                                                            automático
                                                                                                                            y
                                                                                                                            manual
                                                                                                                            
                                                                                                                                Indicador
                                                                                                                                    de
                                                                                                                                    sobre
                                                                                                                                    rango
                                                                                                                                    
                                                                                                                                        Indicador
                                                                                                                                            de
                                                                                                                                            polaridad
                                                                                                                                            
                                                                                                                                                
                                                                                                                                                    
                                                                                                                                                        
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Estación de soldadura</strong>
                                    
                                        
                                </td>
                                <td >Estación de soldadura, control de temperatura inteligente de 6
                                    segundos de calentamiento rápido, certificado de seguridad, kit de soldadura con
                                    soporte de soldadura, esponja resistente al calor.
                                    
                                </td>
                            </tr>
                            <tr>
                                <td ><strong>Pistola de calor</strong>
                                    
                                </td>
                                <td >Boquilla Esférica, Control De Temperatura Variable, Dos
                                    Niveles De Flujo De Aire, Potencia: 1800 W Y Diseño Manos Libre, Interruptor de 2
                                    posiciones,
                                    
                                </td>
                            </tr>
                            <tr>
                                <td ><strong>Pasta termina</strong>
                                    
                                </td>
                                <td >Para CPU Grasa de Gel, de sílice plata, Enfriadores de pasta
                                    de compuesto térmico de alto rendimiento
                                    
                                </td>
                            </tr>
                            <tr>
                                <td ><strong>Espuma limpiadora</strong>
                                    
                                </td>
                                <td >Espuma limpiadora de uso exclusivamente externo para gabinetes
                                    de equipos de cómputo y todo tipo de superficies plásticas, con una eficaz acción
                                    emulsificante que desintegra grasas, cochambre y suciedad, sin afectar la estructura
                                    molecular de los equipos.
                                    
                                </td>
                            </tr>
                            <tr>
                                <td ><strong>Limpiador de circuitos</strong>
                                    
                                </td>
                                <td >Limpiador Dieléctrico interno de circuitos y tarjetas
                                    electrónicas que desintegra grasa, cochambre, polvo y otro residuos, evaporándose y
                                    dejando una capa protectora, repelente al polvo
                                    
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Aire Comprimido</strong></td>
                                <td>Volumen mínimo: 660 ml
                                    
                                </td>
                            </tr>
                            <tr>
                                <td ><strong>Desarmadores</strong>
                                    
                                </td>
                                <td >Juego de desarmadores de precisión, cabeza giratoria, forjadas
                                    en acero al Cr-V y mango de aluminio
                                    
                                </td>
                            </tr>
                            <tr>
                                <td ><strong>Generador de tonos</strong>
                                    
                                </td>
                                <td >
                                    Tono y rastreo de cable en redes no activas; la tecnología SmartTone proporciona cinco tonos distintos para la identificación exacta de pares.
                                    Batería: 9 voltios alcalina, envía un tono fuerte de hasta 16 kilómetros (10 millas) en la mayoría de los cables y proporciona cinco cadencias distintas para aislar pares de cables individuales,
                                    El altavoz ruidoso en la sonda hace que el tono sea más fácil de escuchar a través de paneles de yeso, madera y otros recintos,
                                    Los clips angulados de lecho de clavos permiten un fácil acceso a pares individuales y el RJ 11 se conecta fácilmente a las tomas telefónicas sin necesidad de adaptadores.
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Pinza peladora y cortadora</strong>
                                    
                                </td>
                                <td >PELADORA Y CORTADORA DE CABLE UTP, CAXIAL
                                    
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Pinza para plug</strong>
                                    
                                </td>
                                <td >PINZAS PARA PLUGS RJ11, RJ12 Y RJ45
                                    
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Cautín con estáción </strong></td>
                                <td >Control automático de temperatura rango: 350 ° F a 850 ° F
                                    (177 ° C a 454 ° C).
                                    Soporte de Cautin.
                                        Lápiz para soldar con punta,
                                            Unidad de potencia de 85W, Voltaje de entrada 120V.
                                                Opcional: incluir Esponja para limpieza y sonda, alambre de estaño.
                                                    
                                </td>
                            </tr>
                            <tr>
                                <td><strong>ACOPLADOR - MÓDULO CONECTOR (JACK)</strong></td>
                                <td><strong>Categoría</strong>: 1, 2, 3, 4, 5, 6, 7&nbsp;
                                    <strong>Tipo</strong>: LC UPC, UTP, STP, Coaxial, Fibra Óptica SC, RJ45
                                        
                                </td>
                            </tr>
                            <tr>
                                <td><strong>CONECTORES PLUG</strong></td>
                                <td><strong>Categoría</strong>: 1, 2, 3, 4, 5, 6, 7&nbsp;
                                    <strong>Tipo</strong>: LC UPC, UTP, STP, Coaxial, Fibra Óptica SC, RJ45
                                        
                                </td>
                            </tr>
                            <tr>
                                <td><strong>FACE PLATE</strong></td>
                                <td><strong>Categoría</strong>: 1, 2, 3, 4, 5, 6, 7&nbsp;
                                    <strong>Tipo</strong>: LC UPC, UTP, STP, Coaxial, Fibra Óptica SC, RJ45
                                        
                                </td>
                            </tr>
                            <tr>
                                <td><strong>JACK&nbsp;</strong>
                                    
                                </td>
                                <td><strong>Categoría</strong>: 1, 2, 3, 4, 5, 6, 7&nbsp;
                                    <strong>Tipo</strong>: LC UPC, UTP, STP, Coaxial, Fibra Óptica SC, RJ45
                                        
                                </td>
                            </tr>
                            <tr>
                                <td><strong>ORGANIZADOR HORIZONTAL-VERTICAL DE CABLES, METALICOS PARA
                                    RAK/GABINETE</strong></td>
                                <td><strong>Tamaño</strong>: 10 pulgadas o más&nbsp;
                                    <strong>Tipo</strong>: Panel de gestión de cables tipo C UPC, UTP, STP, Coaxial,
                                        Fibra Óptica.&nbsp;
                                        <strong>Color</strong>: cualquier color</td>
                            </tr>
                            <tr>
                                <td><strong>MULTICONTACTO PARA RACK</strong></td>
                                <td><strong>Cable de conexión:</strong> Máximo 5 metros&nbsp;
                                    <strong>Conexiones de entrada:</strong><span>&nbsp;</span>NEMA 5-15P&nbsp;
                                        <strong>Conexiones de salida:&nbsp;</strong>Máximo 14 x NEMA 5-15R&nbsp;
                                            <strong>Entrada máxima de corriente:&nbsp;</strong>15 A&nbsp;
                                                
                                                    
                                </td>
                            </tr>
                            <tr>
                                <td><strong>PROVADOR DE CABLES</strong></td>
                                <td><strong>Conectores</strong>: BNC,RJ-11,RJ-12,RJ-45&nbsp;
                                    <strong>Longitud de medición</strong>:Máximo 700 metros&nbsp;
                                        <strong>Pantalla</strong>: LCD retroiluminado.&nbsp;
                                            <strong>Batería</strong>: 9V
                                                
                                                    **Equipos más sofisticados deben ser dictaminados</td>
                            </tr>
                            </tbody>
                        </table>

                        <h6>
                            
                        </h6>

                        <h6><strong>NORMAS Y ESTÁNDARES</strong></h6>


                        <h6>Que los accesorios cumplan con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</h6>


                        <h6><strong>MANUALES</strong></h6>

                        <h6>Se debe de entregar manual del accesorio para su operación en medio físico o&nbsp;</h6>

                        <h6>electrónico y en idioma español.</h6>

                        <h6><strong>GARANTÍA</strong></h6>

                        <h6>Uno a tres años de garantía en repuestos y mano de obra en sitio para todos los elementos
                            descritos.</h6>

                        <h6>Características que deberá cubrir:</h6>

                        <ul>
                            <li>El proveedor se compromete a dar cumplimiento a la garantía.</li>
                            <li>El servicio se prestará en las instalaciones del ente requirente.</li>
                            <li>El tiempo de atención será, como máximo, dos horas.</li>
                            <li>El tiempo de reparación será día siguiente laboralSiexcede este &nbsp; &nbsp;lapso,
                                el proveedor deberá entregar accesorios de respaldo equivalente mientras se soluciona el
                                problema.
                            </li>
                            <li>Sí la reparación excede de 30 días naturales, el proveedor entregará a cambio uno nuevo
                                con las características iguales al &nbsp; &nbsp;adquirido.
                            </li>
                        </ul>

                        <h6>Requerimientos de servicio:</h6>

                        <ul>
                            <li>El procedimiento de recepción de reportes y atención de fallas.</li>
                            <li>Se debe de indicar una línea telefónica del fabricante o centro de &nbsp; &nbsp;atención
                                telefónica certificado o aprobado por el fabricante sin costo &nbsp; &nbsp;de llamada
                                para el usuario, como uno de los canales para hacer efectiva &nbsp; &nbsp;la garantía.
                            </li>
                            <li>Se debe de especificar un correo electrónico de atención, como uno de los canales para
                                hacer efectiva la garantía.
                            </li>
                        </ul>

                        <h6>
                            
                        </h6>

                        <h6><strong>CONSIDERACIONES &nbsp;PARA EL PROCEDIMIENTO DE ADQUISICIÓN:</strong></h6>

                        <h6>Es estricta responsabilidad del Ente Requirente, como parte funcional &nbsp; durante el
                            procedimiento de adquisición de estos componentes &nbsp; tecnológicos, el considerar todas
                            las cartas respectivas que den &nbsp;soporte &nbsp;al proceso y aseguren el respaldo de los
                            fabricantes de los &nbsp;mismos, en &nbsp;cuanto a especificaciones técnicas, vicios ocultos
                            y &nbsp;condiciones de &nbsp;garantía. La ADBC no tiene responsabilidad alguna
                            por &nbsp;alguna deficiencia &nbsp;administrativa en este sentido.</h6>
                        
                       
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <hr style={{  borderColor:'#eeeeee' }}/>



    </Container>
  )
}

export default EstandarAccesorios
