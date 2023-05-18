import {useEffect, useState} from 'react'
import Loading from './AppLoading.js'
import logo from './img/logo.png'
import microstart from './img/microstar2.png'
import lateralIzq from './img/lateral-Izq.png'
import lateralDer from './img/lateral-der.png'
import one from './img/one.png'
import two from './img/two.png'
import three from './img/three.png'
import four from './img/four.png'
import five from './img/five.png'
import ReactWhatsapp from 'react-whatsapp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import './App.css'

import Logo from './logo.js'

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula una carga asincrónica, puedes reemplazar esto con tus propias llamadas o lógica de carga
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Cambia el valor de tiempo según tus necesidades
  }, []);

  if (isLoading) {
    return <Loading />;
  }


  return (
    <>
        
      <header className="container-fluid parallaHeader fade ">
     
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand" href="#a"><Logo/> </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav menu">
              <li className="nav-item">
                <a className="nav-link" href="#s1">Tecnología OSL</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#s2">Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#s3">Contáctanos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled"  href="#s">Ingresa</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>




        <div className="row hero">
          <div className="col-lg-7 col-md-10 col-sm-12 col-sx-12 mx-auto text-center align-self-center">
            <h1>PHYSION TECNOLOGÍA NUCLEAR</h1>
            <hr/>
            <p>Somos una empresa dedicada a la prestación de servicios y soluciones en protección radiológica, especializados en la  medición de la dosis equivalente causadas por radiaciones ionizantes (rayos X y materiales radiactivos) que pueden ser recibidas por  los trabajadores ocupacionalmente expuestos, ambiente y público,  en sectores como salud e industria. Así mismo somos especialistas en higiene ocupacional y medición de  radiaciones no ionizantes, específicamente en mediciones de campo electromagnético</p>
          </div>
        </div>
      </header>

      <div className="container mt-3 fade">
        <div id="s1" className="row dosimetría">

          <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12 align-self-center">
            <h6 className="bluetitle">NOS ESPECIALIZAMOS EN</h6>
            <h1 className='title'> <span className="lightFont">DOSÍMETRIA POR LUMINISCENCIA</span> <br/> ÓPTICAMENTE ESTIMULADA OSL</h1>
            <p className='title'>Es un dosímetro de vanguardia basado en tecnología OSL (luminiscencia por estimulación óptica), el cual funciona mediante la lectura de cuatro cristales de óxido de aluminio previamente irradiado por medio de luz altamente energética. Utilizamos la tecnología más moderna que existe en Venezuela y el mundo.</p>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
            <img className="img-fluid" src={microstart} alt=''/>
          </div>

        </div>
        <div className="row text-center mt-5">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-5">
            <h2>Dosimetría individual</h2>
            <span className="blueLine"></span>
            <p className="space">Englobamos dentro de este término la estimación de la dosis equivalente, profunda y superficial, que recibe un trabajador profesionalmente expuesto, obtenida mediante la lectura del dosímetro asignado y llevado por la persona durante toda su jornada laboral. El servicio ofrecido es mensual y los dosímetros asignados están debidamente etiquetados incluyendo tanto los datos del usuario como un código de barras único que permite la trazabilidad del mismo.</p>
          </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-5">
            <h2>Ventajas de la dosímetria OSL</h2>
            <span className="blueLine"></span>
            <p className="space">Mayor sensibilidad que los sistemas TLD y el de película. <br/>
            La posibilidad de la re-lectura a petición del cliente o por simple verificación, es decir las dosis pueden ser leídas varias veces y el cristal no se borra, siendo imposible con el sistema TLD. <br/>
            Mayor resistencia y durabilidad que los sistemas basados en TLD.</p>
          </div>
        </div>
      </div>
      <div className="ancho fade">
          <img className=" wavesIzq" src={lateralIzq} alt=''/>
          <img className="wavesDer" src={lateralDer} alt=''/>
      </div>

      <div id="s2" className="container text-center my-5 ">
        <h1 className="servi">Otros Servicios</h1>
        <div className="row ">

          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 px-3">
            <img className="img-fluid" src={one} alt=''/>
            <h3>Evaluación de Campo Electromagnético</h3>
            <span className="blueLine"></span>
            <p>El personal de Physion tecnología nuclear C.A se encuentra certificado como Oficial de Seguridad en Radiaciones No Ionizantes y disponemos de equipos NARDA de última generación para realizar evaluaciones de campo electromagnético y velar por el cumplimiento de la NVC2238 y la providencia 581 de CONATEL de obligatorio cumplimiento.</p>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 px-3">
            <img className="img-fluid" src={two} alt=''/>
            <h3 >Higiene Ocupacional</h3>
            <span className="blueLine"></span>
            <p> Physion tecnología nuclear C.A., cuenta con múltiples equipos de última generación para realizar evaluaciones de riesgos ocupacionales, entre los cuáles podemos destacar: ruido,iluminación, temperatura, polvos, vapores orgánicos, etc...</p>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 px-3">
            <img className="img-fluid" src={three} alt=''/>
            <h3>Cálculo de Blindaje</h3>
            <span className="blueLine"></span>
            <p>Estamos en la capacidad de realizar análisis y cálculo de blindajes para ambientes donde se utilicen equipos generadores de radiaciones ionizantes. Se realizan los cálculos tomando en cuenta la Seguridad Radiológica del área, ofreciendo distintas posibilidades y materiales para acometer el proyecto. Es importante señalar que este cálculo aparte de ser obligatorio por ley, permite optimizar la compra del material y disminuir gastos.</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 px-3">
            <img className="img-fluid" src={four} alt=''/>
            <h3>Levantamiento Radiométrico</h3>
            <span className="blueLine"></span>
            <p>Utilizando equipos de última generación, estamos en la capacidad de realizar todas las mediciones sobre las barreras a fin de garantizar un blindaje adecuado de los ambientes de trabajo. El objetivo es evaluar los niveles de exposición ocupacionales y para el público, con el objeto de verificar el cumplimiento de las normas que rigen la materia.</p>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 px-3">
            <img className="img-fluid" src={five} alt=''/>
            <h3>Adiestramiento</h3>
            <span className="blueLine"></span>
            <p>Estamos en la capacidad de dictar los 
            siguientes cursos presenciales:
            </p>
            <ul>
              <li className="mb-2"><i>Taller de emergencias radiológicas.</i></li>
              <li className="mb-2"><i>Protección radiológica 24 horas 
              en radio diagnóstico.</i></li>
              <li className="mb-2"><i>Protección radiológica 40 horas para 
              oficial de seguridad radiológica (OSR).</i></li>
              <li className="mb-2"><i>Protección radiológica 24 horas 
              en radio diagnóstico.</i></li>

              
            </ul>
          </div>
        </div>
      </div>

      <div className="row parallaxBlue text-center m-0 fade">
        <div className="col-lg-8 col-md-10 col-sm-12 col-xs-12 mx-auto align-self-center">
          <h1>Prestamos servicio a nivel nacional</h1>
          <hr/>
          <p>Nuestros equipos son de última tecnología OSL,  fabricados y calibrados por LANDAUER INC. <br/>
          
          Realizamos calibraciones e intercomparaciones con el LSCD IVIC y LSCD de Recife, Brasil.
          </p>
        </div>
      </div>	

      <div className="container-fluid fade">
        <div className="row sis">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 p-0 bgSis">
            
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center align-self-center p-5">
            <h5>Próximamente</h5>
            <span className="blueLine"></span>
            <h2>Contaremos con un sistema de control <br/> de informes automatizado para <br/>nuestros clientes</h2>

          </div>
        </div> 
      </div>

      <div id="s3" className="container-fluid parallaxFooter text-center fade">
        <div className="row p-5">
          <div className="col-lg-8 col-md-10 col-sm-12 col-xs-12  mx-auto align-self-center">
            <p className="m-0">¿Hay algo específico que le gustaría saber?</p>
            <h1 className="display-1 m-0 titleFooter">Contáctanos</h1>
            <p>Si tiene alguna duda o pregunta, no dude en contactarnos. <br/>
            Estamos aquí para ayudarlo y asegurarnos de que tenga una asistencia completa. </p>
            <p>Escríbenos por:</p>
            <ReactWhatsapp className="btn-transparent" number="+58-412-9089286" message="" >WhatsApp <FontAwesomeIcon icon={faWhatsapp} size="1x"/></ReactWhatsapp>
           
          
            <div className='row mt-5'>
              <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-3'>
                <FontAwesomeIcon icon={faPhone} size="2x"/> <br />
                <span> <b>02122397680</b></span>
              </div>
              <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-3'>
              <FontAwesomeIcon icon={faInstagram} size="2x"/> <br />
                <a className='insta' href='https://www.instagram.com/physiontecnologianuclear/'> <b> @physiontecnologianuclear</b></a>
              </div>
              <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-3'>
               <FontAwesomeIcon icon={faEnvelope} size="2x"/> <br />
                <span> <b> physiontec@gmail.com </b></span> 
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="container-fluid text-center pie fade">
        <div className='row justify-content-between'>
          <div className="col-5">
            <p className="derechos">Todos los derechos reservados a <b>PHYSION TECNOLOGIA NUCLEAR C.A.</b></p>
          </div>
          <div className="col-5">
            <p className="derechos"> Web Desarrollada por <a href="https://webtechnologysoftware.com/">Web Technology Software</a></p>
          </div>
        </div>

        
       
      </footer>

    </>
  );
}

export default App;
