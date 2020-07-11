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
  VALIDAR_AUTENTICACION,
  ERROR_AUTENTICACION,
  AÑADIR_INFORMACION_CARGA,
  AÑADIR_INFORMACION_EXITO,
  AÑADIR_INFORMACION_ERROR,
} from "./../types/index";
import Swal from "sweetalert2";
//import axios from "axios";
import { clienteAxios, clienteAxios2 } from "./../config/axios";

// Registrar usuarios

export function registrarNuevoUsuarioAction(usuario) {
  return async (dispatch) => {
    dispatch(registrarUsuario());

    try {
      //insertar en la Api
      await clienteAxios2.post("/v1/users/register", usuario);
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

export function añadirInformacionAdicional(informacion) {
  return async (dispatch) => {
    dispatch(añadirInformacion());

    try {
      const token = localStorage.getItem("token");
      console.log(token);

      //http://localhost:8081/v1/users/usuario/1
      //insertar en la Api
      await clienteAxios(token).put(
        `/users/usuario/${localStorage.getItem("id")}`,
        informacion
      );
      //si todo sale bien, actualizar el state
      dispatch(añadirInformacionExito(informacion));

      //Alerta de exito
      Swal.fire("Bien hecho!", "Empieza con el cuestionario", "success");

      const id = localStorage.getItem("id");
      dispatch(autenticadoToken(id));
    } catch (error) {
      console.log(error.response);
      //Si hay un error cambiar el state
      dispatch(añadirInformacionError(true));

      //Alerta de error
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error, intenta de nuevo",
      });
    }
  };
}

const añadirInformacion = () => ({
  type: AÑADIR_INFORMACION_CARGA,
  payload: true,
});

// Si el producto se guarda en la base de datos

const añadirInformacionExito = (informacion) => ({
  type: AÑADIR_INFORMACION_EXITO,
  payload: informacion,
});

// Si hubo un error

const añadirInformacionError = (estado) => ({
  type: AÑADIR_INFORMACION_ERROR,
  payload: estado,
});

// AQUI SE REALIZAN LAS CONSULTAS DE LA BASE DE DATOS

// Funcion del login de usuarios

export function iniciarSesionAction(usuarioLogueado) {
  return async (dispatch) => {
    dispatch(loginUsuario());
    //window.location.reload();
    try {
      const usuariolog = await clienteAxios2.post(
        "/v1/users/login",
        usuarioLogueado
      );
      dispatch(loginUsuarioExito(usuariolog.data));

      const token = localStorage.getItem("token");
      console.log(token);
      const usuarioautenticado = await clienteAxios(token).get(
        `/users/usuario/${localStorage.getItem("id")}`
      );
      console.log(usuarioautenticado);
      dispatch(informacionAutenticado(usuarioautenticado.data));
      console.log(usuarioautenticado.data);
    } catch (error) {
      console.log(error);
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

const informacionAutenticado = (usuarioautenticado) => ({
  type: VALIDAR_AUTENTICACION,
  payload: usuarioautenticado,
});

const loginUsuarioError = (estado) => ({
  type: LOGIN_USUARIO_ERROR,
  payload: estado,
});

//Funcion del validarUsuarioAutenticado

// export function validarUsuarioAutenticado(id) {
//   return async (dispatch) => {
//     const validarusuarioautenticado = await clienteAxios.get(
//       `/users/usuario/${id}`
//     );
//     dispatch(validarAutenticacion(validarusuarioautenticado));
//   };
// }
// const validarAutenticacion = (validarusuarioautenticado) => ({
//   type: VALIDAR_AUTENTICACION,
//   payload: validarusuarioautenticado,
// });

export function autenticadoToken(id) {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const validarusuarioautenticado = await clienteAxios(token).get(
        `/users/usuario/${id}`
      );

      dispatch(informacionAutenticado(validarusuarioautenticado.data));
    } catch (error) {
      console.log(error.response);
      console.log("entra error de mrd");
      localStorage.clear();
      dispatch(errorAutenticado());
      //window.location.reload();
      // props.history.push("/login");
    }
  };
}

const errorAutenticado = () => ({
  type: ERROR_AUTENTICACION,
  payload: false,
});

//Funcion del autenticadoToken
export function cambiarEstadoAutenticado(token) {
  return async (dispatch) => {
    await dispatch(cambiarEstado(token));
  };
}

const cambiarEstado = (token) => ({
  type: VALIDAR_TOKEN,
  payload: token,
});

// Funcion del login de usuarios
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

// Funcion del login de usuarios
export function mostrarPaginaError() {
  return async (dispatch) => {
    await dispatch(paginaError());
  };
}

const paginaError = () => ({
  type: FILTRO_ERROR,
  payload: true,
});
