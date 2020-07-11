import React from "react";
import "./Respuestas.css";
const Respuestas = ({ contenido }) => {
  return (
    <>
      <div>
        <p className="texto-formulario">
          {contenido.pregunta.idpregunta}){contenido.pregunta.pregunta}
        </p>
      </div>
      <div>
        <p className="texto-formulario">
          <strong>.</strong>
          {contenido.opcion.opcion}
        </p>
      </div>
    </>
  );
};

export default Respuestas;
