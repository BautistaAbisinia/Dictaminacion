import React from 'react'
import {Accordion, Container} from "react-bootstrap";

const Movil = () => {
  return (
      <Container className="custom-accordion">
        <style>
            {
                `
                h4{
                    text-align: justify;
                },
                h6{
                    text-align: justify;
                }
                `
            }
        </style>
      <hr style={{  borderColor:'#eeeeee' }}/>
      <Container>
        <div>
         <h2 className="encabezadoEstandar">Estándares para el desarrollo de software de aplicativos Móviles</h2><br/>
         <h5 style={{textAlign:'justify'}}> El desarrollo ágil de aplicaciones web y móviles se ha convertido en un pilar fundamental para brindar servicios gubernamentales eficientes, accesibles y seguros en este contexto la necesidad de contar con una infraestructura de desarrollo robusta y versátil se vuelve esencial.
            Nuestro estandar ha sido diseñado con un enfoque específico en las particularidades de las agencias gubernamentales, abordando desafíos únicos, como la seguridad de datos, la accesibilidad y la interoperabilidad con sistemas heredados.
            Este estandar representa un paso significativo hacia la modernización y la mejora de la prestación de servicios. Invitamos a todos los interesados, desde desarrolladores y diseñadores hasta responsables de TI y directivos, a explorar este documento.</h5>
        </div>
      </Container>
            
      <hr style={{  borderColor:'#eeeeee' }}/>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header><h2>REQUERIMIENTOS PARA DESARROLLO MOVIL</h2></Accordion.Header>
          <Accordion.Body>
          <div className='Text'>
                <h6 style={{textAlign:'justify'}}>El propósito fundamental de estos estándares es ofrecer a los desarrolladores una herramienta poderosa y fácil de usar que potencie la eficiencia en el desarrollo de aplicaciones móviles con Flutter. 

                Desde la autenticación segura hasta la integración con servicios externos, el estándar aspira a ser un compañero confiable para crear aplicaciones innovadoras y de alto rendimiento.</h6><br/>
                <ol>
                    <li>Sistema operativo: macOS, versión 10.14 (Mojave) o posterior.</li>
                    <li>Espacio en disco: 2.8 GB (no incluye espacio en disco para el IDE/herramientas).</li>
                    <li>Herramientas: Flutter utiliza git para la instalación y actualización. Recomendamos
                        instalar Xcode, que incluye git, pero también puedes instalar git por separado.</li>
                    <li>IDE Android Studio</li>
                    <li>Flutter SDK</li>
              </ol>
              <h6><strong>Importante: </strong>Si estás instalando en una Mac con Apple Silicon, debes tener disponible el entorno de traducción Rosetta para algunas herramientas auxiliares.</h6>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr style={{  borderColor:'#eeeeee' }}/>

      <hr style={{  borderColor:'#eeeeee' }}/>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header><h2>CARACTERISTICAS EN EL DESARROLLO DE APLICACIONES MÓVILES.</h2></Accordion.Header>
          <Accordion.Body>
            <div className='Text'>

                <ul style={{textAlign:'justify'}}>
                    <li>
                        <strong>Autenticación de Usuarios: </strong>Para garantizar la seguridad y controlar el acceso a las funcionalidades de las aplicaciones.
                    </li>
                    <li>
                        <strong>Admob: </strong>Permitirá la monetización de la aplicación mediante la incorporación de anuncios publicitarios.
                    </li>
                    <li>
                        <strong> Dashboards: </strong>Desarrollar dashboards intuitivos para proporcionar a los usuarios una visión general de estadísticas y datos relevantes.
                    </li>
                    <li>
                        <strong>SQLite: </strong>Sistema de gestión de bases de datos local para el almacenamiento de datos de forma eficiente.
                    </li>
                    <li>
                        <strong>RestAPI service: </strong>Para la comunicación con servidores externos y el intercambio de datos.
                    </li>
                    <li>
                        <strong>Firebase: </strong>Plataforma integral para la autenticación, almacenamiento de datos en tiempo real (Firestore), y almacenamiento de archivos (Firebase Storage).
                    </li>
                </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr style={{  borderColor:'#eeeeee' }}/>

      <hr style={{  borderColor:'#eeeeee' }}/>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header><h2>ARQUITECTURA</h2></Accordion.Header>
          <Accordion.Body>
            <div className='Text'>

                <ol style={{textAlign:'justify'}}>
                    <li>Flutter es un kit de herramientas de interfaz de usuario multiplataforma diseñado para permitir
                        la reutilización de código en sistemas operativos como iOS y Android, al mismo tiempo que
                        permite que las aplicaciones se comuniquen directamente con los servicios subyacentes de la
                        plataforma. El objetivo es permitir a los desarrolladores ofrecer aplicaciones de alto rendimiento
                        que se sientan naturales en diferentes plataformas, adoptando las diferencias donde existan, al
                        tiempo que comparten la mayor cantidad de código posible.
                    </li>
                    <li>Durante el desarrollo, las aplicaciones de Flutter se ejecutan en una máquina virtual que ofrece
                        una recarga rápida y en caliente de los cambios sin necesidad de una recompilación completa.
                        Para la versión final, las aplicaciones de Flutter se compilan directamente a código de máquina,
                        ya sea instrucciones Intel x64 o ARM, o JavaScript si el objetivo es la web. El marco es de código
                        abierto, con una licencia BSD permisiva, y cuenta con un próspero ecosistema de paquetes de
                        terceros que complementan la funcionalidad básica de la biblioteca.
                    </li>
                    <li>Flutter está diseñado como un sistema extensible y en capas. Existe como una serie de
                        bibliotecas independientes que dependen cada una de la capa subyacente. Ninguna capa tiene
                        acceso privilegiado a la capa inferior, y cada parte del nivel del marco está diseñada para ser
                        opcional y reemplazable.
                </li>
                </ol>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr style={{  borderColor:'#eeeeee' }}/>
    </Container>
  )
}

export default Movil
