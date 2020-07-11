import {
  MANDAR_RESPUESTA_EXITO,
  MANDAR_RESPUESTA_ERROR,
  CARGAR_REPSUESTA,
} from "./../types/index";

import { clienteAxios } from "../config/axios";
import {
  mostrarRespuestas,
  obtenerRespuestas,
} from "./obtenerRespuestasAction";

export function mandarRespuestas(respuestas) {
  return async (dispatch) => {
    dispatch(cargarRespuesta());
    try {
      const token = localStorage.getItem("token");
      await clienteAxios(token).post(`/resources/respuesta`, respuestas);

      dispatch(mandarRespuestaExito(respuestas));

      dispatch(mostrarRespuestas(true));
      const idCuestionario = localStorage.getItem("idCuestionario");
      dispatch(obtenerRespuestas(idCuestionario));
    } catch (error) {
      console.log(error.response);

      dispatch(mandarRespuestaError(true));
    }
  };
}

const cargarRespuesta = () => ({
  type: CARGAR_REPSUESTA,
  payload: true,
});

const mandarRespuestaExito = (respuestas) => ({
  type: MANDAR_RESPUESTA_EXITO,
  payload: respuestas,
});

const mandarRespuestaError = (errorRespuesta) => ({
  type: MANDAR_RESPUESTA_ERROR,
  payload: errorRespuesta,
});
