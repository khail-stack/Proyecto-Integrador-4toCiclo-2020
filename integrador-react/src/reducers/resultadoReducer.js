import {
  OBTENER_RESULTADOS_CARGA,
  OBTENER_RESULTADOS_EXITO,
  OBTENER_RESULTADOS_ERROR,
  MOSTRAR_VISTA_RESULTADOS_CARGA,
  MOSTRAR_VISTA_RESULTADOS_EXITO,
  MOSTRAR_VISTA_RESULTADOS_ERROR,
  BORRAR_ESTADO_OBTENER_RESULTADOS,
} from "./../types/index";

const initialState = {
  obtenerResultado: [],
  contenidoResultado: false,
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MOSTRAR_VISTA_RESULTADOS_CARGA:
    case OBTENER_RESULTADOS_CARGA:
      return {
        ...state,
        loading: action.payload,
        error: false,
      };

    case OBTENER_RESULTADOS_EXITO:
      return {
        ...state,
        obtenerResultado: action.payload,
        loading: false,
        error: false,
      };

    case MOSTRAR_VISTA_RESULTADOS_EXITO:
      return {
        ...state,
        contenidoResultado: action.payload,
        loading: false,
        error: false,
      };

    case MOSTRAR_VISTA_RESULTADOS_ERROR:
    case OBTENER_RESULTADOS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case BORRAR_ESTADO_OBTENER_RESULTADOS:
      return {
        ...state,
        obtenerResultado: action.payload,
        contenidoResultado: false,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}
