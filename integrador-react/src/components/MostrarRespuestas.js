import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Respuestas from "./Respuestas";
import { obtenerResultados } from "../actions/resultadosAction";
import MostrarResultados from "./MostrarResultados";
import Swal from "sweetalert2";

import {
  borrarCuestionario,
  mostrarContenidoCuestionario,
  obtenerPagina,
} from "../actions/cuestionarioAction";

const MostrarRespuestas = () => {
  const dispatch = useDispatch();

  const obtenerRptas = useSelector(
    (state) => state.obtenerRespuestas.obtenerRespuesta
  );

  const obtenerResul = useSelector(
    (state) => state.obtenerResultados.contenidoResultado
  );

  console.log(obtenerRptas);

  const mostrarResultados = (e) => {
    e.preventDefault();
    const idCuestionario = localStorage.getItem("idCuestionario");
    dispatch(obtenerResultados(idCuestionario));
  };

  const eliminarCuestionario = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Se perdera el progreso del cuestionario",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cancelar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        dispatch(borrarCuestionario());
        dispatch(obtenerPagina(0));
        dispatch(mostrarContenidoCuestionario(false));
      }
    });
  };

  return (
    <div>
      {obtenerResul === true ? (
        <MostrarResultados></MostrarResultados>
      ) : (
        <div className="contenido">
          <h1 className="titulo-derecha text-center">Verificar Respuestas</h1>
          <div className="formulario-test">
            {obtenerRptas
              ? obtenerRptas.map((obtenerRpta) => (
                  <Respuestas
                    key={obtenerRpta.pregunta.idpregunta}
                    contenido={obtenerRpta}
                  ></Respuestas>
                ))
              : null}
            <div className="extra-formulario text-center">
              <div className="text-center">
                <button
                  className="btn boton-iniciar text-center"
                  onClick={eliminarCuestionario}
                >
                  Cancelar
                </button>
              </div>

              <div className="text-center">
                <button
                  className="btn boton-iniciar text-center"
                  onClick={mostrarResultados}
                >
                  Mostrar Resultados
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MostrarRespuestas;
