import React from "react";
import alertaTest from "./../assets/alertaTest.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./TestPage.css";
const TestPage = () => {
  const autenticado = useSelector((state) => state.usuarios.autenticado);
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
        ) : (
          <div className="container espaciado-login espacio">
            <div className="formulario-contenido">
              <div className="row">
                <div className="col-lg-12">
                  <div className="contenido">
                    <h2 className="titulo-derecha text-center">Cuestionario</h2>
                    <div className="formulario-test">
                      <form>
                        <div className="form-group subtitulo-formulario mb-4">
                          <label className="texto-formulario mb-4">
                            <strong>.</strong>
                            ¿Pertenece a algún grupo de riesgo? (mayor de 60
                            años,hipertensión, diabetes, cardiopatías, patología
                            pulmonar, enfermedad renal crónica, inmunosupresión,
                            patología hepática, neoplasias activas u obesidad)
                          </label>
                          <div className="form-check mb-3">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="pregunta1"
                              id="opcionpregunta1"
                              value="opcion1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="opcionpregunta1"
                            >
                              Sí
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="pregunta1"
                              id="opcionpregunta2"
                              value="opcion2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="opcionpregunta2"
                            >
                              No
                            </label>
                          </div>
                        </div>

                        <div className="form-group subtitulo-formulario mb-4">
                          <label className="texto-formulario mb-4">
                            <strong>.</strong>
                            ¿Presentas Disminución del gusto o del olfato?
                          </label>
                          <div className="form-check mb-3">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="pregunta2"
                              id="opcionpregunta3"
                              value="opcion3"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="opcionpregunta3"
                            >
                              Sí
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="pregunta2"
                              id="opcionpregunta4"
                              value="opcion4"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="opcionpregunta4"
                            >
                              No
                            </label>
                          </div>
                        </div>

                        <div className="form-group subtitulo-formulario mb-4">
                          <label className="texto-formulario mb-4">
                            <strong>.</strong>
                            ¿Presentas Tos?
                          </label>
                          <div className="form-check mb-3">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="pregunta3"
                              id="opcionpregunta5"
                            />
                            <label
                              class="form-check-label"
                              htmlFor="opcionpregunta5"
                            >
                              Sí
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="pregunta3"
                              id="opcionpregunta6"
                            />
                            <label
                              class="form-check-label"
                              htmlFor="opcionpregunta6"
                            >
                              No
                            </label>
                          </div>
                        </div>

                        <div className="form-group subtitulo-formulario mb-4">
                          <label className="texto-formulario mb-4">
                            <strong>.</strong>
                            ¿Presentas dolor de garganta?
                          </label>
                          <div class="form-check mb-3">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="pregunta4"
                              id="opcionpregunta6"
                              value="opcion5"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="opcionpregunta6"
                            >
                              Sí
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="pregunta4"
                              id="opcionpregunta7"
                              value="opcion6"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="opcionpregunta7"
                            >
                              No
                            </label>
                          </div>
                        </div>

                        <div className="extra-formulario text-center">
                          <div className="text-center">
                            <button className="btn boton-iniciar text-center">
                              Siguiente
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
        )}
      </div>
    </div>
  );
};

export default TestPage;
