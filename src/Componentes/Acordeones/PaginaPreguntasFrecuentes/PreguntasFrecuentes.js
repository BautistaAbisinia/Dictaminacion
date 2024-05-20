import React from 'react'
import {Accordion, Container} from "react-bootstrap";
import './PreguntasFrecuentes.css';

const PreguntasFrecuentes = () => {

    const faqs = [
        {
            question: '¿Qué es la dictaminación?',
            answer: 'La dictaminación es el procedimiento mediante el cual la Agencia Digital autoriza o deniega la asignación de recursos públicos destinados a un proyecto específico que involucra directamente Tecnologías de la Información y Comunicaciones.\n'
        },
        {
            question: '¿Qué es la Revisión Técnica?',
            answer: 'Análisis y resolución que realiza la agencia digital respecto de las solicitudes de autorización, dictamen técnico, aceptación de baja o visto bueno de los Entes Públicos para la adquisición, arrendamiento, contrataciones, baja, traspaso o transferencia, de bienes o de servicios en materia de TIC;\nSe gestiona para contratar la adquisición, arrendamiento de bienes o prestación de servicios en materia de TIC, así como para traspasar, donar, recibir donaciones, transferir y/o dar de baja bienes y/o servicios de TIC, los Entes Públicos deberán presentar sus proyectos ante la Agencia Digital para su revisión técnica, a través de los mecanismos siguientes: Autorización, Dictamen Técnico, Visto Bueno y Aceptación de Baja. (Artículo 8, L.G.T.E.B.C.)\n'
        },
        {
            question: '¿Qué es una Autorización?',
            answer: 'Determinación favorable que deberán obtener los Entes Públicos para la adquisición y arrendamiento de bienes de TIC que se ajusten a los Estándares Técnicos emitidos por la Agencia Digital. (Fracc. I, Artículo 9, L.G.T.E.B.C.)\n' +
                'El plazo de atención es de 10 días.\n'
        },
        {
            question: '¿Qué es un Dictamen Técnico?',
            answer: 'Determinación favorable que deberán obtener los Entes Públicos para la contratación de la adquisición, arrendamiento de bienes o prestación de servicios en materia de TIC que no se encuentren previstos en los Estándares Técnicos. (Fracc. II, Artículo 9, L.G.T.E.B.C.)\nEl plazo de atención es de 15 días.\n'
        },
        {
            question: '¿Qué es un Visto Bueno?',
            answer: 'Determinación favorable que deberán obtener los Entes Públicos para el traspaso, transferencia o donación de bienes y/o servicios en materia de TIC´s, (Fracc. III, Artículo 9, L.G.T.E.B.C.)\nEl plazo de atención es de 20 días.\n'
        },
        {
            question: '¿Qué es una Aceptación de Baja?',
            answer: 'Determinación favorable que deberán obtener los Entes Públicos para realizar la baja y disposición final de bienes de TIC. (Fracc. IV, Artículo 9, L.G.T.E.B.C.)\nEl plazo de atención es de 10 días.\n'
        },
        {
            question: '¿Quiénes están obligados a solicitar dictamen técnico?',
            answer: 'Aquellos individuos que ocupen la posición de coordinador o responsable de informática en una entidad perteneciente al poder ejecutivo del estado de Baja California, son los responsables de solicitar el dictamen técnico.\n'
        },
        {
            question: '¿Quiénes están exentos de solicitar dictamen técnico?',
            answer: 'Aquellos individuos que carezcan de la capacidad o conocimientos técnicos necesarios para cumplir con esta obligación.\n'
        },
        {
            question: '¿Cuáles son los requisitos para solicitar un dictamen técnico?',
            answer: 'Dependiendo del proceso que se pretenda llevar a cabo, se debe acceder al enlace correspondiente dentro de los trámites y descargar el formulario respectivo. Luego, es necesario completar dicho formulario con la información técnica requerida y satisfacer los requisitos indispensables según el trámite. Los pasos a seguir se encuentran detallados en los enlaces de los cuatro tipos de procesos disponibles: Solicitud de Autorización, Solicitud de Dictaminación, Solicitud de Visto Bueno y Solicitud de Aceptación de Baja, todos bajo la competencia de la Agencia Digital de Baja California.\n'
        },
        {
            question: '¿En qué período se emite el dictamen?',
            answer: 'El período de emisión del dictamen varía según el tipo de proceso:\n' +
                'Solicitud de Autorización: 10 días hábiles.\n' +
                'Solicitud de Dictaminación: 15 días hábiles.\n' +
                'Solicitud de Visto Bueno: 20 días hábiles.\n' +
                'Solicitud de Aceptación de Baja: 10 días hábiles.\n'
        },

        {
            question: '¿Dónde puedo encontrar los formularios para presentar mi solicitud de dictamen?',
            answer: (

                <>
                    <p  style={{ fontSize: '26px' }} >Los formularios se encuentran disponibles en la página web del trámite, en hipervínculos. También es posible acceder a ellos mediante los siguientes enlaces:</p>
                    <ul>
                        <li><a href="https://drive.google.com/uc?id=1rHMhkfHkkN2quPpLYX9HnSCOfjNRLFRv&export=download&authuser=0" download>Formato de Solicitud de Autorización</a></li>
                        <li><a href="https://drive.google.com/uc?id=1lJmO4UiCe4GE5XyMEvg2TF16EDWxgh51&export=download&authuser=0" download>Formato de Solicitud de Dictamen Técnico</a></li>
                        <li><a href="https://drive.google.com/uc?id=1pMdjDIinSHB4pCDH06to5b_XHXExNdMi&export=download&authuser=0" download>Formato de Solicitud de Visto Bueno</a></li>
                        <li><a href="https://drive.google.com/uc?id=1buQB6Oy_CnDi-Hz9s1iyyglu5W_HcaZz&export=download&authuser=0" download>Formato de Solicitud de Aceptación de Baja</a></li>
                    </ul>
                </>

            )
        },
        {
            question: '¿Cuál es el marco normativo aplicable y los criterios para emitir un dictamen?',
            answer: 'Los criterios y regulaciones pertinentes se encuentran en los lineamientos de gobernanza tecnológica, disponibles en el siguiente enlace: Lineamientos de Gobernanza Tecnológica.'
        },
        {
            question: '¿Qué ocurre si se emite un Dictamen NO favorable?',
            answer: ' En todos los procesos, se enviará una notificación por correo electrónico a la dirección proporcionada por el solicitante al inicio del trámite de dictaminación. En esta comunicación se expondrán los motivos de la decisión desfavorable, y se proporcionarán las indicaciones necesarias para enmendar los aspectos necesarios a fin de obtener un dictamen favorable en el futuro.'
        },

        // Agrega información de más preguntas frecuentes aquí
    ];

  return (
      <Container>

          <Container>
              <hr style={{  borderColor:'#eeeeee' }}/>
              <div>
                  <h2>Preguntas Frecuentes</h2>
                  <h3>Aquí puedes encontrar las preguntas frecuentes</h3>
              </div>
              <hr style={{  borderColor:'#eeeeee' }}/>
          </Container>

          {faqs.map((faq, index) => (
              <Container key={index}>
                  <hr style={{ borderColor:'#eeeeee' }}/>
                  <Accordion className="my-accordion" defaultActiveKey="0">
                      <Accordion.Item eventKey={index.toString()}>
                          <Accordion.Header><h2>{index + 1}.-{faq.question}</h2></Accordion.Header>
                          <Accordion.Body>
                              {typeof faq.answer === 'string' ? faq.answer.split('\n').map((line, index) => (
                                  <p key={index} style={{ fontSize: '26px' }}>{line}</p>
                              )) : faq.answer}
                          </Accordion.Body>
                      </Accordion.Item>
                  </Accordion>
              </Container>
          ))}

          <hr style={{  borderColor:'#eeeeee' }}/>

          <Container>
            <hr style={{  borderColor:'#eeeeee' }}/>
          </Container>

          {/*
          <hr style={{  borderColor:'#eeeeee' }}/>
          <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                  <Accordion.Header><h2>
                      1.- ¿Qué es la dictaminación?</h2></Accordion.Header>
                  <Accordion.Body>

                  </Accordion.Body>
              </Accordion.Item>
          </Accordion>
          <hr style={{  borderColor:'#eeeeee' }}/>

          <hr style={{  borderColor:'#eeeeee' }}/>
          <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                  <Accordion.Header><h2>2.- ¿Quienes deben solicitar dictamen técnico?</h2></Accordion.Header>
                  <Accordion.Body>

                  </Accordion.Body>
              </Accordion.Item>
          </Accordion>
          <hr style={{  borderColor:'#eeeeee' }}/>

          <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                  <Accordion.Header><h2>3.- </h2></Accordion.Header>
                  <Accordion.Body>

                  </Accordion.Body>
              </Accordion.Item>
          </Accordion>
          <hr style={{  borderColor:'#eeeeee' }}/>

          <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                  <Accordion.Header><h2>4.- </h2></Accordion.Header>
                  <Accordion.Body>

                  </Accordion.Body>
              </Accordion.Item>
          </Accordion>
          <hr style={{  borderColor:'#eeeeee' }}/>

          <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                  <Accordion.Header><h2>5.- </h2></Accordion.Header>
                  <Accordion.Body>

                  </Accordion.Body>
              </Accordion.Item>
          </Accordion>
          <hr style={{  borderColor:'#eeeeee' }}/>

          <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                  <Accordion.Header><h2>6.- </h2></Accordion.Header>
                  <Accordion.Body>

                  </Accordion.Body>
              </Accordion.Item>
          </Accordion>
          <hr style={{  borderColor:'#eeeeee' }}/>

          <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                  <Accordion.Header><h2>7.- </h2></Accordion.Header>
                  <Accordion.Body>

                  </Accordion.Body>
              </Accordion.Item>
          </Accordion>
          <hr style={{  borderColor:'#eeeeee' }}/>

          */}
      </Container>

  )
}

export default PreguntasFrecuentes
