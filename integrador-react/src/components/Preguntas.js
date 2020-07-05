import React from "react";
import { useSelector } from "react-redux";

const Preguntas = ({ contenido }) => {
  const respuesta = useSelector((state) => state.respuesta.respuesta);

  const { opciones, idpregunta } = contenido;

  const { idopcion } = opciones[0];

  const idopcion2 = opciones[1].idopcion;

  const { opcion } = opciones[0];

  const opcion2 = opciones[1].opcion;

  const cambioOpcion = (idOpcion) => {
    const idCuestionario = localStorage.getItem("idCuestionario");
    const idUsuario = localStorage.getItem("id");
    for (let index = 0; index <= respuesta.length; index++) {
      if (index + 1 === idpregunta) {
        respuesta[index] = {
          idCuestionario: idCuestionario,
          idPregunta: idpregunta,
          idOpcion: idOpcion,
          id: idUsuario,
        };
      }
    }
  };

  return (
    <>
      <div className="form-group subtitulo-formulario mb-4">
        <label className="texto-formulario mb-4">
          <strong>.</strong>
          {contenido.pregunta}
        </label>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="radio"
            name={`pregunta${idpregunta}`}
            id={`opcionpregunta${idpregunta}${idopcion2}`}
            value={idopcion2}
            onChange={() => cambioOpcion(idopcion2)}
          />
          <label
            className="form-check-label"
            htmlFor={`opcionpregunta${idpregunta}${idopcion2}`}
          >
            {opcion2}
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name={`pregunta${idpregunta}`}
            id={`opcionpregunta${idpregunta}${idopcion}`}
            value={idopcion}
            onChange={() => cambioOpcion(idopcion)}
          />
          <label
            className="form-check-label"
            htmlFor={`opcionpregunta${idpregunta}${idopcion}`}
          >
            {opcion}
          </label>
        </div>
      </div>
    </>
  );
};

export default Preguntas;
