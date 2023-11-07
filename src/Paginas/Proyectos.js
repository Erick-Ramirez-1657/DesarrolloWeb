import React from 'react';
// Importación de CSS e Imagenes
import './CSSPaginas.css';

function Proyectos() {
  return (
    <div className="container">
      <h2>Mis Proyectos</h2>

      {/* Contenido de "Proyectos" */}
      <div className="proyecto">
        <h3>Desarrollo de Componente de Seguridad</h3>
        <p>Con un grupo de compañeros y en general en la clase se realizaron diversos apartados siendo uno de ellos el de seguridad, 
          en el cual forme parte con otros 4 compañeros, el objetivo de este componente era el de crear un area de seguridad el cual 
          pueda validar a los usuarios que entran al sistema, conocer la actividad de dicho usuario, asignacion de roles, categorias, 
          asignacion de areas, etc. En el siguiente enlace se encuentra el proyecto de github.
        </p>
        <ul>
          <li><a href="https://github.com/Erick-Ramirez-1657/proyectoads22023GESTION_COMERCIAL.git">Proyecto de Componente de Seguridad</a></li>
        </ul>
      </div>

      <div className="proyecto">
        <h3>Desarrollo de modulos de Gestion Comercial</h3>
        <p>De dicho grupo de la clase se reasignaron a diferentes grupos en el cual me correspondio junto a 3 personas 
          el modulo de Gestion Comercial, el cual puede ver datos de cliente, ingreso de productos, cotizacion, facturacion, 
          pedidos y movimiento de cliestes y proveedores. El enlace es el mismo puesto que es parte de un general mayor, el link 
          es el siguiente.
        </p>
        <ul>
          <li><a href="https://github.com/Erick-Ramirez-1657/proyectoads22023GESTION_COMERCIAL.git">Proyecto de Modulo de Gestion Comercial</a></li>
        </ul>
      </div>
      </div>
  );
}

export default Proyectos;
