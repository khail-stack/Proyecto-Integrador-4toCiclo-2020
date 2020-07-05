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
  MANDAR_RESPUESTA,
} from "./../types/index";
import { clienteAxios2, clienteAxios } from "../config/axios";
import { useSelector } from "react-redux";

export function mostrarContenidoCuestionario(existeCuestionario) {
  return (dispatch) => {
    dispatch(mostrarCuestionarioCarga());
    try {
      dispatch(mostrarCuestionarioExito(existeCuestionario));
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
        `/resources/preguntas?page=${getPagina}&size=4`
      );

      // const num = respuesta.total.length

      // const objetoPregunta = []

      // for (let index = 0; index <= num; index++) {

      //   objetoPregunta.push( index+1 );

      // }

      const objetoPregunta = [];
      seteaRespuestas(objetoPregunta);

      cuestionario.data.forEach((element) => {
        dispatch(obtenerPreguntasExito(element));
      });

      console.log(getPagina);
      console.log(cuestionario);
    } catch (error) {
      dispatch(obtenerPreguntasError());
    }
  };
}

export function obtenerPagina(page) {
  return async (dispatch) => {
    //console.warn("Pagina mas 1 =>" + page);

    dispatch(obtenerPaginaExito(page));
  };
}

const seteaRespuestas = (objetoRespuesta) => ({
  type: MANDAR_RESPUESTA,
  payload: objetoRespuesta,
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

    console.log(cuestionarioEliminado);
  };
}

const borrarCuestionarioExito = (cuestionarioEliminado) => ({
  type: BORRAR_CUESTIONARIO,
  payload: cuestionarioEliminado,
});
