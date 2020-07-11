import React from "react";

const AdminPerfil = () => {
  return (
    <section className="content">
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <div className="col-sm-8">
            <div className="card diseño-preguntas-admin border-2">
              <div className="card-body">
                <div className="row text-center justify-content-center">
                  <div className="col-md-8">
                    <h2 className="card-title mt-3 mb-5">Editar Perfil</h2>
                  </div>
                </div>

                <form>
                  <div className="form-row justify-content-center">
                    <div className="form-group col-md-8">
                      <label htmlFor="inputEmail4">Apellidos</label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="Mogollon"
                      />
                    </div>
                    <div className="form-group col-md-8">
                      <label htmlFor="inputEmail4">Nombres</label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="Khail"
                      />
                    </div>
                    <div className="form-group col-md-8">
                      <label htmlFor="inputEmail4">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="kmogollon1507@gmail.com"
                      />
                    </div>
                    <div className="form-group col-md-8">
                      <label htmlFor="inputEmail4">Telefono</label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="920096114"
                      />
                    </div>
                    <div className="form-group col-md-8">
                      <label htmlFor="inputEmail4">Usuario</label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="admin"
                      />
                    </div>
                    <div className="form-group col-md-8">
                      <label htmlFor="inputPassword4">Contraseña</label>
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword4"
                        placeholder="admin"
                      />
                    </div>
                  </div>
                  <div className="row text-center justify-content-center">
                    <div className="col-md-8">
                      <button
                        type="submit"
                        className="btn btn-primary my-2 color-boton-admin boton-sombra-admin text-center btn-block"
                      >
                        Guardar cambios
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminPerfil;
