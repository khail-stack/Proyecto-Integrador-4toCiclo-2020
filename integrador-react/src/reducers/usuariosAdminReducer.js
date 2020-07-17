import {
  LISTAR_USUARIOS_LIBRES_CARGA,
  LISTAR_USUARIOS_LIBRES_EXITO,
  LISTAR_USUARIOS_LIBRES_ERROR,
  LISTAR_USUARIOS_POSIBLES_CARGA,
  LISTAR_USUARIOS_POSIBLES_EXITO,
  LISTAR_USUARIOS_POSIBLES_ERROR,
  LISTAR_USUARIOS_ZONA_RIESGO_CARGA,
  LISTAR_USUARIOS_ZONA_RIESGO_EXITO,
  LISTAR_USUARIOS_ZONA_RIESGO_ERROR,
  CARGAR_OBTENER_PAGINA_USUARIOS_POSIBLES_ADMIN,
  OBTENER_PAGINA_USUARIOS_POSIBLES_ADMIN,
  ULTIMA_PAGINA_USUARIOS_POSIBLES_ADMIN,
  CARGAR_OBTENER_PAGINA_USUARIOS_LIBRES_ADMIN,
  OBTENER_PAGINA_USUARIOS_LIBRES_ADMIN,
  ULTIMA_PAGINA_USUARIOS_LIBRES_ADMIN,
  CARGAR_OBTENER_PAGINA_USUARIOS_RIESGOS_ADMIN,
  OBTENER_PAGINA_USUARIOS_RIESGOS_ADMIN,
  ULTIMA_PAGINA_USUARIOS_RIESGOS_ADMIN,
  OBTENER_USUARIO_LIBRE_ELIMINAR_ADMIN,
  USUARIO_LIBRE_ELIMINADO_EXITO_ADMIN,
  USUARIO_LIBRE_ELIMINADO_ERROR_ADMIN,
  OBTENER_USUARIO_POSIBLES_ELIMINAR_ADMIN,
  USUARIO_POSIBLES_ELIMINADO_EXITO_ADMIN,
  USUARIO_POSIBLES_ELIMINADO_ERROR_ADMIN,
  OBTENER_USUARIO_RIESGOS_ELIMINAR_ADMIN,
  USUARIO_RIESGOS_ELIMINADO_EXITO_ADMIN,
  USUARIO_RIESGOS_ELIMINADO_ERROR_ADMIN,
  EDITAR_PERFIL_ADMIN_CARGA,
  EDITAR_PERFIL_ADMIN_EXITO,
  EDITAR_PERFIL_ADMIN_ERROR,
} from "./../types/index";

