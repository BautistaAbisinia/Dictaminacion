import React from 'react'
import {Accordion, Container} from "react-bootstrap";

const EstandarPerifericos = () => {
  return (
      <Container className="custom-accordion">

    <Container>
      <hr style={{  borderColor:'#eeeeee' }}/>
      <div>
       <h2 className="encabezadoEstandar">ESTÁNDARES TÉCNICOS DE PERIFÉRICOS</h2>
        <h3>Todo periférico que no figure en la siguiente lista debe ser dictaminado</h3>
      </div>
    </Container>


      <hr style={{  borderColor:'#eeeeee' }}/>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header><h2>MEMORIAS USB, DISCOS DUROS EXTERNOS, MOUSE, TECLADO Y MONITOR</h2></Accordion.Header>
          <Accordion.Body>
            <div>
              <h6><strong>Válido a partir del 14 de Agosto de 2022</strong></h6>

              <h6><strong>Estatus:&nbsp;</strong>Vigente &nbsp; &nbsp;</h6>

              <h6><strong>Categoría</strong>: Estándares Técnicos de periféricos</h6>

              <ol>
                <li>Excepto donde se indique, todos los requerimientos son mínimos.</li>
                <li>Característica técnicas iguales o &nbsp;mayores a &nbsp;las aquí listadas, son válidas, excepto
                  donde se indique.
                </li>
                <li>Los periféricos deben pertenecer a la línea de negocios del fabricante.</li>
              </ol>

              <table className="table table-striped table-bordered">
                <tbody>
                <tr>
                  <td>
                    <strong>Estándar</strong></td>
                  <td><strong>Características
                    técnicas</strong></td>
                </tr>
                <tr>
                  <td ><strong>MEMORIAS USB</strong></td>
                  <td ><strong>Capacidad:&nbsp;</strong>32 A 128 GB
                    <strong>Conexión:</strong> USB 2.0 en adelante
                      <strong>Velocidad de lectura:</strong><span>&nbsp;</span>40 MB/s &nbsp;o superior
                        <strong>Velocidad de escritura:&nbsp;</strong>10 MB/s o superior</td>
                </tr>
                <tr>
                  <td ><strong>DISCO DURO EXTERNO MECÁNICO HDD</strong></td>
                  <td ><strong>Capacidad:&nbsp;</strong>1TB &nbsp;a Máximo 10TB
                    <strong>Conexión: &nbsp;</strong>USB 2.0 o 3.0
                      <strong>Velocidad de lectura:</strong> 400 MB/s &nbsp;o superior
                        <strong>Velocidad de escritura:&nbsp;</strong>400 MB/s o superior
                          <strong>Velocidad de transferencia:&nbsp;</strong>400 MB/s o superior</td>
                </tr>
                <tr>
                  <td><strong>DISCO DURO EXTERNO ESTADO SÓLIDO (SSD)</strong></td>
                  <td><strong>Capacidad:&nbsp;</strong>Máximo 2TB,
                    <strong>Conexión</strong>: USB 3.0, 3.1o 3.2
                      <strong>Velocidad de lectura:</strong><span>&nbsp;</span>400 MB/s &nbsp;o superior
                        <strong>Velocidad de escritura:&nbsp;</strong>400 MB/s o superior
                          <strong>Velocidad de transferencia:&nbsp;</strong>400 MB/s o superior
                            
                  </td>
                </tr>
                <tr>
                  <td><strong>MOUSE ALAMBRICO E INALAMBRICO</strong></td>
                  <td><strong>Mouse óptico&nbsp;Alámbrico:</strong>
                    <strong>Interfaz</strong>: Cable USB
                      <span><strong>Resolución de movimiento:</strong> 1000dpi&nbsp;</span>
                        <span><strong>Botones</strong>: 3&nbsp;</span>
                          
                            <strong>Mouse óptico&nbsp;Inalámbrico:</strong>&nbsp;
                              <strong>Interfaz</strong>: Receptor RF (Radio Frecuencia) Inalámbrica USB.
                                <span><strong>Resolución de movimiento:</strong> 1000dpi&nbsp;</span>
                                  <span><strong>Botones</strong>: 3</span>
                                    
                  </td>
                </tr>
                <tr>
                  <td><strong>TECLADO ALAMBRICO E INALAMBRICO</strong></td>
                  <td><strong>Teclado Alámbrico:</strong>
                    <strong>Distribución:&nbsp;</strong>Español Latinoamericano
                      <span><strong>Interfaz</strong>: Cable USB</span>
                        <strong>Botones</strong>: Con teclas , alfanuméricos, numéricos, funciones, control y
                          navegación.
                          
                            <strong>Teclado Inalámbrico:</strong>
                              <span><strong>Interfaz</strong>: Receptor RF (Radio Frecuencia) Inalámbrica&nbsp;USB.</span>
                                <strong>Distribución</strong>: Español Latinoamericano
                                  <span><strong>Botones</strong>: Con teclas , alfanuméricos, numéricos, funciones, control y navegación</span>
                                    
                  </td>
                </tr>
                <tr>
                  <td><strong>KIT TECLADO CON MOUSE ALAMBRICO E INALAMABRICO</strong></td>
                  <td><strong>KIT ALAMBRICO&nbsp;</strong>
                    <strong><em>Mouse óptico:</em></strong><em></em><strong>Interfaz</strong>: Cable USB
                      <strong>Resolución de movimiento:</strong><span>&nbsp;</span>1000dpi
                        <strong>Botones</strong>: 3
                          
                            <strong><em>Teclado&nbsp;</em>:</strong>
                              <strong>Distribución:&nbsp;</strong>Español Latinoamericano
                                <strong>Interfaz</strong>: Cable USB
                                  <strong>Botones</strong>: Con teclas , alfanuméricos, numéricos, funciones,
                                    control y navegación.
                                    
                                      <strong>KIT INALAMBRICO&nbsp;</strong>
                                        <strong><em>Mouse óptico :</em></strong><em>&nbsp;
                                          </em><strong>Interfaz</strong>: Receptor RF (Radio Frecuencia) Inalámbrica
                                          USB.
                                          <span><strong>Resolución de movimiento:</strong> 1000dpi&nbsp;</span>
                                            <strong>Botones</strong>: 3
                                              
                                                <strong>Teclado Inalámbrico:</strong>
                                                  <strong>Interfaz</strong>: Receptor RF (Radio Frecuencia)
                                                    Inalámbrica USB.
                                                    <span><strong>Distribución</strong>: Español Latinoamericano&nbsp;</span>
                                                      <strong>Botones</strong>: Con teclas , alfanuméricos,
                                                        numéricos, funciones, control y navegación
                                                        
                                                          
                  </td>
                </tr>
                <tr>
                  <td><strong>MONITOR</strong></td>
                  <td><strong>Tamaño</strong>: &nbsp;27" PULGADAS máximo, &nbsp;
                    <strong>Puertos</strong>: mínimo uno de los siguientes, VGA, HDMI o DisplayPort, USB. &nbsp;
                      <strong>Resolución Máxima*</strong>: Full HD 1920 x 1080,
                        
                          *Mayores resoluciones deben ser dictaminados.</td>
                </tr>
                <tr>
                  <td><strong>CÁMARA WEB</strong></td>
                  <td>-Resolucion mínima 1920 x 1080 Pixeles &nbsp;
                    -Compatible con SO Windows 11, 10, 8.1. &nbsp;
                      -Compatible con USB 2.0 y superior. &nbsp;
                        -Enfoque automatico opcional. &nbsp;
                          -Microfono de banda ancha con cancelación de ruido.
                            
                              
                  </td>
                </tr>
                </tbody>
              </table>
              
              <h6><strong>NORMAS Y ESTÁNDARES</strong></h6>


                <h6>Que los periféricos cumplan con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</h6>


              <h6><strong>MANUALES</strong></h6>

              <h6>Se debe de entregar manual del periféricos para su operación en medio físico o&nbsp;</h6>

              <h6>electrónico y en idioma español.</h6>

              <h6><strong>GARANTÍA</strong></h6>

              <h6>Uno a tres años de garantía en repuestos y mano de obra en sitio para todos los elementos
                descritos.</h6>

              <h6>Características que deberá cubrir:</h6>

              <ul>
                <li>El proveedor se compromete a dar cumplimiento a la garantía.</li>
                <li>El servicio se prestará en las instalaciones del ente requirente.</li>
                <li>El tiempo de atención será, como máximo, dos horas.</li>
                <li>El tiempo de reparación será día siguiente laboralSiexcede este &nbsp; &nbsp;lapso, el proveedor
                  deberá entregar periféricos de respaldo equivalente mientras se soluciona el problema.
                </li>
                <li>Sí la reparación excede de 30 días naturales, el proveedor entregará a cambio uno nuevo con las
                  características iguales al &nbsp; &nbsp;adquirido.
                </li>
              </ul>

              <h6>Requerimientos de servicio:</h6>

              <ul>
                <li>El procedimiento de recepción de reportes y atención de fallas.</li>
                <li>Se debe de indicar una línea telefónica del fabricante o centro de &nbsp; &nbsp;atención telefónica
                  certificado o aprobado por el fabricante sin costo &nbsp; &nbsp;de llamada para el usuario, como uno
                  de los canales para hacer efectiva &nbsp; &nbsp;la garantía.
                </li>
                <li>Se debe de especificar un correo electrónico de atención, como uno de los canales para hacer
                  efectiva la garantía.
                </li>
              </ul>

              <h6>
                
              </h6>

              <h6><strong>CONSIDERACIONES &nbsp;PARA EL PROCEDIMIENTO DE ADQUISICIÓN:</strong></h6>

              <h6>Es estricta responsabilidad del Ente Requirente, como parte funcional &nbsp; durante el procedimiento
                de adquisición de estos componentes &nbsp; tecnológicos, el considerar todas las cartas respectivas que
                den &nbsp;soporte &nbsp;al proceso y aseguren el respaldo de los fabricantes de los &nbsp;mismos,
                en &nbsp;cuanto a especificaciones técnicas, vicios ocultos y &nbsp;condiciones de &nbsp;garantía. La
                ADBC no tiene responsabilidad alguna por &nbsp;alguna deficiencia &nbsp;administrativa en este
                sentido.</h6>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
        <hr style={{  borderColor:'#eeeeee' }}/>
    </Container>
  )
}

export default EstandarPerifericos
