import { MANDAR_RESPUESTA, BORRAR_ESTADO_RESPUESTA } from "./../types/index";

const initialState = {
  respuesta: [],
  error: null,
  loading: false,
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
      };

    default:
      return state;
  }
}
