import {
  MOSTRAR_CUESTIONARIO,
  MOSTRAR_CUESTIONARIO_CARGA,
  MOSTRAR_CUESTIONARIO_ERROR,
  OBTENER_PREGUNTAS,
  OBTENER_PREGUNTAS_EXITO,
  OBTENER_PREGUNTAS_ERROR,
  CREAR_CUESTIONARIO,
  ERROR_CUESTIONARIO,
  CARGAR_CUESTIONARIO,
  BORRAR_CUESTIONARIO,
  PAGINA_INICIAL,
  ULTIMA_PAGINA,
  CARGAR_PAGINA,
  MANDAR_RESPUESTA,
  BORRAR_ESTADO,
  BORRAR_ESTADO_RESPUESTA,
} from "./../types/index";
import { clienteAxios } from "../config/axios";

export function mostrarContenidoCuestionario(existeCuestionario) {
  return async (dispatch) => {
    dispatch(mostrarCuestionarioCarga());
    try {
      await dispatch(mostrarCuestionarioExito(existeCuestionario));
    } catch (error) {
      dispatch(mostrarCuestionarioError());
    }
  };
}

const mostrarCuestionarioCarga = () => ({
  type: MOSTRAR_CUESTIONARIO_CARGA,
  payload: true,
});

const mostrarCuestionarioExito = (existeCuestionario) => ({
  type: MOSTRAR_CUESTIONARIO,
  payload: existeCuestionario,
});

const mostrarCuestionarioError = () => ({
  type: MOSTRAR_CUESTIONARIO_ERROR,
  payload: true,
});

export function crearCuestionario() {
  return async (dispatch) => {
    dispatch(cargarCuestionario());
    try {
      const token = localStorage.getItem("token");
      const cuestionario = await clienteAxios(token).post(
        "/resources/cuestionario"
      );
      dispatch(crearCuestionarioExisto(cuestionario.data));
      dispatch(mostrarContenidoCuestionario(true));
      console.log(cuestionario);
    } catch (error) {
      dispatch(crearCuestionarioError());
    }
  };
}

const cargarCuestionario = () => ({
  type: CARGAR_CUESTIONARIO,
  payload: true,
});

const crearCuestionarioExisto = (cuestionario) => ({
  type: CREAR_CUESTIONARIO,
  payload: cuestionario,
});

const crearCuestionarioError = () => ({
  type: ERROR_CUESTIONARIO,
  payload: true,
});

export function obtenerPreguntas(getPagina) {
  return async (dispatch) => {
    dispatch(obtenerPreguntasCarga());
    try {
      const token = localStorage.getItem("token");
      const cuestionario = await clienteAxios(token).get(
        `/resources/preguntas/${getPagina}`
      );

      dispatch(obtenerUltimaPagina(cuestionario.data));

      const num = cuestionario.data.totalElements;

      const objetoPregunta = [];

      for (let index = 0; index <= num; index++) {
        objetoPregunta.push(index + 1);
      }

      //const objetoPregunta = [];
      seteaRespuestas(objetoPregunta);

      cuestionario.data.content.forEach((element) => {
        dispatch(obtenerPreguntasExito(element));
      });

      console.log(cuestionario.data.totalPages);

      // console.log(ultimaPagina);
    } catch (error) {
      dispatch(obtenerPreguntasError());
    }
  };
}

const seteaRespuestas = (objetoRespuesta) => ({
  type: MANDAR_RESPUESTA,
  payload: objetoRespuesta,
});

const obtenerUltimaPagina = (ultimaPagina) => ({
  type: ULTIMA_PAGINA,
  payload: ultimaPagina,
});

export function obtenerPagina(page) {
  return async (dispatch) => {
    //console.warn("Pagina mas 1 =>" + page);
    await dispatch(cargarPagina());
    try {
      dispatch(obtenerPaginaExito(page));
    } catch (error) {}
  };
}

const cargarPagina = () => ({
  type: CARGAR_PAGINA,
  payload: true,
});

const obtenerPaginaExito = (page) => ({
  type: PAGINA_INICIAL,
  payload: page,
});

const obtenerPreguntasCarga = () => ({
  type: OBTENER_PREGUNTAS,
  payload: true,
});

const obtenerPreguntasExito = (preguntas) => ({
  type: OBTENER_PREGUNTAS_EXITO,
  payload: preguntas,
});

const obtenerPreguntasError = () => ({
  type: OBTENER_PREGUNTAS_ERROR,
  payload: true,
});

export function borrarCuestionario() {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    const idCuestionario = localStorage.getItem("idCuestionario");
    const cuestionarioEliminado = await clienteAxios(token).delete(
      `/resources/cuestionario/${idCuestionario}`
    );
    dispatch(borrarCuestionarioExito(cuestionarioEliminado));
    localStorage.removeItem("idCuestionario");
    localStorage.removeItem("fechaCuestionario");
    localStorage.removeItem("page");
    localStorage.removeItem("ultimaPagina");

    dispatch(borrarEstado());

    dispatch(borrarEstadoRespuesta());
    console.log(cuestionarioEliminado);
  };
}

const borrarCuestionarioExito = (cuestionarioEliminado) => ({
  type: BORRAR_CUESTIONARIO,
  payload: cuestionarioEliminado,
});

const borrarEstado = () => ({
  type: BORRAR_ESTADO,
  payload: [],
});

const borrarEstadoRespuesta = () => ({
  type: BORRAR_ESTADO_RESPUESTA,
  payload: [],
});
