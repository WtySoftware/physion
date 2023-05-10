import logo from './img/logo.png'
import microstart from './img/microstar2.png'
import lateralIzq from './img/lateral-Izq.png'
import lateralDer from './img/lateral-der.png'
import one from './img/one.png'
import two from './img/two.png'
import three from './img/three.png'
import four from './img/four.png'
import five from './img/five.png'
import sistema from './img/sistema.png'

import './App.css';


function App() {
  return (
    <>
      <header class="container-fluid parallaHeader fade ">
        <div class="container-fluid menu">
          <nav class="container">
          <div className='row justify-content-between pt-4'>

            <div className='nav col-2' >
              <img className="img-fluid" src={logo} alt=''/>
            </div>
            <div className='col-6'>
              <ul className="nav mt-3 menu">
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
        </div>
        <div class="row hero">
          <div class="col-7 mx-auto text-center align-self-center">
            <h1>PHYSION TECNOLOGÍA NUCLEAR</h1>
            <hr/>
            <p>Somos una empresa dedicada a la prestación de servicios y soluciones en protección radiológica, especializados en la  medición de la dosis equivalente causadas por radiaciones ionizantes (rayos X y materiales radiactivos) que pueden ser recibidas por  los trabajadores ocupacionalmente expuestos, ambiente y público,  en sectores como salud e industria. Así mismo somos especialistas en higiene ocupacional y medición de  radiaciones no ionizantes, específicamente en mediciones de campo electromagnético</p>
          </div>
        </div>
      </header>

      <div class="container mt-3 fade">
        <div id="s1" class="row dosimetría">
          <div class="col-7 align-self-center">
            <h6 class="bluetitle">NOS ESPECIALIZAMOS EN</h6>
            <h1> <span class="lightFont">DOSÍMETRIA POR LUMINISCENCIA</span> <br/> ÓPTICAMENTE ESTIMULADA OSL</h1>
            <p>Es un dosímetro de vanguardia basado en tecnología OSL (luminiscencia por estimulación óptica), el cual funciona mediante la lectura de cuatro cristales de óxido de aluminio previamente irradiado por medio de luz altamente energética. Utilizamos la tecnología más moderna que existe en Venezuela y el mundo.</p>
          </div>
          <div class="col-5">
            <img class="img-fluid" src={microstart} alt=''/>
          </div>
        </div>
        <div class="row text-center mt-5">
          <div class="col-6">
            <h2>Dosimetría individual</h2>
            <span class="blueLine"></span>
            <p class="space">Englobamos dentro de este término la estimación de la dosis equivalente, profunda y superficial, que recibe un trabajador profesionalmente expuesto, obtenida mediante la lectura del dosímetro asignado y llevado por la persona durante toda su jornada laboral. El servicio ofrecido es mensual y los dosímetros asignados están debidamente etiquetados incluyendo tanto los datos del usuario como un código de barras único que permite la trazabilidad del mismo.</p>
          </div>
            <div class="col-6">
            <h2>Ventajas de la dosímetria OSL</h2>
            <span class="blueLine"></span>
            <p class="space">Mayor sensibilidad que los sistemas TLD y el de película. <br/>
            La posibilidad de la re-lectura a petición del cliente o por simple verificación, es decir las dosis pueden ser leídas varias veces y el cristal no se borra, siendo imposible con el sistema TLD. <br/>
            Mayor resistencia y durabilidad que los sistemas basados en TLD.</p>
          </div>
        </div>
      </div>
      <div class="ancho fade">
          <img class="wavesIzq" src={lateralIzq} alt=''/>
          <img class="wavesDer" src={lateralDer} alt=''/>
      </div>

      <div id="s2" class="container text-center my-5 ">
        <h1 class="servi">Otros Servicios</h1>
        <div class="row ">

          <div class="col-4 px-3">
            <img class="img-fluid" src={one} alt=''/>
            <h3>Evaluación de Campo Electromagnético</h3>
            <span class="blueLine"></span>
            <p>El personal de Physion tecnología nuclear C.A se encuentra certificado como Oficial de Seguridad en Radiaciones No Ionizantes y disponemos de equipos NARDA de última generación para realizar evaluaciones de campo electromagnético y velar por el cumplimiento de la NVC2238 y la providencia 581 de CONATEL de obligatorio cumplimiento.</p>
          </div>
          <div class="col-4 px-3">
            <img class="img-fluid" src={two} alt=''/>
            <h3 >Higiene Ocupacional</h3>
            <span class="blueLine"></span>
            <p> Physion tecnología nuclear C.A., cuenta con múltiples equipos de última generación para realizar evaluaciones de riesgos ocupacionales, entre los cuáles podemos destacar: ruido,iluminación, temperatura, polvos, vapores orgánicos, etc...</p>
          </div>
          <div class="col-4 px-3">
            <img class="img-fluid" src={three} alt=''/>
            <h3>Cálculo de Blindaje</h3>
            <span class="blueLine"></span>
            <p>Estamos en la capacidad de realizar análisis y cálculo de blindajes para ambientes donde se utilicen equipos generadores de radiaciones ionizantes. Se realizan los cálculos tomando en cuenta la Seguridad Radiológica del área, ofreciendo distintas posibilidades y materiales para acometer el proyecto. Es importante señalar que este cálculo aparte de ser obligatorio por ley, permite optimizar la compra del material y disminuir gastos.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-4 offset-2 px-3">
            <img class="img-fluid" src={four} alt=''/>
            <h3>Levantamiento Radiométrico</h3>
            <span class="blueLine"></span>
            <p>Utilizando equipos de última generación, estamos en la capacidad de realizar todas las mediciones sobre las barreras a fin de garantizar un blindaje adecuado de los ambientes de trabajo. El objetivo es evaluar los niveles de exposición ocupacionales y para el público, con el objeto de verificar el cumplimiento de las normas que rigen la materia.</p>
          </div>
          <div class="col-4 px-3">
            <img class="img-fluid" src={five} alt=''/>
            <h3>Adiestramiento</h3>
            <span class="blueLine"></span>
            <p>Estamos en la capacidad de dictar los 
            siguientes cursos presenciales:
            <ul>
              <li class="mb-2"><i>Taller de emergencias radiológicas.</i></li>
              <li class="mb-2"><i>Protección radiológica 24 horas 
              en radio diagnóstico.</i></li>
              <li class="mb-2"><i>Protección radiológica 40 horas para 
              oficial de seguridad radiológica (OSR).</i></li>
              <li class="mb-2"><i>Protección radiológica 24 horas 
              en radio diagnóstico.</i></li>

              
            </ul>
            </p>
          </div>
        </div>
      </div>

      <div class="row parallaxBlue text-center m-0 fade">
        <div class="col-7 mx-auto align-self-center">
          <h1>Prestamos servicio a nivel nacional</h1>
          <hr/>
          <p>Nuestros equipos son de última tecnología OSL,  fabricados y calibrados por LANDAUER INC. <br/>
          
          Realizamos calibraciones e intercomparaciones con el LSCD IVIC y LSCD de Recife, Brasil.
          </p>
        </div>
      </div>	

      <div class="container-fluid fade">
        <div class="row sis">
          <div class="col-6 p-0">
            <img class="img-fluid" src={sistema} alt=''/>
          </div>
          <div class="col-6 text-center align-self-center">
            <h5>Próximamente</h5>
            <span class="blueLine"></span>
            <h2>Contaremos con un sistema de control <br/> de informes automatizado para <br/>nuestros clientes</h2>

          </div>
        </div> 
      </div>

      <div id="s3" class="container-fluid parallaxFooter text-center fade">
        <div class="row ">
          <div class="col-7 mx-auto align-self-center">
            <p class="m-0">¿Hay algo específico que le gustaría saber?</p>
            <h1 class="display-1 m-0 titleFooter">Contáctanos</h1>
            <p>Si tiene alguna duda o pregunta, no dude en contactarnos. <br/>
            Estamos aquí para ayudarlo y asegurarnos de que tenga una asistencia completa. </p>
            <p>Escríbenos por:</p>
            <button class="btn-transparent">Whatsapp</button>
            <button class="btn-transparent">Correo</button>
          </div>
        </div>
      </div>

      <footer class="container-fluid text-center pie fade">
        <p class="derechos">Todos los derechos reservados a <b>PHYSION TECNOLOGIA NUCLEAR C.A.</b></p>
        <p>Web Desarrollada por <b>Web Technology Software</b></p>
      </footer>

    </>
  );
}

export default App;
