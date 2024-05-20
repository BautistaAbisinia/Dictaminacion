import React from 'react'
import {Accordion, Container} from "react-bootstrap";

const EstandarConsumibles = () => {
  return (
      <Container className="custom-accordion">
      <hr style={{  borderColor:'#eeeeee' }}/>
      <Container>
        <div>
         <h2 className="encabezadoEstandar">ESTÁNDARES TÉCNICOS DE CONSUMIBLES</h2>
          <h3>Todo consumibles que no figure en la siguiente lista debe ser dictaminado</h3>
        </div>
      </Container>

      <hr style={{  borderColor:'#eeeeee' }}/>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header><h2>CONSUMIBLES</h2></Accordion.Header>
          <Accordion.Body>
            <div>
              <h6><strong>Válido a partir del 14 de Agosto de 2023</strong></h6>

              <h6><strong>Estatus:&nbsp;</strong>Vigente &nbsp; &nbsp;</h6>

              <h6><strong>Categoría</strong>: Estándares Técnicos de consumibles</h6>

              <ol>
                <li>Excepto donde se indique, todos los requerimientos son mínimos.</li>
                <li>Característica técnicas iguales o &nbsp;mayores a &nbsp;las aquí listadas, son válidas.</li>
                <li>Los consumibles deben pertenecer a la línea de negocio, marca, modelo del fabricante.</li>
              </ol>

              <table className="table table-striped table-bordered">
                <tbody>
                <tr>
                  <td >
                    <strong>Estándar</strong>&nbsp;
                    
                  </td>
                  <td ><strong>Características
                    técnicas</strong>
                    
                  </td>
                </tr>
                <tr>
                  <td ><strong>TONER</strong>
                    
                  </td>
                  <td >Colores:
                    K = negro (key plate)
                      C = Cian (azul)
                        M = Magenta (rojo)
                          Y = Amarillo
                            Tecnología láser
                              Rendimiento de 10000 páginas o más
                                
                  </td>
                </tr>
                <tr>
                  <td ><strong>FUSOR</strong>
                    
                  </td>
                  <td >Rendimiento de 200,000 páginas en adelante
                    
                  </td>
                </tr>
                <tr>
                  <td><strong>CABEZAL</strong>
                    
                  </td>
                  <td>Colores:
                    K = negro (key plates)
                      C = Cian (azul)
                        M = Magenta (rojo)
                          Y = Amarillo
                            <div >
                              
                            </div>
                  </td>
                </tr>
                <tr>
                  <td ><strong>CARTUCHO</strong>
                    
                  </td>
                  <td >
                    <div >
                      
                    </div>
                    <div >
                      
                    </div>
                    Colores:
                    K = negro (key plates)
                      C = Cian (azul)
                        M = Magenta (rojo)
                          Y = Amarillo
                            Rendimiento de 200 páginas en adelante
                              Tecnología inyección de tinta
                                
                  </td>
                </tr>
                <tr>
                  <td><strong>TINTA</strong>
                    
                  </td>
                  <td>Colores:
                    K = negro (key plate)
                      C = Cian (azul)
                        M = Magenta (rojo)
                          Y = Amarillo
                            
                  </td>
                </tr>
                <tr>
                  <td>

                    <h4><strong>DISCOS</strong>&nbsp;</h4>
                  </td>
                </tr>
                <tr>
                  <td><strong>Disco CD-R</strong>
                    
                  </td>
                  <td >Capacidad mínima: 700 Mb por disco
                    Piezas mínimas por paquete: 50
                      
                  </td>
                </tr>
                <tr>
                  <td><strong>Disco DVD-R</strong>
                    
                  </td>
                  <td >Capacidad mínima 4.7 Gb por disco
                    Mínimo 50 piezas por paquete
                      
                  </td>
                </tr>
                <tr>
                  <td><strong>Disco Blu-Ray</strong>
                    
                  </td>
                  <td >Capacidad mínima de 25 GB
                    Mínimo 50 piezas por paquete
                      
                  </td>
                </tr>
                </tbody>
              </table>

              <h6>
                
              </h6>

              <h6><strong>NORMAS Y ESTÁNDARES</strong></h6>

              <ul>
                <li>Que los consumibles cumplan con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</li>
              </ul>

              <h6><strong>MANUALES</strong></h6>

              <h6>Se debe de entregar manual del &nbsp;consumible para su operación en medio físico o&nbsp;</h6>

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
                  deberá entregar consumibles de respaldo equivalente mientras se soluciona el problema.
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

export default EstandarConsumibles
