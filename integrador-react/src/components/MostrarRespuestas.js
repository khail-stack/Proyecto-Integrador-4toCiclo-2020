import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Respuestas from "./Respuestas";
import { obtenerResultados } from "../actions/resultadosAction";
import MostrarResultados from "./MostrarResultados";
import {
  borrarCuestionario,
  mostrarContenidoCuestionario,
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
    const idCuestionario = localStorage.getItem("idCuestionario");
    dispatch(borrarCuestionario(idCuestionario));
    dispatch(mostrarContenidoCuestionario(false));
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
