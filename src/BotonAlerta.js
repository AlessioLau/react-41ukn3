import React, { props } from 'react';

/*
Para pasar propiedades a traves de Parent Child se utilizan props 
Objeto para pasar propiedades
Importante la funcion anonima para los eventos
OnClick={() => DevolverMesaje(props.mensaje)} Hace que la funcion DevolverMesaje se enlace al evento OnCLick
*/
function BotonAlerta(props) {
  function DevolverMensaje(msg) {
    console.log(msg);
    window.alert(msg);
  }
  return (
    <div>
      <h1>INSERTE TEXTO</h1>
      <input
        type="button"
        value={props.text}
        onClick={() =>
          DevolverMensaje(!props.mensaje ? 'SIN MENSAJE JAJA' : props.mensaje)
        }
      />
      <button
        onClick={() =>
          DevolverMensaje(!props.mensaje ? 'SIN MENSAJE JAJA' : props.mensaje)
        }
      >
        {props.text}
      </button>
    </div>
  );
}

export default BotonAlerta;
