import {
  CONFIRMADOS_GLOBALES,
  CONFIRMADOS_GLOBALES_EXITO,
  CONFIRMADOS_GLOBALES_ERROR,
  GRAFICA_GLOBAL_CARGA,
  GRAFICA_GLOBAL_EXITO,
  GRAFICA_GLOBAL_ERROR,
  GRAFICA_PERU_CARGA,
  GRAFICA_PERU_EXITO,
  GRAFICA_PERU_ERROR,
  GRAFICA_ACTUAL_EXITO,
  GRAFICA_ACTUAL_EXITO2,
} from "./../types/index";

const initialState = {
  dataCartaGlobales: 0,
  dataGeneralPeru: 0,
  dataGraficaGlobal: "",
  error: null,
  loading: false,
  datoActivo: null,
  datoActivo2: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GRAFICA_PERU_CARGA:
    case GRAFICA_GLOBAL_CARGA:
    case CONFIRMADOS_GLOBALES:
      return {
        ...state,
        loading: action.payload,
      };

    case GRAFICA_PERU_ERROR:
    case GRAFICA_GLOBAL_ERROR:
    case CONFIRMADOS_GLOBALES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GRAFICA_PERU_EXITO:
      return {
        ...state,
        loading: false,
        dataGeneralPeru: action.payload,
      };

    case GRAFICA_GLOBAL_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        dataGraficaGlobal: action.payload,
        datoActivo2: action.payload,
      };

    case CONFIRMADOS_GLOBALES_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        dataCartaGlobales: action.payload,
        datoActivo: action.payload,
      };

    case GRAFICA_ACTUAL_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        datoActivo: action.payload,
      };

    case GRAFICA_ACTUAL_EXITO2:
      return {
        ...state,
        loading: false,
        error: null,
        datoActivo2: action.payload,
      };

    default:
      return state;
  }
}
