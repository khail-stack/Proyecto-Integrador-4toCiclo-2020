import {
  REGISTRAR_USUARIO,
  REGISTRAR_USUARIO_EXITO,
  REGISTRAR_USUARIO_ERROR,
  LOGIN_USUARIO,
  LOGIN_USUARIO_EXITO,
  LOGIN_USUARIO_ERROR,
  VALIDAR_TOKEN,
  FILTRO_LOGIN_ADMIN,
  FILTRO_ERROR,
} from "./../types/index";
import { act } from "@testing-library/react";

//cada reducer tiene su propio state

const initialState = {
  usuarios: [],
  error: null,
  loading: false,
  autenticado: false,
  usuarioAutenticado: [],
  paginaLoginAdmin: false,
  paginaError: false,
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
      localStorage.setItem("token", action.payload.accessToken);
      localStorage.setItem("id", action.payload.id);
      localStorage.setItem("username", action.payload.username);
      localStorage.setItem("email", action.payload.email);
      localStorage.setItem("rol", action.payload.roles);
      return {
        ...state,
        loading: false,
        usuarioAutenticado: action.payload,
        autenticado: true,
      };

    case VALIDAR_TOKEN:
      return {
        ...state,
        autenticado: action.payload,
      };

    case LOGIN_USUARIO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FILTRO_LOGIN_ADMIN:
      return {
        ...state,
        paginaLoginAdmin: action.payload,
      };

    case FILTRO_ERROR:
      return {
        ...state,
        paginaError: true,
      };

    default:
      return state;
  }
}
