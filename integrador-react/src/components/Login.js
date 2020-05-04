import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

import { iniciarSesionAction } from "../actions/usuarioActions";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [dni, guardarDni] = useState("");
  const [password, guardarPassword] = useState("");

  const dipatch = useDispatch();

  const loginUsuario = (usuarioLogueado) => {
    dipatch(iniciarSesionAction(usuarioLogueado));
  };

  const submitIniciarSesion = (e) => {
    e.preventDefault();

    if (dni.trim() === "" || password.trim() === "") {
      return;
    }

    loginUsuario({ dni, password });
  };
  return (
    <div>
      <div className="fondo-login">
        <div className="circulo uno"></div>
        <div className="circulo dos"></div>
        <div className="circulo tres"></div>
        <div>
          <div className="container mt-5">
            <div className="row align-content-center">
              <div className="col text-center">
                <h1 className="titulo-login">Inicia sesión</h1>
                <p className="subtitulo-login">
                  Porque asi podremos brindarte asistencia personalizada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container espaciado-login espacio">
        <div className="formulario-contenido">
          <div className="row">
            <div className="col-lg-5">
              <div className="contenido-izquierda pb-5 no">
                <h3 className="titulo-izquierda">¿Primera vez aquí?</h3>
                <h2 className="subtitulo-izquierda">Registrate ahora</h2>
                <Link
                  className="btn boton-izquierda"
                  to={"/register"}
                  role="button"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Registrarse
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contenido-derecha">
                <h2 className="titulo-derecha">Inicia Sesión</h2>
                <form
                  action="/#"
                  className="formulario-login"
                  onSubmit={submitIniciarSesion}
                >
                  <div className="form-group subtitulo-formulario">
                    <label className="texto-formulario">DNI</label>
                    <input
                      type="text"
                      placeholder="tecsup@gmail.com"
                      className="form-control diseño-entrada"
                      name="dni"
                      value={dni}
                      onChange={(e) => guardarDni(e.target.value)}
                    ></input>
                  </div>
                  <div className="form-group subtitulo-formulario">
                    <label className="texto-formulario">Contraseña</label>
                    <input
                      type="password"
                      placeholder="********"
                      className="form-control diseño-entrada"
                      name="password"
                      value={password}
                      onChange={(e) => guardarPassword(e.target.value)}
                    ></input>
                  </div>
                  <div className="extra-formulario">
                    <div className="olvidaste-contraseña no">
                      <a href="/#" className="olvido">
                        ¿Olvidaste tu contraseña?
                      </a>
                    </div>
                    <div className="d-flex justify-content-start align-items-start">
                      <button type="submit" className="btn boton-iniciar">
                        Ingresar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
