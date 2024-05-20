import React from 'react'
import {Accordion, Container} from "react-bootstrap";

const EstandarRedesInformaticas = () => {
  return (
      <Container className="custom-accordion">

        <Container>
            <hr style={{  borderColor:'#eeeeee' }}/>
            <div>
               <h2 className="encabezadoEstandar">ESTÁNDARES TÉCNICOS DE REDES INFORMÁTICAS</h2>
                <h3>Todo componente de redes informáticas que no figure en la siguiente lista debe ser dictaminado</h3>
            </div>
        </Container>


          <hr style={{  borderColor:'#eeeeee' }}/>
          <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                  <Accordion.Header><h2>SWITCH TIPO 1, TIPO 2 Y TIPO 3</h2></Accordion.Header>
                  <Accordion.Body>
                      <div >
                          <h6><strong>Válido a partir del 14 de Agosto de 2023</strong></h6>

                          <h6><strong>Estatus:&nbsp;</strong>Vigente &nbsp; &nbsp;</h6>

                          <h6><strong>Categoría</strong>: Estándares Técnicos de Redes Informáticas</h6>

                          <ol>
                              <li>Excepto donde se indique, todos los requerimientos son mínimos.</li>
                              <li>Característica técnicas iguales o &nbsp;mayores a &nbsp;las aquí listadas, son
                                  válidas.
                              </li>
                              <li>Las máquinas deben pertenecer a la línea de negocios del fabricante.</li>
                              <li><strong>Los equipo switch core o de alta capacidad para nucleos físicos o red troncal
                                  deben ser dictaminados</strong></li>
                          </ol>

                          <table className="table table-striped table-bordered">
                              <tbody>
                              <tr>
                                  <td >
                                      
                                          
                                  </td>
                                  <td >

                                      <h3><strong>SWITCH TIPO 1</strong></h3>
                                  </td>
                              </tr>
                              <tr>
                                  <td ><strong>No</strong>
                                      
                                  </td>
                                  <td >
                                      <strong>COMPONENTE</strong>
                                      
                                  </td>
                                  <td >
                                      <strong>REQUERIMIENTO</strong>
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td >1
                                      
                                  </td>
                                  <td ><strong>PUERTOS</strong>
                                      
                                  </td>
                                  <td >-8, 16, 24 o 48 puertos (a requerimiento del Ente)
                                      -10/100/1000 Mbps Base-T
                                          -802.3 af y 802.3 at (opcional)
                                              -Interfaz Gigabit Ethernet.
                                                  
                                  </td>
                              </tr>
                              <tr>
                                  <td  >2
                                      
                                  </td>
                                  <td  ><strong>MONTAJE EN
                                      RACK</strong></td>
                                  <td  >Con soportes para su montaje en
                                      Rack (opcional), Chasis metálico, en el caso de que el equipo sea de menor de 19
                                      pulgadas, el proveedor y de ser requerido por el Ente, deberá entregar
                                      equipamiento con soportes para montaje en rack.
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td  >3
                                      
                                  </td>
                                  <td  ><strong>UPLINKS</strong>
                                      
                                  </td>
                                  <td  >Mínimo de 1 a 4 puertos Gigabit
                                      Ethernet RJ-45 para UPLINK
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td  >4
                                      
                                  </td>
                                  <td  ><strong>GABINETE</strong></td>
                                  <td  >Chasis metálico, en el caso de que
                                      el equipo sea de menor de 19 pulgadas, el proveedor y de ser requerido por el
                                      Ente, deberá entregar equipamiento con soportes para montaje en rack.
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td  >5
                                      
                                  </td>
                                  <td  ><strong>INDICADORES</strong>
                                      
                                  </td>
                                  <td  >Con indicadores lumínicos y
                                      textual.
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td  >6
                                      
                                  </td>
                                  <td  ><strong>BACKPLANE (ANCHO DE
                                      BANDA)</strong></td>
                                  <td  >Con un mínimo de 1.6 Gbps.
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td  >7
                                      
                                  </td>
                                  <td  ><strong>CONMUTACIÓN</strong>
                                  </td>
                                  <td  >Con un mínimo de 3.6 Gbps.
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td  >8
                                      
                                  </td>
                                  <td  ><strong>TABLA DE DIRECCIONES
                                      MAC</strong></td>
                                  <td  >Con un mínimo de 1k.
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td  >9
                                      
                                  </td>
                                  <td  ><strong>MEDIOS
                                      SOPORTADOS</strong></td>
                                  <td  >Pueden ser los siguientes medios de
                                      acuerdo al requerimiento del Ente:
                                      - 10Base-T Cat3, 4, 5 UTP/STP RJ45 - 100Base-TX Cat5 UTP/STP RJ45 &nbsp;o
                                          superior
                                          
                                              - 1000Base-T Cat5e UTP/STP RJ45
                                                  
                                                      - 10Base-T UTP/STP RJ45 - 100Base-TX UTP/STP RJ45 - 1000Base-T
                                                          UTP/STP RJ45
                                                          
                                  </td>
                              </tr>
                              <tr>
                                  <td  >10
                                      
                                  </td>
                                  <td  ><strong>SERVICIOS</strong>
                                      
                                  </td>
                                  <td  >Servicios en caso de que el Ente lo
                                      requiera:
                                      -Al menos 128 VLAN activas (rango 4096)
                                          
                                              -MAC Address Notification
                                                  
                                                      -Dynamic ARP Inspection (DAI)
                                                          
                                                              -DHCP Spoof Protection
                                                                  
                                                                      -RADIUS y/o TACS+ Authentication
                                                                          
                                                                              -Extended ACLs
                                                                                  
                                                                                      -DHCP Dynamic Host
                                                                                          Configuration Protocol
                                                                                          
                                                                                              -RMON Remote
                                                                                                  Monitoring
                                                                                                  
                                                                                                      -SNMP v1/v2/v3
                                                                                                          simple Network
                                                                                                          Management
                                                                                                          Protocol
                                                                                                          
                                                                                                              -Switch
                                                                                                                  administrable
                                                                                                                  por
                                                                                                                  CLI,
                                                                                                                  WEB.
                                  </td>
                              </tr>
                              <tr>
                                  <td  >11
                                      
                                  </td>
                                  <td  ><strong>SEGURIDAD</strong>
                                      
                                  </td>
                                  <td  >Características en caso de que el
                                      Ente lo requiera:
                                      ARP Spoof Protection
                                          
                                              MAC based Port Authentication
                                                  
                                                      Password Protection (encryption)
                                                          
                                                              WEB based Port Authentication
                                                                  
                                                                      Secure Shell (SSHv2)
                                                                          
                                                                              Secured Socket Layer (SSL)
                                                                                  
                                  </td>
                              </tr>
                              <tr>
                                  <td>12</td>
                                  <td ><strong>CARACTERÍSTICAS ADICIONALES</strong></td>
                                  <td >VLAN (opcional) 802.1X (opcional)
                                      SSH v2 (opcional) IEEE 802.3ad (opcional)
                                          127 V, 60 Hz (opcional)
                                              Rutas IPV4 ≥ 16,000 (opcional)
                                                  Rutas IPV6 ≥ 8,000 (opcional)
                                                      1+1 respaldo de alimentación (opcional)
                                                          
                                  </td>
                              </tr>
                              <tr>
                                  <td  >13
                                      
                                  </td>
                                  <td  ><strong>GARANTÍA</strong>
                                      
                                  </td>
                                  <td  >mínimo 1 año en todas sus partes
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td  >14
                                      
                                  </td>
                                  <td  ><strong>CONTENIDO DE LA
                                      CAJA</strong></td>
                                  <td  >Switch, cable para corriente
                                      eléctrica, fuente AC/DC, software del equipo y manuales
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td>

                                      <h3><strong>SWITCH TIPO 2</strong></h3>
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td >No
                                      
                                  </td>
                                  <td >
                                      <strong>COMPONENTE</strong>
                                      
                                  </td>
                                  <td >
                                      <strong>REQUERIMIENTO</strong>
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td  >1
                                      
                                  </td>
                                  <td  ><strong>PUERTOS</strong>
                                      
                                  </td>
                                  <td  >-8, 16, 24 o 48 puertos (a
                                      requerimiento del Ente)
                                      -10/100/1000 Mbps Base-T
                                          -802.3 af y 802.3 at (opcional)
                                              -Interfaz Gigabit Ethernet.
                                                  
                                  </td>
                              </tr>
                              <tr>
                                  <td  >2
                                      
                                  </td>
                                  <td  ><strong>PANTALLA</strong>
                                      
                                  </td>
                                  <td  >Con Pantalla LCD, opcional.
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td  >3
                                      
                                  </td>
                                  <td  ><strong>MONTAJE EN
                                      RACK</strong></td>
                                  <td  >Con soportes para su montaje en
                                      Rack (opcional), Chasis metálico, en el caso de que el equipo sea de menor de 19
                                      pulgadas, el proveedor y de ser requerido por el Ente, deberá entregar
                                      equipamiento con soportes para montaje en rack.
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td  >4
                                      
                                  </td>
                                  <td  ><strong>UPLINKS</strong>
                                      
                                  </td>
                                  <td  >Cuando menos 2 puertos Gigabit
                                      Ethernet RJ-45 y/ó 2 puertos Gigabit Ethernet SFP para UPLINK.
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td  >5
                                      
                                  </td>
                                  <td  ><strong>GABINETE</strong>
                                      
                                  </td>
                                  <td  >Chasis metálico, en el caso de que
                                      el equipo sea de menor de 19 pulgadas, el proveedor y de ser requerido por el
                                      Ente, deberá entregar equipamiento con soportes para montaje en rack.
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td  >6
                                      
                                  </td>
                                  <td  ><strong>INDICADORES</strong>
                                      
                                  </td>
                                  <td  >Con indicadores lumínicos y
                                      textual.
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td  >7
                                      
                                  </td>
                                  <td  ><strong>BACKPLANE(ANCHO DE
                                      BANDA)</strong></td>
                                  <td  >Mínimo de 36 Gbps
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td  >8
                                      
                                  </td>
                                  <td  ><strong>CONMUTACIÓN</strong>
                                      
                                  </td>
                                  <td  >Con un mínimo de 32 Gbps
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td  >9
                                      
                                  </td>
                                  <td  ><strong>TABLA DE DIRECCIONES
                                      MAC</strong></td>
                                  <td  >Mínimo de 8k
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td  >10
                                      
                                  </td>
                                  <td  ><strong>MEDIOS
                                      SOPORTADOS</strong></td>
                                  <td  >Pueden ser los siguientes medios de
                                      acuerdo al requerimiento del Ente:
                                      - 10Base-T Cat3, 4, 5 UTP/STP RJ45 - 100Base-TX Cat5 UTP/STP RJ45 - 1000Base-T
                                          Cat5e UTP/STP RJ45 o superior
                                          
                                  </td>
                              </tr>
                              <tr>
                                  <td  >11
                                      
                                  </td>
                                  <td  ><strong>SERVICIOS</strong>
                                      
                                  </td>
                                  <td  >Servicios en caso de que el Ente lo
                                      requiera:
                                      -Al menos 128 VLAN activas (rango 4096)
                                          
                                              -MAC Address Notification
                                                  
                                                      -Dynamic ARP Inspection (DAI)
                                                          
                                                              -DHCP Spoof Protection
                                                                  
                                                                      -RADIUS y/o TACS+ Authentication
                                                                          
                                                                              -Extended ACLs
                                                                                  
                                                                                      -DHCP Dynamic Host
                                                                                          Configuration Protocol
                                                                                          
                                                                                              -RMON Remote
                                                                                                  Monitoring
                                                                                                  
                                                                                                      -SNMP v1/v2/v3
                                                                                                          simple Network
                                                                                                          Management
                                                                                                          Protocol
                                                                                                          
                                                                                                              -Administrable
                                                                                                                  por
                                                                                                                  CLI,
                                                                                                                  WEB
                                  </td>
                              </tr>
                              <tr>
                                  <td  >12
                                      
                                  </td>
                                  <td  ><strong>SEGURIDAD</strong>
                                      
                                  </td>
                                  <td  >Características en caso de que el
                                      Ente lo requiera:
                                      ARP Spoof Protection
                                          
                                              MAC based Port Authentication
                                                  
                                                      Password Protection (encryption)
                                                          
                                                              WEB based Port Authentication
                                                                  
                                                                      Secure Shell (SSHv2)
                                                                          
                                                                              Secured Socket Layer (SSL)
                                                                                  
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      
                                  </td>
                                  <td><strong>CARACTERISTICAS ADICIONALES</strong></td>
                                  <td>-VLAN (opcional) 802.1X (opcional)
                                      -SSH v2 (opcional)
                                          -IEEE 802.3ad (opcional)
                                              -127 V, 60 Hz (opcional)
                                                  -Rutas IPV4 ≥ 16,000 (opcional)
                                                      -Rutas IPV6 ≥ 8,000 (opcional)
                                                          -1+1 respaldo de alimentación (opcional)
                                                              
                                  </td>
                              </tr>
                              <tr>
                                  <td  >13
                                      
                                  </td>
                                  <td  ><strong>GARANTÍA</strong>
                                      
                                  </td>
                                  <td  >mínimo 1 año en todas sus partes
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td  >14
                                      
                                  </td>
                                  <td  ><strong>CONTENIDO DE LA
                                      CAJA</strong></td>
                                  <td  >Switch, cable para corriente
                                      eléctrica, fuente AC/DC, software del equipo y manuales.
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      

                                          <h3><strong>SWITCH TIPO 3</strong></h3>
                                          
                                  </td>
                              </tr>
                              <tr>
                                  <td 
                                      >
                                      <strong>No.</strong></td>
                                  <td 
                                      >
                                      <strong>COMPONENTE</strong>
                                      
                                  </td>
                                  <td 
                                      ><strong>REQUERIMIENTO</strong>
                                  </td>
                              </tr>
                              <tr>
                                  <td  >1
                                      
                                  </td>
                                  <td  ><strong>PUERTOS</strong>
                                      
                                  </td>
                                  <td  >-24 a 48 puertos (a requerimiento
                                      del Ente)
                                      -10/100/1000 Mbps Base-T
                                          -802.3 af y 802.3 at (opcional)
                                              -Interfaz Gigabit Ethernet.
                                                  
                                  </td>
                              </tr>
                              <tr>
                                  <td  >2
                                      
                                  </td>
                                  <td  ><strong>PANTALLA</strong>
                                      
                                  </td>
                                  <td  >Con Pantalla LCD, opcional.
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td  >3
                                      
                                  </td>
                                  <td  ><strong>MONTAJE EN
                                      RACK</strong></td>
                                  <td  >Con soportes para su montaje en
                                      Rack (opcional), Chasis metálico, en el caso de que el equipo sea de menor de 19
                                      pulgadas, el proveedor y de ser requerido por el Ente, deberá entregar
                                      equipamiento con soportes para montaje en rack.
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td  >4
                                      
                                  </td>
                                  <td  ><strong>UPLINKS</strong>
                                      
                                  </td>
                                  <td  >Cuando menos 2 puertos Gigabit
                                      Ethernet RJ-45 y/ó 2 puertos Gigabit Ethernet SFP
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td  >5
                                      
                                  </td>
                                  <td  ><strong>GABINETE</strong>
                                      
                                  </td>
                                  <td  >Chasis metálico, en el caso de que
                                      el equipo sea de menor de 19 pulgadas, el proveedor y de ser requerido por el
                                      Ente, deberá entregar equipamiento con soportes para montaje en rack.
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td  >6
                                      
                                  </td>
                                  <td  ><strong>INDICADORES</strong>
                                  </td>
                                  <td  >Con indicadores lumínicos y
                                      textual.
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td  >7
                                      
                                  </td>
                                  <td  ><strong>BACKPLANE(ANCHO DE
                                      BANDA)</strong></td>
                                  <td  >Con un mínimo de 128 Gbps.
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td  >8
                                      
                                  </td>
                                  <td  ><strong>CONMUTACIÓN</strong>
                                      
                                  </td>
                                  <td  >Con un mínimo de 128 Gbps.
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td  >9
                                      
                                  </td>
                                  <td  ><strong>TABLA DE DIRECCIONES
                                      MAC</strong></td>
                                  <td  >Con un mínimo de 32k.
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td  >10
                                      
                                  </td>
                                  <td  ><strong>MEDIOS
                                      SOPORTADOS</strong></td>
                                  <td  >Pueden ser los siguientes medios de
                                      acuerdo al requerimiento del Ente:
                                      - 10Base-T Cat3, 4, 5 UTP/STP RJ45 - 100Base-TX Cat5 UTP/STP RJ45 - 1000Base-T
                                          Cat5e UTP/STP RJ45 o superior
                                          
                                  </td>
                              </tr>
                              <tr>
                                  <td  >11
                                      
                                  </td>
                                  <td  ><strong>SERVICIOS</strong>
                                      
                                  </td>
                                  <td  >Servicios en caso de que el Ente lo
                                      requiera:
                                      Al menos 128 VLAN activas (rango 4096)
                                          
                                              MAC Address Notification
                                                  
                                                      Dynamic ARP Inspection (DAI)
                                                          
                                                              DHCP Spoof Protection
                                                                  
                                                                      RADIUS y/o TACS+ Authentication
                                                                          
                                                                              Extended ACLs
                                                                                  
                                                                                      DHCP Dynamic Host
                                                                                          Configuration Protocol
                                                                                          
                                                                                              RMON Remote Monitoring
                                                                                                  
                                                                                                      SNMP v1/v2/v3
                                                                                                          simple Network
                                                                                                          Management
                                                                                                          Protocol
                                                                                                          
                                                                                                              Administración
                                                                                                                  vía
                                                                                                                  WEB
                                                                                                                  
                                  </td>
                              </tr>
                              <tr>
                                  <td  >12
                                      
                                  </td>
                                  <td  ><strong>SEGURIDAD</strong>
                                      
                                  </td>
                                  <td  >Características en caso de que el
                                      Ente lo requiera:
                                      ARP Spoof Protection
                                          
                                              MAC based Port Authentication
                                                  
                                                      Password Protection (encryption)
                                                          
                                                              WEB based Port Authentication
                                                                  
                                                                      Secure Shell (SSHv2)
                                                                          
                                                                              Secured Socket Layer (SSL)
                                                                                  
                                  </td>
                              </tr>
                              <tr>
                                  <td>13</td>
                                  <td><strong>CARACTERÍSTICAS ADICIONALES</strong></td>
                                  <td>OSPF (opcional)
                                      BGP (opcional)
                                          EVPN (opcional)
                                              802.1X (opcional)
                                                  IEEE 802.3ad (opcional)
                                                      Rutas IPV4 ≥ 512,000 (opcional)
                                                          Rutas IPV6 ≥ 64,000 (opcional)
                                                              4x10G para uplink (opcional)
                                                                  1+1 respaldo de alimentación (opcional)
                                                                      127 V, 60 Hz (opcional)
                                                                          Soporte de 4 puertos SFP+ (opcional)
                                                                              Soporte con APIs RFC 6241, RFC 8040 o
                                                                                  RFC 6020 (opcional)
                                                                                  
                                                                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td  >14
                                      
                                  </td>
                                  <td  ><strong>GARANTÍA</strong>
                                      
                                  </td>
                                  <td  >mínimo de 1 &nbsp;año en todas sus
                                      partes
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td  >15
                                      
                                  </td>
                                  <td  ><strong>CONTENIDO DE LA
                                      CAJA</strong></td>
                                  <td  >Switch, cable para corriente
                                      eléctrica, fuente AC/DC, software del equipo y manuales.
                                  </td>
                              </tr>
                              </tbody>
                          </table>

                          <h6>
                              
                          </h6>

                          <h6><strong>NORMAS Y ESTÁNDARES</strong></h6>


                              <h6>Que el equipo cumpla con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</h6>
                              <h6>Que el equipo cuente con las Normas y certificaciones requeridas como mínimo los
                                  siguientes estándares:&nbsp;</h6>

                                  <ul>
                                      <li>-802.1D Protocolo de árbol de expansión (por sus siglas en inglés STP).</li>
                                      <li>-802.1w STP Rápido</li>
                                      <li>-802.1x Autenticación de acceso a puertos.</li>
                                      <li>-802.1Q/p VLAN 802.3 10BASE-T Ethernet&nbsp;</li>
                                      <li>-802.3u 100BASE-TX Fast Ethernet&nbsp;</li>
                                      <li>-802.3ab 1000 BASE-T Gigabit Ethernet&nbsp;</li>
                                      <li>-802.3x Control de Flujo</li>
                                  </ul>




                          <h6><strong>SOFTWARE PREINSTALADO</strong></h6>

                          <h6>De acuerdo a los requerimientos del Ente requirente.</h6>

                          <h6><strong>MANUALES</strong></h6>

                          <h6>Se debe de entregar manual del equipo para su instalación, configuración y operación en
                              medio</h6>

                          <h6>electrónico y en idioma español.</h6>

                          <h6><strong>GARANTÍA</strong></h6>

                          <h6>Uno a tres años de garantía en repuestos y mano de obra en sitio para todos los elementos
                              descritos.</h6>

                          <h6>Características que deberá cubrir:</h6>

                          <ul>
                              <li>El proveedor se compromete a dar cumplimiento a la garantía.</li>
                              <li>El servicio se prestará en las instalaciones del ente requirente.</li>
                              <li>El tiempo de atención será, como máximo, dos horas.</li>
                              <li>El tiempo de reparación será día siguiente laboralSiexcede este lapso, el proveedor
                                  deberá entregar un equipo de respaldo equivalente mientras se soluciona el problema.
                              </li>
                              <li>Sí la reparación excede de 30 días naturales, el proveedor entregará a cambio un
                                  equipo nuevo con las características iguales al adquirido u otro equipo de mayores
                                  características.
                              </li>
                          </ul>

                          <h6>Requerimientos de servicio:</h6>

                          <ul>
                              <li>El procedimiento de recepción de reportes y atención de fallas de los equipos.</li>
                              <li>Se debe de indicar una línea telefónica del fabricante o centro de &nbsp;atención
                                  telefónica certificado o aprobado por el fabricante sin costo de llamada para el
                                  usuario, como uno de los canales para hacer efectiva la garantía.
                              </li>
                              <li>Se debe de especificar un correo electrónico de atención, como uno de los canales para
                                  hacer efectiva la garantía.
                              </li>
                          </ul>

                          <h6>
                              
                          </h6>

                          <h6><strong>CONSIDERACIONES &nbsp;PARA EL PROCEDIMIENTO DE ADQUISICIÓN:</strong></h6>

                          <h6>Es estricta responsabilidad del Ente Requirente, como parte funcional &nbsp; durante el
                              procedimiento de adquisición de estos componentes tecnológicos, el considerar todas las
                              cartas respectivas que den &nbsp;soporte &nbsp;al proceso y aseguren el respaldo de los
                              fabricantes de los &nbsp;mismos, en &nbsp;cuanto a especificaciones técnicas, vicios
                              ocultos y &nbsp;condiciones de &nbsp;garantía. La ADBC no tiene responsabilidad alguna
                              por &nbsp;alguna deficiencia &nbsp;administrativa en este sentido.</h6>
                      </div>
                  </Accordion.Body>
              </Accordion.Item>
          </Accordion>
        <hr style={{  borderColor:'#eeeeee' }}/>
          <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                  <Accordion.Header><h2>ACCESS POINT TIPO 1 Y TIPO 2</h2></Accordion.Header>
                  <Accordion.Body>
                      <div >
                          <h6><strong>Válido a partir del 14 de Agosto de 2023.</strong></h6>

                          <h6><strong>Estatus:&nbsp;</strong>Vigente &nbsp; &nbsp;</h6>

                          <h6><strong>Categoría</strong>: Estándares Técnicos de Redes Informáticas</h6>

                          <ol>
                              <li>Excepto donde se indique, todos los requerimientos son mínimos.</li>
                              <li>Característica técnicas iguales o &nbsp;mayores a &nbsp;las aquí listadas, son
                                  válidas.
                              </li>
                              <li>Los equipos deben pertenecer a la línea de negocios del fabricante.</li>
                          </ol>

                          <table 
                                 >
                              <tbody>
                              <tr>
                                  <td  >
                                      <strong>Estándar</strong></td>
                                  <td  ><strong>Características
                                      técnicas</strong></td>
                              </tr>
                              <tr>
                                  <td ><strong>Acces Point - Tipo 1</strong></td>
                                  <td >Cantidad de puertos LAN: 2 o más
                                      Frecuencia: 5Ghz y 2.4Ghz
                                          Taza de transferencia: mínimo 300 Mbps
                                              Taza de transferencia: 867Mbit/s
                                                  Velocidad de transferencia: 10/100/1000 Mbit/s
                                                      Ganancia de antena: Máximo 3dBi
                                                          Seguridad: WPA-PSK, WPA-TKIP, WPA2 AES, 802.11i y Dynamic
                                                              PSK, WPIS/WIDS.
                                                              Estándares IEEE 802.11 a/b/g/n/ac Wave 2
                                                                  
                                                                      -Interfaces Ethernet 1x100/1000/2.5G/5G BASE-T
                                                                          (opcional)
                                                                          -Habilitación para acceso a la red
                                                                              (móviles y fijos) (opcional)
                                                                              -802.3 at y 802.3bt (opcional)
                                                                                  -BLE que permita integración de
                                                                                      tecnologías IoT (opcional)
                                                                                      -Beacon (opcional)
                                                                                          -Escáneo de dispositivos
                                                                                              BLE (opcional)
                                                                                              -Uso de analíticos de
                                                                                                  presencia (opcional)
                                                                                                  -Open API
                                                                                                      (opcional)
                                                                                                      -Licenciamiento
                                                                                                          (opcional)
                                                                                                          -MIMO 2.4
                                                                                                              GHz 2x2
                                                                                                              (opcional)
                                                                                                              -MIMO
                                                                                                                  5GHz
                                                                                                                  2x2
                                                                                                                  (opcional)
                                                                                                                  -Autenticación
                                                                                                                      802.1x
                                                                                                                      (opcional)
                                                                                                                      -Soporte
                                                                                                                          de
                                                                                                                          ancho
                                                                                                                          de
                                                                                                                          banda
                                                                                                                          de
                                                                                                                          8.3
                                                                                                                          Gbps
                                                                                                                          (opcional)
                                                                                                                          
                                  </td>
                              </tr>
                              <tr>
                                  <td ><strong>Acces Point - Tipo 2</strong></td>
                                  <td >Cantidad de puertos LAN: 2 o más
                                      Ganancia de la antena: Máximo 8dBi
                                          Frecuencia: Dual Band 2.4/5 GHz
                                              Tasa de transferencia: 1733 Mbit/s
                                                  Velocidad de transferencia: 10/100/1000 Mbit/s
                                                      Seguridad: AEIS, TKIP, WEP, WPA, WPA-Enterprise, WPA-PSK,
                                                          WPA2.
                                                          Estándares de red: IEEE 802.11a, IEEE 802.11ac, IEEE
                                                              802.b, IEE 802.11g, IEEE 802.11n, IEEE 802.1Q
                                                              
                                                                  -Interfaces Ethernet 1x100/1000/2.5G/5G BASE-T
                                                                      (opcional)
                                                                      &nbsp;-Habilitación para acceso a la red
                                                                          (móviles y fijos) (opcional)
                                                                          -802.3 at y 802.3bt (opcional)
                                                                              -BLE que permita integración de
                                                                                  tecnologías IoT (opcional)
                                                                                  -Beacon (opcional)
                                                                                      -Escáneo de dispositivos BLE
                                                                                          (opcional)
                                                                                          -Uso de analíticos de
                                                                                              presencia (opcional)
                                                                                              -Open API (opcional)
                                                                                                  -Licenciamiento
                                                                                                      (opcional)
                                                                                                      -MIMO 2.4 GHz
                                                                                                          4x4 (opcional)
                                                                                                          -MIMO 5GHz
                                                                                                              4x4
                                                                                                              (opcional)
                                                                                                              -Autenticación
                                                                                                                  802.1x
                                                                                                                  (opcional)
                                                                                                                  -Soporte
                                                                                                                      de
                                                                                                                      ancho
                                                                                                                      de
                                                                                                                      banda
                                                                                                                      de
                                                                                                                      8.3
                                                                                                                      Gbps
                                                                                                                      (opcional)
                                                                                                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td><strong>Acces Point para Exteriores</strong></td>
                                  <td>-"IEEE 802.11 a/b/g/n/ac IEEE 802.11 ax (opcional)"
                                      -Dual Band 2.4/2.5 GHz
                                          -Interfaces Ethernet 1x100/1000/2.5G BASE-T
                                              -Habilitación para acceso a la red (móviles y fijos)
                                                  -802.3 at y 802.3bt
                                                      -BLE
                                                          -Beacon
                                                              -Escáneo de dispositivos BLE
                                                                  -Open API
                                                                      -IP67
                                                                          -Licenciamiento
                                                                              -MIMO 2.4 GHz 4x4
                                                                                  -MIMO 5GHz 4x4
                                                                                      -802.1x
                                                                                          -1 Interfaz GE basado en
                                                                                              cobre
                                                                                              -1 Interfaz GE SFP+
                                                                                                  -Ancho de Banda
                                                                                                      3.5 Gbps
                                                                                                      
                                  </td>
                              </tr>
                              </tbody>
                          </table>

                          <h6>
                              
                          </h6>

                          <h6><strong>NORMAS Y ESTÁNDARES</strong></h6>


<h6>Que el equipo cumpla con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</h6>

                        <h6>Que los accesorios cumplan con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</h6>

                          <h6><strong>MANUALES</strong></h6>

                          <h6>Se debe de entregar manual del equipo para su instalación, configuración y operación en
                              medio</h6>

                          <h6>electrónico y en idioma español.</h6>

                          <h6><strong>GARANTÍA</strong></h6>

                          <h6>Uno a tres años de garantía en repuestos y mano de obra en sitio para todos los elementos
                              descritos.</h6>

                          <h6>Características que deberá cubrir:</h6>

                          <ul>
                              <li>El proveedor se compromete a dar cumplimiento a la garantía.</li>
                              <li>El servicio se prestará en las instalaciones del ente requirente.</li>
                              <li>El tiempo de atención será, como máximo, dos horas.</li>
                              <li>El tiempo de reparación será día siguiente laboralSiexcede este lapso, el proveedor
                                  deberá entregar un equipo de respaldo equivalente mientras se soluciona el problema.
                              </li>
                              <li>Sí la reparación excede de 30 días naturales, el proveedor entregará a cambio un
                                  equipo nuevo con las características iguales al adquirido u otro equipo de mayores
                                  características.
                              </li>
                          </ul>

                          <h6>Requerimientos de servicio:</h6>

                          <ul>
                              <li>El procedimiento de recepción de reportes y atención de fallas de los equipos.</li>
                              <li>Se debe de indicar una línea telefónica del fabricante o centro de &nbsp;atención
                                  telefónica certificado o aprobado por el fabricante sin costo de llamada para el
                                  usuario, como uno de los canales para hacer efectiva la garantía.
                              </li>
                              <li>Se debe de especificar un correo electrónico de atención, como uno de los canales para
                                  hacer efectiva la garantía.
                              </li>
                          </ul>


                          <h6><strong>CONSIDERACIONES &nbsp;PARA EL PROCEDIMIENTO DE ADQUISICIÓN:</strong></h6>

                          <h6>Es estricta responsabilidad del Ente Requirente, como parte funcional &nbsp; durante el
                              procedimiento de adquisición de estos componentes tecnológicos, el considerar todas las
                              cartas respectivas que den &nbsp;soporte &nbsp;al proceso y aseguren el respaldo de los
                              fabricantes de los &nbsp;mismos, en &nbsp;cuanto a especificaciones técnicas, vicios
                              ocultos y &nbsp;condiciones de &nbsp;garantía. La ADBC no tiene responsabilidad alguna
                              por &nbsp;alguna deficiencia &nbsp;administrativa en este sentido.</h6>

                      </div>
                  </Accordion.Body>
              </Accordion.Item>
          </Accordion>
        <hr style={{  borderColor:'#eeeeee' }}/>
          <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                  <Accordion.Header><h2>ANTENA DE ENLACE TIPO 1</h2></Accordion.Header>
                  <Accordion.Body>
                      <div >
                          <h6><strong>Válido a partir del 14 de Agosto de 2023.</strong>                          </h6>

                          <h6><strong>Estatus:&nbsp;</strong>Vigente &nbsp; &nbsp;</h6>

                          <h6><strong>Categoría</strong>: Estándares Técnicos de Redes Informáticas</h6>

                          <ol>
                              <li>Excepto donde se indique, todos los requerimientos son mínimos.</li>
                              <li>Característica técnicas iguales o &nbsp;mayores a &nbsp;las aquí listadas, son
                                  válidas.
                              </li>
                              <li>Los deben pertenecer a la línea de negocios del fabricante.</li>
                          </ol>

                          <table className="table table-striped table-bordered">
                              <tbody>
                              <tr>
                                  <td><strong>Estándar</strong></td>
                                  <td><strong>Características técnicas</strong></td>
                              </tr>
                              <tr>
                                  <td >Antena de Enlace Tipo 1</td>
                                  <td >Velocidad de transferencia: de 100 Mbps en adelante
                                      Frecuencia: 5 Hhz en adelante
                                          Ganancia de la antena: Antena de 23 dBi en adelante
                                              Puerto: 1 puerto de datos de 10/100 Mbps cómo mínimo
                                                  Equipo de polaridad simple
                                                      Seguridad: WPA2 AES
                                                          
                                  </td>
                              </tr>
                              </tbody>
                          </table>

                          <h6>
                              
                          </h6>

                          <h6><strong>NORMAS Y ESTÁNDARES</strong></h6>


<h6>Que el equipo cumpla con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</h6>

                        <h6>Que los accesorios cumplan con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</h6>

                          <h6><strong>MANUALES</strong></h6>

                          <h6>Se debe de entregar manual del equipo para su instalación, configuración y operación en
                              medio</h6>

                          <h6>electrónico y en idioma español.</h6>

                          <h6><strong>GARANTÍA</strong></h6>

                          <h6>Uno a tres años de garantía en repuestos y mano de obra en sitio para todos los elementos
                              descritos.</h6>

                          <h6>Características que deberá cubrir:</h6>

                          <ul>
                              <li>El proveedor se compromete a dar cumplimiento a la garantía.</li>
                              <li>El servicio se prestará en las instalaciones del ente requirente.</li>
                              <li>El tiempo de atención será, como máximo, dos horas.</li>
                              <li>El tiempo de reparación será día siguiente laboralSiexcede este lapso, el proveedor
                                  deberá entregar un equipo de respaldo equivalente mientras se soluciona el problema.
                              </li>
                              <li>Sí la reparación excede de 30 días naturales, el proveedor entregará a cambio un
                                  equipo nuevo con las características iguales al adquirido u otro equipo de mayores
                                  características.
                              </li>
                          </ul>

                          <h6>Requerimientos de servicio:</h6>

                          <ul>
                              <li>El procedimiento de recepción de reportes y atención de fallas de los equipos.</li>
                              <li>Se debe de indicar una línea telefónica del fabricante o centro de &nbsp;atención
                                  telefónica certificado o aprobado por el fabricante sin costo de llamada para el
                                  usuario, como uno de los canales para hacer efectiva la garantía.
                              </li>
                              <li>Se debe de especificar un correo electrónico de atención, como uno de los canales para
                                  hacer efectiva la garantía.
                              </li>
                          </ul>

                          <h6>
                              
                          </h6>

                          <h6><strong>CONSIDERACIONES &nbsp;PARA EL PROCEDIMIENTO DE ADQUISICIÓN:</strong></h6>

                          <h6>Es estricta responsabilidad del Ente Requirente, como parte funcional &nbsp; durante el
                              procedimiento de adquisición de estos componentes tecnológicos, el considerar todas las
                              cartas respectivas que den &nbsp;soporte &nbsp;al proceso y aseguren el respaldo de los
                              fabricantes de los &nbsp;mismos, en &nbsp;cuanto a especificaciones técnicas, vicios
                              ocultos y &nbsp;condiciones de &nbsp;garantía. La ADBC no tiene responsabilidad alguna
                              por &nbsp;alguna deficiencia &nbsp;administrativa en este sentido.</h6>

                      </div>
                  </Accordion.Body>
              </Accordion.Item>
          </Accordion>

        <hr style={{  borderColor:'#eeeeee' }}/>
          <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                  <Accordion.Header><h2>FIREWALL TIPO 1 (FISICO)</h2></Accordion.Header>
                  <Accordion.Body>
                      <div >
                          <h6><strong>Válido a partir del 14 de Agosto de 2023.</strong></h6>

                          <h6><strong>Estatus:&nbsp;</strong>Vigente &nbsp; &nbsp;</h6>

                          <h6><strong>Categoría</strong>: Estándares Técnicos de Redes Informáticas</h6>

                          <ol>
                              <li>Excepto donde se indique, todos los requerimientos son mínimos.</li>
                              <li>Característica técnicas iguales o &nbsp;mayores a &nbsp;las aquí listadas, son
                                  válidas.
                              </li>
                              <li>Los equipos deben pertenecer a la línea de negocios del fabricante.</li>
                          </ol>

                          <table className="table table-striped table-bordered">
                              <tbody>
                              <tr>
                                  <td><strong>Estándar</strong>
                                      
                                  </td>
                                  <td><strong>Características técnicas</strong></td>
                              </tr>
                              <tr>
                                  <td ><strong>Firewall - Tipo 1 (Físico)</strong></td>
                                  <td >&nbsp;
                                      &nbsp;● <span>Rendimiento de throughput de al menos 2 Gbps</span>
                                          &nbsp;● Al menos 3 Gbps de desempeño con las funcionalidades de inspección
                                              habilitadas simultáneamente de IPS, Antivirus, Antispyware, URL Filtering
                                              y detección de malware día cero
                                              &nbsp;●<span>&nbsp;Configuración e interoperabilidad con VPN con IPsec de al menos 2 Gbps, Nuevas sesiones por segundo 80,000.</span>
                                                  &nbsp;Interfaces:
                                                      &nbsp;● Al menos 12 x 10/100/1000 en Cobre RJ45 y 8 SFP.
                                                          &nbsp;● Puerto de consola rj45 (10/100/1000)
                                                              &nbsp;● puerto USB
                                                                  &nbsp;● Capacidad de realizar HA
                                                                      &nbsp;
                                                                          &nbsp;Alimentación:
                                                                              &nbsp;● Deberá de contar con al menos
                                                                                  2 fuentes de alimentación (100–240VAC
                                                                                  50–60Hz)
                                                                                  &nbsp;● Al menos una Unidad de
                                                                                      disco: ssd de 200 GB
                                                                                      &nbsp;Objetos:
                                                                                          &nbsp;● Al menos objetos
                                                                                              direcciones: 300
                                                                                              &nbsp;● Al menos grupo
                                                                                                  de direcciones: 300
                                                                                                  &nbsp;● Miembros
                                                                                                      por grupo de
                                                                                                      direcciones
                                                                                                      &nbsp;
                                                                                                          &nbsp;Funcionalidades:
                                                                                                              &nbsp;●
                                                                                                                  Identificación
                                                                                                                  y
                                                                                                                  control
                                                                                                                  de
                                                                                                                  aplicaciones
                                                                                                                  (Firewall
                                                                                                                  Capa
                                                                                                                  7)
                                                                                                                  independientemente
                                                                                                                  del
                                                                                                                  puerto
                                                                                                                  o
                                                                                                                  técnica
                                                                                                                  evasiva
                                                                                                                  que
                                                                                                                  ocupen
                                                                                                                  dichas
                                                                                                                  aplicaciones
                                                                                                                  &nbsp;●
                                                                                                                      Identificación
                                                                                                                      de
                                                                                                                      usuarios,
                                                                                                                      independientemente
                                                                                                                      de
                                                                                                                      la
                                                                                                                      dirección
                                                                                                                      IP
                                                                                                                      que
                                                                                                                      tengan,
                                                                                                                      a
                                                                                                                      través
                                                                                                                      de
                                                                                                                      la
                                                                                                                      integración
                                                                                                                      de
                                                                                                                      diferentes
                                                                                                                      métodos
                                                                                                                      de
                                                                                                                      autenticación,
                                                                                                                      como
                                                                                                                      Microsoft
                                                                                                                      Active
                                                                                                                      Directory
                                                                                                                      &nbsp;●
                                                                                                                          Análisis
                                                                                                                          de
                                                                                                                          tráfico,
                                                                                                                          capaz
                                                                                                                          de
                                                                                                                          Identificar
                                                                                                                          archivos
                                                                                                                          y/o
                                                                                                                          datos
                                                                                                                          sensibles
                                                                                                                          basados
                                                                                                                          en
                                                                                                                          expresiones
                                                                                                                          regulares,
                                                                                                                          Identificación
                                                                                                                          de
                                                                                                                          amenazas
                                                                                                                          conocidas,
                                                                                                                          con
                                                                                                                          motores
                                                                                                                          de
                                                                                                                          inspección
                                                                                                                          simultanea:
                                                                                                                          &nbsp;●
                                                                                                                              Anti-spyware,
                                                                                                                              como
                                                                                                                              Botnets,
                                                                                                                              troyanos,
                                                                                                                              adware,
                                                                                                                              etc
                                                                                                                              &nbsp;●
                                                                                                                                  Análisis
                                                                                                                                  de
                                                                                                                                  peticiones
                                                                                                                                  DNS
                                                                                                                                  a
                                                                                                                                  sitios
                                                                                                                                  sospechosos
                                                                                                                                  e
                                                                                                                                  integración
                                                                                                                                  de
                                                                                                                                  DNS
                                                                                                                                  Sinkhole
                                                                                                                                  propio
                                                                                                                                  o
                                                                                                                                  de
                                                                                                                                  terceros
                                                                                                                                  &nbsp;●
                                                                                                                                      Antivirus
                                                                                                                                      de
                                                                                                                                      red
                                                                                                                                      &nbsp;●
                                                                                                                                          Vulnerabilidades
                                                                                                                                          en
                                                                                                                                          aplicaciones,
                                                                                                                                          protocolos
                                                                                                                                          y
                                                                                                                                          servicios.
                                                                                                                                          &nbsp;●
                                                                                                                                              Filtrado
                                                                                                                                              de
                                                                                                                                              navegación
                                                                                                                                              Web,
                                                                                                                                              basado
                                                                                                                                              en
                                                                                                                                              categoría
                                                                                                                                              y
                                                                                                                                              reputación
                                                                                                                                              del
                                                                                                                                              sitio
                                                                                                                                              URL
                                                                                                                                              visitado,
                                                                                                                                              con
                                                                                                                                              capacidad
                                                                                                                                              de
                                                                                                                                              interceptar
                                                                                                                                              peticiones
                                                                                                                                              y
                                                                                                                                              alertar
                                                                                                                                              a
                                                                                                                                              los
                                                                                                                                              usuarios,
                                                                                                                                              bloquear
                                                                                                                                              acceso
                                                                                                                                              y/o
                                                                                                                                              solicitar
                                                                                                                                              contraseña
                                                                                                                                              de
                                                                                                                                              acceso.
                                                                                                                                              &nbsp;●
                                                                                                                                                  Detección
                                                                                                                                                  y
                                                                                                                                                  prevención
                                                                                                                                                  de
                                                                                                                                                  amenazas
                                                                                                                                                  de
                                                                                                                                                  día
                                                                                                                                                  cero
                                                                                                                                                  y
                                                                                                                                                  de
                                                                                                                                                  propósito
                                                                                                                                                  específico
                                                                                                                                                  (APT)
                                                                                                                                                  &nbsp;●
                                                                                                                                                      Capacidad
                                                                                                                                                      de
                                                                                                                                                      análisis
                                                                                                                                                      online
                                                                                                                                                      vía
                                                                                                                                                      SandBox
                                                                                                                                                      &nbsp;●
                                                                                                                                                          Diagnóstico
                                                                                                                                                          inmediato
                                                                                                                                                          y
                                                                                                                                                          creación
                                                                                                                                                          de
                                                                                                                                                          firmas
                                                                                                                                                          de
                                                                                                                                                          mitigación
                                                                                                                                                          en
                                                                                                                                                          5
                                                                                                                                                          minutos
                                                                                                                                                          o
                                                                                                                                                          menos
                                                                                                                                                          &nbsp;●
                                                                                                                                                              Inteligencia
                                                                                                                                                              compartida
                                                                                                                                                              a
                                                                                                                                                              nivel
                                                                                                                                                              mundial
                                                                                                                                                              con
                                                                                                                                                              un
                                                                                                                                                              motor
                                                                                                                                                              de
                                                                                                                                                              inteligencia
                                                                                                                                                              automatizado
                                                                                                                                                              en
                                                                                                                                                              la
                                                                                                                                                              nube
                                                                                                                                                              &nbsp;●
                                                                                                                                                                  Reportes
                                                                                                                                                                  completos
                                                                                                                                                                  de
                                                                                                                                                                  severidad
                                                                                                                                                                  por
                                                                                                                                                                  comportamiento
                                                                                                                                                                  malicioso
                                                                                                                                                                  y
                                                                                                                                                                  comportamiento
                                                                                                                                                                  de
                                                                                                                                                                  malware
                                                                                                                                                                  &nbsp;●
                                                                                                                                                                      Control
                                                                                                                                                                      de
                                                                                                                                                                      ancho
                                                                                                                                                                      de
                                                                                                                                                                      banda
                                                                                                                                                                      (QoS)
                                                                                                                                                                      mediante
                                                                                                                                                                      colas
                                                                                                                                                                      de
                                                                                                                                                                      tráfico
                                                                                                                                                                      por
                                                                                                                                                                      prioridad
                                                                                                                                                                      con
                                                                                                                                                                      base
                                                                                                                                                                      en
                                                                                                                                                                      aplicaciones,
                                                                                                                                                                      direcciones
                                                                                                                                                                      IP,
                                                                                                                                                                      usuarios
                                                                                                                                                                      y
                                                                                                                                                                      horarios
                                                                                                                                                                      &nbsp;●
                                                                                                                                                                          Políticas
                                                                                                                                                                          de
                                                                                                                                                                          protección
                                                                                                                                                                          de
                                                                                                                                                                          recursos
                                                                                                                                                                          contra
                                                                                                                                                                          comportamiento
                                                                                                                                                                          de
                                                                                                                                                                          negación
                                                                                                                                                                          de
                                                                                                                                                                          tráfico
                                                                                                                                                                          (DoS).
                                                                                                                                                                          &nbsp;●
                                                                                                                                                                              Almacenamiento
                                                                                                                                                                              de
                                                                                                                                                                              bitácoras
                                                                                                                                                                              (Logs)
                                                                                                                                                                              en
                                                                                                                                                                              disco
                                                                                                                                                                              duro
                                                                                                                                                                              dedicado,
                                                                                                                                                                              con
                                                                                                                                                                              capacidad
                                                                                                                                                                              de
                                                                                                                                                                              exportación
                                                                                                                                                                              por
                                                                                                                                                                              diversos
                                                                                                                                                                              métodos.
                                                                                                                                                                              &nbsp;●
                                                                                                                                                                                  Generación
                                                                                                                                                                                  de
                                                                                                                                                                                  alertas
                                                                                                                                                                                  y
                                                                                                                                                                                  almacenamiento
                                                                                                                                                                                  de
                                                                                                                                                                                  bitácoras
                                                                                                                                                                                  de
                                                                                                                                                                                  cambios
                                                                                                                                                                                  en
                                                                                                                                                                                  la
                                                                                                                                                                                  configuración
                                                                                                                                                                                  &nbsp;●
                                                                                                                                                                                      Generación
                                                                                                                                                                                      de
                                                                                                                                                                                      usuarios
                                                                                                                                                                                      basados
                                                                                                                                                                                      en
                                                                                                                                                                                      roles
                                                                                                                                                                                      y
                                                                                                                                                                                      permisos
                                                                                                                                                                                      (RBAC)
                                                                                                                                                                                      de
                                                                                                                                                                                      administración.
                                                                                                                                                                                      &nbsp;●
                                                                                                                                                                                          Generación
                                                                                                                                                                                          de
                                                                                                                                                                                          reportes
                                                                                                                                                                                          en
                                                                                                                                                                                          la
                                                                                                                                                                                          misma
                                                                                                                                                                                          consola
                                                                                                                                                                                          Web
                                                                                                                                                                                          &nbsp;●
                                                                                                                                                                                              Panel
                                                                                                                                                                                              de
                                                                                                                                                                                              análisis
                                                                                                                                                                                              en
                                                                                                                                                                                              tiempo
                                                                                                                                                                                              real
                                                                                                                                                                                              para
                                                                                                                                                                                              identificar,
                                                                                                                                                                                              tráfico,
                                                                                                                                                                                              amenazas,
                                                                                                                                                                                              acciones
                                                                                                                                                                                              de
                                                                                                                                                                                              mitigación,
                                                                                                                                                                                              exportables
                                                                                                                                                                                              en
                                                                                                                                                                                              formato
                                                                                                                                                                                              PDF
                                                                                                                                                                                              &nbsp;●
                                                                                                                                                                                                  Reportes
                                                                                                                                                                                                  generados
                                                                                                                                                                                                  automáticamente
                                                                                                                                                                                                  en
                                                                                                                                                                                                  los
                                                                                                                                                                                                  que
                                                                                                                                                                                                  se
                                                                                                                                                                                                  incluye
                                                                                                                                                                                                  el
                                                                                                                                                                                                  resumen
                                                                                                                                                                                                  de
                                                                                                                                                                                                  actividad
                                                                                                                                                                                                  por
                                                                                                                                                                                                  día
                                                                                                                                                                                                  &nbsp;●
                                                                                                                                                                                                      Panel
                                                                                                                                                                                                      de
                                                                                                                                                                                                      reportes
                                                                                                                                                                                                      programados
                                                                                                                                                                                                      incluidos
                                                                                                                                                                                                      usuarios
                                                                                                                                                                                                      con
                                                                                                                                                                                                      mayor
                                                                                                                                                                                                      actividad,
                                                                                                                                                                                                      amenazas
                                                                                                                                                                                                      presentes,
                                                                                                                                                                                                      detalles
                                                                                                                                                                                                      de
                                                                                                                                                                                                      filtrado
                                                                                                                                                                                                      URL,
                                                                                                                                                                                                      por
                                                                                                                                                                                                      mencionar
                                                                                                                                                                                                      algunos.
                                                                                                                                                                                                      Todos
                                                                                                                                                                                                      los
                                                                                                                                                                                                      reportes
                                                                                                                                                                                                      pueden
                                                                                                                                                                                                      ser
                                                                                                                                                                                                      generados
                                                                                                                                                                                                      en
                                                                                                                                                                                                      el
                                                                                                                                                                                                      momento
                                                                                                                                                                                                      de
                                                                                                                                                                                                      solicitarlos
                                                                                                                                                                                                      o
                                                                                                                                                                                                      bien
                                                                                                                                                                                                      ser
                                                                                                                                                                                                      calendarizados
                                                                                                                                                                                                      y
                                                                                                                                                                                                      enviados
                                                                                                                                                                                                      por
                                                                                                                                                                                                      correo
                                                                                                                                                                                                      a
                                                                                                                                                                                                      diversas
                                                                                                                                                                                                      listas
                                                                                                                                                                                                      de
                                                                                                                                                                                                      distribución
                                                                                                                                                                                                      en
                                                                                                                                                                                                      diversos
                                                                                                                                                                                                      formatos.
                                                                                                                                                                                                      &nbsp;●
                                                                                                                                                                                                          Interfaces
                                                                                                                                                                                                          multi
                                                                                                                                                                                                          propósito;
                                                                                                                                                                                                          modo
                                                                                                                                                                                                          monitoreo,
                                                                                                                                                                                                          transparente,
                                                                                                                                                                                                          Capa
                                                                                                                                                                                                          2,
                                                                                                                                                                                                          Capa
                                                                                                                                                                                                          3,
                                                                                                                                                                                                          modo
                                                                                                                                                                                                          agregación
                                                                                                                                                                                                          &nbsp;●
                                                                                                                                                                                                              Interfaces
                                                                                                                                                                                                              lógicas;
                                                                                                                                                                                                              túnel,
                                                                                                                                                                                                              Loopback
                                                                                                                                                                                                              &nbsp;●
                                                                                                                                                                                                                  Escalabilidad
                                                                                                                                                                                                                  a
                                                                                                                                                                                                                  sistemas
                                                                                                                                                                                                                  virtuales
                                                                                                                                                                                                                  (segmentación
                                                                                                                                                                                                                  lógica
                                                                                                                                                                                                                  del
                                                                                                                                                                                                                  firewall)
                                                                                                                                                                                                                  disponible
                                                                                                                                                                                                                  con
                                                                                                                                                                                                                  licenciamiento
                                                                                                                                                                                                                  adicional
                                                                                                                                                                                                                  &nbsp;●
                                                                                                                                                                                                                      Capacidad
                                                                                                                                                                                                                      de
                                                                                                                                                                                                                      generar
                                                                                                                                                                                                                      comunicaciones
                                                                                                                                                                                                                      seguras
                                                                                                                                                                                                                      basadas
                                                                                                                                                                                                                      en
                                                                                                                                                                                                                      IPSec
                                                                                                                                                                                                                      para
                                                                                                                                                                                                                      VPN
                                                                                                                                                                                                                      Site-to-Site
                                                                                                                                                                                                                      o
                                                                                                                                                                                                                      bien
                                                                                                                                                                                                                      para
                                                                                                                                                                                                                      usuarios
                                                                                                                                                                                                                      móviles
                                                                                                                                                                                                                      b
                                                                                                                                                                                                                      basadas
                                                                                                                                                                                                                      en
                                                                                                                                                                                                                      SSL
                                                                                                                                                                                                                      basadas
                                                                                                                                                                                                                      en
                                                                                                                                                                                                                      software
                                                                                                                                                                                                                      y/o
                                                                                                                                                                                                                      clientes
                                                                                                                                                                                                                      para
                                                                                                                                                                                                                      usuarios
                                                                                                                                                                                                                      móviles
                                                                                                                                                                                                                      &nbsp;
                                                                                                                                                                                                                          &nbsp;SEGURIDAD:
                                                                                                                                                                                                                              &nbsp;
                                                                                                                                                                                                                                  &nbsp;●
                                                                                                                                                                                                                                      SSL
                                                                                                                                                                                                                                      basadas
                                                                                                                                                                                                                                      en
                                                                                                                                                                                                                                      software
                                                                                                                                                                                                                                      y/o
                                                                                                                                                                                                                                      clientes
                                                                                                                                                                                                                                      para
                                                                                                                                                                                                                                      usuarios
                                                                                                                                                                                                                                      móviles
                                                                                                                                                                                                                                      &nbsp;●
                                                                                                                                                                                                                                          ARP
                                                                                                                                                                                                                                          Spoof
                                                                                                                                                                                                                                          Protection
                                                                                                                                                                                                                                          &nbsp;●
                                                                                                                                                                                                                                              DHCP
                                                                                                                                                                                                                                              Spoof
                                                                                                                                                                                                                                              Protection
                                                                                                                                                                                                                                              &nbsp;●
                                                                                                                                                                                                                                                  Password
                                                                                                                                                                                                                                                  Protection
                                                                                                                                                                                                                                                  (encryption)
                                                                                                                                                                                                                                                  &nbsp;●
                                                                                                                                                                                                                                                      WEB
                                                                                                                                                                                                                                                      based
                                                                                                                                                                                                                                                      Port
                                                                                                                                                                                                                                                      Authentication
                                                                                                                                                                                                                                                      &nbsp;
                                                                                                                                                                                                                                                          &nbsp;
                                                                                                                                                                                                                                                              &nbsp;INCLUYA
                                                                                                                                                                                                                                                                  LICENCIAMIENTO
                                                                                                                                                                                                                                                                  QUE
                                                                                                                                                                                                                                                                  CUBRA
                                                                                                                                                                                                                                                                  LAS
                                                                                                                                                                                                                                                                  SIGUIENTES
                                                                                                                                                                                                                                                                  FUNCIONALIDADES:
                                                                                                                                                                                                                                                                  &nbsp;
                                                                                                                                                                                                                                                                      &nbsp;●
                                                                                                                                                                                                                                                                          El
                                                                                                                                                                                                                                                                          IPS
                                                                                                                                                                                                                                                                          deberá
                                                                                                                                                                                                                                                                          contar
                                                                                                                                                                                                                                                                          con
                                                                                                                                                                                                                                                                          control
                                                                                                                                                                                                                                                                          de
                                                                                                                                                                                                                                                                          acceso
                                                                                                                                                                                                                                                                          por
                                                                                                                                                                                                                                                                          el
                                                                                                                                                                                                                                                                          tipo
                                                                                                                                                                                                                                                                          de
                                                                                                                                                                                                                                                                          aplicación
                                                                                                                                                                                                                                                                          independiente
                                                                                                                                                                                                                                                                          del
                                                                                                                                                                                                                                                                          puerto,
                                                                                                                                                                                                                                                                          protocolo,
                                                                                                                                                                                                                                                                          técnica
                                                                                                                                                                                                                                                                          evasiva
                                                                                                                                                                                                                                                                          o
                                                                                                                                                                                                                                                                          de
                                                                                                                                                                                                                                                                          ocultamiento.
                                                                                                                                                                                                                                                                          &nbsp;●
                                                                                                                                                                                                                                                                              Soporte
                                                                                                                                                                                                                                                                              a
                                                                                                                                                                                                                                                                              métodos
                                                                                                                                                                                                                                                                              de
                                                                                                                                                                                                                                                                              reconocimiento
                                                                                                                                                                                                                                                                              de
                                                                                                                                                                                                                                                                              usuarios
                                                                                                                                                                                                                                                                              entre
                                                                                                                                                                                                                                                                              los
                                                                                                                                                                                                                                                                              cuáles
                                                                                                                                                                                                                                                                              se
                                                                                                                                                                                                                                                                              incluyen
                                                                                                                                                                                                                                                                              el
                                                                                                                                                                                                                                                                              acceso
                                                                                                                                                                                                                                                                              a
                                                                                                                                                                                                                                                                              servicios
                                                                                                                                                                                                                                                                              LDAP
                                                                                                                                                                                                                                                                              como
                                                                                                                                                                                                                                                                              Microsoft
                                                                                                                                                                                                                                                                              Active
                                                                                                                                                                                                                                                                              Directory,
                                                                                                                                                                                                                                                                              OpenLDAP
                                                                                                                                                                                                                                                                              que
                                                                                                                                                                                                                                                                              integre
                                                                                                                                                                                                                                                                              servidores
                                                                                                                                                                                                                                                                              Radius
                                                                                                                                                                                                                                                                              &nbsp;●
                                                                                                                                                                                                                                                                                  Deberá
                                                                                                                                                                                                                                                                                  soportar
                                                                                                                                                                                                                                                                                  reglas
                                                                                                                                                                                                                                                                                  de
                                                                                                                                                                                                                                                                                  seguridad
                                                                                                                                                                                                                                                                                  implementadas
                                                                                                                                                                                                                                                                                  que
                                                                                                                                                                                                                                                                                  reduzcan
                                                                                                                                                                                                                                                                                  riesgos
                                                                                                                                                                                                                                                                                  asociados
                                                                                                                                                                                                                                                                                  con
                                                                                                                                                                                                                                                                                  la
                                                                                                                                                                                                                                                                                  transferencia
                                                                                                                                                                                                                                                                                  de
                                                                                                                                                                                                                                                                                  archivos
                                                                                                                                                                                                                                                                                  y
                                                                                                                                                                                                                                                                                  datos
                                                                                                                                                                                                                                                                                  no
                                                                                                                                                                                                                                                                                  autorizados.
                                                                                                                                                                                                                                                                                  &nbsp;●
                                                                                                                                                                                                                                                                                      Soportará
                                                                                                                                                                                                                                                                                      la
                                                                                                                                                                                                                                                                                      identificación
                                                                                                                                                                                                                                                                                      y
                                                                                                                                                                                                                                                                                      mitigación
                                                                                                                                                                                                                                                                                      de
                                                                                                                                                                                                                                                                                      tráfico
                                                                                                                                                                                                                                                                                      malicioso
                                                                                                                                                                                                                                                                                      originado
                                                                                                                                                                                                                                                                                      por
                                                                                                                                                                                                                                                                                      virus,
                                                                                                                                                                                                                                                                                      malware,
                                                                                                                                                                                                                                                                                      explotación
                                                                                                                                                                                                                                                                                      de
                                                                                                                                                                                                                                                                                      vulnerabilidades
                                                                                                                                                                                                                                                                                      de
                                                                                                                                                                                                                                                                                      protocolos
                                                                                                                                                                                                                                                                                      y
                                                                                                                                                                                                                                                                                      aplicaciones,
                                                                                                                                                                                                                                                                                      acceso
                                                                                                                                                                                                                                                                                      fortuito
                                                                                                                                                                                                                                                                                      o
                                                                                                                                                                                                                                                                                      deliberado
                                                                                                                                                                                                                                                                                      a
                                                                                                                                                                                                                                                                                      sitios
                                                                                                                                                                                                                                                                                      comprometidos,
                                                                                                                                                                                                                                                                                      software
                                                                                                                                                                                                                                                                                      malicioso
                                                                                                                                                                                                                                                                                      embebido
                                                                                                                                                                                                                                                                                      en
                                                                                                                                                                                                                                                                                      archivos
                                                                                                                                                                                                                                                                                      y
                                                                                                                                                                                                                                                                                      aplicaciones
                                                                                                                                                                                                                                                                                      como
                                                                                                                                                                                                                                                                                      correo.
                                                                                                                                                                                                                                                                                      &nbsp;
                                                                                                                                                                                                                                                                                          &nbsp;EL
                                                                                                                                                                                                                                                                                              IPS
                                                                                                                                                                                                                                                                                              DEBERÁ
                                                                                                                                                                                                                                                                                              DE
                                                                                                                                                                                                                                                                                              SOPORTAR
                                                                                                                                                                                                                                                                                              ANÁLISIS
                                                                                                                                                                                                                                                                                              DE:
                                                                                                                                                                                                                                                                                              &nbsp;
                                                                                                                                                                                                                                                                                                  &nbsp;●
                                                                                                                                                                                                                                                                                                      Antivirus
                                                                                                                                                                                                                                                                                                      la
                                                                                                                                                                                                                                                                                                      inspección
                                                                                                                                                                                                                                                                                                      en
                                                                                                                                                                                                                                                                                                      búsqueda
                                                                                                                                                                                                                                                                                                      de
                                                                                                                                                                                                                                                                                                      virus
                                                                                                                                                                                                                                                                                                      se
                                                                                                                                                                                                                                                                                                      realizará
                                                                                                                                                                                                                                                                                                      en
                                                                                                                                                                                                                                                                                                      línea
                                                                                                                                                                                                                                                                                                      sobre
                                                                                                                                                                                                                                                                                                      los
                                                                                                                                                                                                                                                                                                      tres
                                                                                                                                                                                                                                                                                                      servicios
                                                                                                                                                                                                                                                                                                      principales
                                                                                                                                                                                                                                                                                                      de
                                                                                                                                                                                                                                                                                                      propagación
                                                                                                                                                                                                                                                                                                      de
                                                                                                                                                                                                                                                                                                      archivos:
                                                                                                                                                                                                                                                                                                      navegación
                                                                                                                                                                                                                                                                                                      web,
                                                                                                                                                                                                                                                                                                      transferencia
                                                                                                                                                                                                                                                                                                      FTP
                                                                                                                                                                                                                                                                                                      y
                                                                                                                                                                                                                                                                                                      correo
                                                                                                                                                                                                                                                                                                      electrónico.
                                                                                                                                                                                                                                                                                                      &nbsp;●
                                                                                                                                                                                                                                                                                                          Antispyware.
                                                                                                                                                                                                                                                                                                          El
                                                                                                                                                                                                                                                                                                          análisis
                                                                                                                                                                                                                                                                                                          de
                                                                                                                                                                                                                                                                                                          este
                                                                                                                                                                                                                                                                                                          tipo
                                                                                                                                                                                                                                                                                                          de
                                                                                                                                                                                                                                                                                                          malware
                                                                                                                                                                                                                                                                                                          incluirá
                                                                                                                                                                                                                                                                                                          la
                                                                                                                                                                                                                                                                                                          búsqueda
                                                                                                                                                                                                                                                                                                          de
                                                                                                                                                                                                                                                                                                          software
                                                                                                                                                                                                                                                                                                          malintencionado
                                                                                                                                                                                                                                                                                                          como
                                                                                                                                                                                                                                                                                                          secuestro
                                                                                                                                                                                                                                                                                                          de
                                                                                                                                                                                                                                                                                                          archivos
                                                                                                                                                                                                                                                                                                          y
                                                                                                                                                                                                                                                                                                          navegador,
                                                                                                                                                                                                                                                                                                          comando
                                                                                                                                                                                                                                                                                                          remoto
                                                                                                                                                                                                                                                                                                          del
                                                                                                                                                                                                                                                                                                          host,
                                                                                                                                                                                                                                                                                                          captura
                                                                                                                                                                                                                                                                                                          de
                                                                                                                                                                                                                                                                                                          contraseñas,
                                                                                                                                                                                                                                                                                                          robo
                                                                                                                                                                                                                                                                                                          de
                                                                                                                                                                                                                                                                                                          información
                                                                                                                                                                                                                                                                                                          digital
                                                                                                                                                                                                                                                                                                          y
                                                                                                                                                                                                                                                                                                          de
                                                                                                                                                                                                                                                                                                          propósito
                                                                                                                                                                                                                                                                                                          general.
                                                                                                                                                                                                                                                                                                          Esta
                                                                                                                                                                                                                                                                                                          búsqueda
                                                                                                                                                                                                                                                                                                          se
                                                                                                                                                                                                                                                                                                          realizará
                                                                                                                                                                                                                                                                                                          sobre
                                                                                                                                                                                                                                                                                                          todas
                                                                                                                                                                                                                                                                                                          las
                                                                                                                                                                                                                                                                                                          aplicaciones
                                                                                                                                                                                                                                                                                                          y
                                                                                                                                                                                                                                                                                                          protocolos,
                                                                                                                                                                                                                                                                                                          incluso
                                                                                                                                                                                                                                                                                                          si
                                                                                                                                                                                                                                                                                                          viajan
                                                                                                                                                                                                                                                                                                          por
                                                                                                                                                                                                                                                                                                          protocolos
                                                                                                                                                                                                                                                                                                          cifrados,
                                                                                                                                                                                                                                                                                                          siempre
                                                                                                                                                                                                                                                                                                          y
                                                                                                                                                                                                                                                                                                          cuando
                                                                                                                                                                                                                                                                                                          se
                                                                                                                                                                                                                                                                                                          habilite
                                                                                                                                                                                                                                                                                                          el
                                                                                                                                                                                                                                                                                                          descifrado
                                                                                                                                                                                                                                                                                                          SSL.
                                                                                                                                                                                                                                                                                                          &nbsp;●
                                                                                                                                                                                                                                                                                                              Protección
                                                                                                                                                                                                                                                                                                              de
                                                                                                                                                                                                                                                                                                              vulnerabilidad.
                                                                                                                                                                                                                                                                                                              Deberá
                                                                                                                                                                                                                                                                                                              estar
                                                                                                                                                                                                                                                                                                              basado
                                                                                                                                                                                                                                                                                                              en
                                                                                                                                                                                                                                                                                                              firmas,
                                                                                                                                                                                                                                                                                                              esta
                                                                                                                                                                                                                                                                                                              característica
                                                                                                                                                                                                                                                                                                              deberá
                                                                                                                                                                                                                                                                                                              buscar
                                                                                                                                                                                                                                                                                                              patrones
                                                                                                                                                                                                                                                                                                              de
                                                                                                                                                                                                                                                                                                              comportamiento
                                                                                                                                                                                                                                                                                                              en
                                                                                                                                                                                                                                                                                                              protocolos
                                                                                                                                                                                                                                                                                                              y
                                                                                                                                                                                                                                                                                                              aplicaciones
                                                                                                                                                                                                                                                                                                              que
                                                                                                                                                                                                                                                                                                              puedan
                                                                                                                                                                                                                                                                                                              tener
                                                                                                                                                                                                                                                                                                              debilidades
                                                                                                                                                                                                                                                                                                              y
                                                                                                                                                                                                                                                                                                              que
                                                                                                                                                                                                                                                                                                              originen
                                                                                                                                                                                                                                                                                                              una
                                                                                                                                                                                                                                                                                                              brecha
                                                                                                                                                                                                                                                                                                              de
                                                                                                                                                                                                                                                                                                              seguridad.
                                                                                                                                                                                                                                                                                                              &nbsp;●
                                                                                                                                                                                                                                                                                                                  La
                                                                                                                                                                                                                                                                                                                  protección
                                                                                                                                                                                                                                                                                                                  proporcionada
                                                                                                                                                                                                                                                                                                                  por
                                                                                                                                                                                                                                                                                                                  el
                                                                                                                                                                                                                                                                                                                  IPS
                                                                                                                                                                                                                                                                                                                  deberá
                                                                                                                                                                                                                                                                                                                  ser
                                                                                                                                                                                                                                                                                                                  selectiva
                                                                                                                                                                                                                                                                                                                  y
                                                                                                                                                                                                                                                                                                                  total,
                                                                                                                                                                                                                                                                                                                  quedando
                                                                                                                                                                                                                                                                                                                  registrada
                                                                                                                                                                                                                                                                                                                  en
                                                                                                                                                                                                                                                                                                                  bitácoras
                                                                                                                                                                                                                                                                                                                  específicas,
                                                                                                                                                                                                                                                                                                                  por
                                                                                                                                                                                                                                                                                                                  lo
                                                                                                                                                                                                                                                                                                                  que
                                                                                                                                                                                                                                                                                                                  la
                                                                                                                                                                                                                                                                                                                  identificación
                                                                                                                                                                                                                                                                                                                  de
                                                                                                                                                                                                                                                                                                                  un
                                                                                                                                                                                                                                                                                                                  falso
                                                                                                                                                                                                                                                                                                                  positivo
                                                                                                                                                                                                                                                                                                                  podrá
                                                                                                                                                                                                                                                                                                                  ser
                                                                                                                                                                                                                                                                                                                  identificada
                                                                                                                                                                                                                                                                                                                  de
                                                                                                                                                                                                                                                                                                                  manera
                                                                                                                                                                                                                                                                                                                  rápida
                                                                                                                                                                                                                                                                                                                  para
                                                                                                                                                                                                                                                                                                                  poder
                                                                                                                                                                                                                                                                                                                  crear
                                                                                                                                                                                                                                                                                                                  excepciones
                                                                                                                                                                                                                                                                                                                  que
                                                                                                                                                                                                                                                                                                                  habiliten
                                                                                                                                                                                                                                                                                                                  inmediatamente
                                                                                                                                                                                                                                                                                                                  el
                                                                                                                                                                                                                                                                                                                  tráfico.
                                                                                                                                                                                                                                                                                                                  Las
                                                                                                                                                                                                                                                                                                                  actualizaciones
                                                                                                                                                                                                                                                                                                                  deberán
                                                                                                                                                                                                                                                                                                                  ser
                                                                                                                                                                                                                                                                                                                  periódicas,
                                                                                                                                                                                                                                                                                                                  sin
                                                                                                                                                                                                                                                                                                                  interrupción
                                                                                                                                                                                                                                                                                                                  del
                                                                                                                                                                                                                                                                                                                  servicio
                                                                                                                                                                                                                                                                                                                  y
                                                                                                                                                                                                                                                                                                                  podrán
                                                                                                                                                                                                                                                                                                                  ser
                                                                                                                                                                                                                                                                                                                  programadas
                                                                                                                                                                                                                                                                                                                  para
                                                                                                                                                                                                                                                                                                                  ser
                                                                                                                                                                                                                                                                                                                  descargadas
                                                                                                                                                                                                                                                                                                                  e
                                                                                                                                                                                                                                                                                                                  instaladas
                                                                                                                                                                                                                                                                                                                  de
                                                                                                                                                                                                                                                                                                                  manera
                                                                                                                                                                                                                                                                                                                  automática
                                                                                                                                                                                                                                                                                                                  &nbsp;●
                                                                                                                                                                                                                                                                                                                      El
                                                                                                                                                                                                                                                                                                                      IPS
                                                                                                                                                                                                                                                                                                                      también
                                                                                                                                                                                                                                                                                                                      deberá
                                                                                                                                                                                                                                                                                                                      poder
                                                                                                                                                                                                                                                                                                                      realizar
                                                                                                                                                                                                                                                                                                                      un
                                                                                                                                                                                                                                                                                                                      análisis
                                                                                                                                                                                                                                                                                                                      exhaustivo
                                                                                                                                                                                                                                                                                                                      de
                                                                                                                                                                                                                                                                                                                      sitios
                                                                                                                                                                                                                                                                                                                      web,
                                                                                                                                                                                                                                                                                                                      basados
                                                                                                                                                                                                                                                                                                                      en
                                                                                                                                                                                                                                                                                                                      categoría
                                                                                                                                                                                                                                                                                                                      y
                                                                                                                                                                                                                                                                                                                      reputación
                                                                                                                                                                                                                                                                                                                      como
                                                                                                                                                                                                                                                                                                                      medida
                                                                                                                                                                                                                                                                                                                      de
                                                                                                                                                                                                                                                                                                                      control
                                                                                                                                                                                                                                                                                                                      para
                                                                                                                                                                                                                                                                                                                      aumentar
                                                                                                                                                                                                                                                                                                                      la
                                                                                                                                                                                                                                                                                                                      productividad
                                                                                                                                                                                                                                                                                                                      de
                                                                                                                                                                                                                                                                                                                      los
                                                                                                                                                                                                                                                                                                                      usuarios
                                                                                                                                                                                                                                                                                                                      y
                                                                                                                                                                                                                                                                                                                      contrarrestar
                                                                                                                                                                                                                                                                                                                      los
                                                                                                                                                                                                                                                                                                                      riesgos
                                                                                                                                                                                                                                                                                                                      de
                                                                                                                                                                                                                                                                                                                      seguridad
                                                                                                                                                                                                                                                                                                                      por
                                                                                                                                                                                                                                                                                                                      ingreso
                                                                                                                                                                                                                                                                                                                      a
                                                                                                                                                                                                                                                                                                                      sitios
                                                                                                                                                                                                                                                                                                                      comprometidos
                                                                                                                                                                                                                                                                                                                      &nbsp;●
                                                                                                                                                                                                                                                                                                                          El
                                                                                                                                                                                                                                                                                                                          IPS
                                                                                                                                                                                                                                                                                                                          deberá
                                                                                                                                                                                                                                                                                                                          contar
                                                                                                                                                                                                                                                                                                                          con
                                                                                                                                                                                                                                                                                                                          protección
                                                                                                                                                                                                                                                                                                                          contra
                                                                                                                                                                                                                                                                                                                          ataques
                                                                                                                                                                                                                                                                                                                          que
                                                                                                                                                                                                                                                                                                                          son
                                                                                                                                                                                                                                                                                                                          de
                                                                                                                                                                                                                                                                                                                          tipo
                                                                                                                                                                                                                                                                                                                          día
                                                                                                                                                                                                                                                                                                                          cero,
                                                                                                                                                                                                                                                                                                                          o
                                                                                                                                                                                                                                                                                                                          incluso
                                                                                                                                                                                                                                                                                                                          dirigidos,
                                                                                                                                                                                                                                                                                                                          es
                                                                                                                                                                                                                                                                                                                          decir,
                                                                                                                                                                                                                                                                                                                          que
                                                                                                                                                                                                                                                                                                                          están
                                                                                                                                                                                                                                                                                                                          diseñados
                                                                                                                                                                                                                                                                                                                          para
                                                                                                                                                                                                                                                                                                                          pasar
                                                                                                                                                                                                                                                                                                                          los
                                                                                                                                                                                                                                                                                                                          controles
                                                                                                                                                                                                                                                                                                                          de
                                                                                                                                                                                                                                                                                                                          seguridad,
                                                                                                                                                                                                                                                                                                                          lo
                                                                                                                                                                                                                                                                                                                          cual
                                                                                                                                                                                                                                                                                                                          es
                                                                                                                                                                                                                                                                                                                          posible
                                                                                                                                                                                                                                                                                                                          enviando
                                                                                                                                                                                                                                                                                                                          una
                                                                                                                                                                                                                                                                                                                          muestra
                                                                                                                                                                                                                                                                                                                          a
                                                                                                                                                                                                                                                                                                                          la
                                                                                                                                                                                                                                                                                                                          red
                                                                                                                                                                                                                                                                                                                          de
                                                                                                                                                                                                                                                                                                                          inteligencia
                                                                                                                                                                                                                                                                                                                          global
                                                                                                                                                                                                                                                                                                                          el
                                                                                                                                                                                                                                                                                                                          tráfico
                                                                                                                                                                                                                                                                                                                          susceptible
                                                                                                                                                                                                                                                                                                                          a
                                                                                                                                                                                                                                                                                                                          ataques
                                                                                                                                                                                                                                                                                                                          como
                                                                                                                                                                                                                                                                                                                          URL
                                                                                                                                                                                                                                                                                                                          comprometidas
                                                                                                                                                                                                                                                                                                                          y
                                                                                                                                                                                                                                                                                                                          archivos
                                                                                                                                                                                                                                                                                                                          que,
                                                                                                                                                                                                                                                                                                                          aunque
                                                                                                                                                                                                                                                                                                                          se
                                                                                                                                                                                                                                                                                                                          utilicen
                                                                                                                                                                                                                                                                                                                          por
                                                                                                                                                                                                                                                                                                                          aplicaciones
                                                                                                                                                                                                                                                                                                                          seguras,
                                                                                                                                                                                                                                                                                                                          pueden
                                                                                                                                                                                                                                                                                                                          contener
                                                                                                                                                                                                                                                                                                                          software
                                                                                                                                                                                                                                                                                                                          malicioso
                                                                                                                                                                                                                                                                                                                          codificado
                                                                                                                                                                                                                                                                                                                          para
                                                                                                                                                                                                                                                                                                                          no
                                                                                                                                                                                                                                                                                                                          ser
                                                                                                                                                                                                                                                                                                                          detectado,
                                                                                                                                                                                                                                                                                                                          o
                                                                                                                                                                                                                                                                                                                          bien,
                                                                                                                                                                                                                                                                                                                          son
                                                                                                                                                                                                                                                                                                                          de
                                                                                                                                                                                                                                                                                                                          tan
                                                                                                                                                                                                                                                                                                                          reciente
                                                                                                                                                                                                                                                                                                                          creación
                                                                                                                                                                                                                                                                                                                          que
                                                                                                                                                                                                                                                                                                                          no
                                                                                                                                                                                                                                                                                                                          existe
                                                                                                                                                                                                                                                                                                                          una
                                                                                                                                                                                                                                                                                                                          descripción
                                                                                                                                                                                                                                                                                                                          de
                                                                                                                                                                                                                                                                                                                          ataque
                                                                                                                                                                                                                                                                                                                          y
                                                                                                                                                                                                                                                                                                                          uso
                                                                                                                                                                                                                                                                                                                          &nbsp;●
                                                                                                                                                                                                                                                                                                                              El
                                                                                                                                                                                                                                                                                                                              IPS
                                                                                                                                                                                                                                                                                                                              deberá
                                                                                                                                                                                                                                                                                                                              poder
                                                                                                                                                                                                                                                                                                                              realizar
                                                                                                                                                                                                                                                                                                                              un
                                                                                                                                                                                                                                                                                                                              análisis
                                                                                                                                                                                                                                                                                                                              estático
                                                                                                                                                                                                                                                                                                                              y
                                                                                                                                                                                                                                                                                                                              se
                                                                                                                                                                                                                                                                                                                              hace
                                                                                                                                                                                                                                                                                                                              de
                                                                                                                                                                                                                                                                                                                              acuerdo
                                                                                                                                                                                                                                                                                                                              al
                                                                                                                                                                                                                                                                                                                              tipo
                                                                                                                                                                                                                                                                                                                              de
                                                                                                                                                                                                                                                                                                                              archivo
                                                                                                                                                                                                                                                                                                                              y
                                                                                                                                                                                                                                                                                                                              características
                                                                                                                                                                                                                                                                                                                              generales;
                                                                                                                                                                                                                                                                                                                              así
                                                                                                                                                                                                                                                                                                                              como
                                                                                                                                                                                                                                                                                                                              un
                                                                                                                                                                                                                                                                                                                              análisis
                                                                                                                                                                                                                                                                                                                              dinámico,
                                                                                                                                                                                                                                                                                                                              por
                                                                                                                                                                                                                                                                                                                              lo
                                                                                                                                                                                                                                                                                                                              que
                                                                                                                                                                                                                                                                                                                              es
                                                                                                                                                                                                                                                                                                                              evaluado
                                                                                                                                                                                                                                                                                                                              en
                                                                                                                                                                                                                                                                                                                              un
                                                                                                                                                                                                                                                                                                                              ambiente
                                                                                                                                                                                                                                                                                                                              controlado
                                                                                                                                                                                                                                                                                                                              con
                                                                                                                                                                                                                                                                                                                              el
                                                                                                                                                                                                                                                                                                                              objetivo
                                                                                                                                                                                                                                                                                                                              de
                                                                                                                                                                                                                                                                                                                              descubrir
                                                                                                                                                                                                                                                                                                                              el
                                                                                                                                                                                                                                                                                                                              verdadero
                                                                                                                                                                                                                                                                                                                              propósito
                                                                                                                                                                                                                                                                                                                              del
                                                                                                                                                                                                                                                                                                                              archivo
                                                                                                                                                                                                                                                                                                                              analizado
                                                                                                                                                                                                                                                                                                                              &nbsp;●
                                                                                                                                                                                                                                                                                                                                  El
                                                                                                                                                                                                                                                                                                                                  IPS
                                                                                                                                                                                                                                                                                                                                  cuando
                                                                                                                                                                                                                                                                                                                                  menos
                                                                                                                                                                                                                                                                                                                                  deberá
                                                                                                                                                                                                                                                                                                                                  soportar
                                                                                                                                                                                                                                                                                                                                  que
                                                                                                                                                                                                                                                                                                                                  sus
                                                                                                                                                                                                                                                                                                                                  interfaces
                                                                                                                                                                                                                                                                                                                                  trabajen
                                                                                                                                                                                                                                                                                                                                  en
                                                                                                                                                                                                                                                                                                                                  capa
                                                                                                                                                                                                                                                                                                                                  2
                                                                                                                                                                                                                                                                                                                                  y
                                                                                                                                                                                                                                                                                                                                  3
                                                                                                                                                                                                                                                                                                                                  del
                                                                                                                                                                                                                                                                                                                                  modelo
                                                                                                                                                                                                                                                                                                                                  OSI.
                                                                                                                                                                                                                                                                                                                                  En
                                                                                                                                                                                                                                                                                                                                  capa
                                                                                                                                                                                                                                                                                                                                  2
                                                                                                                                                                                                                                                                                                                                  las
                                                                                                                                                                                                                                                                                                                                  interfaces
                                                                                                                                                                                                                                                                                                                                  deberán
                                                                                                                                                                                                                                                                                                                                  actuar
                                                                                                                                                                                                                                                                                                                                  como
                                                                                                                                                                                                                                                                                                                                  un
                                                                                                                                                                                                                                                                                                                                  Switch,
                                                                                                                                                                                                                                                                                                                                  contribuyendo
                                                                                                                                                                                                                                                                                                                                  a
                                                                                                                                                                                                                                                                                                                                  las
                                                                                                                                                                                                                                                                                                                                  mejores
                                                                                                                                                                                                                                                                                                                                  prácticas
                                                                                                                                                                                                                                                                                                                                  de
                                                                                                                                                                                                                                                                                                                                  segmentación
                                                                                                                                                                                                                                                                                                                                  de
                                                                                                                                                                                                                                                                                                                                  red.
                                                                                                                                                                                                                                                                                                                                  En
                                                                                                                                                                                                                                                                                                                                  la
                                                                                                                                                                                                                                                                                                                                  capa
                                                                                                                                                                                                                                                                                                                                  3
                                                                                                                                                                                                                                                                                                                                  la
                                                                                                                                                                                                                                                                                                                                  interface
                                                                                                                                                                                                                                                                                                                                  del
                                                                                                                                                                                                                                                                                                                                  IPS
                                                                                                                                                                                                                                                                                                                                  deberá
                                                                                                                                                                                                                                                                                                                                  estar
                                                                                                                                                                                                                                                                                                                                  operando
                                                                                                                                                                                                                                                                                                                                  como
                                                                                                                                                                                                                                                                                                                                  Router
                                                                                                                                                                                                                                                                                                                                  capaz
                                                                                                                                                                                                                                                                                                                                  de
                                                                                                                                                                                                                                                                                                                                  elegir
                                                                                                                                                                                                                                                                                                                                  la
                                                                                                                                                                                                                                                                                                                                  mejor
                                                                                                                                                                                                                                                                                                                                  forma
                                                                                                                                                                                                                                                                                                                                  de
                                                                                                                                                                                                                                                                                                                                  llegar
                                                                                                                                                                                                                                                                                                                                  a
                                                                                                                                                                                                                                                                                                                                  un
                                                                                                                                                                                                                                                                                                                                  destino.
                                                                                                                                                                                                                                                                                                                                  Así
                                                                                                                                                                                                                                                                                                                                  mismo
                                                                                                                                                                                                                                                                                                                                  deberá
                                                                                                                                                                                                                                                                                                                                  ser
                                                                                                                                                                                                                                                                                                                                  capaz
                                                                                                                                                                                                                                                                                                                                  de
                                                                                                                                                                                                                                                                                                                                  integrar
                                                                                                                                                                                                                                                                                                                                  las
                                                                                                                                                                                                                                                                                                                                  siguientes
                                                                                                                                                                                                                                                                                                                                  características:
                                                                                                                                                                                                                                                                                                                                  &nbsp;•
                                                                                                                                                                                                                                                                                                                                      VPN
                                                                                                                                                                                                                                                                                                                                      para
                                                                                                                                                                                                                                                                                                                                      interconexión
                                                                                                                                                                                                                                                                                                                                      con
                                                                                                                                                                                                                                                                                                                                      sitios
                                                                                                                                                                                                                                                                                                                                      remotos
                                                                                                                                                                                                                                                                                                                                      o
                                                                                                                                                                                                                                                                                                                                      usuarios
                                                                                                                                                                                                                                                                                                                                      móviles
                                                                                                                                                                                                                                                                                                                                      &nbsp;•
                                                                                                                                                                                                                                                                                                                                          Ruteo
                                                                                                                                                                                                                                                                                                                                          dinámico
                                                                                                                                                                                                                                                                                                                                          y
                                                                                                                                                                                                                                                                                                                                          balanceo
                                                                                                                                                                                                                                                                                                                                          estático
                                                                                                                                                                                                                                                                                                                                          de
                                                                                                                                                                                                                                                                                                                                          enlace
                                                                                                                                                                                                                                                                                                                                          -NGFW
                                                                                                                                                                                                                                                                                                                                              (opcional)
                                                                                                                                                                                                                                                                                                                                              -Protección
                                                                                                                                                                                                                                                                                                                                                  de
                                                                                                                                                                                                                                                                                                                                                  acceso
                                                                                                                                                                                                                                                                                                                                                  a
                                                                                                                                                                                                                                                                                                                                                  la
                                                                                                                                                                                                                                                                                                                                                  red
                                                                                                                                                                                                                                                                                                                                                  (opcional)
                                                                                                                                                                                                                                                                                                                                                  -Protección
                                                                                                                                                                                                                                                                                                                                                      de
                                                                                                                                                                                                                                                                                                                                                      acceso
                                                                                                                                                                                                                                                                                                                                                      a
                                                                                                                                                                                                                                                                                                                                                      Internet
                                                                                                                                                                                                                                                                                                                                                      (opcional)
                                                                                                                                                                                                                                                                                                                                                      -Basado
                                                                                                                                                                                                                                                                                                                                                          en
                                                                                                                                                                                                                                                                                                                                                          aplicaciones
                                                                                                                                                                                                                                                                                                                                                          (opcional)
                                                                                                                                                                                                                                                                                                                                                          -IDS
                                                                                                                                                                                                                                                                                                                                                              (opcional)
                                                                                                                                                                                                                                                                                                                                                              -Compatibilidad
                                                                                                                                                                                                                                                                                                                                                                  con
                                                                                                                                                                                                                                                                                                                                                                  SD-WAN
                                                                                                                                                                                                                                                                                                                                                                  (opcional)
                                                                                                                                                                                                                                                                                                                                                                  -Selección
                                                                                                                                                                                                                                                                                                                                                                      dinámica
                                                                                                                                                                                                                                                                                                                                                                      de
                                                                                                                                                                                                                                                                                                                                                                      rutas
                                                                                                                                                                                                                                                                                                                                                                      (opcional)
                                                                                                                                                                                                                                                                                                                                                                      -Alertas
                                                                                                                                                                                                                                                                                                                                                                          configurables
                                                                                                                                                                                                                                                                                                                                                                          por
                                                                                                                                                                                                                                                                                                                                                                          correo
                                                                                                                                                                                                                                                                                                                                                                          electrónico
                                                                                                                                                                                                                                                                                                                                                                          (opcional)
                                                                                                                                                                                                                                                                                                                                                                          -VLAN
                                                                                                                                                                                                                                                                                                                                                                              (opcional)
                                                                                                                                                                                                                                                                                                                                                                              -NAT
                                                                                                                                                                                                                                                                                                                                                                              (opcional)
                                                                                                                                                                                                                                                                                                                                                                              -Creación
                                                                                                                                                                                                                                                                                                                                                                                  de
                                                                                                                                                                                                                                                                                                                                                                                  listas
                                                                                                                                                                                                                                                                                                                                                                                  blancas
                                                                                                                                                                                                                                                                                                                                                                                  y
                                                                                                                                                                                                                                                                                                                                                                                  negras
                                                                                                                                                                                                                                                                                                                                                                                  de
                                                                                                                                                                                                                                                                                                                                                                                  URLs
                                                                                                                                                                                                                                                                                                                                                                                  (opcional)
                                                                                                                                                                                                                                                                                                                                                                                  -Chasis
                                                                                                                                                                                                                                                                                                                                                                                      metálico
                                                                                                                                                                                                                                                                                                                                                                                      19
                                                                                                                                                                                                                                                                                                                                                                                      [in]
                                                                                                                                                                                                                                                                                                                                                                                      (opcional)
                                                                                                                                                                                                                                                                                                                                                                                      -4,000
                                                                                                                                                                                                                                                                                                                                                                                          túneles
                                                                                                                                                                                                                                                                                                                                                                                          VPN
                                                                                                                                                                                                                                                                                                                                                                                          concurrentes
                                                                                                                                                                                                                                                                                                                                                                                          (opcional)
                                                                                                                                                                                                                                                                                                                                                                                          -Ipsec
                                                                                                                                                                                                                                                                                                                                                                                              (GW-GW)
                                                                                                                                                                                                                                                                                                                                                                                              (opcional)
                                                                                                                                                                                                                                                                                                                                                                                              -Sesiones
                                                                                                                                                                                                                                                                                                                                                                                                  concurrentes
                                                                                                                                                                                                                                                                                                                                                                                                  4,000,000
                                                                                                                                                                                                                                                                                                                                                                                                  (opcional)
                                                                                                                                                                                                                                                                                                                                                                                                  -Número
                                                                                                                                                                                                                                                                                                                                                                                                      mínimo
                                                                                                                                                                                                                                                                                                                                                                                                      de
                                                                                                                                                                                                                                                                                                                                                                                                      VLANS
                                                                                                                                                                                                                                                                                                                                                                                                      4,000
                                                                                                                                                                                                                                                                                                                                                                                                      (opcional)
                                                                                                                                                                                                                                                                                                                                                                                                      
                                  </td>
                              </tr>
                              </tbody>
                          </table>

                          <h6>
                              
                          </h6>

                          <h6><strong>NORMAS Y ESTÁNDARES</strong></h6>


<h6>Que el equipo cumpla con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</h6>

                        <h6>Que los accesorios cumplan con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</h6>

                          <h6><strong>MANUALES</strong></h6>

                          <h6>Se debe de entregar manual del equipo para su instalación, configuración y operación en
                              medio</h6>

                          <h6>electrónico y en idioma español.</h6>

                          <h6><strong>GARANTÍA</strong></h6>

                          <h6>Uno a tres años de garantía en repuestos y mano de obra en sitio para todos los elementos
                              descritos.</h6>

                          <h6>Características que deberá cubrir:</h6>

                          <ul>
                              <li>El proveedor se compromete a dar cumplimiento a la garantía.</li>
                              <li>El servicio se prestará en las instalaciones del ente requirente.</li>
                              <li>El tiempo de atención será, como máximo, dos horas.</li>
                              <li>El tiempo de reparación será día siguiente laboralSiexcede este lapso, el proveedor
                                  deberá entregar un equipo de respaldo equivalente mientras se soluciona el problema.
                              </li>
                              <li>Sí la reparación excede de 30 días naturales, el proveedor entregará a cambio un
                                  equipo nuevo con las características iguales al adquirido u otro equipo de mayores
                                  características.
                              </li>
                          </ul>

                          <h6>Requerimientos de servicio:</h6>

                          <ul>
                              <li>El procedimiento de recepción de reportes y atención de fallas de los equipos.</li>
                              <li>Se debe de indicar una línea telefónica del fabricante o centro de &nbsp;atención
                                  telefónica certificado o aprobado por el fabricante sin costo de llamada para el
                                  usuario, como uno de los canales para hacer efectiva la garantía.
                              </li>
                              <li>Se debe de especificar un correo electrónico de atención, como uno de los canales para
                                  hacer efectiva la garantía.
                              </li>
                          </ul>

                          <h6>
                              
                          </h6>

                          <h6><strong>CONSIDERACIONES &nbsp;PARA EL PROCEDIMIENTO DE ADQUISICIÓN:</strong></h6>

                          <h6>Es estricta responsabilidad del Ente Requirente, como parte funcional &nbsp; durante el
                              procedimiento de adquisición de estos componentes tecnológicos, el considerar todas las
                              cartas respectivas que den &nbsp;soporte &nbsp;al proceso y aseguren el respaldo de los
                              fabricantes de los &nbsp;mismos, en &nbsp;cuanto a especificaciones técnicas, vicios
                              ocultos y &nbsp;condiciones de &nbsp;garantía. La ADBC no tiene responsabilidad alguna
                              por &nbsp;alguna deficiencia &nbsp;administrativa en este sentido.</h6>

                      </div>
                  </Accordion.Body>
              </Accordion.Item>
          </Accordion>

        <hr style={{  borderColor:'#eeeeee' }}/>
          <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                  <Accordion.Header><h2> FIREWALL Y ROUTER PARA SERVICIOS UNIFICADOS</h2></Accordion.Header>
                  <Accordion.Body>
                      <div >
                          <h6><strong>Válido a partir del 14 de Agosto de 2023.</strong></h6>

                          <h6><strong>Estatus:&nbsp;</strong>Vigente &nbsp; &nbsp;</h6>

                          <h6><strong>Categoría</strong>: Estándares Técnicos de Redes Informáticas</h6>

                          <ol>
                              <li>Excepto donde se indique, todos los requerimientos son mínimos.</li>
                              <li>Característica técnicas iguales o &nbsp;mayores a &nbsp;las aquí listadas, son
                                  válidas.
                              </li>
                              <li>Las máquinas deben pertenecer a la línea de negocios del fabricante.</li>
                          </ol>

                          <table className="table table-striped table-bordered">
                              <tbody>
                              <tr>
                                  <td><strong>Estándar</strong></td>
                                  <td><strong>Características técnicas</strong></td>
                              </tr>
                              <tr>
                                  <td ><strong>Router</strong></td>
                                  <td >Banda: 5, 2.4 Ghz
                                      Transferencia: Wlan 240 Mbits
                                          Ethernet Lan Fast Ethernet
                                              Cantidad de antenas: 2
                                                  Ganancia de antena: 5 dBi
                                                      Puertos RJ-45: 4&nbsp;</td>
                              </tr>
                              <tr>
                                  <td ><strong>Router para Servidores Unificados</strong></td>
                                  <td >Point-to-Point Tunneling Protocol : PPTP de hasta 25
                                      conexiones
                                      Puertos: Wan Gigabit Ethernet duales
                                          Servidor DHCP
                                              IPSec IKEv1 e IKEv2
                                                  Compatibilidad: con modem 3G/4G
                                                      Firewall
                                                          Funciones UTM
                                                              VPN
                                                                  De 16 puertos LAN en adelante
                                                                      De 2 puertos WAN en adelante
                                                                          1 puerto de consola
                                                                              2 puertos USB en adelante</td>
                              </tr>
                              </tbody>
                          </table>

                          <h6>
                              
                          </h6>

                          <h6><strong>NORMAS Y ESTÁNDARES</strong></h6>


<h6>Que el equipo cumpla con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</h6>

                        <h6>Que los accesorios cumplan con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</h6>

                          <h6><strong>MANUALES</strong></h6>

                          <h6>Se debe de entregar manual del equipo para su instalación, configuración y operación en
                              medio</h6>

                          <h6>electrónico y en idioma español.</h6>

                          <h6><strong>GARANTÍA</strong></h6>

                          <h6>Uno a tres años de garantía en repuestos y mano de obra en sitio para todos los elementos
                              descritos.</h6>

                          <h6>Características que deberá cubrir:</h6>

                          <ul>
                              <li>El proveedor se compromete a dar cumplimiento a la garantía.</li>
                              <li>El servicio se prestará en las instalaciones del ente requirente.</li>
                              <li>El tiempo de atención será, como máximo, dos horas.</li>
                              <li>El tiempo de reparación será día siguiente laboralSiexcede este lapso, el proveedor
                                  deberá entregar un equipo de respaldo equivalente mientras se soluciona el problema.
                              </li>
                              <li>Sí la reparación excede de 30 días naturales, el proveedor entregará a cambio un
                                  equipo nuevo con las características iguales al adquirido u otro equipo de mayores
                                  características.
                              </li>
                          </ul>

                          <h6>Requerimientos de servicio:</h6>

                          <ul>
                              <li>El procedimiento de recepción de reportes y atención de fallas de los equipos.</li>
                              <li>Se debe de indicar una línea telefónica del fabricante o centro de &nbsp;atención
                                  telefónica certificado o aprobado por el fabricante sin costo de llamada para el
                                  usuario, como uno de los canales para hacer efectiva la garantía.
                              </li>
                              <li>Se debe de especificar un correo electrónico de atención, como uno de los canales para
                                  hacer efectiva la garantía.
                              </li>
                          </ul>

                          <h6>
                              
                          </h6>

                          <h6><strong>CONSIDERACIONES &nbsp;PARA EL PROCEDIMIENTO DE ADQUISICIÓN:</strong></h6>

                          <h6>Es estricta responsabilidad del Ente Requirente, como parte funcional &nbsp; durante el
                              procedimiento de adquisición de estos componentes tecnológicos, el considerar todas las
                              cartas respectivas que den &nbsp;soporte &nbsp;al proceso y aseguren el respaldo de los
                              fabricantes de los &nbsp;mismos, en &nbsp;cuanto a especificaciones técnicas, vicios
                              ocultos y &nbsp;condiciones de &nbsp;garantía. La ADBC no tiene responsabilidad alguna
                              por &nbsp;alguna deficiencia &nbsp;administrativa en este sentido.</h6>
                      </div>
                  </Accordion.Body>
              </Accordion.Item>
          </Accordion>

        <hr style={{  borderColor:'#eeeeee' }}/>
          <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                  <Accordion.Header><h2>TELÉFONOS IP</h2></Accordion.Header>
                  <Accordion.Body>
                      <div >
                          <h6><strong>Válido a partir del 14 de Agosto de 2023.</strong>                          </h6>

                          <h6><strong>Estatus:&nbsp;</strong>Vigente &nbsp; &nbsp;</h6>

                          <h6><strong>Categoría</strong>: Estándares Técnicos de Redes Informáticas</h6>

                          <ol>
                              <li>Excepto donde se indique, todos los requerimientos son mínimos.</li>
                              <li>Característica técnicas iguales o &nbsp;mayores a &nbsp;las aquí listadas, son
                                  válidas.
                              </li>
                              <li>Las máquinas deben pertenecer a la línea de negocios del fabricante.</li>
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
                                  <td >Teléfono IP&nbsp;</td>
                                  <td >Altavoz
                                      Enchufe de entrada de CC
                                          Llamada en espera
                                              Capacidad de transferencia de llamada
                                                  Llamada en conferencia.
                                                      Guía de configuración rápida.
                                                          Capacidad de registro de al menos 200 direcciones.
                                                              Capacidad de lista de al menos 100 llamadas.
                                                                  Pantalla LCD.
                                                                      Manual de usuario.
                                                                          Intercomunicador.
                                                                              Protocolos de gestión: RFC3261,
                                                                                  TCP/IP/UDP, RTP/RTCP, HTTP/HTTPS,
                                                                                  ARP/RARP, ICMP, DNS, DHCP, PPPoE, SSH,
                                                                                  TFTṔ, NTP, STUN, SIMPLE, LLDPMED,
                                                                                  LDAP, TR-069, 802.1x, TLS, SRTP
                                                                                  Idioma de interfaz en español o
                                                                                      inglés Interfaz
                                                                                      -Gigabit Ethernet (opcional)
                                                                                          -Puerto de entrada y
                                                                                              puerto para conectar a la
                                                                                              red un equipo de cómputo
                                                                                              (opcional)
                                                                                              -Identificador de
                                                                                                  llamada (opcional)
                                                                                                  -Directorio
                                                                                                      telefónico para
                                                                                                      almacenar
                                                                                                      contactos de forma
                                                                                                      interna (opcional)
                                                                                                      -Software de
                                                                                                          gestión para
                                                                                                          altas bajas y
                                                                                                          cambios de
                                                                                                          servicios de
                                                                                                          voz (opcional)
                                                                                                          
                                  </td>
                              </tr>
                              </tbody>
                          </table>

                          <h6>
                              
                          </h6>

                          <h6><strong>NORMAS Y ESTÁNDARES</strong></h6>


<h6>Que el equipo cumpla con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</h6>

                        <h6>Que los accesorios cumplan con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</h6>

                          <h6><strong>MANUALES</strong></h6>

                          <h6>Se debe de entregar manual del equipo para su instalación, configuración y operación en
                              medio</h6>

                          <h6>electrónico y en idioma español.</h6>

                          <h6><strong>GARANTÍA</strong></h6>

                          <h6>Uno a tres años de garantía en repuestos y mano de obra en sitio para todos los elementos
                              descritos.</h6>

                          <h6>Características que deberá cubrir:</h6>

                          <ul>
                              <li>El proveedor se compromete a dar cumplimiento a la garantía.</li>
                              <li>El servicio se prestará en las instalaciones del ente requirente.</li>
                              <li>El tiempo de atención será, como máximo, dos horas.</li>
                              <li>El tiempo de reparación será día siguiente laboralSiexcede este lapso, el proveedor
                                  deberá entregar un equipo de respaldo equivalente mientras se soluciona el problema.
                              </li>
                              <li>Sí la reparación excede de 30 días naturales, el proveedor entregará a cambio un
                                  equipo nuevo con las características iguales al adquirido u otro equipo de mayores
                                  características.
                              </li>
                          </ul>

                          <h6>Requerimientos de servicio:</h6>

                          <ul>
                              <li>El procedimiento de recepción de reportes y atención de fallas de los equipos.</li>
                              <li>Se debe de indicar una línea telefónica del fabricante o centro de &nbsp;atención
                                  telefónica certificado o aprobado por el fabricante sin costo de llamada para el
                                  usuario, como uno de los canales para hacer efectiva la garantía.
                              </li>
                              <li>Se debe de especificar un correo electrónico de atención, como uno de los canales para
                                  hacer efectiva la garantía.
                              </li>
                          </ul>

                          <h6>
                              
                          </h6>

                          <h6><strong>CONSIDERACIONES &nbsp;PARA EL PROCEDIMIENTO DE ADQUISICIÓN:</strong></h6>

                          <h6>Es estricta responsabilidad del Ente Requirente, como parte funcional &nbsp; durante el
                              procedimiento de adquisición de estos componentes tecnológicos, el considerar todas las
                              cartas respectivas que den &nbsp;soporte &nbsp;al proceso y aseguren el respaldo de los
                              fabricantes de los &nbsp;mismos, en &nbsp;cuanto a especificaciones técnicas, vicios
                              ocultos y &nbsp;condiciones de &nbsp;garantía. La ADBC no tiene responsabilidad alguna
                              por &nbsp;alguna deficiencia &nbsp;administrativa en este sentido.</h6>

                      </div>
                  </Accordion.Body>
              </Accordion.Item>
          </Accordion>

        <hr style={{  borderColor:'#eeeeee' }}/>
          <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                  <Accordion.Header><h2>RADIOS WALKIE TALKIE</h2></Accordion.Header>
                  <Accordion.Body>
                      <div >
                          <h6><strong>Válido a partir del 14 de Agosto de 2023.</strong></h6>

                          <h6><strong>Estatus:&nbsp;</strong>Vigente &nbsp; &nbsp;</h6>

                          <h6><strong>Categoría</strong>: Estándares Técnicos de Redes Informáticas</h6>

                          <ol>
                              <li>Excepto donde se indique, todos los requerimientos son mínimos.</li>
                              <li>Característica técnicas iguales o &nbsp;mayores a &nbsp;las aquí listadas, son
                                  válidas.
                              </li>
                              <li>Las máquinas deben pertenecer a la línea de negocios del fabricante.</li>
                          </ol>

                          <h6>
                              
                          </h6>

                          <table className="table table-striped table-bordered">
                              <tbody>
                              <tr>
                                  <td><strong>Estándar</strong>
                                  </td>
                                  <td ><strong>Características
                                      técnicas</strong></td>
                              </tr>
                              <tr>
                                  <td ><strong>Radios Walkie Tarkie</strong></td>
                                  <td >Alimentación: 3.7 Vcc
                                      Rango de frecuencia: UHF 400-470MHz
                                          Canales: 16 o más
                                              Espacio de canales: 12.5 kHz
                                                  Transmisor: UHF
                                                      Modulo de modulación: FM</td>
                              </tr>
                              </tbody>
                          </table>

                          <h6>
                              
                          </h6>

                          <h6><strong>NORMAS Y ESTÁNDARES</strong></h6>


<h6>Que el equipo cumpla con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</h6>

                        <h6>Que los accesorios cumplan con el estándar de Calidad ISO 9001:2000 ó NMX equiparable.</h6>

                          <h6><strong>MANUALES</strong></h6>

                          <h6>Se debe de entregar manual del equipo para su instalación, configuración y operación en
                              medio</h6>

                          <h6>electrónico y en idioma español.</h6>

                          <h6><strong>GARANTÍA</strong></h6>

                          <h6>Uno a tres años de garantía en repuestos y mano de obra en sitio para todos los elementos
                              descritos.</h6>

                          <h6>Características que deberá cubrir:</h6>

                          <ul>
                              <li>El proveedor se compromete a dar cumplimiento a la garantía.</li>
                              <li>El servicio se prestará en las instalaciones del ente requirente.</li>
                              <li>El tiempo de atención será, como máximo, dos horas.</li>
                              <li>El tiempo de reparación será día siguiente laboralSiexcede este lapso, el proveedor
                                  deberá entregar un equipo de respaldo equivalente mientras se soluciona el problema.
                              </li>
                              <li>Sí la reparación excede de 30 días naturales, el proveedor entregará a cambio un
                                  equipo nuevo con las características iguales al adquirido u otro equipo de mayores
                                  características.
                              </li>
                          </ul>

                          <h6>Requerimientos de servicio:</h6>

                          <ul>
                              <li>El procedimiento de recepción de reportes y atención de fallas de los equipos.</li>
                              <li>Se debe de indicar una línea telefónica del fabricante o centro de &nbsp;atención
                                  telefónica certificado o aprobado por el fabricante sin costo de llamada para el
                                  usuario, como uno de los canales para hacer efectiva la garantía.
                              </li>
                              <li>Se debe de especificar un correo electrónico de atención, como uno de los canales para
                                  hacer efectiva la garantía.
                              </li>
                          </ul>

                          <h6>
                              
                          </h6>

                          <h6><strong>CONSIDERACIONES &nbsp;PARA EL PROCEDIMIENTO DE ADQUISICIÓN:</strong></h6>

                          <h6>Es estricta responsabilidad del Ente Requirente, como parte funcional &nbsp; durante el
                              procedimiento de adquisición de estos componentes tecnológicos, el considerar todas las
                              cartas respectivas que den &nbsp;soporte &nbsp;al proceso y aseguren el respaldo de los
                              fabricantes de los &nbsp;mismos, en &nbsp;cuanto a especificaciones técnicas, vicios
                              ocultos y &nbsp;condiciones de &nbsp;garantía. La ADBC no tiene responsabilidad alguna
                              por &nbsp;alguna deficiencia &nbsp;administrativa en este sentido.</h6>
                      </div>
                  </Accordion.Body>
              </Accordion.Item>
          </Accordion>
        <hr style={{  borderColor:'#eeeeee' }}/>
    </Container>
  )
}

export default EstandarRedesInformaticas
