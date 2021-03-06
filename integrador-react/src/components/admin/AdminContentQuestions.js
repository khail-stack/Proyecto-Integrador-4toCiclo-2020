import React, { useState } from "react";
import "./AdminStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { agregarPregunta } from "../../actions/agregarPreguntaAction";

const AdminContentQuestions = (nuevapregunta) => {
  const [pregunta, guardarPregunta] = useState("");
  const [valor, guardarValor] = useState("");

  const dispatch = useDispatch();

  const cargando = useSelector((state) => state.preguntas.loading);

  const crearPregunta = (nuevapregunta) =>
    dispatch(agregarPregunta(nuevapregunta));

  const crearNuevaPregunta = (e) => {
    e.preventDefault();

    if (pregunta.trim() === "" || valor <= 0) {
      return;
    }

    crearPregunta({
      pregunta,
      valor,
    });

    console.log(pregunta);
    console.log(valor);
  };

  return (
    <>
      <section className="content">
        <div className="container">
          <div className="row mt-5">
            <div className="col-sm-12">
              <div className="card diseño-preguntas-admin border-2">
                <div className="card-body">
                  <h2 className="card-title mt-3 mb-5">Crea las preguntas</h2>
                  <form onSubmit={crearNuevaPregunta}>
                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <label for="pregunta">Pregunta</label>
                        <input
                          type="text"
                          className="form-control"
                          id="pregunta"
                          name="titulopregunta"
                          value={pregunta}
                          onChange={(e) => guardarPregunta(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <label for="valor">Valor de la pregunta</label>
                        <input
                          type="number"
                          className="form-control"
                          id="valor"
                          name="valorPregunta"
                          value={valor}
                          onChange={(e) => guardarValor(Number(e.target.value))}
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
                  {cargando ? <p>Cargando...</p> : null}
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
