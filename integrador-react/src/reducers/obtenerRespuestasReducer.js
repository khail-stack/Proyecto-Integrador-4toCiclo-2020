import {
  OBTENER_RESPUESTAS_CARGA,
  OBTENER_RESPUESTAS_EXITO,
  OBTENER_RESPUESTAS_ERROR,
  MOSTRAR_VISTA_RESPUESTA_CARGA,
  MOSTRAR_VISTA_RESPUESTA_EXITO,
  MOSTRAR_VISTA_RESPUESTA_ERROR,
  BORRAR_ESTADO_OBTENER_RESPUESTAS,
} from "./../types/index";

const initialState = {
  obtenerRespuesta: [],
  contenidoRespuesta: false,
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MOSTRAR_VISTA_RESPUESTA_CARGA:
    case OBTENER_RESPUESTAS_CARGA:
      return {
        ...state,
        loading: action.payload,
        error: false,
      };
    case OBTENER_RESPUESTAS_EXITO:
      return {
        ...state,
        obtenerRespuesta: action.payload,
        loading: false,
        error: false,
      };
    case MOSTRAR_VISTA_RESPUESTA_ERROR:
    case OBTENER_RESPUESTAS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case MOSTRAR_VISTA_RESPUESTA_EXITO:
      return {
        contenidoRespuesta: action.payload,
        loading: false,
        error: false,
      };

    case BORRAR_ESTADO_OBTENER_RESPUESTAS:
      return {
        ...state,
        obtenerRespuesta: [],
        contenidoRespuesta: false,
        loading: false,
        error: false,
      };

    default:
      return state;
  }
}
