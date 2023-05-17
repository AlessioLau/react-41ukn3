import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

//JSX JavaScript extendido (mezcla de js con html)
//busca en el index.html el elemento root (que es un div)
const rootElement = document.getElementById('root');
//crea un objeto para insertarle los elementos a partir del metodo render
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>HOLA</h1>
    <App />
  </StrictMode>
);
