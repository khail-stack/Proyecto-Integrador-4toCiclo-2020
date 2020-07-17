import {
  MOSTRAR_GRAFICO_LINEAL_ADMIN_CARGA,
  MOSTRAR_GRAFICO_LINEAL_ADMIN_EXITO,
  MOSTRAR_GRAFICO_LINEAL_ADMIN_ERROR,
  MOSTRAR_GRAFICO_CIRCULAR_ADMIN_CARGA,
  MOSTRAR_GRAFICO_CIRCULAR_ADMIN_EXITO,
  MOSTRAR_GRAFICO_CIRCULAR_ADMIN_ERROR,
  MOSTRAR_GRAFICO_BARRAS_ADMIN_CARGA,
  MOSTRAR_GRAFICO_BARRAS_ADMIN_EXITO,
  MOSTRAR_GRAFICO_BARRAS_ADMIN_ERROR,
} from "./../types/index";

const initialState = {
  graficaLineal: 0,
  graficaBarras: 0,
  graficaCircular: 0,
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MOSTRAR_GRAFICO_LINEAL_ADMIN_CARGA:
      return {
        ...state,
        loading: action.payload,
        error: false,
      };

    case MOSTRAR_GRAFICO_LINEAL_ADMIN_EXITO:
      return {
        ...state,
        graficaLineal: action.payload,
        error: false,
        loading: false,
      };

    case MOSTRAR_GRAFICO_LINEAL_ADMIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case MOSTRAR_GRAFICO_CIRCULAR_ADMIN_CARGA:
      return {
        ...state,
        loading: action.payload,
        error: false,
      };

    case MOSTRAR_GRAFICO_CIRCULAR_ADMIN_EXITO:
      return {
        ...state,
        graficaCircular: action.payload,
        error: false,
        loading: false,
      };

    case MOSTRAR_GRAFICO_CIRCULAR_ADMIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case MOSTRAR_GRAFICO_BARRAS_ADMIN_CARGA:
      return {
        ...state,
        loading: action.payload,
        error: false,
      };

    case MOSTRAR_GRAFICO_BARRAS_ADMIN_EXITO:
      return {
        ...state,
        graficaBarras: action.payload,
        error: false,
        loading: false,
      };

    case MOSTRAR_GRAFICO_BARRAS_ADMIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
}
