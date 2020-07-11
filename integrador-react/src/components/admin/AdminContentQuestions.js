import React from "react";
import "./AdminStyle.css";

const AdminContentQuestions = () => {
  return (
    <>
      <section className="content">
        <div className="container">
          <div className="row mt-5">
            <div className="col-sm-12">
              <div className="card diseño-preguntas-admin border-2">
                <div className="card-body">
                  <h2 className="card-title mt-3 mb-5">Crea las preguntas</h2>
                  <form>
                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <label for="inputEmail4">Pregunta</label>
                        <input
                          type="email"
                          className="form-control"
                          id="inputEmail4"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label for="inputPassword4">Opcion 1</label>
                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword4"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label for="inputPassword4">Valor Opcion 1</label>
                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword4"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label for="inputPassword4">Opcion 2</label>
                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword4"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label for="inputPassword4">Valor Opcion 2</label>
                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword4"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label for="inputPassword4">Opcion 3</label>
                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword4"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label for="inputPassword4">Valor Opcion 3</label>
                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword4"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary my-2 color-boton-admin boton-sombra-admin"
                    >
                      Crear pregunta
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminContentQuestions;
