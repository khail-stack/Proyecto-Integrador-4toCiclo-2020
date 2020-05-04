import {
  REGISTRAR_USUARIO,
  REGISTRAR_USUARIO_EXITO,
  REGISTRAR_USUARIO_ERROR,
  LOGIN_USUARIO,
  LOGIN_USUARIO_EXITO,
  LOGIN_USUARIO_ERROR,
} from "./../types/index";

//cada reducer tiene su propio state

const initialState = {
  usuarios: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTRAR_USUARIO:
      return {
        ...state,
        loading: action.payload,
      };

    case REGISTRAR_USUARIO_EXITO:
      return {
        ...state,
        loading: false,
        usuarios: [...state.usuarios, action.payload],
      };

    case REGISTRAR_USUARIO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOGIN_USUARIO:
      return {
        ...state,
        loading: action.payload,
      };

    case LOGIN_USUARIO_EXITO:
      return {
        ...state,
        loading: false,
        usuarios: action.payload,
      };

    case LOGIN_USUARIO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
