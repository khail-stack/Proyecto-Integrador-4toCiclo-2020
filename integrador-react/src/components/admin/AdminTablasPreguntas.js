import React from "react";
import "./AdminStyle.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { rutaAgregarPreguntas } from "./../../actions/rutasAdminAction";
const AdminTablasPreguntas = () => {
  const dispatch = useDispatch();

  const agregarPregunta = useSelector(
    (state) => state.rutasadmin.agregarPregunta
  );

  return (
    <section class="content">
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
                  </div>
                  <div className="col-xl-2 col-sm-12 d-block d-sm-inline-block my-3 mb-2">
                    <Link
                      className="btn btn-danger font-weight-bold color-listado-boton text-uppercase"
                      onClick={() =>
                        dispatch(rutaAgregarPreguntas(agregarPregunta))
                      }
                    >
                      Nueva Pregunta <i class="fas fa-plus ml-2"></i>
                    </Link>
                  </div>
                </div>

                <div className="table-responsive-xl">
                  <table className="table table-striped table-bordered">
                    <thead className="hola table-dark">
                      <tr className="text-center">
                        <th scope="col">#</th>
                        <th scope="col text-center">Pregunta</th>
                        <th scope="col text-center">Opcion 1</th>
                        <th scope="col text-center">Valor 1</th>
                        <th scope="col text-center">Opcion 2</th>
                        <th scope="col text-center">Valor 2</th>
                        <th scope="col text-center">Opcion 3</th>
                        <th scope="col text-center">Valor 3</th>
                        <th scope="col text-center">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" className="text-center">
                          1
                        </th>
                        <td className="ajustar-texto-tabla-pregunta">
                          ¿Pertenece a algún grupo de riesgo? (mayor de 60
                          años,hipertensión, diabetes, cardiopatías, patología
                          pulmonar, enfermedad renal crónica, inmunosupresión,
                          patología hepática, neoplasias activas u obesidad)
                        </td>
                        <td className="ajustar-texto-tabla-opciones text-center">
                          Sí
                        </td>
                        <td className="ajustar-texto-tabla-valor text-center">
                          02
                        </td>
                        <td className="ajustar-texto-tabla-opciones text-center">
                          No
                        </td>
                        <td className="ajustar-texto-tabla-valor text-center">
                          00
                        </td>
                        <td className="ajustar-texto-tabla-opciones text-center">
                          --
                        </td>
                        <td className="ajustar-texto-tabla-valor text-center">
                          --
                        </td>
                        <td className="no text-center">
                          <a href="/">
                            <i className="fas fa-edit lead mr-2 color-accion-editar"></i>
                          </a>
                          <a href="/">
                            <i className="fas fa-trash-alt lead ml-3 color-accion-eliminar"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="text-center">
                          2
                        </th>
                        <td className="ajustar-texto-tabla-pregunta">
                          ¿Presentas Disminución del gusto o del olfato?
                        </td>
                        <td className="ajustar-texto-tabla-opciones text-center">
                          Sí
                        </td>
                        <td className="ajustar-texto-tabla-valor text-center">
                          02
                        </td>
                        <td className="ajustar-texto-tabla-opciones text-center">
                          No
                        </td>
                        <td className="ajustar-texto-tabla-valor text-center">
                          00
                        </td>
                        <td className="ajustar-texto-tabla-opciones text-center">
                          --
                        </td>
                        <td className="ajustar-texto-tabla-valor text-center">
                          --
                        </td>
                        <td className="no text-center">
                          <a href="/">
                            <i className="fas fa-edit lead mr-2 color-accion-editar"></i>
                          </a>
                          <a href="/">
                            <i className="fas fa-trash-alt lead ml-3 color-accion-eliminar"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="text-center">
                          3
                        </th>
                        <td className="ajustar-texto-tabla-pregunta">
                          ¿Presentas Tos?
                        </td>
                        <td className="ajustar-texto-tabla-opciones text-center">
                          Sí
                        </td>
                        <td className="ajustar-texto-tabla-valor text-center">
                          02
                        </td>
                        <td className="ajustar-texto-tabla-opciones text-center">
                          No
                        </td>
                        <td className="ajustar-texto-tabla-valor text-center">
                          00
                        </td>
                        <td className="ajustar-texto-tabla-opciones text-center">
                          --
                        </td>
                        <td className="ajustar-texto-tabla-valor text-center">
                          --
                        </td>
                        <td className="no text-center">
                          <a href="/">
                            <i className="fas fa-edit lead mr-2 color-accion-editar"></i>
                          </a>
                          <a href="/">
                            <i className="fas fa-trash-alt lead ml-3 color-accion-eliminar"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="text-center">
                          4
                        </th>
                        <td className="ajustar-texto-tabla-pregunta">
                          ¿Presentas dolor de garganta?
                        </td>
                        <td className="ajustar-texto-tabla-opciones text-center">
                          Sí
                        </td>
                        <td className="ajustar-texto-tabla-valor text-center">
                          02
                        </td>
                        <td className="ajustar-texto-tabla-opciones text-center">
                          No
                        </td>
                        <td className="ajustar-texto-tabla-valor text-center">
                          00
                        </td>
                        <td className="ajustar-texto-tabla-opciones text-center">
                          --
                        </td>
                        <td className="ajustar-texto-tabla-valor text-center">
                          --
                        </td>
                        <td className="no text-center">
                          <a href="/">
                            <i className="fas fa-edit lead mr-2 color-accion-editar"></i>
                          </a>
                          <a href="/">
                            <i className="fas fa-trash-alt lead ml-3 color-accion-eliminar"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="text-center">
                          5
                        </th>
                        <td className="ajustar-texto-tabla-pregunta">
                          ¿Presentas dificultad para respirar?
                        </td>
                        <td className="ajustar-texto-tabla-opciones text-center">
                          Sí
                        </td>
                        <td className="ajustar-texto-tabla-valor text-center">
                          02
                        </td>
                        <td className="ajustar-texto-tabla-opciones text-center">
                          No
                        </td>
                        <td className="ajustar-texto-tabla-valor text-center">
                          00
                        </td>
                        <td className="ajustar-texto-tabla-opciones text-center">
                          --
                        </td>
                        <td className="ajustar-texto-tabla-valor text-center">
                          --
                        </td>
                        <td className="no text-center">
                          <a href="/">
                            <i className="fas fa-edit lead mr-2 color-accion-editar"></i>
                          </a>
                          <a href="/">
                            <i className="fas fa-trash-alt lead ml-3 color-accion-eliminar"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                    <tr>
                      <th scope="row" className="text-center">
                        6
                      </th>
                      <td className="ajustar-texto-tabla-pregunta">
                        ¿Presentas congestión nasal?
                      </td>
                      <td className="ajustar-texto-tabla-opciones text-center">
                        Sí
                      </td>
                      <td className="ajustar-texto-tabla-valor text-center">
                        02
                      </td>
                      <td className="ajustar-texto-tabla-opciones text-center">
                        No
                      </td>
                      <td className="ajustar-texto-tabla-valor text-center">
                        00
                      </td>
                      <td className="ajustar-texto-tabla-opciones text-center">
                        --
                      </td>
                      <td className="ajustar-texto-tabla-valor text-center">
                        --
                      </td>
                      <td className="no text-center">
                        <a href="/">
                          <i className="fas fa-edit lead mr-2 color-accion-editar"></i>
                        </a>
                        <a href="/">
                          <i className="fas fa-trash-alt lead ml-3 color-accion-eliminar"></i>
                        </a>
                      </td>
                    </tr>
                  </table>
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
