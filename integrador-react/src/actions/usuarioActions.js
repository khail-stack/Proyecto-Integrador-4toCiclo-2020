import {
  REGISTRAR_USUARIO,
  REGISTRAR_USUARIO_EXITO,
  REGISTRAR_USUARIO_ERROR,
  LOGIN_USUARIO,
  LOGIN_USUARIO_EXITO,
  LOGIN_USUARIO_ERROR,
} from "./../types/index";
import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

// Registrar usuarios

export function registrarNuevoUsuarioAction(usuario) {
  return async (dispatch) => {
    dispatch(registrarUsuario());

    try {
      //insertar en la Api
      await clienteAxios.post("/usuarios", usuario);
      //si todo sale bien, actualizar el state
      dispatch(registrarUsuarioExito(usuario));

      //Alerta de exito
      Swal.fire("Bien hecho!", "Te has registrado correctamente", "success");
    } catch (error) {
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
  return (dispatch) => {
    dispatch(loginUsuario());

    try {
      dispatch(loginUsuarioExito(usuarioLogueado));
    } catch (error) {
      dispatch(loginUsuarioError(true));
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
