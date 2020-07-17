import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  mostrarContenidoCuestionario,
  borrarCuestionario,
} from "../actions/cuestionarioAction";
import { terminarCuestionarioGeneral } from "./../actions/cuestionarioAction";

const MostrarResultados = () => {
  const dispatch = useDispatch();

  const resultado = useSelector(
    (state) => state.obtenerResultados.obtenerResultado
  );

  const terminarCuestionario = (e) => {
    e.preventDefault();
    dispatch(terminarCuestionarioGeneral());
  };

  const eliminarCuestionario = (e) => {
    e.preventDefault();
    const idCuestionario = localStorage.getItem("idCuestionario");
    dispatch(borrarCuestionario(idCuestionario));
    dispatch(mostrarContenidoCuestionario(false));
  };

  return (
    <div>
      <div className="contenido">
        <h1 className="titulo-derecha text-center">Resultados</h1>
        <div className="formulario-test">
          <h3>Usted se encuentra en: {resultado.resultado.resultado}</h3>
          <h5 className="color-recomendacion">
            Recomendacion: {resultado.resultado.mensaje}
          </h5>
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
                onClick={terminarCuestionario}
              >
                Terminar Cuestionario
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostrarResultados;
