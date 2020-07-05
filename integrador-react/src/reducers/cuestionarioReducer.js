import {
  MOSTRAR_CUESTIONARIO,
  MOSTRAR_CUESTIONARIO_CARGA,
  MOSTRAR_CUESTIONARIO_ERROR,
  OBTENER_PREGUNTAS,
  OBTENER_PREGUNTAS_EXITO,
  OBTENER_PREGUNTAS_ERROR,
  CREAR_CUESTIONARIO,
  ERROR_CUESTIONARIO,
  CARGAR_CUESTIONARIO,
  BORRAR_CUESTIONARIO,
  PAGINA_INICIAL,
} from "./../types/index";

const initialState = {
  page: 0,
  contenidocuestionario: false,
  preguntas: [],
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CARGAR_CUESTIONARIO:
    case MOSTRAR_CUESTIONARIO_CARGA:
      return {
        ...state,
        loading: action.payload,
        error: null,
      };

    case MOSTRAR_CUESTIONARIO:
      return {
        ...state,
        contenidocuestionario: action.payload,
      };

    case ERROR_CUESTIONARIO:
    case MOSTRAR_CUESTIONARIO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CREAR_CUESTIONARIO:
      localStorage.setItem("idCuestionario", action.payload.idcuestionario);
      localStorage.setItem("fechaCuestionario", action.payload.fecha);
      return {
        ...state,
        loading: false,
        error: null,
      };

    case OBTENER_PREGUNTAS:
      return {
        ...state,
        loading: action.payload,
      };

    case OBTENER_PREGUNTAS_EXITO:
      return {
        ...state,
        preguntas: [...state.preguntas, action.payload],
        loading: false,
      };

    case OBTENER_PREGUNTAS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case PAGINA_INICIAL:
      return {
        ...state,
        loading: false,
        error: false,
        page: action.payload,
      };

    case BORRAR_CUESTIONARIO:
      return {
        ...state,
        loading: false,
        error: false,
        contenidocuestionario: action.payload,
      };

    default:
      return state;
  }
}
