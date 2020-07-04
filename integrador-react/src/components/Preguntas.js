import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { mandarRespuestas } from "./../actions/mandarRespuestaAction";

const Preguntas = ({ contenido }) => {
  const respuesta = useSelector((state) => state.respuesta.respuesta);

  const dispatch = useDispatch();

  //console.log("contenido:" + contenido);
  //console.warn(contenido);
  //const opcionesa = contenido.opciones;

  //const conteni = contenido.map((conten) => conten);
  //console.log(conteni);

  const { opciones, idpregunta } = contenido;

  //console.warn(opciones);

  ///const { idopcion, opcion } = opciones[0];

  //const idopcion2 = opciones[1].idopcion;

  //const opcion2 = opciones[1].opcion;

  //console.warn(idpregunta);

  //console.log(idpregunta[0]);

  const { idopcion } = opciones[0];

  const idopcion2 = opciones[1].idopcion;

  //console.log("Opcion si:" + idopcion);

  //console.log(idopcion2);

  const { opcion } = opciones[0];

  const opcion2 = opciones[1].opcion;

  const cambioOpcion = (idOpcion) => {
    const idCuestionario = localStorage.getItem("idCuestionario");
    const idUsuario = localStorage.getItem("id");
    for (let index = 0; index < respuesta.length; index++) {
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

  // const respuesta = useSelector((state) => state.respuesta.respuesta);

  // const handleOnChange = (e) => {
  //   e.preventDefault();

  //   const opcion = respuesta.find((buscar) => (buscar.idPregunta = idpregunta));

  //   //console.log(idPregunta);

  //   console.log(opcion);
  //   if (opcion) {
  //     const opt = [...respuesta];

  //     console.log(opt);

  //     const indice = opt.indexOf(opcion);

  //     opt[indice]["idOpcion"] = e.target.value;

  //     dispatch(mandarRespuestas(opt));
  //   } else {
  //     const opt = [...respuesta];

  //     dispatch(
  //       mandarRespuestas([
  //         ...opt,
  //         {
  //           idCuestionario: localStorage.getItem("idCuestionario"),
  //           idPregunta: idpregunta,
  //           idOpcion: e.target.value,
  //         },
  //       ])
  //     );
  //   }
  // };

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
            {opcion}
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
            {opcion2}
          </label>
        </div>
      </div>
    </>
  );
};

export default Preguntas;