const initialState = {
  listadoUsuariosSanos: [],
  listadoUsuariosPosibles: [],
  listadoUsuariosRiesgo: [],
  usuarioLibresEliminado: null,
  usuarioPosibleEliminado: null,
  usuarioRiesgoEliminado: null,
  pageUsuarioLibre: 0,
  pageUsuarioPosibles: 0,
  pageUsuarioRiesgos: 0,
  usuarioGeneralEditado: null,
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LISTAR_USUARIOS_LIBRES_CARGA:
      return {
        ...state,
        loading: action.payload,
        error: false,
      };
    case LISTAR_USUARIOS_LIBRES_EXITO:
      return {
        ...state,
        listadoUsuariosSanos: action.payload,
        loading: false,
        error: false,
      };
    case LISTAR_USUARIOS_LIBRES_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case LISTAR_USUARIOS_POSIBLES_CARGA:
      return {
        ...state,
        loading: action.payload,
        error: false,
      };
    case LISTAR_USUARIOS_POSIBLES_EXITO:
      return {
        ...state,
        listadoUsuariosPosibles: action.payload,
        loading: false,
        error: false,
      };
    case LISTAR_USUARIOS_POSIBLES_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case LISTAR_USUARIOS_ZONA_RIESGO_CARGA:
      return {
        ...state,
        loading: action.payload,
        error: false,
      };
    case LISTAR_USUARIOS_ZONA_RIESGO_EXITO:
      return {
        ...state,
        listadoUsuariosRiesgo: action.payload,
        loading: false,
        error: false,
      };
    case LISTAR_USUARIOS_ZONA_RIESGO_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case ULTIMA_PAGINA_USUARIOS_POSIBLES_ADMIN:
      localStorage.setItem(
        "ultimaPaginaUsuariosPosiblesAdmin",
        Number(action.payload.totalPages) - 1
      );
      return {
        ...state,
        loading: false,
        error: false,
      };

    case ULTIMA_PAGINA_USUARIOS_LIBRES_ADMIN:
      localStorage.setItem(
        "ultimaPaginaUsuariosLibresAdmin",
        Number(action.payload.totalPages) - 1
      );
      return {
        ...state,
        loading: false,
        error: false,
      };

    case ULTIMA_PAGINA_USUARIOS_RIESGOS_ADMIN:
      localStorage.setItem(
        "ultimaPaginaUsuariosRiesgosAdmin",
        Number(action.payload.totalPages) - 1
      );
      return {
        ...state,
        loading: false,
        error: false,
      };

    case CARGAR_OBTENER_PAGINA_USUARIOS_POSIBLES_ADMIN:
      return {
        ...state,
        loading: action.payload,
        error: false,
      };

    case OBTENER_PAGINA_USUARIOS_POSIBLES_ADMIN:
      return {
        ...state,
        loading: false,
        error: false,
        pageUsuarioPosibles: action.payload,
      };

    case CARGAR_OBTENER_PAGINA_USUARIOS_LIBRES_ADMIN:
      return {
        ...state,
        loading: action.payload,
        error: false,
      };

    case OBTENER_PAGINA_USUARIOS_LIBRES_ADMIN:
      return {
        ...state,
        loading: false,
        error: false,
        pageUsuarioLibre: action.payload,
      };

    case CARGAR_OBTENER_PAGINA_USUARIOS_RIESGOS_ADMIN:
      return {
        ...state,
        loading: action.payload,
        error: false,
      };

    case OBTENER_PAGINA_USUARIOS_RIESGOS_ADMIN:
      return {
        ...state,
        loading: false,
        error: false,
        pageUsuarioRiesgos: action.payload,
      };

    case OBTENER_USUARIO_LIBRE_ELIMINAR_ADMIN:
      return {
        ...state,
        usuarioLibresEliminado: action.payload,
        loading: false,
        error: false,
      };

    case USUARIO_LIBRE_ELIMINADO_EXITO_ADMIN:
      return {
        ...state,
        listadoUsuariosSanos: state.listadoUsuariosSanos.filter(
          (usuarioSano) => usuarioSano.id !== state.usuarioLibresEliminado
        ),
        usuarioLibresEliminado: null,
      };

    case USUARIO_LIBRE_ELIMINADO_ERROR_ADMIN:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case OBTENER_USUARIO_POSIBLES_ELIMINAR_ADMIN:
      return {
        ...state,
        usuarioPosibleEliminado: action.payload,
        loading: false,
        error: false,
      };

    case USUARIO_POSIBLES_ELIMINADO_EXITO_ADMIN:
      return {
        ...state,
        listadoUsuariosPosibles: state.listadoUsuariosPosibles.filter(
          (usuarioPosible) =>
            usuarioPosible.id !== state.usuarioPosibleEliminado
        ),
        usuarioPosibleEliminado: null,
      };

    case USUARIO_POSIBLES_ELIMINADO_ERROR_ADMIN:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case OBTENER_USUARIO_RIESGOS_ELIMINAR_ADMIN:
      return {
        ...state,
        usuarioRiesgoEliminado: action.payload,
        loading: false,
        error: false,
      };

    case USUARIO_RIESGOS_ELIMINADO_EXITO_ADMIN:
      return {
        ...state,
        listadoUsuariosRiesgo: state.listadoUsuariosRiesgo.filter(
          (usuarioRiesgo) => usuarioRiesgo.id !== state.usuarioRiesgoEliminado
        ),
        usuarioRiesgoEliminado: null,
      };

    case USUARIO_RIESGOS_ELIMINADO_ERROR_ADMIN:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case EDITAR_PERFIL_ADMIN_CARGA:
      return {
        ...state,
        loading: false,
        error: false,
      };

    case EDITAR_PERFIL_ADMIN_EXITO:
      return {
        ...state,
        usuarioGeneralEditado: action.payload,
        loading: false,
        error: false,
      };

    case EDITAR_PERFIL_ADMIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
