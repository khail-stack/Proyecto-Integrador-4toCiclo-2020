import React from "react";
import GraficoAdminLineal1 from "./GraficoAdmin1/GraficoAdminLineal1";
import GraficoAdminPie2 from "./GraficoAdmin2/GraficoAdminPie2";
import GraficoAdminBar3 from "./GraficoAdmin3/GraficoAdminBar3";
import { useSelector } from "react-redux";

const AdminContent = () => {
  const usuario = useSelector((state) => state.usuarios.usuarioAutenticado);

  const uno = usuario.map((dos) => dos.username);

  const campoUsername = uno[0];
  return (
    <div className="contenido-admin">
      <section className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              {campoUsername ? (
                <h1 className="font-weight-bold mb-0">
                  Bienvenido {campoUsername}
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
                <div className="col-lg-4 col-md-12 stat my-3 d-flex">
                  <div className="mx-auto">
                    <h6 className="text-muted">Total encuestas</h6>
                    <h3 className="font-weight-bold ">
                      5000
                      <i className="fas fa-notes-medical ml-2 color-admin-subtitulo-1"></i>
                    </h3>
                  </div>
                </div>

                <div className="col-lg-4 col-md-12 stat my-3 d-flex">
                  <div className="mx-auto">
                    <h6 className="text-muted">Posibles casos</h6>
                    <h3 className="font-weight-bold ">
                      2000
                      <i className="fas fa-viruses ml-2 color-admin-subtitulo-2"></i>
                    </h3>
                  </div>
                </div>

                <div className="col-lg-4 col-md-12 my-3 d-flex">
                  <div className="mx-auto">
                    <h6 className="text-muted">Personas sanas</h6>
                    <h3 className="font-weight-bold ">
                      3000
                      <i className="fas fa-heart ml-2 color-admin-subtitulo-3"></i>
                    </h3>
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
                  <h6 className="font-weight-bold mb-0">Actividad Diaria</h6>
                </div>
                <div className="card-body">
                  <GraficoAdminLineal1></GraficoAdminLineal1>
                </div>
              </div>
            </div>

            <div className="col-lg-6 my-3">
              <div className="card rounded-0">
                <div className="card-header bg-light">
                  <h6 className="font-weight-bold mb-0">Actividad Diaria</h6>
                </div>
                <div className="card-body">
                  <GraficoAdminPie2></GraficoAdminPie2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 my-3">
              <div className="card rounded-0">
                <div className="card-header bg-light">
                  <h6 className="font-weight-bold mb-0">Actividad Diaria</h6>
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
