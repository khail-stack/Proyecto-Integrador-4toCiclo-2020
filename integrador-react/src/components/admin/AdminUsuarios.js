import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  obtenerUsuariosLibresAdmin,
  obtenerUsuariosPosiblesAdmin,
  obtenerUsuariosRiesgosAdmin,
} from "../../actions/usuariosAdminAction";
import TablaUsuariosLibreRiesgos from "./TablaUsuariosLibreRiesgos";
import TablaUsuariosPosiblesCasos from "./TablaUsuariosPosiblesCasos";
import TablaUsuariosZonaRiesgos from "./TablaUsuariosZonaRiesgos";

const AdminUsuarios = () => {
  const dispatch = useDispatch();

  const getPaginaUsuariosLibresAdmin = useSelector(
    (state) => state.usuariosAdmin.pageUsuarioLibre
  );
  const getPaginaUsuariosPosiblesAdmin = useSelector(
    (state) => state.usuariosAdmin.pageUsuarioPosibles
  );
  const getPaginaUsuariosRiesgosAdmin = useSelector(
    (state) => state.usuariosAdmin.pageUsuarioRiesgos
  );

  useEffect(() => {
    localStorage.setItem(
      "pageUsuariosLibresAdmin",
      getPaginaUsuariosLibresAdmin
    );
    localStorage.setItem(
      "pageUsuariosPosiblesAdmin",
      getPaginaUsuariosPosiblesAdmin
    );
    localStorage.setItem(
      "pageUsuariosRiesgosAdmin",
      getPaginaUsuariosRiesgosAdmin
    );
    dispatch(obtenerUsuariosLibresAdmin(getPaginaUsuariosLibresAdmin));
    dispatch(obtenerUsuariosPosiblesAdmin(getPaginaUsuariosPosiblesAdmin));
    dispatch(obtenerUsuariosRiesgosAdmin(getPaginaUsuariosRiesgosAdmin));
  }, [
    getPaginaUsuariosLibresAdmin,
    getPaginaUsuariosPosiblesAdmin,
    getPaginaUsuariosRiesgosAdmin,
    dispatch,
  ]);

  const usuariosLibresAdmin = useSelector(
    (state) => state.usuariosAdmin.listadoUsuariosSanos
  );
  const usuariosRiesgosAdmin = useSelector(
    (state) => state.usuariosAdmin.listadoUsuariosRiesgo
  );
  const usuariosPosiblesAdmin = useSelector(
    (state) => state.usuariosAdmin.listadoUsuariosPosibles
  );

  console.log(usuariosLibresAdmin);
  console.log(usuariosRiesgosAdmin);
  console.log(usuariosPosiblesAdmin);

  const paginaPreguntaSiguienteUsuarioLibre = (e) => {
    e.preventDefault();
    dispatch(
      obtenerUsuariosLibresAdmin(
        Number(localStorage.getItem("pagePreguntasAdmin")) + 1
      )
    );
    localStorage.setItem(
      "pagePreguntasAdmin",
      getPaginaUsuariosLibresAdmin + 1
    );
  };

  const paginaPreguntaAnteriorUsuarioLibre = (e) => {
    e.preventDefault();
    dispatch(
      obtenerUsuariosLibresAdmin(
        Number(localStorage.getItem("pagePreguntasAdmin")) - 1
      )
    );
    localStorage.setItem(
      "pagePreguntasAdmin",
      getPaginaUsuariosLibresAdmin - 1
    );
  };

  const paginaPreguntaSiguienteUsuarioPosible = (e) => {
    e.preventDefault();
    dispatch(
      obtenerUsuariosPosiblesAdmin(
        Number(localStorage.getItem("pagePreguntasAdmin")) + 1
      )
    );
    localStorage.setItem(
      "pagePreguntasAdmin",
      getPaginaUsuariosPosiblesAdmin + 1
    );
  };

  const paginaPreguntaAnteriorUsuarioPosible = (e) => {
    e.preventDefault();
    dispatch(
      obtenerUsuariosPosiblesAdmin(
        Number(localStorage.getItem("pagePreguntasAdmin")) - 1
      )
    );
    localStorage.setItem(
      "pagePreguntasAdmin",
      getPaginaUsuariosPosiblesAdmin - 1
    );
  };

  const paginaPreguntaSiguienteUsuarioRiesgo = (e) => {
    e.preventDefault();
    dispatch(
      obtenerUsuariosRiesgosAdmin(
        Number(localStorage.getItem("pagePreguntasAdmin")) + 1
      )
    );
    localStorage.setItem(
      "pagePreguntasAdmin",
      getPaginaUsuariosRiesgosAdmin + 1
    );
  };

  const paginaPreguntaAnteriorUsuarioRiesgo = (e) => {
    e.preventDefault();
    dispatch(
      obtenerUsuariosRiesgosAdmin(
        Number(localStorage.getItem("pagePreguntasAdmin")) - 1
      )
    );
    localStorage.setItem(
      "pagePreguntasAdmin",
      getPaginaUsuariosRiesgosAdmin - 1
    );
  };

  return (
    <section className="content">
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="card diseño-preguntas-admin border-2 mb-5">
              <div className="card-body">
                <div className="row justify-content-between no">
                  <div className="col-xl-10 col-sm-12">
                    <h4 className=" mx-5 my-3 mb-2 text-uppercase">
                      Listado de Usuarios Libres de riesgo
                    </h4>
                  </div>
                </div>

                <div className="table-responsive-xl">
                  <table className="table table-striped table-bordered">
                    <thead className="hola table-dark">
                      <tr className="text-center">
                        <th scope="col">#</th>
                        <th scope="col text-center">Nombre</th>
                        <th scope="col text-center">Email</th>
                        <th scope="col text-center">Celular</th>
                        <th scope="col text-center">DNI</th>
                        <th scope="col text-center">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {usuariosLibresAdmin.length === 0
                        ? "No hay usuarios libres de riesgos"
                        : usuariosLibresAdmin.map((usuariosLibres, index) => (
                            <TablaUsuariosLibreRiesgos
                              index={index + 1}
                              key={usuariosLibres.id}
                              usuarioLibres={usuariosLibres}
                            />
                          ))}
                    </tbody>
                  </table>
                </div>

                <div className="row justify-content-between mx-2">
                  {getPaginaUsuariosLibresAdmin === 0 ? (
                    <div></div>
                  ) : (
                    <div className="text-left">
                      <button
                        className="btn boton-iniciar"
                        onClick={paginaPreguntaAnteriorUsuarioLibre}
                      >
                        Anterior
                      </button>
                    </div>
                  )}

                  {getPaginaUsuariosLibresAdmin ===
                  Number(localStorage.getItem("ultimaPaginaPreguntasAdmin")) ? (
                    <div></div>
                  ) : (
                    <div className="text-right">
                      <button
                        className="btn boton-iniciar"
                        onClick={paginaPreguntaSiguienteUsuarioLibre}
                      >
                        Siguiente
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="card diseño-preguntas-admin border-2 mb-5 mt-3">
              <div className="card-body">
                <div className="row justify-content-between no">
                  <div className="col-xl-10 col-sm-12">
                    <h4 className=" mx-5 my-3 mb-2 text-uppercase">
                      Listado de Usuarios posibles infectados
                    </h4>
                  </div>
                </div>

                <div className="table-responsive-xl">
                  <table className="table table-striped table-bordered">
                    <thead className="hola table-dark bordes_cabecera">
                      <tr className="text-center">
                        <th scope="col">#</th>
                        <th scope="col text-center">Nombre</th>
                        <th scope="col text-center">Email</th>
                        <th scope="col text-center">Celular</th>
                        <th scope="col text-center">DNI</th>
                        <th scope="col text-center">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {usuariosPosiblesAdmin.length === 0
                        ? "No hay usuarios posibles infectados"
                        : usuariosPosiblesAdmin.map(
                            (usuariosPosibles, index) => (
                              <TablaUsuariosPosiblesCasos
                                index={index + 1}
                                key={usuariosPosibles.id}
                                usuarioPosibles={usuariosPosibles}
                              />
                            )
                          )}
                    </tbody>
                  </table>
                </div>

                <div className="row justify-content-between mx-2">
                  {getPaginaUsuariosPosiblesAdmin === 0 ? (
                    <div></div>
                  ) : (
                    <div className="text-left">
                      <button
                        className="btn boton-iniciar"
                        onClick={paginaPreguntaAnteriorUsuarioPosible}
                      >
                        Anterior
                      </button>
                    </div>
                  )}

                  {getPaginaUsuariosPosiblesAdmin ===
                  Number(localStorage.getItem("ultimaPaginaPreguntasAdmin")) ? (
                    <div></div>
                  ) : (
                    <div className="text-right">
                      <button
                        className="btn boton-iniciar"
                        onClick={paginaPreguntaSiguienteUsuarioPosible}
                      >
                        Siguiente
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="card diseño-preguntas-admin border-2 mb-5 mt-3">
              <div className="card-body">
                <div className="row justify-content-between no">
                  <div className="col-xl-10 col-sm-12">
                    <h4 className=" mx-5 my-3 mb-2 text-uppercase">
                      Listado de usuarios en zona de riesgos
                    </h4>
                  </div>
                </div>

                <div className="table-responsive-xl">
                  <table className="table table-striped table-bordered">
                    <thead className="hola table-dark">
                      <tr className="text-center">
                        <th scope="col">#</th>
                        <th scope="col text-center">Nombre</th>
                        <th scope="col text-center">Email</th>
                        <th scope="col text-center">Celular</th>
                        <th scope="col text-center">DNI</th>
                        <th scope="col text-center">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {usuariosRiesgosAdmin.length === 0
                        ? "No hay usuarios en zona de riesgo"
                        : usuariosRiesgosAdmin.map((usuariosRiesgos, index) => (
                            <TablaUsuariosZonaRiesgos
                              index={index + 1}
                              key={usuariosRiesgos.id}
                              usuarioRiesgo={usuariosRiesgos}
                            />
                          ))}
                    </tbody>
                  </table>
                </div>

                <div className="row justify-content-between mx-2">
                  {getPaginaUsuariosRiesgosAdmin === 0 ? (
                    <div></div>
                  ) : (
                    <div className="text-left">
                      <button
                        className="btn boton-iniciar"
                        onClick={paginaPreguntaAnteriorUsuarioRiesgo}
                      >
                        Anterior
                      </button>
                    </div>
                  )}

                  {getPaginaUsuariosRiesgosAdmin ===
                  Number(localStorage.getItem("ultimaPaginaPreguntasAdmin")) ? (
                    <div></div>
                  ) : (
                    <div className="text-right">
                      <button
                        className="btn boton-iniciar"
                        onClick={paginaPreguntaSiguienteUsuarioRiesgo}
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

export default AdminUsuarios;
