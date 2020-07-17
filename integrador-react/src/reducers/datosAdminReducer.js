import {
  MOSTRAR_DATOS_CARGA,
  MOSTRAR_DATOS_EXITO,
  MOSTRAR_DATOS_ERROR,
} from "./../types/index";

const initialState = {
  datos: [],

  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MOSTRAR_DATOS_CARGA:
      return {
        ...state,
        loading: action.payload,
        error: false,
      };
    case MOSTRAR_DATOS_EXITO:
      return {
        ...state,
        datos: action.payload,
        loading: false,
        error: false,
      };
    case MOSTRAR_DATOS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}
