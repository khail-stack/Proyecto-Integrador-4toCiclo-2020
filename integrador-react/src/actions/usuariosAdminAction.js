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
import { clienteAxios } from "../config/axios";
import Swal from "sweetalert2";
import { autenticadoToken } from "./usuarioActions";

export function obtenerUsuariosLibresAdmin(getPaginaUsuariosLibresAdmin) {
  return async (dispatch) => {
    dispatch(cargarUsuariosLibresAdmin());
    try {
      const token = localStorage.getItem("token");
      const respuesta = await clienteAxios(token).get(
        `/users/libres/usuarios/${getPaginaUsuariosLibresAdmin}`
      );
      dispatch(obtenerUsuariosLibresAdminExito(respuesta.data.content));

      dispatch(obtenerUltimaPaginaUsuariosLibresAdmin(respuesta.data));
    } catch (error) {
      console.log(error.response);
      mostrarUsuariosLibresAdminError(true);
    }
  };
}

const cargarUsuariosLibresAdmin = () => ({
  type: LISTAR_USUARIOS_LIBRES_CARGA,
  payload: true,
});

const obtenerUsuariosLibresAdminExito = (listaUsuariosLibres) => ({
  type: LISTAR_USUARIOS_LIBRES_EXITO,
  payload: listaUsuariosLibres,
});

const mostrarUsuariosLibresAdminError = (estado) => ({
  type: LISTAR_USUARIOS_LIBRES_ERROR,
  payload: estado,
});

export function obtenerPaginaUsuarioLibreAdmin(pageUsuarioLibre) {
  return async (dispatch) => {
    dispatch(cargarPaginaUsuarioLibreAdmin());
    try {
      await dispatch(obtenerPaginaUsuarioLibreAdminExito(pageUsuarioLibre));
    } catch (error) {}
  };
}

const obtenerUltimaPaginaUsuariosLibresAdmin = (
  ultimaPaginaUsuariosLibresAdmin
) => ({
  type: ULTIMA_PAGINA_USUARIOS_LIBRES_ADMIN,
  payload: ultimaPaginaUsuariosLibresAdmin,
});

const cargarPaginaUsuarioLibreAdmin = () => ({
  type: CARGAR_OBTENER_PAGINA_USUARIOS_LIBRES_ADMIN,
  payload: true,
});
const obtenerPaginaUsuarioLibreAdminExito = (pageUsuarioLibre) => ({
  type: OBTENER_PAGINA_USUARIOS_LIBRES_ADMIN,
  payload: pageUsuarioLibre,
});

export function obtenerUsuariosPosiblesAdmin(getPaginaUsuariosPosiblesAdmin) {
  return async (dispatch) => {
    dispatch(cargarUsuariosPosiblesAdmin());
    try {
      const token = localStorage.getItem("token");
      const respuesta = await clienteAxios(token).get(
        `/users/posibles/usuarios/${getPaginaUsuariosPosiblesAdmin}`
      );
      dispatch(obtenerUsuariosPosiblesAdminExito(respuesta.data.content));

      dispatch(obtenerUltimaPaginaUsuariosPosiblesAdmin(respuesta.data));
    } catch (error) {
      console.log(error.response);
      mostrarUsuariosPosiblesAdminError(true);
    }
  };
}

const cargarUsuariosPosiblesAdmin = () => ({
  type: LISTAR_USUARIOS_POSIBLES_CARGA,
  payload: true,
});

const obtenerUsuariosPosiblesAdminExito = (listaUsuariosPosibles) => ({
  type: LISTAR_USUARIOS_POSIBLES_EXITO,
  payload: listaUsuariosPosibles,
});

const mostrarUsuariosPosiblesAdminError = (estado) => ({
  type: LISTAR_USUARIOS_POSIBLES_ERROR,
  payload: estado,
});

