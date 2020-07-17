import {
  EDITAR_PERFIL_ADMIN_CARGA,
  EDITAR_PERFIL_ADMIN_EXITO,
  EDITAR_PERFIL_ADMIN_ERROR,
} from "./../types/index";
import { clienteAxios } from "../config/axios";

export function editarUsuarioAdmin(id, usuarioAdminEditado) {
  return async (dispatch) => {
    dispatch(editarUsuarioAdminCarga());
    try {
      const token = localStorage.getItem("token");
      await clienteAxios(token).put(
        `/users/usuario/administrador/${id}`,
        usuarioAdminEditado
      );

      dispatch(editarUsuarioAdminExito(usuarioAdminEditado));
    } catch (error) {
      console.log(error.response);
      editarUsuarioAdminError(true);
    }
  };
}

const editarUsuarioAdminCarga = () => ({
  type: EDITAR_PERFIL_ADMIN_CARGA,
  payload: true,
});

const editarUsuarioAdminExito = (usuarioAdminEditado) => ({
  type: EDITAR_PERFIL_ADMIN_EXITO,
  payload: usuarioAdminEditado,
});

const editarUsuarioAdminError = () => ({
  type: EDITAR_PERFIL_ADMIN_ERROR,
  payload: true,
});
