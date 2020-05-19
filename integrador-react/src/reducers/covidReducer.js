import {
  CONFIRMADOS_GLOBALES,
  CONFIRMADOS_GLOBALES_ERROR,
  GRAFICA_GLOBAL_CARGA,
  GRAFICA_GLOBAL_ERROR,
  GRAFICA_PERU_CARGA,
  GRAFICA_PERU_ERROR,
  P_DATA_PERU,
  P_DATA_CARTA_GLOBAL,
  P_DATA_GRAFICO_GLOBAL,
  FILTRO_CARTA_COVID,
  FILTRO_GRAFICO_COVID,
} from "./../types/index";

const initialState = {
  dataperu: null,
  cartaglobal: "",
  graficoglobal: 0,

  filtrocarta: null,
  filtrografico: 0,

  error: null,
  loading: false,
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

    case P_DATA_PERU:
      return {
        ...state,
        dataperu: action.payload,
      };

    case P_DATA_CARTA_GLOBAL:
      return {
        ...state,
        cartaglobal: action.payload,
        filtrocarta: action.payload,
      };

    case P_DATA_GRAFICO_GLOBAL:
      return {
        ...state,
        graficoglobal: action.payload,
        filtrografico: action.payload,
      };

    case FILTRO_CARTA_COVID:
      return {
        ...state,
        filtrocarta: action.payload,
      };
    case FILTRO_GRAFICO_COVID:
      return {
        ...state,
        filtrografico: action.payload,
      };

    default:
      return state;
  }
}
