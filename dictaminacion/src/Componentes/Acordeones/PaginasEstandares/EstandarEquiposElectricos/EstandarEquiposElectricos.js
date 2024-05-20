import React from 'react'
import {Accordion, Container} from "react-bootstrap";

const EstandarEquiposElectricos = () => {
  return (
      <Container className="custom-accordion">
      <hr style={{  borderColor:'#eeeeee' }}/>

      <Container>
        <div>
         <h2 className="encabezadoEstandar">ESTÁNDARES TÉCNICOS DE EQUIPOS ELECTRICOS</h2>
          <h3>Todo componente de equipos eléctricos que no figure en la siguiente lista debe ser dictaminado</h3>
        </div>
      </Container>

      <hr style={{  borderColor:'#eeeeee' }}/>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header><h2>NO BREAK (UPS)</h2></Accordion.Header>
          <Accordion.Body>
            <div>
              <h6><strong>Válido a partir del 14 de Agosto de 2023.</strong>
             </h6>

              <h6><strong>Estatus:&nbsp;</strong>Vigente &nbsp; &nbsp;</h6>

              <h6><strong>Categoría</strong>: Estándares Técnicos de Equipos Eléctricos</h6>

              <ol>
                <li>Excepto donde se indique, todos los requerimientos son mínimos.</li>
                <li>Característica técnicas iguales o &nbsp;mayores a &nbsp;las aquí listadas, son válidas.</li>
                <li>Todas las especificaciones son mínimas, excepto donde se establezcan rangos.</li>
                <li>Los equipos deben pertenecer a la línea de negocios del fabricante.</li>
              </ol>

              <table className="table table-striped table-bordered">
                <tbody>
                <tr>
                  <td>
                    
                  </td>
                  <td>
                    
                  </td>
                  <td >
                    <strong>TIPO 1</strong>
                    
                  </td>
                  <td >
                    <strong>TIPO 2</strong>
                    
                  </td>
                </tr>
                <tr>
                  <td ><strong>No</strong>.
                    
                  </td>
                  <td ><strong>CONCEPTO</strong>
                    
                  </td>
                  <td ><strong>ESPECIFICACIONES
                    TÉCNICAS REQUERIDAS</strong>
                    
                  </td>
                  <td ><strong>ESPECIFICACIONES
                    TÉCNICAS REQUERIDAS</strong></td>
                </tr>
                <tr>
                  <td >1
                    
                  </td>
                  <td >Capacidad
                    
                  </td>
                  <td >De 480 VA y hasta 520 VA.
                    
                  </td>
                  <td >De 900 VA y hasta 1500 VA.
                    
                  </td>
                </tr>
                <tr>
                  <td >2
                    
                  </td>
                  <td >Salida
                    
                  </td>
                  <td >120 VCA.
                    
                  </td>
                  <td >120 VCA.
                    
                  </td>
                </tr>
                <tr>
                  <td >3
                    
                  </td>
                  <td >Entrada eléctrica
                    
                  </td>
                  <td >Voltaje nominal 120 VCA, rango de voltaje de 95 VCA y hasta 138 VCA,
                    frecuencia de 50 ó 60 Hz.
                    
                  </td>
                  <td >Voltaje nominal 120 VCA, rango de voltaje de 90 VCA y hasta 138 VCA,
                    frecuencia de 50 ó 60 Hz.
                    
                  </td>
                </tr>
                <tr>
                  <td >4
                    
                  </td>
                  <td >Tiempo de respaldo
                    
                  </td>
                  <td >50 segundos a un 100% de carga.
                    
                  </td>
                  <td >3 minutos a un 100% de carga.
                    
                  </td>
                </tr>
                <tr>
                  <td >5
                    
                  </td>
                  <td >Tipo de gabinete
                    
                  </td>
                  <td >Tipo torre.
                    
                  </td>
                  <td >Tipo torre.
                    
                  </td>
                </tr>
                <tr>
                  <td >6
                    
                  </td>
                  <td >Contactos
                    
                  </td>
                  <td >4 contactos polarizados, tipo NEMA 5 – 15R.
                    
                  </td>
                  <td >6 contactos polarizados, tipo NEMA 5 – 15R.
                    
                  </td>
                </tr>
                <tr>
                  <td >7
                    
                  </td>
                  <td >Protección
                    
                  </td>
                  <td >Supresor de picos.
                    
                  </td>
                  <td >Supresor de picos.
                    
                  </td>
                </tr>
                <tr>
                  <td >8
                    
                  </td>
                  <td >Indicadores luminosos
                    
                  </td>
                  <td >LED (En línea, en batería).
                    
                  </td>
                  <td >LED (En línea, en batería).
                    
                  </td>
                </tr>
                <tr>
                  <td >9
                    
                  </td>
                  <td >Indicadores audibles
                    
                  </td>
                  <td >Encendido, batería encendida o modo batería o en respaldo, regreso a línea,
                    sobrecarga, batería baja, reemplazo de batería.
                    
                  </td>
                  <td >Encendido, batería encendida o modo batería o en respaldo, regreso a línea,
                    sobrecarga, batería baja, reemplazo de batería.
                    
                  </td>
                </tr>
                <tr>
                  <td >10
                    
                  </td>
                  <td >Batería
                    
                  </td>
                  <td >Sellada libre de mantenimiento.
                    
                  </td>
                  <td >Sellada libre de mantenimiento.
                    
                  </td>
                </tr>
                <tr>
                  <td >11
                    
                  </td>
                  <td >Accesorios
                    
                  </td>
                  <td >Incluir software del fabricante del No break (UPS) y manuales.
                    
                  </td>
                  <td >Incluir software del fabricante del No break (UPS) y manuales.
                    
                  </td>
                </tr>
                <tr>
                  <td >12
                    
                  </td>
                  <td >Regulador
                    
                  </td>
                  <td >Integrado.
                    
                  </td>
                  <td >Integrado.
                    
                  </td>
                </tr>
                <tr>
                  <td >13
                    
                  </td>
                  <td >Normas y Certificaciones
                    
                  </td>
                  <td >NOM-001-SCFI-1993
                    
                  </td>
                  <td >NOM-001-SCFI-1993
                    
                  </td>
                </tr>
                <tr>
                  <td >14
                    
                  </td>
                  <td >Respaldo del Fabricante
                    
                  </td>
                  <td >Con un mínimo de 5 años en partes, refacciones y accesorios.
                    
                  </td>
                  <td >Con un mínimo de 5 años en partes, refacciones y accesorios.
                    
                  </td>
                </tr>
                <tr>
                  <td >15
                    
                  </td>
                  <td >Instalación y puesta en marcha.
                    
                  </td>
                  <td >Se deberán contemplar todo el material eléctrico y de soporte para la
                    instalación y puesta en marcha de los No break.
                    
                  </td>
                  <td >Se deberán contemplar todo el material eléctrico y de soporte para la
                    instalación y puesta en marcha de los No break.
                    
                  </td>
                </tr>
                <tr>
                  <td >16
                    
                  </td>
                  <td >Garantía
                    
                  </td>
                  <td >Mínimo de 1 año en todas las partes que integran al equipo, al momento de la
                    entrega, la cual deberá realizarse en el área requirente en el lugar donde se encuentre instalado el
                    No Break (UPS).
                    
                  </td>
                  <td >Mínimo de 1 año en todas las partes que integran al equipo, al momento de la
                    entrega, la cual deberá realizarse en el área requirente en el lugar donde se encuentre instalado el
                    No Break (UPS).
                    
                  </td>
                </tr>
                </tbody>
              </table>

              <h6>
                
             </h6>

              <h6><strong>NORMAS Y ESTÁNDARES</strong></h6>

              <ul>
                <li>Que el equipo cumpla con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</li>
              </ul>

              <h6><strong>MANUALES</strong></h6>

              <h6>Se debe de entregar manual del equipo para su instalación, configuración y operación en medio</h6>

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
                  deberá entregar un equipo de respaldo equivalente &nbsp; &nbsp;mientras se soluciona el problema.
                </li>
                <li>Sí la reparación excede de 30 días naturales, el proveedor &nbsp; &nbsp;entregará a cambio un equipo
                  nuevo con las características iguales al &nbsp; &nbsp;adquirido u otro equipo de mayores
                  características.
                </li>
              </ul>

              <h6>Requerimientos de servicio:</h6>

              <ul>
                <li>El procedimiento de recepción de reportes y atención de fallas de los equipos.</li>
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

export default EstandarEquiposElectricos
