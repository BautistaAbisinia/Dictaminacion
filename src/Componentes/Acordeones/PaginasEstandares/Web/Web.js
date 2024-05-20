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
         <h2 className="encabezadoEstandar">Estándares para el Desarrollo de Software de Aplicativos WEB</h2><br/>
         <h5 style={{textAlign:'justify'}}> El desarrollo ágil de aplicaciones web y móviles se ha convertido en un pilar fundamental para brindar servicios gubernamentales eficientes, accesibles y seguros en este contexto la necesidad de contar con una infraestructura de desarrollo robusta y versátil se vuelve esencial.
            Nuestro estandar ha sido diseñado con un enfoque específico en las particularidades de las agencias gubernamentales, abordando desafíos únicos, como la seguridad de datos, la accesibilidad y la interoperabilidad con sistemas heredados.
            Este estandar representa un paso significativo hacia la modernización y la mejora de la prestación de servicios. Invitamos a todos los interesados, desde desarrolladores y diseñadores hasta responsables de TI y directivos, a explorar este documento.</h5>
        </div>
      </Container>

      <hr style={{  borderColor:'#eeeeee' }}/>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header><h2>REQUERIMIENTOS PARA DESARROLLO WEB</h2></Accordion.Header>
          <Accordion.Body>
            <div className='Text'>
                <ol>
                    <li>PHP 7 o superior</li>
                    <li>MySQL 5.6 o MariaDB 10 o superior a través del controlador MySQLi.</li>
                    <li>PostgreSQL a través del controlador Postgre</li>
                    <li>SQLite3 a través del controlador SQLite3</li>
                    <li>MSSQL a través del controlador SQLSRV</li>
                    <li>CodeIgniter v4 o Superior</li>
                </ol>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr style={{  borderColor:'#eeeeee' }}/>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header><h2>CARACTERISTICAS Y FUNCIONALIDADES</h2></Accordion.Header>
          <Accordion.Body>
            <div className='Text'>
                <ul>
                    <li><strong>Estructura MVC (Modelo-Vista-Controlador): </strong>Permite separar la lógica de negocio, la presentación y la interacción con la base de datos en componentes independientes. Esta separación facilita el mantenimiento y la reutilización del código.</li>
                    <li><strong>Motor de enrutamiento: </strong>Permite definir rutas de URL para acceder a diferentes controladores y métodos de manera eficiente.</li>
                    <li><strong>Biblioteca de controladores y helpers: </strong> Son esenciales, ya que simplifican tareas comunes como la manipulación de formularios, la validación de datos, el manejo de sesiones, el envío de correos electrónicos y la gestión de archivos.</li>
                    <li> <strong>Interacción con bases de datos: </strong> 
                      Capa de abstracción que admite múltiples sistemas de gestión de bases de datos, incluyendo MySQL, PostgreSQL, SQLite y Oracle. Esto facilita la ejecución de consultas y transacciones de manera segura y con una sintaxis sencilla.</li>
                    <li><strong>Seguridad: </strong>Reforzar con medidas contra amenazas comunes, como ataques XSS (Cross-Site Scripting) y CSRF (Cross-Site Request Forgery), además de incluir funciones para la validación de formularios y la filtración de datos.</li>
                    <li><strong>Flexibilidad: </strong>Llevar una organización del código y los recursos es crucial, ya que no se impone una estructura de directorios rígida. Esto permite a los desarrolladores organizar sus proyectos de la manera que consideren más conveniente.</li>
                </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr style={{  borderColor:'#eeeeee' }}/>
    </Container>
  )
}

export default Ducteria
