import {
  OBTENER_RESPUESTAS_CARGA,
  OBTENER_RESPUESTAS_EXITO,
  OBTENER_RESPUESTAS_ERROR,
  MOSTRAR_VISTA_RESPUESTA_CARGA,
  MOSTRAR_VISTA_RESPUESTA_EXITO,
  MOSTRAR_VISTA_RESPUESTA_ERROR,
} from "./../types/index";

import { clienteAxios } from "../config/axios";

export function mostrarRespuestas(vistaRespuestas) {
  return (dispatch) => {
    dispatch(mostrarRespuestasCarga());
    try {
      dispatch(mostrarRespuestasExito(vistaRespuestas));
    } catch (error) {
      dispatch(mostrarRespuestasError());
    }
  };
}

const mostrarRespuestasCarga = () => ({
  type: MOSTRAR_VISTA_RESPUESTA_CARGA,
  payload: true,
});

const mostrarRespuestasExito = (vistaRespuestas) => ({
  type: MOSTRAR_VISTA_RESPUESTA_EXITO,
  payload: vistaRespuestas,
});

const mostrarRespuestasError = (error) => ({
  type: MOSTRAR_VISTA_RESPUESTA_ERROR,
  payload: error,
});

export function obtenerRespuestas(idCuestionario) {
  return async (dispatch) => {
    dispatch(cargarRespuestas());
    try {
      console.log(idCuestionario);
      const token = localStorage.getItem("token");
      const rpta = await clienteAxios(token).get(
        `resources/respuestas/${idCuestionario}`
      );
      dispatch(obtenerRespuestasExito(rpta.data));

      console.log(rpta.data);
    } catch (error) {
      dispatch(obtenerRespuestasError(true));
    }
  };
}

const cargarRespuestas = () => ({
  type: OBTENER_RESPUESTAS_CARGA,
  payload: true,
});

const obtenerRespuestasExito = (rptas) => ({
  type: OBTENER_RESPUESTAS_EXITO,
  payload: rptas,
});

const obtenerRespuestasError = (error) => ({
  type: OBTENER_RESPUESTAS_ERROR,
  payload: error,
});
