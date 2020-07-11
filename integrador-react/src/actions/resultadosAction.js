import {
  OBTENER_RESULTADOS_CARGA,
  OBTENER_RESULTADOS_EXITO,
  OBTENER_RESULTADOS_ERROR,
  MOSTRAR_VISTA_RESULTADOS_CARGA,
  MOSTRAR_VISTA_RESULTADOS_EXITO,
  MOSTRAR_VISTA_RESULTADOS_ERROR,
} from "./../types/index";
import { clienteAxios } from "../config/axios";

export function mostrarResultados(vistaResultados) {
  return (dispatch) => {
    dispatch(mostrarResultadosCarga());
    try {
      dispatch(mostrarResultadosExito(vistaResultados));
    } catch (error) {
      dispatch(mostrarResultadosError());
    }
  };
}

const mostrarResultadosCarga = () => ({
  type: MOSTRAR_VISTA_RESULTADOS_CARGA,
  payload: true,
});

const mostrarResultadosExito = (vistaRespuestas) => ({
  type: MOSTRAR_VISTA_RESULTADOS_EXITO,
  payload: vistaRespuestas,
});

const mostrarResultadosError = (error) => ({
  type: MOSTRAR_VISTA_RESULTADOS_ERROR,
  payload: error,
});

export function obtenerResultados(idCuestionario) {
  return async (dispatch) => {
    dispatch(cargarResultados());
    try {
      console.log(idCuestionario);
      const token = localStorage.getItem("token");
      const resultado = await clienteAxios(token).get(
        `resources/respuesta/resultado/${idCuestionario}`
      );
      dispatch(obtenerResultadosExito(resultado.data));

      console.log(resultado.data);

      dispatch(mostrarResultados(true));
    } catch (error) {
      dispatch(obtenerResultadosError(true));
    }
  };
}

const cargarResultados = () => ({
  type: OBTENER_RESULTADOS_CARGA,
  payload: true,
});

const obtenerResultadosExito = (resultado) => ({
  type: OBTENER_RESULTADOS_EXITO,
  payload: resultado,
});

const obtenerResultadosError = (error) => ({
  type: OBTENER_RESULTADOS_ERROR,
  payload: error,
});
