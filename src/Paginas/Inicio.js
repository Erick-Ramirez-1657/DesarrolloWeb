import React from 'react';
// Importación de CSS e Imagenes
import './CSSPaginas.css';

function Inicio({ImagenPerfil, ImagenProyecto, ImagenContacto}) {
  return (
    <div className="container">
      <h2>¡Bienvenido a mi pagina web!</h2>
      <p>A continuacion podras ver informacion acerca de mi</p>

      {/* Contenido de "Sobre Mi" */}
      <div className='textodiv'>
        <h3>Sobre Mí</h3>
        <p>Me llamo Erick Arturo Ramirez Ortiz, actualmente soy estudiante de la universidad Mariano Galvez
           de la carrera de Ingenieria en Ciencias y Sistemas, actualmente me encuentro realizando practicas
           para la empresa Bayer y estoy deseoso de seguir aprendiendo.
        </p>
      </div>
      <div className='imagenedit'>
        <img src={ImagenPerfil} alt="Fotografía de Presentación" style={{ width: "100px", height: "auto", borderRadius: "25%"}}/>
      </div>

      {/* Contenido de "Proyectos" */}
      <div className='textodiv'>
        <h3>Mis Proyectos</h3>
        <p>Cuanto con algunos proyectos los cuales pueden dar una mejor idea a como he aplicado mis conocimientos
          a lo largo de mis estudios, espero puedas tomarte el tiempo de verlos y conocer los lenguajes con los 
          que he programado
        </p>
      </div>
      <div className='imagenedit'>
        <img src={ImagenProyecto} alt="Introducción al Proyecto" style={{ width: "100px", height: "auto", borderRadius: "25%"}}/>
      </div>

      {/* Contenido de "Contacto*" */}
      <div className='textodiv'>
        <h3>Contacto</h3>
        <p>Si gustas contactarme para algun tipo de proyecto estoy dispuesto a ello, ten en cuenta que sigo siendo 
          un novato en el ambito profesional pero estoy dispuesto a aprender.
        </p>
      </div>
      <div className='imagenedit'>
        <img src={ImagenContacto} alt="Introducción a Contacto" style={{ width: "100px", height: "auto", borderRadius: "25%"}}/>
      </div>
    </div>
  );
}

export default Inicio;