export function obtenerPaginaUsuariosPosiblesAdmin(pageUsuarioPosibles) {
  return async (dispatch) => {
    dispatch(cargarPaginaUsuariosPosiblesAdmin());
    try {
      await dispatch(
        obtenerPaginaUsuariosPosiblesAdminExito(pageUsuarioPosibles)
      );
    } catch (error) {}
  };
}

const obtenerUltimaPaginaUsuariosPosiblesAdmin = (
  ultimaPaginaUsuariosPosiblesAdmin
) => ({
  type: ULTIMA_PAGINA_USUARIOS_POSIBLES_ADMIN,
  payload: ultimaPaginaUsuariosPosiblesAdmin,
});

const cargarPaginaUsuariosPosiblesAdmin = () => ({
  type: CARGAR_OBTENER_PAGINA_USUARIOS_POSIBLES_ADMIN,
  payload: true,
});
const obtenerPaginaUsuariosPosiblesAdminExito = (pageUsuarioPosibles) => ({
  type: OBTENER_PAGINA_USUARIOS_POSIBLES_ADMIN,
  payload: pageUsuarioPosibles,
});

export function obtenerUsuariosRiesgosAdmin(getPaginaUsuariosRiesgosAdmin) {
  return async (dispatch) => {
    dispatch(cargarUsuariosRiesgosAdmin());
    try {
      const token = localStorage.getItem("token");
      const respuesta = await clienteAxios(token).get(
        `/users/riesgo/usuarios/${getPaginaUsuariosRiesgosAdmin}`
      );
      dispatch(obtenerUsuariosRiesgosAdminExito(respuesta.data.content));

      console.log(respuesta.data.content);

      dispatch(obtenerUltimaPaginaUsuariosRiesgosAdmin(respuesta.data));
    } catch (error) {
      console.log(error.response);
      mostrarUsuariosRiesgoAdminError(true);
    }
  };
}

const cargarUsuariosRiesgosAdmin = () => ({
  type: LISTAR_USUARIOS_ZONA_RIESGO_CARGA,
  payload: true,
});

const obtenerUsuariosRiesgosAdminExito = (listaUsuariosRiesgo) => ({
  type: LISTAR_USUARIOS_ZONA_RIESGO_EXITO,
  payload: listaUsuariosRiesgo,
});

const mostrarUsuariosRiesgoAdminError = (estado) => ({
  type: LISTAR_USUARIOS_ZONA_RIESGO_ERROR,
  payload: estado,
});

export function obtenerPaginaUsuariosRiesgosAdmin(pageUsuarioRiesgos) {
  return async (dispatch) => {
    dispatch(cargarPaginaUsuariosRiesgosAdmin());
    try {
      await dispatch(
        obtenerPaginaUsuariosRiesgosAdminExito(pageUsuarioRiesgos)
      );
    } catch (error) {}
  };
}

const obtenerUltimaPaginaUsuariosRiesgosAdmin = (
  ultimaPaginaPreguntasAdmin
) => ({
  type: ULTIMA_PAGINA_USUARIOS_RIESGOS_ADMIN,
  payload: ultimaPaginaPreguntasAdmin,
});

const cargarPaginaUsuariosRiesgosAdmin = () => ({
  type: CARGAR_OBTENER_PAGINA_USUARIOS_RIESGOS_ADMIN,
  payload: true,
});
const obtenerPaginaUsuariosRiesgosAdminExito = (pageUsuarioRiesgos) => ({
  type: OBTENER_PAGINA_USUARIOS_RIESGOS_ADMIN,
  payload: pageUsuarioRiesgos,
});

export function borrarUsuariosLibresAdmin(id) {
  return async (dispatch) => {
    dispatch(obtenerUsuariosLibresEliminarAdmin(id));

    try {
      const token = localStorage.getItem("token");
      await clienteAxios(token).delete(`/users/usuario/${id}`);
      dispatch(eliminarUsuariosLibresAdminExito());

      Swal.fire("Eliminado!", "El usuario se elimino correctamente", "success");
    } catch (error) {
      console.log(error);
      dispatch(eliminarUsuariosLibresAdminError());
    }
  };
}

