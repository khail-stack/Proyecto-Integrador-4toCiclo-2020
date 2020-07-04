import { MANDAR_RESPUESTA } from "./../types/index";

import axios from "axios";

export function mandarRespuestas(respuesta) {
  return async (dispatch) => {
    const respuestas = dispatch(mandarRespuesta(respuesta));
    //console.log(respuestas);
  };
}

const mandarRespuesta = (respuesta) => ({
  type: MANDAR_RESPUESTA,
  payload: respuesta,
});
