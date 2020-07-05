import { MANDAR_RESPUESTA } from "./../types/index";

const initialState = {
  respuesta: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
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

    default:
      return state;
  }
}
