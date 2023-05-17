import React from "react";
import "./style.css";

//export default importante para exportar componentes puede ir al final de la funcion
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

function App() {
  return (
    <h1>Bienvenidos a Desarrollo de Software!</h1>
    );
}
export default App;

function App() {
  return (
     <div className="mt-4 p-5 rounded" style={{backgroundColor:"lightgray"}} >
        <h1>Pymes 2023</h1>
        <p>Este ejemplo está desarrollado con las siguientes tecnologías:</p>
        <p>
          Backend: NodeJs, Express , WebApiRest, Swagger, Sequelize, Sqlite y 
          múltiples capas en Javascript.
        </p>
        <p>
          Frontend: Single Page Application, HTML, CSS, Bootstrap, NodeJs,
          Javascript y React.
        </p>
        <button className="btn btn-lg btn-primary">
          <i className="fa fa-search"> </i>
          Ver Articulos Familias
        </button>
      </div>
  );
}
export default App;