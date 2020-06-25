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
} from "./../types/index";
import Swal from "sweetalert2";
//import axios from "axios";
import clienteAxios from "./../config/axios";

// Registrar usuarios

export function registrarNuevoUsuarioAction(usuario) {
  return async (dispatch) => {
    dispatch(registrarUsuario());

    try {
      //insertar en la Api
      await clienteAxios.post("/users/register", usuario);
      //si todo sale bien, actualizar el state
      dispatch(registrarUsuarioExito(usuario));

      //Alerta de exito
      Swal.fire("Bien hecho!", "Te has registrado correctamente", "success");
    } catch (error) {
      console.log(error.response);
      //Si hay un error cambiar el state
      dispatch(registrarUsuarioError(true));

      //Alerta de error
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error, intenta de nuevo",
      });
    }
  };
}

const registrarUsuario = () => ({
  type: REGISTRAR_USUARIO,
  payload: true,
});

// Si el producto se guarda en la base de datos

const registrarUsuarioExito = (usuario) => ({
  type: REGISTRAR_USUARIO_EXITO,
  payload: usuario,
});

// Si hubo un error

const registrarUsuarioError = (estado) => ({
  type: REGISTRAR_USUARIO_ERROR,
  payload: estado,
});

// AQUI SE REALIZAN LAS CONSULTAS DE LA BASE DE DATOS

// Funcion del login de usuarios

export function iniciarSesionAction(usuarioLogueado) {
  return async (dispatch) => {
    dispatch(loginUsuario());

    try {
      const usuariolog = await clienteAxios.post(
        "/users/login",
        usuarioLogueado
      );
      dispatch(loginUsuarioExito(usuariolog.data));
    } catch (error) {
      dispatch(loginUsuarioError(true));
      Swal.fire({
        icon: "error",
        title: "Inicio de sesion fallido",
        text: "Coloca bien tus datos, intenta de nuevo",
      });
    }
  };
}

const loginUsuario = () => ({
  type: LOGIN_USUARIO,
  payload: true,
});

const loginUsuarioExito = (usuarioLogueado) => ({
  type: LOGIN_USUARIO_EXITO,
  payload: usuarioLogueado,
});

const loginUsuarioError = (estado) => ({
  type: LOGIN_USUARIO_ERROR,
  payload: estado,
});

export function autenticadoToken(token) {
  return async (dispatch) => {
    await dispatch(validarToken(token));
  };
}

const validarToken = (token) => ({
  type: VALIDAR_TOKEN,
  payload: token,
});

export function mostrarAdminLogin() {
  if (localStorage.getItem("token")) {
    return async (dispatch) => {
      await dispatch(validarAdminLogin());
    };
  } else {
    return async (dispatch) => {
      await dispatch(validarAdminLoginFalse());
    };
  }
}

const validarAdminLogin = () => ({
  type: FILTRO_LOGIN_ADMIN,
  payload: false,
});

const validarAdminLoginFalse = () => ({
  type: FILTRO_LOGIN_ADMIN,
  payload: true,
});

export function mostrarPaginaError() {
  return async (dispatch) => {
    await dispatch(paginaError());
  };
}

const paginaError = () => ({
  type: FILTRO_ERROR,
  payload: true,
});
