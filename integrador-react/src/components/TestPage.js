import React, { useState, useEffect } from "react";
import alertaTest from "./../assets/alertaTest.svg";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./TestPage.css";
import { añadirInformacionAdicional } from "../actions/usuarioActions";
import {
  mostrarContenidoCuestionario,
  crearCuestionario,
} from "../actions/cuestionarioAction";
import CuestionarioContent from "./CuestionarioContent";

const TestPage = () => {
  const dispatch = useDispatch();

  const [distrito, guardarDistrito] = useState("");
  const [direccion, guardarDireccion] = useState("");

  const informacionAdicional = (informacion) =>
    dispatch(añadirInformacionAdicional(informacion));

  const submitAgregarInformacion = (e) => {
    e.preventDefault();

    // Validamos formulario
    if (distrito.trim() === "" || direccion.trim() === "") {
      return;
    }
    // Si no hay errores

    // Registrar el nuevo usuario
    informacionAdicional({
      distrito,
      direccion,
    });
  };

  const autenticado = useSelector((state) => state.usuarios.autenticado);

  const informacion = useSelector((state) => state.usuarios.usuarioAutenticado);

  const cuestionarioContenido = useSelector(
    (state) => state.cuestionario.contenidocuestionario
  );

  const uno = informacion.map((dos) => dos.direccion);
  const dos = informacion.map((dos) => dos.distrito);

  console.log(uno);
  //const tres= uno.
  const campoDireccion = uno[0];
  const campoDistrito = dos[0];

  useEffect(() => {
    if (localStorage.getItem("idCuestionario")) {
      dispatch(mostrarContenidoCuestionario(true));
    } else {
      dispatch(mostrarContenidoCuestionario(false));
    }
  }, [dispatch]);

  const crearYmostrarCuestionario = (e) => {
    e.preventDefault();
    dispatch(mostrarContenidoCuestionario(true));
    dispatch(crearCuestionario());
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
                <h1 className="titulo-login">Realiza tu cuestionario</h1>
                <p className="subtitulo-login">
                  Porque asi podremos brindarte asistencia personalizada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {autenticado === false ? (
          <div className="container ">
            <div className="row align-content-center espaciado-imagen mt_40">
              {/*<div className="col-lg-6">
              <img
                src={alertaTest}
                alt="Susana Distancia"
                className="imagen animated fadeIn"
              ></img>
  </div>*/}
              <div className="col-lg-5 offset-lg-1 d-flex align-items-center">
                <div className="presentacion-test-home">
                  <h3 className="mb-3 titulo-test-home">¡Oh no!</h3>

                  <p className="segundo-test-home">Necesitas iniciar sesión</p>
                  <div className="action_btn d-flex align-items-center mt_40_boton no">
                    <Link
                      className="btn boton-test-home boton-test-home"
                      to={"/login"}
                      role="button"
                      tabIndex="-1"
                      aria-disabled="true"
                      id="botonNav"
                    >
                      Iniciar Sesión
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  src={alertaTest}
                  alt="Susana Distancia"
                  className="imagen animated fadeIn"
                ></img>
              </div>
              <hr />
            </div>
          </div>
        ) : cuestionarioContenido === true ? (
          <CuestionarioContent></CuestionarioContent>
        ) : (
          <div className="container espaciado-login espacio">
            <div className="formulario-contenido">
              <div className="row">
                <div className="col-lg-12">
                  <div className="contenido">
                    {campoDistrito === null ? (
                      <h1 className="titulo-derecha text-center">
                        Porfavor, para mayor informacion llena estos campos.
                      </h1>
                    ) : (
                      <h1 className="titulo-derecha text-center">
                        Si desea actualizar tu direccion, cambielo aquí.
                      </h1>
                    )}

                    <div className="formulario-test">
                      <form onSubmit={submitAgregarInformacion}>
                        {campoDistrito ? (
                          <div className="form-group subtitulo-formulario">
                            <label className="texto-formulario">Distrito</label>

                            <input
                              type="text"
                              placeholder={campoDistrito}
                              className="form-control diseño-entrada"
                              name="Distrito"
                              value={distrito}
                              onChange={(e) => guardarDistrito(e.target.value)}
                              required
                            ></input>
                          </div>
                        ) : (
                          <div className="form-group subtitulo-formulario">
                            <label className="texto-formulario">Distrito</label>

                            <input
                              type="text"
                              placeholder="Agrega tu distrito"
                              className="form-control diseño-entrada"
                              name="Distrito"
                              value={distrito}
                              onChange={(e) => guardarDistrito(e.target.value)}
                              required
                            ></input>
                          </div>
                        )}
                        ,
                        {campoDireccion ? (
                          <div className="form-group subtitulo-formulario">
                            <label className="texto-formulario">
                              Dirección
                            </label>

                            <input
                              type="text"
                              placeholder={campoDireccion}
                              className="form-control diseño-entrada"
                              name="Direccion"
                              value={direccion}
                              onChange={(e) => guardarDireccion(e.target.value)}
                              required
                            ></input>
                          </div>
                        ) : (
                          <div className="form-group subtitulo-formulario">
                            <label className="texto-formulario">
                              Dirección
                            </label>

                            <input
                              type="text"
                              placeholder="Agrega tu Dirección"
                              className="form-control diseño-entrada"
                              name="Direccion"
                              value={direccion}
                              onChange={(e) => guardarDireccion(e.target.value)}
                              required
                            ></input>
                          </div>
                        )}
                        {campoDistrito === null ? (
                          <div className="extra-formulario text-center">
                            <div className="text-center">
                              <button
                                className="btn boton-iniciar text-center"
                                type="submit"
                              >
                                Enviar datos
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="extra-formulario text-center">
                            <div className="text-center">
                              <button
                                className="btn boton-iniciar text-center"
                                type="submit"
                              >
                                Actualizar Datos
                              </button>
                            </div>

                            <div className="text-center">
                              <button
                                className="btn boton-iniciar text-center"
                                onClick={crearYmostrarCuestionario}
                              >
                                Realizar Test
                              </button>
                            </div>
                          </div>
                        )}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestPage;
