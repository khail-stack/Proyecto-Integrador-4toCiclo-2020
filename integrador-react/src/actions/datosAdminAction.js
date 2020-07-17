import {
  MOSTRAR_DATOS_CARGA,
  MOSTRAR_DATOS_EXITO,
  MOSTRAR_DATOS_ERROR,
} from "./../types/index";
import { clienteAxios } from "../config/axios";

export function datosAdmin() {
  return async (dispatch) => {
    dispatch(cargandoDatosAdmin());
    try {
      const token = localStorage.getItem("token");
      const respuesta = await clienteAxios(token).get("/resources/datos");
      dispatch(getDatosAdminExito(respuesta.data));
    } catch (error) {
      dispatch(getDatosAdminError());
    }
  };
}

const cargandoDatosAdmin = () => ({
  type: MOSTRAR_DATOS_CARGA,
  payload: true,
});

const getDatosAdminExito = (dataAdmin) => ({
  type: MOSTRAR_DATOS_EXITO,
  payload: dataAdmin,
});

const getDatosAdminError = () => ({
  type: MOSTRAR_DATOS_ERROR,
  payload: true,
});
