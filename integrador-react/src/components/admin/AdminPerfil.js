import React from "react";

const AdminPerfil = () => {
  return (
    <section className="content">
      <div className="container">
        <div class="row mt-5 justify-content-center">
          <div class="col-sm-8">
            <div class="card diseño-preguntas-admin border-2">
              <div class="card-body">
                <div className="row text-center justify-content-center">
                  <div className="col-md-8">
                    <h2 class="card-title mt-3 mb-5">Editar Perfil</h2>
                  </div>
                </div>

                <form>
                  <div class="form-row justify-content-center">
                    <div class="form-group col-md-8">
                      <label for="inputEmail4">Apellidos</label>
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
                        placeholder="Mogollon"
                      />
                    </div>
                    <div class="form-group col-md-8">
                      <label for="inputEmail4">Nombres</label>
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
                        placeholder="Khail"
                      />
                    </div>
                    <div class="form-group col-md-8">
                      <label for="inputEmail4">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
                        placeholder="kmogollon1507@gmail.com"
                      />
                    </div>
                    <div class="form-group col-md-8">
                      <label for="inputEmail4">Telefono</label>
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
                        placeholder="920096114"
                      />
                    </div>
                    <div class="form-group col-md-8">
                      <label for="inputEmail4">Usuario</label>
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
                        placeholder="admin"
                      />
                    </div>
                    <div class="form-group col-md-8">
                      <label for="inputPassword4">Contraseña</label>
                      <input
                        type="password"
                        class="form-control"
                        id="inputPassword4"
                        placeholder="admin"
                      />
                    </div>
                  </div>
                  <div className="row text-center justify-content-center">
                    <div className="col-md-8">
                      <button
                        type="submit"
                        class="btn btn-primary my-2 color-boton-admin boton-sombra-admin text-center btn-block"
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
