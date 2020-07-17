import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setearRespuesta } from "../actions/cuestionarioAction";

const Preguntas = ({ contenido, index }) => {
  const dispatch = useDispatch();

  const respuesta = useSelector((state) => state.respuesta.respuesta);

  const { opciones, idpregunta } = contenido;

  const idopcion1 = opciones[0].idopcion;

  const idopcion2 = opciones[1].idopcion;

  const { opcion } = opciones[0];

  const opcion2 = opciones[1].opcion;

  const handleChange = (idOpcion) => {
    const idCuestionario = Number(localStorage.getItem("idCuestionario"));
    const idUsuario = Number(localStorage.getItem("id"));
    // obj de pregunta en pag actual: contenido
    const neww = {
      idpregunta: contenido.idpregunta,
      idcuestionario: idCuestionario,
      idusuario: idUsuario,
      idopcion: idOpcion,
    };
    let paranuevaopcion = respuesta.find(
      (i) => i.idpregunta === neww.idpregunta
    );

    if (paranuevaopcion) {
      const ssss = respuesta.filter(
        (item) => item.idpregunta !== neww.idpregunta
      );
      ssss.push(neww);
      dispatch(setearRespuesta(ssss));
    } else {
      respuesta.push(neww);
      dispatch(setearRespuesta(respuesta));
    }
  };

  return (
    <>
      <div className="form-group subtitulo-formulario mb-4">
        <label className="texto-formulario mb-4">
          {index}.{contenido.pregunta}
        </label>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="radio"
            name={`pregunta${idpregunta}`}
            id={`opcionpregunta${idpregunta}${idopcion2}`}
            value={idopcion2}
            onChange={() => handleChange(idopcion2)}
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
            id={`opcionpregunta${idpregunta}${idopcion1}`}
            value={idopcion1}
            onChange={() => handleChange(idopcion1)}
          />
          <label
            className="form-check-label"
            htmlFor={`opcionpregunta${idpregunta}${idopcion1}`}
          >
            {opcion}
          </label>
        </div>
      </div>
    </>
  );
};

export default Preguntas;
