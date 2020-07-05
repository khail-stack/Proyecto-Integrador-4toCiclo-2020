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
  VALIDAR_AUTENTICACION,
  ERROR_AUTENTICACION,
  AÑADIR_INFORMACION_CARGA,
  AÑADIR_INFORMACION_EXITO,
  AÑADIR_INFORMACION_ERROR,
  //CARGAR_DATOS_USUARIO_AUTENTICADO,
} from "./../types/index";

//cada reducer tiene su propio state

const initialState = {
  usuarios: [],
  error: null,
  loading: false,
  autenticado: false,
  usuarioAutenticado: [],
  paginaLoginAdmin: false,
  paginaError: false,
  informacionAdicional: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    // TYPES PARA REGISTRAR USUARIO
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

    // TYPES PARA LOGIN
    case LOGIN_USUARIO:
      return {
        ...state,
        loading: action.payload,
      };

    case LOGIN_USUARIO_EXITO:
      localStorage.setItem("token", action.payload.accessToken);
      localStorage.setItem("id", action.payload.id);

      return {
        ...state,
        loading: false,
        autenticado: true,
        error: null,
      };
    case VALIDAR_AUTENTICACION:
      return {
        ...state,
        usuarioAutenticado: [action.payload],
        autenticado: true,
        loading: false,
        error: null,
      };

    case LOGIN_USUARIO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case VALIDAR_TOKEN:
      return {
        ...state,
        autenticado: action.payload,
      };

    case ERROR_AUTENTICACION:
      return {
        ...state,
        autenticado: action.payload,
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

    case AÑADIR_INFORMACION_CARGA:
      return {
        ...state,
        loading: action.payload,
      };

    case AÑADIR_INFORMACION_EXITO:
      return {
        ...state,
        loading: false,
      };

    case AÑADIR_INFORMACION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
