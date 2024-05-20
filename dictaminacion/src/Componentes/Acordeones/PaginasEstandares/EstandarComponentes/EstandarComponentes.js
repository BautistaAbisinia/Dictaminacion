import React from 'react'
import {Accordion, Container} from "react-bootstrap";
import { Link } from 'react-router-dom';

const EstandarComponentes = () => {
  return (
      <Container className="custom-accordion">
      <hr style={{  borderColor:'#eeeeee' }}/>
      <Container>
        <div>
         <h2 className="encabezadoEstandar">ESTÁNDARES TÉCNICOS DE COMPONENTES</h2>
          <h3>Todo componente que no figure en la siguiente lista debe ser dictaminado</h3>
        </div>
      </Container>

      <hr style={{  borderColor:'#eeeeee' }}/>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header><h2>CONSUMIBLES</h2></Accordion.Header>
          <Accordion.Body>
            <div className="Text">
             <h6><strong>Válido a partir del 14 de Agosto de 2022</strong></h6>

             <h6><strong>Estatus:&nbsp;</strong>Vigente &nbsp; &nbsp;</h6>

             <h6><strong>Categoría</strong>: Estándares Técnicos de componentes</h6>

              <ol>
                <li>Excepto donde se indique, todos los requerimientos son mínimos.</li>
                <li>Característica técnicas iguales o &nbsp;mayores a &nbsp;las aquí listadas, son válidas.</li>
                <li>Los componentes deben pertenecer a la línea de negocios del fabricante.</li>
              </ol>

              <table className="table table-striped table-bordered">
                <tbody>
                <tr>
                  <td ><strong>Estándar</strong>
                    
                  </td>
                  <td ><strong>Características
                    técnicas</strong>
                    
                  </td>
                </tr>
                <tr>
                  <td>DISCOS DUROS INTERNOS MECÁNICO HDD</td>
                  <td><strong>Capacidad</strong>: 500 GB a 4 TB &nbsp;
                    <strong>Interfaces</strong>: Conexión Sata 1,2, 3 &nbsp;
                      <strong>Velocidad de lectura:</strong> 400 MB/s &nbsp;o superior &nbsp;
                        <strong>Velocidad de escritura:&nbsp;</strong>400 MB/s o superior &nbsp;
                          <strong>Velocidad de transferencia:&nbsp;</strong><span>400 MB/s o superior</span>&nbsp;
                            <strong>Velocidad de rotación:</strong> 7200 RPM </td>
                </tr>
                <tr>
                  <td>DISCO DURO INTERNO &nbsp;ESTADO SÓLIDO (SSD)
                    
                  </td>
                  <td><strong>Capacidad</strong>: Máximo 2TB
                    <strong>Interfaces</strong>: SATA (Serial Advanced Technology Attachment), M2, PCI Express.
                      <strong>Velocidad de lectura:</strong> 400 MB/s &nbsp;o superior
                        <strong>Velocidad de escritura:&nbsp;</strong>400 MB/s o superior
                          <strong>Velocidad de transferencia:&nbsp;</strong><span>400 MB/s o superior</span>
                            
                  </td>
                </tr>
                <tr>
                  <td>CARGADORES Y TABLETA MULTICONTACTO</td>
                  <td>Es importante asegurarse de que los cargadores cumplan con las normativas y estándares internacionales, 
                    como los establecidos por la Comisión Electrotécnica Internacional 
                            
                  </td>
                </tr>
                <tr>
                  <td>MEMORIA RAM
                    
                  </td>
                  <td><strong>Capacidad</strong>: 8 a 16 GB como maximo &nbsp;
                    <strong>Velocidad</strong>: 2.133 &nbsp;MHz en adelante &nbsp;
                      <strong>Modulo</strong>: de 240 pines en adelante &nbsp;
                        <strong>FORMATOS</strong>: DIMM, SODIMM, DDR, DDR3, DDR4, DDR5
                          
                  </td>
                </tr>
                <tr>
                  <td>MEMORIA USB</td>
                  <td>USB 2.0, USB 3.0, USB 3.1 Gen 1, USB 3.1 Gen 2 , USB 4.
                            
                  </td>
                </tr>
                <tr>
                  <td>TECLADOS Y MOUSE</td>
                  <td>Ver
                  <Link to="/perifericos">&nbsp;Estándares técnicos de periféricos</Link>
                            
                  </td>
                </tr>
                </tbody>
              </table>

             <h6>
                
              </h6>

             <h6><strong>NORMAS Y ESTÁNDARES</strong></h6>


                <h6>Que los componentes cumplan con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</h6>

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
                <li>El tiempo de reparación será día siguiente laboralSiexcede este &nbsp; &nbsp;lapso, el proveedor
                  deberá entregar componentes de respaldo equivalente mientras se soluciona el problema.
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

export default EstandarComponentes
