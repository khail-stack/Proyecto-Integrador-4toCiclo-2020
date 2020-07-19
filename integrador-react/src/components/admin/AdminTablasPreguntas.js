import React, { useEffect } from "react";
import "./AdminStyle.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { rutaAgregarPreguntas } from "./../../actions/rutasAdminAction";
import {
  obtenerPreguntasAdmin,
  obtenerPaginaPreguntaAdmin,
} from "../../actions/agregarPreguntaAction";
import PreguntasAdmin from "../PreguntasAdmin";
import Spinner from "../Spinner";
const AdminTablasPreguntas = () => {
  const dispatch = useDispatch();

  const getPaginaPreguntasAdmin = useSelector((state) => state.preguntas.page);
  const cargando = useSelector((state) => state.preguntas.loading);
  //const error = useSelector((state) => state.preguntas.error);

  const agregarPregunta = useSelector(
    (state) => state.rutasadmin.agregarPregunta
  );

  console.log(
    getPaginaPreguntasAdmin +
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaavestruz"
  );

  console.log(localStorage.getItem("ultimaPaginaPreguntasAdmin"));

  useEffect(() => {
    localStorage.setItem("pagePreguntasAdmin", getPaginaPreguntasAdmin);
    dispatch(obtenerPreguntasAdmin(getPaginaPreguntasAdmin));
  }, [getPaginaPreguntasAdmin, dispatch]);

  const preguntasAdmin = useSelector((state) => state.preguntas.listaPreguntas);
  console.log(preguntasAdmin);

  const paginaPreguntaSiguiente = (e) => {
    e.preventDefault();
    dispatch(
      obtenerPaginaPreguntaAdmin(
        Number(localStorage.getItem("pagePreguntasAdmin")) + 1
      )
    );
    localStorage.setItem("pagePreguntasAdmin", getPaginaPreguntasAdmin + 1);
  };

  const paginaPreguntaAnterior = (e) => {
    e.preventDefault();
    dispatch(
      obtenerPaginaPreguntaAdmin(
        Number(localStorage.getItem("pagePreguntasAdmin")) - 1
      )
    );
    localStorage.setItem("pagePreguntasAdmin", getPaginaPreguntasAdmin - 1);
  };

  return (
    <section className="content">
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="card diseño-preguntas-admin border-2">
              <div className="card-body">
                <div className="row justify-content-between no">
                  <div className="col-xl-10 col-sm-12">
                    <h4 className=" mx-5 my-3 mb-2 text-uppercase">
                      Listado de preguntas
                    </h4>
                    {cargando ? (
                      <div className="d-flex justify-content-center mt-5">
                        <div role="status">
                          <Spinner></Spinner>
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <div className="col-xl-2 col-sm-12 d-block d-sm-inline-block my-3 mb-2">
                    <Link
                      className="btn btn-danger font-weight-bold color-listado-boton text-uppercase"
                      onClick={() =>
                        dispatch(rutaAgregarPreguntas(agregarPregunta))
                      }
                    >
                      Nueva Pregunta <i className="fas fa-plus ml-2"></i>
                    </Link>
                  </div>
                </div>

                <div className="table-responsive-xl">
                  <table className="table table-striped table-bordered">
                    <thead className="hola table-dark">
                      <tr className="text-center">
                        <th scope="col">#</th>
                        <th scope="col text-center">Pregunta</th>
                        <th scope="col text-center">Valor</th>
                        <th scope="col text-center">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {preguntasAdmin.length === 0
                        ? "No hay preguntas"
                        : preguntasAdmin.map((preguntas, index) => (
                            <PreguntasAdmin
                              index={index + 1}
                              key={preguntas.idpregunta}
                              preguntas={preguntas}
                            />
                          ))}
                    </tbody>
                  </table>
                </div>

                <div className="row justify-content-between mx-2">
                  {getPaginaPreguntasAdmin === 0 ? (
                    <div></div>
                  ) : (
                    <div className="text-left">
                      <button
                        className="btn boton-iniciar"
                        onClick={paginaPreguntaAnterior}
                      >
                        Anterior
                      </button>
                    </div>
                  )}

                  {getPaginaPreguntasAdmin ===
                  Number(localStorage.getItem("ultimaPaginaPreguntasAdmin")) ? (
                    <div></div>
                  ) : (
                    <div className="text-right">
                      <button
                        className="btn boton-iniciar"
                        onClick={paginaPreguntaSiguiente}
                      >
                        Siguiente
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminTablasPreguntas;
