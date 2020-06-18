import {
  FILTRO_DASHBOARD,
  FILTRO_PREGUNTAS,
  FILTRO_USUARIOS,
  FILTRO_PERFIL,
  FILTRO_AGREGAR_PREGUNTA,
} from "./../types/index";

export function rutaMostrarDashboard() {
  return (dispatch) => {
    dispatch(mostrarDashboard());
  };
}

const mostrarDashboard = () => ({
  type: FILTRO_DASHBOARD,
  payload: true,
});

export function rutaMostrarPreguntas() {
  return (dispatch) => {
    dispatch(mostrarPreguntas());
  };
}

const mostrarPreguntas = () => ({
  type: FILTRO_PREGUNTAS,
  payload: true,
});

export function rutaMostrarUsuarios() {
  return (dispatch) => {
    dispatch(mostrarUsuarios());
  };
}

const mostrarUsuarios = () => ({
  type: FILTRO_USUARIOS,
  payload: true,
});

export function rutaMostrarPerfil() {
  return (dispatch) => {
    dispatch(mostrarPerfil());
  };
}

const mostrarPerfil = () => ({
  type: FILTRO_PERFIL,
  payload: true,
});

export function rutaAgregarPreguntas() {
  return (dispatch) => {
    dispatch(mostrarAgregarPreguntas());
  };
}

const mostrarAgregarPreguntas = () => ({
  type: FILTRO_AGREGAR_PREGUNTA,
  payload: true,
});
