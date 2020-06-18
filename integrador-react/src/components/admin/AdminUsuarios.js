import React from "react";

const AdminUsuarios = () => {
  return (
    <section class="content">
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="card diseño-preguntas-admin border-2 mb-5">
              <div className="card-body">
                <div className="row justify-content-between no">
                  <div className="col-xl-10 col-sm-12">
                    <h4 className=" mx-5 my-3 mb-2 text-uppercase">
                      Listado de Usuarios
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
                      <tr>
                        <th scope="row" className="text-center">
                          1
                        </th>
                        <td className="ajustar-texto-tabla-pregunta">
                          Khail Mogollon
                        </td>
                        <td className="ajustar-texto-tabla-opciones">
                          kmogollon1507@gmail.com
                        </td>
                        <td className="ajustar-texto-tabla-valor text-center">
                          920096114
                        </td>
                        <td className="ajustar-texto-tabla-opciones text-center">
                          72376495
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
                          Genaro Salas Mejia
                        </td>
                        <td className="ajustar-texto-tabla-opciones">
                          genaro.mejia@gmail.com
                        </td>
                        <td className="ajustar-texto-tabla-valor text-center">
                          987456123
                        </td>
                        <td className="ajustar-texto-tabla-opciones text-center">
                          74125893
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
                          Jadir Hervias
                        </td>
                        <td className="ajustar-texto-tabla-opciones">
                          jadircito@gmail.com
                        </td>
                        <td className="ajustar-texto-tabla-valor text-center">
                          951236744
                        </td>
                        <td className="ajustar-texto-tabla-opciones text-center">
                          74125896
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
                          Marco Vizcarra
                        </td>
                        <td className="ajustar-texto-tabla-opciones">
                          vizcarriendo@gmail.com
                        </td>
                        <td className="ajustar-texto-tabla-valor text-center">
                          947123583
                        </td>
                        <td className="ajustar-texto-tabla-opciones text-center">
                          78541236
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
                  </table>
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
                      <tr>
                        <th scope="row" className="text-center">
                          1
                        </th>
                        <td className="ajustar-texto-tabla-pregunta">
                          Khail Mogollon
                        </td>
                        <td className="ajustar-texto-tabla-opciones">
                          kmogollon1507@gmail.com
                        </td>
                        <td className="ajustar-texto-tabla-valor text-center">
                          920096114
                        </td>
                        <td className="ajustar-texto-tabla-opciones text-center">
                          72376495
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
                          Genaro Salas Mejia
                        </td>
                        <td className="ajustar-texto-tabla-opciones">
                          genaro.mejia@gmail.com
                        </td>
                        <td className="ajustar-texto-tabla-valor text-center">
                          987456123
                        </td>
                        <td className="ajustar-texto-tabla-opciones text-center">
                          74125893
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
                          Jadir Hervias
                        </td>
                        <td className="ajustar-texto-tabla-opciones">
                          jadircito@gmail.com
                        </td>
                        <td className="ajustar-texto-tabla-valor text-center">
                          951236744
                        </td>
                        <td className="ajustar-texto-tabla-opciones text-center">
                          74125896
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
                          Marco Vizcarra
                        </td>
                        <td className="ajustar-texto-tabla-opciones">
                          vizcarriendo@gmail.com
                        </td>
                        <td className="ajustar-texto-tabla-valor text-center">
                          947123583
                        </td>
                        <td className="ajustar-texto-tabla-opciones text-center">
                          78541236
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
                  </table>
                </div>
              </div>
            </div>

            <div className="card diseño-preguntas-admin border-2 mb-5 mt-3">
              <div className="card-body">
                <div className="row justify-content-between no">
                  <div className="col-xl-10 col-sm-12">
                    <h4 className=" mx-5 my-3 mb-2 text-uppercase">
                      Listado de usuarios no infectados
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
                      <tr>
                        <th scope="row" className="text-center">
                          1
                        </th>
                        <td className="ajustar-texto-tabla-pregunta">
                          Khail Mogollon
                        </td>
                        <td className="ajustar-texto-tabla-opciones">
                          kmogollon1507@gmail.com
                        </td>
                        <td className="ajustar-texto-tabla-valor text-center">
                          920096114
                        </td>
                        <td className="ajustar-texto-tabla-opciones text-center">
                          72376495
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
                          Genaro Salas Mejia
                        </td>
                        <td className="ajustar-texto-tabla-opciones">
                          genaro.mejia@gmail.com
                        </td>
                        <td className="ajustar-texto-tabla-valor text-center">
                          987456123
                        </td>
                        <td className="ajustar-texto-tabla-opciones text-center">
                          74125893
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
                          Jadir Hervias
                        </td>
                        <td className="ajustar-texto-tabla-opciones">
                          jadircito@gmail.com
                        </td>
                        <td className="ajustar-texto-tabla-valor text-center">
                          951236744
                        </td>
                        <td className="ajustar-texto-tabla-opciones text-center">
                          74125896
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
                          Marco Vizcarra
                        </td>
                        <td className="ajustar-texto-tabla-opciones">
                          vizcarriendo@gmail.com
                        </td>
                        <td className="ajustar-texto-tabla-valor text-center">
                          947123583
                        </td>
                        <td className="ajustar-texto-tabla-opciones text-center">
                          78541236
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

export default AdminUsuarios;
