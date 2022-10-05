import React from "react";
import '../estilo-componentes/boton.css'


function Boton (props) {

  const operador = valor => {
    return isNaN(valor) && (valor != '=') && (valor != '.')
  };

  return(
    <button className={`boton ${operador(props.children) ? 'operador' : null}`}
     onClick={() => props.handleClick(props.children)}>
        
      {props.children}
      </button>
  )
};

export default Boton;