import React, { useEffect } from "react";
import alertaTest from "./../assets/alertaTest.svg";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  obtenerPreguntas,
  borrarCuestionario,
  mostrarContenidoCuestionario,
  obtenerPagina,
} from "../actions/cuestionarioAction";
import Preguntas from "./Preguntas";
import Spinner from "./Spinner";
import { mandarRespuestas } from "./../actions/mandarRespuestaAction";
import MostrarRespuestas from "./MostrarRespuestas";
import Swal from "sweetalert2";

const CuestionarioContent = () => {
  const dispatch = useDispatch();

  const getPagina = useSelector((state) => state.cuestionario.page);

  const paginaSiguiente = (e) => {
    e.preventDefault();
    dispatch(obtenerPagina(Number(localStorage.getItem("page")) + 1));
    localStorage.setItem("page", getPagina + 1);
  };

  const cargarPregunta = useSelector((state) => state.cuestionario.loading);

  const autenticado = useSelector((state) => state.usuarios.autenticado);

  const preguntas = useSelector((state) => state.cuestionario.preguntas);

  const respuesta = useSelector((state) => state.respuesta.respuesta);

  const mostrarRespuesta = useSelector(
    (state) => state.obtenerRespuestas.contenidoRespuesta
  );

  useEffect(() => {
    localStorage.setItem("page", getPagina);
    dispatch(obtenerPreguntas(getPagina));
  }, [getPagina, dispatch]);

  const borrarElCuestionario = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Se perdera el progreso del cuestionario",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cancelar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        dispatch(borrarCuestionario());
        dispatch(obtenerPagina(0));
        dispatch(mostrarContenidoCuestionario(false));
      }
    });
  };

  const mandarRespuesta = (respuestas) =>
    dispatch(mandarRespuestas(respuestas));

  const submitRespuestas = (e) => {
    e.preventDefault();
    mandarRespuesta(respuesta);
  };

  return (
    <div>
      {autenticado === false ? (
        <div className="container">
          <div className="row align-content-center espaciado-imagen mt_40">
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
      ) : cargarPregunta === false ? (
        <div className="container espaciado-login espacio">
          <div className="formulario-contenido">
            <div className="row">
              <div className="col-lg-12">
                {mostrarRespuesta === true ? (
                  <MostrarRespuestas></MostrarRespuestas>
                ) : (
                  <div className="contenido">
                    <h1 className="titulo-derecha text-center">
                      Realizar Cuestionario
                    </h1>
                    <div className="formulario-test">
                      <form onSubmit={submitRespuestas}>
                        {preguntas
                          .slice(getPagina * 4, getPagina * 4 + 4)
                          .map((pregunta, index) => (
                            <Preguntas
                              index={index + 1}
                              key={pregunta.idpregunta}
                              contenido={pregunta}
                            ></Preguntas>
                          ))}

                        <div>
                          <i>
                            *Las preguntas de este cuestionario son una
                            recopilacíon de la aplicación de la nacion llamada
                            "Peru en tus manos".
                          </i>
                        </div>

                        <div className="extra-formulario text-center">
                          <div className="text-center">
                            <button
                              className="btn boton-iniciar text-center"
                              onClick={borrarElCuestionario}
                            >
                              Cancelar
                            </button>
                          </div>
                          {getPagina ===
                          Number(localStorage.getItem("ultimaPagina")) ? (
                            <div className="text-center">
                              <button
                                className="btn boton-iniciar text-center"
                                type="submit"
                              >
                                Enviar
                              </button>
                            </div>
                          ) : (
                            <div className="text-center">
                              <button
                                className="btn boton-iniciar text-center"
                                onClick={paginaSiguiente}
                              >
                                Siguiente
                              </button>
                            </div>
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <div role="status">
            <Spinner></Spinner>
          </div>
        </div>
      )}
    </div>
  );
};

export default CuestionarioContent;