const obtenerUsuariosLibresEliminarAdmin = (id) => ({
  type: OBTENER_USUARIO_LIBRE_ELIMINAR_ADMIN,
  payload: id,
});

const eliminarUsuariosLibresAdminExito = () => ({
  type: USUARIO_LIBRE_ELIMINADO_EXITO_ADMIN,
});

const eliminarUsuariosLibresAdminError = () => ({
  type: USUARIO_LIBRE_ELIMINADO_ERROR_ADMIN,
  payload: true,
});

export function borrarUsuariosPosiblesAdmin(id) {
  return async (dispatch) => {
    dispatch(obtenerUsuariosPosiblesEliminarAdmin(id));

    try {
      const token = localStorage.getItem("token");
      await clienteAxios(token).delete(`/users/usuario/${id}`);
      dispatch(eliminarUsuariosPosiblesAdminExito());

      Swal.fire("Eliminado!", "El usuario se elimino correctamente", "success");
    } catch (error) {
      console.log(error);
      dispatch(eliminarUsuariosPosiblesAdminError());
    }
  };
}

const obtenerUsuariosPosiblesEliminarAdmin = (id) => ({
  type: OBTENER_USUARIO_POSIBLES_ELIMINAR_ADMIN,
  payload: id,
});

const eliminarUsuariosPosiblesAdminExito = () => ({
  type: USUARIO_POSIBLES_ELIMINADO_EXITO_ADMIN,
});

const eliminarUsuariosPosiblesAdminError = () => ({
  type: USUARIO_POSIBLES_ELIMINADO_ERROR_ADMIN,
  payload: true,
});

export function borrarUsuariosRiesgosAdmin(id) {
  return async (dispatch) => {
    dispatch(obtenerUsuariosRiesgosEliminarAdmin(id));

    try {
      const token = localStorage.getItem("token");
      await clienteAxios(token).delete(`/users/usuario/${id}`);
      dispatch(eliminarUsuariosRiesgosAdminExito());

      Swal.fire("Eliminado!", "El usuario se elimino correctamente", "success");
    } catch (error) {
      console.log(error);
      dispatch(eliminarUsuariosRiesgosAdminError());
    }
  };
}

const obtenerUsuariosRiesgosEliminarAdmin = (id) => ({
  type: OBTENER_USUARIO_RIESGOS_ELIMINAR_ADMIN,
  payload: id,
});

const eliminarUsuariosRiesgosAdminExito = () => ({
  type: USUARIO_RIESGOS_ELIMINADO_EXITO_ADMIN,
});

const eliminarUsuariosRiesgosAdminError = () => ({
  type: USUARIO_RIESGOS_ELIMINADO_ERROR_ADMIN,
  payload: true,
});

export function editarPerfilAdmin(idUsuario, usuarioGeneral) {
  return async (dispatch) => {
    dispatch(editarUsuarioGeneralCarga());
    try {
      const token = localStorage.getItem("token");
      await clienteAxios(token).put(
        `/users/usuario/administrador/${idUsuario}`,
        usuarioGeneral
      );
      dispatch(editarUsuarioGeneralExito());

      Swal.fire(
        "Ha editado el usuario",
        "El usuario se editó correctamente",
        "success"
      );

      const id = localStorage.getItem("id");
      dispatch(autenticadoToken(id));
      console.log(id);
    } catch (error) {
      console.log(error);
      dispatch(editarUsuarioGeneralError());
    }
  };
}

const editarUsuarioGeneralCarga = () => ({
  type: EDITAR_PERFIL_ADMIN_CARGA,
  payload: true,
});

const editarUsuarioGeneralExito = (usuarioGeneral) => ({
  type: EDITAR_PERFIL_ADMIN_EXITO,
  payload: usuarioGeneral,
});

const editarUsuarioGeneralError = () => ({
  type: EDITAR_PERFIL_ADMIN_ERROR,
  payload: true,
});
