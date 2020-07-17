import {
  EDITAR_PERFIL_ADMIN_CARGA,
  EDITAR_PERFIL_ADMIN_EXITO,
  EDITAR_PERFIL_ADMIN_ERROR,
} from "./../types/index";

const initialState = {
  usuarioEditado: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case EDITAR_PERFIL_ADMIN_CARGA:
      return {
        ...state,
        error: false,
        loading: false,
      };

    case EDITAR_PERFIL_ADMIN_EXITO:
      return {
        ...state,
        usuarioEditado: action.payload,
        error: false,
        loading: false,
      };
    case EDITAR_PERFIL_ADMIN_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    default:
      return state;
  }
}
