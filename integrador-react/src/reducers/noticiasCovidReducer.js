import {
  CARGAR_DATA_NOTICIAS,
  DATA_NOTICIAS_EXITO,
  DATA_NOTICIAS_ERROR,
} from "./../types/index";

const initialState = {
  noticiascovid: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CARGAR_DATA_NOTICIAS:
      return {
        ...state,
        loading: action.payload,
      };

    case DATA_NOTICIAS_EXITO:
      return {
        ...state,
        noticiascovid: action.payload,
        loading: false,
      };

    case DATA_NOTICIAS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
