import {
  MANDAR_RESPUESTA,
  BORRAR_ESTADO_RESPUESTA,
  MANDAR_RESPUESTA_EXITO,
  MANDAR_RESPUESTA_ERROR,
  CARGAR_REPSUESTA,
} from "./../types/index";

const initialState = {
  respuesta: [],
  error: null,
  loading: false,
  mandarRespuesta: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MANDAR_RESPUESTA:
      return {
        ...state,
        respuesta: action.payload,
        loading: false,
      };

    case BORRAR_ESTADO_RESPUESTA:
      return {
        ...state,
        respuesta: action.payload,
        error: null,
        loading: false,
        mandarRespuesta: [],
      };

    case CARGAR_REPSUESTA:
      return {
        ...state,
        loading: action.payload,
        error: false,
      };
    case MANDAR_RESPUESTA_EXITO:
      return {
        ...state,
        mandarRespuesta: action.payload,
        error: false,
        loading: false,
      };

    case MANDAR_RESPUESTA_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    default:
      return state;
  }
}
