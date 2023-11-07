import React from 'react';
// Importación de CSS e Imagenes
import './Menu.css';

function Menu({ changePage }) {
  return (
    <div className="menu">
      <ul>
        <li>
          <button className="botmen" onClick={() => changePage('Inicio')}>Inicio</button>
        </li>
        <li>
          <button className="botmen" onClick={() => changePage('SobreMi')}>Sobre Mi</button>
        </li>
        <li>
          <button className="botmen" onClick={() => changePage('Proyectos')}>Proyectos</button>
        </li>
        <li>
          <button className="botmen" onClick={() => changePage('Contacto')}>Contacto</button>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
