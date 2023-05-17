import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import BotonAlerta from './BotonAlerta';

import App from './App';

/*
Dos maneras de trabajar con react
1ª con componentes funcionales que es la que vamos a usar
Un componente es un archivo

Angular y React trabajan con un DOM Virtual
SIGNAL es una tecnologia que no necesita DOM Virtual para modificar el DOM
*/

//JSX JavaScript extendido (mezcla de js con html)
//busca en el index.html el elemento root (que es un div)
const rootElement = document.getElementById('root');
//crea un objeto para insertarle los elementos a partir del metodo render
const root = createRoot(rootElement);

root.render(
  //Componentes simpre con 1ª letra mayus por la sintaxis de angular
  //Siempre debe tener un root para funcionar o en su defecto envolver todo en un div
  <StrictMode>
    <h1>HOLA</h1>
    <BotonAlerta mensaje="QUEEEEEEEEEEEEEEEEEEEEEEEE" text="DDS" />
    <BotonAlerta mensaje="QUEEEEEEEEEEEEEEEEEEEEEEEE" text="OLA" />
    <BotonAlerta text="SIN MENSAJE" />
    <App />
  </StrictMode>
);
