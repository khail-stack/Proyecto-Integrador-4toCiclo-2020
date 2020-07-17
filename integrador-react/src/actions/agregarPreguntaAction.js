import {
  CREAR_NUEVA_PREGUNTA_CARGA,
  CREAR_NUEVA_PREGUNTA_EXITO,
  CREAR_NUEVA_PREGUNTA_ERROR,
  MOSTRAR_PREGUNTAS_ADMIN_CARGA,
  MOSTRAR_PREGUNTAS_ADMIN_EXITO,
  MOSTRAR_PREGUNTAS_ADMIN_ERROR,
  OBTENER_PAGINA_ADMIN,
  CARGAR_OBTENER_PAGINA_ADMIN,
  ULTIMA_PAGINA_ADMIN,
  OBTENER_PREGUNTA_ELIMINAR_ADMIN,
  PREGUNTA_ELIMINADO_EXITO_ADMIN,
  PREGUNTA_ELIMINADO_ERROR_ADMIN,
  OBTENER_PREGUNTA_EDITAR_ADMIN,
  PREGUNTA_EDITAR_EXITO_ADMIN,
  PREGUNTA_EDITAR_ERROR_ADMIN,
  OBTENER_OBJETO_PREGUNTA_EDITAR_ADMIN,
  OBTENER_OBJETO_PREGUNTA_EDITAR_ADMIN_EXITO,
  OBTENER_OBJETO_PREGUNTA_EDITAR_ADMIN_ERROR,
} from "./../types/index";
import { clienteAxios } from "../config/axios";
import Swal from "sweetalert2";

export function agregarPregunta(nuevapregunta) {
  return async (dispatch) => {
    dispatch(cargarCrearPregunta());
    try {
      const token = localStorage.getItem("token");
      await clienteAxios(token).post("/resources/preguntas", nuevapregunta);
      dispatch(crearNuevaPreguntaExito(nuevapregunta));

      Swal.fire("Bien hecho!", "Pregunta agregada correctamente", "success");
    } catch (error) {
      console.log(error.response);
      crearNuevaPreguntaError(true);
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error, intenta de nuevo",
      });
    }
  };
}
const cargarCrearPregunta = () => ({
  type: CREAR_NUEVA_PREGUNTA_CARGA,
  payload: true,
});

const crearNuevaPreguntaExito = (nuevapregunta) => ({
  type: CREAR_NUEVA_PREGUNTA_EXITO,
  payload: nuevapregunta,
});

const crearNuevaPreguntaError = (estado) => ({
  type: CREAR_NUEVA_PREGUNTA_ERROR,
  payload: estado,
});

export function obtenerPreguntasAdmin(getPaginaPreguntasAdmin) {
  return async (dispatch) => {
    dispatch(cargarPreguntasAdmin());
    try {
      const token = localStorage.getItem("token");
      const respuesta = await clienteAxios(token).get(
        `/resources/preguntas/tabla/${getPaginaPreguntasAdmin}`
      );
      dispatch(obtenerPreguntasAdminExito(respuesta.data.content));

      dispatch(obtenerUltimaPaginaAdmin(respuesta.data));
    } catch (error) {
      console.log(error.response);
      mostrarPreguntaAdminError(true);
    }
  };
}

const cargarPreguntasAdmin = () => ({
  type: MOSTRAR_PREGUNTAS_ADMIN_CARGA,
  payload: true,
});

const obtenerPreguntasAdminExito = (listaPreguntas) => ({
  type: MOSTRAR_PREGUNTAS_ADMIN_EXITO,
  payload: listaPreguntas,
});

const mostrarPreguntaAdminError = (estado) => ({
  type: MOSTRAR_PREGUNTAS_ADMIN_ERROR,
  payload: estado,
});

export function obtenerPaginaPreguntaAdmin(page) {
  return async (dispatch) => {
    dispatch(cargarPaginaAdmin());
    try {
      await dispatch(obtenerPaginaAdminExito(page));
    } catch (error) {}
  };
}

const obtenerUltimaPaginaAdmin = (ultimaPaginaPreguntasAdmin) => ({
  type: ULTIMA_PAGINA_ADMIN,
  payload: ultimaPaginaPreguntasAdmin,
});

const cargarPaginaAdmin = () => ({
  type: CARGAR_OBTENER_PAGINA_ADMIN,
  payload: true,
});
const obtenerPaginaAdminExito = (page) => ({
  type: OBTENER_PAGINA_ADMIN,
  payload: page,
});

export function borrarPreguntaAdmin(idpregunta) {
  return async (dispatch) => {
    dispatch(obtenerPreguntaEliminarAdmin(idpregunta));

    try {
      const token = localStorage.getItem("token");
      await clienteAxios(token).delete(`/resources/pregunta/${idpregunta}`);
      dispatch(eliminarPreguntasAdminExito());

      Swal.fire(
        "Eliminado!",
        "La pregunta se elimino correctamente",
        "success"
      );
    } catch (error) {
      console.log(error);
      dispatch(eliminarPreguntaAdminError());
    }
  };
}

const obtenerPreguntaEliminarAdmin = (idpregunta) => ({
  type: OBTENER_PREGUNTA_ELIMINAR_ADMIN,
  payload: idpregunta,
});

const eliminarPreguntasAdminExito = () => ({
  type: PREGUNTA_ELIMINADO_EXITO_ADMIN,
});

const eliminarPreguntaAdminError = () => ({
  type: PREGUNTA_ELIMINADO_ERROR_ADMIN,
  payload: true,
});

export function obtenerPreguntaEditar(preguntas) {
  return async (dispatch) => {
    dispatch(obtenerObjetoPreguntaAdmin());

    try {
      dispatch(obtenerObjetoPreguntaAdminExito(preguntas));
    } catch (error) {
      console.log(error);
      dispatch(obtenerObjetoPreguntaAdminError());
    }
  };
}

const obtenerObjetoPreguntaAdmin = () => ({
  type: OBTENER_OBJETO_PREGUNTA_EDITAR_ADMIN,
  payload: true,
});

const obtenerObjetoPreguntaAdminExito = (preguntas) => ({
  type: OBTENER_OBJETO_PREGUNTA_EDITAR_ADMIN_EXITO,
  payload: preguntas,
});

const obtenerObjetoPreguntaAdminError = () => ({
  type: OBTENER_OBJETO_PREGUNTA_EDITAR_ADMIN_ERROR,
  payload: true,
});

export function editarPreguntaAdmin(idpregunta, preguntaEditada) {
  return async (dispatch) => {
    dispatch(obtenerPreguntaEditarAdmin());

    try {
      const token = localStorage.getItem("token");
      await clienteAxios(token).put(
        `/resources/pregunta/${idpregunta}`,
        preguntaEditada
      );

      dispatch(editarPreguntasAdminExito());
    } catch (error) {
      console.log(error);
      dispatch(editarPreguntaAdminError());
    }
  };
}

const obtenerPreguntaEditarAdmin = () => ({
  type: OBTENER_PREGUNTA_EDITAR_ADMIN,
  payload: true,
});

const editarPreguntasAdminExito = (preguntaEditada) => ({
  type: PREGUNTA_EDITAR_EXITO_ADMIN,
  payload: preguntaEditada,
});

const editarPreguntaAdminError = () => ({
  type: PREGUNTA_EDITAR_ERROR_ADMIN,
  payload: true,
});
