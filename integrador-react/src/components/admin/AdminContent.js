import React, { useEffect } from "react";
import GraficoAdminLineal1 from "./GraficoAdmin1/GraficoAdminLineal1";
import GraficoAdminPie2 from "./GraficoAdmin2/GraficoAdminPie2";
import GraficoAdminBar3 from "./GraficoAdmin3/GraficoAdminBar3";
import { useSelector, useDispatch } from "react-redux";
import { datosAdmin } from "./../../actions/datosAdminAction";
import {
  graficoLinealAdmin,
  graficoCircularAdmin,
  graficoBarrasAdmin,
} from "./../../actions/graficosAdminAction";

const AdminContent = () => {
  const usuario = useSelector((state) => state.usuarios.usuarioAutenticado);

  const uno = usuario.map((dos) => dos.nombre);

  const tres = usuario.map((cuatro) => cuatro.apellido);

  const nombre = uno[0];
  const apellido = tres[0];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(datosAdmin());
    dispatch(graficoLinealAdmin());
    dispatch(graficoCircularAdmin());
    dispatch(graficoBarrasAdmin());
  }, [dispatch]);

  const datosAdminGen = useSelector((state) => state.datosAdmin.datos);

  return (
    <div className="contenido-admin">
      <section className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              {nombre ? (
                <h1 className="font-weight-bold mb-0">
                  Bienvenido {`${nombre + "  " + apellido}`}
                </h1>
              ) : (
                <div></div>
              )}
              <p className="lead text-muted">Revisa las ultimas actividades</p>
            </div>

            {/* <div className="col-lg-3 d-flex">
              <button className="btn btn-primary color-boton-admin w-100 align-self-center">
                Descargar Reporte
              </button>
            </div> */}
          </div>
        </div>
      </section>
      <section className="bg-mix">
        <div className="container ">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-3 col-md-12 stat my-3 d-flex">
                  <div className="mx-auto">
                    <h6 className="text-muted">Total encuestas</h6>
                    {datosAdminGen ? (
                      <h3 className="font-weight-bold ">
                        {datosAdminGen.totalEncuestas}
                        <i className="fas fa-notes-medical ml-2 color-admin-subtitulo-1"></i>
                      </h3>
                    ) : (
                      <h3 className="font-weight-bold ">
                        5000
                        <i className="fas fa-notes-medical ml-2 color-admin-subtitulo-1"></i>
                      </h3>
                    )}
                  </div>
                </div>

                <div className="col-lg-3 col-md-12 stat my-3 d-flex">
                  <div className="mx-auto">
                    <h6 className="text-muted">Posibles casos</h6>
                    {datosAdminGen ? (
                      <h3 className="font-weight-bold ">
                        {datosAdminGen.posiblesCasos}
                        <i className="fas fa-viruses ml-2 color-admin-subtitulo-2"></i>
                      </h3>
                    ) : (
                      <h3 className="font-weight-bold ">
                        0
                        <i className="fas fa-viruses ml-2 color-admin-subtitulo-2"></i>
                      </h3>
                    )}
                  </div>
                </div>

                <div className="col-lg-3 col-md-12 my-3 stat d-flex">
                  <div className="mx-auto">
                    <h6 className="text-muted">Personas sanas</h6>
                    {datosAdminGen ? (
                      <h3 className="font-weight-bold ">
                        {datosAdminGen.libresRegiesgo}
                        <i className="fas fa-heart ml-2 color-admin-subtitulo-3"></i>
                      </h3>
                    ) : (
                      <h3 className="font-weight-bold ">
                        0
                        <i className="fas fa-heart ml-2 color-admin-subtitulo-3"></i>
                      </h3>
                    )}
                  </div>
                </div>

                <div className="col-lg-3 col-md-12 my-3 d-flex">
                  <div className="mx-auto">
                    <h6 className="text-muted">Zona de riesgo</h6>
                    {datosAdminGen ? (
                      <h3 className="font-weight-bold ">
                        {datosAdminGen.zonadeRiesgo}
                        <i class="fas fa-asterisk ml-2 color-admin-subtitulo-4"></i>
                      </h3>
                    ) : (
                      <h3 className="font-weight-bold ">
                        0
                        <i class="fas fa-asterisk ml-2 color-admin-subtitulo-4"></i>
                      </h3>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-grafico">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 my-3">
              <div className="card rounded-0">
                <div className="card-header bg-light">
                  <h6 className="font-weight-bold mb-0">
                    Total de encuestas realizadas por día
                  </h6>
                </div>
                <div className="card-body">
                  <GraficoAdminLineal1></GraficoAdminLineal1>
                </div>
              </div>
            </div>

            <div className="col-lg-6 my-3">
              <div className="card rounded-0">
                <div className="card-header bg-light">
                  <h6 className="font-weight-bold mb-0">
                    Posibles casos de infección
                  </h6>
                </div>
                <div className="card-body">
                  <GraficoAdminPie2></GraficoAdminPie2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 my-3">
              <div className="card rounded-0">
                <div className="card-header bg-light">
                  <h6 className="font-weight-bold mb-0">
                    Posibles casos de infectados por distrito
                  </h6>
                </div>
                <div className="card-body">
                  <GraficoAdminBar3></GraficoAdminBar3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminContent;
