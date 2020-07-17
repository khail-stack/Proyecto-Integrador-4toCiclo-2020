import {
  CREAR_NUEVA_PREGUNTA_CARGA,
  CREAR_NUEVA_PREGUNTA_EXITO,
  CREAR_NUEVA_PREGUNTA_ERROR,
  MOSTRAR_PREGUNTAS_ADMIN_CARGA,
  MOSTRAR_PREGUNTAS_ADMIN_EXITO,
  MOSTRAR_PREGUNTAS_ADMIN_ERROR,
  OBTENER_PAGINA_ADMIN,
  CARGAR_OBTENER_PAGINA_ADMIN,
  ULTIMA_PAGINA_ADMIN,
  OBTENER_PREGUNTA_ELIMINAR_ADMIN,
  PREGUNTA_ELIMINADO_EXITO_ADMIN,
  PREGUNTA_ELIMINADO_ERROR_ADMIN,
  OBTENER_PREGUNTA_EDITAR_ADMIN,
  PREGUNTA_EDITAR_EXITO_ADMIN,
  PREGUNTA_EDITAR_ERROR_ADMIN,
  OBTENER_OBJETO_PREGUNTA_EDITAR_ADMIN,
  OBTENER_OBJETO_PREGUNTA_EDITAR_ADMIN_EXITO,
  OBTENER_OBJETO_PREGUNTA_EDITAR_ADMIN_ERROR,
} from "./../types/index";

const initialState = {
  nuevaPregunta: [],
  listaPreguntas: [],
  preguntaEliminada: null,
  preguntaEditar: [],
  preguntaEditada: null,
  page: 0,
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREAR_NUEVA_PREGUNTA_CARGA:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case CREAR_NUEVA_PREGUNTA_EXITO:
      return {
        ...state,
        loading: false,
        nuevaPregunta: [...state.nuevaPregunta, action.payload],
        error: false,
      };
    case CREAR_NUEVA_PREGUNTA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CARGAR_OBTENER_PAGINA_ADMIN:
      return {
        ...state,
        loading: action.payload,
        error: false,
      };

    case OBTENER_PAGINA_ADMIN:
      return {
        ...state,
        loading: false,
        error: false,
        page: action.payload,
      };

    case ULTIMA_PAGINA_ADMIN:
      localStorage.setItem(
        "ultimaPaginaPreguntasAdmin",
        Number(action.payload.totalPages) - 1
      );
      return {
        ...state,
        loading: false,
        error: false,
      };

    case MOSTRAR_PREGUNTAS_ADMIN_CARGA:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case MOSTRAR_PREGUNTAS_ADMIN_EXITO:
      return {
        ...state,
        loading: true,
        error: false,
        listaPreguntas: action.payload,
      };

    case MOSTRAR_PREGUNTAS_ADMIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case OBTENER_PREGUNTA_ELIMINAR_ADMIN:
      return {
        ...state,
        preguntaEliminada: action.payload,
        loading: false,
        error: false,
      };

    case PREGUNTA_ELIMINADO_EXITO_ADMIN:
      return {
        ...state,
        listaPreguntas: state.listaPreguntas.filter(
          (pregunta) => pregunta.idpregunta !== state.preguntaEliminada
        ),
        preguntaEliminada: null,
      };

    case PREGUNTA_ELIMINADO_ERROR_ADMIN:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case OBTENER_PREGUNTA_EDITAR_ADMIN:
      return {
        ...state,
        loading: false,
        error: false,
      };

    case PREGUNTA_EDITAR_EXITO_ADMIN:
      return {
        ...state,
        preguntaEditada: action.payload,
        loading: false,
        error: false,
      };

    case PREGUNTA_EDITAR_ERROR_ADMIN:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case OBTENER_OBJETO_PREGUNTA_EDITAR_ADMIN:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case OBTENER_OBJETO_PREGUNTA_EDITAR_ADMIN_EXITO:
      return {
        ...state,
        preguntaEditar: action.payload,
        loading: false,
        error: false,
      };

    case OBTENER_OBJETO_PREGUNTA_EDITAR_ADMIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
