import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editarPreguntaAdmin } from "../../actions/agregarPreguntaAction";

const AdminEditarPregunta = () => {
  const preguntaeditar = useSelector((state) => state.preguntas.preguntaEditar);

  console.log(preguntaeditar);
  const dispatch = useDispatch();

  const { pregunta, valor, idpregunta } = preguntaeditar;

  const [tituloPregunta, settituloPregunta] = useState(pregunta);
  const [valorPregunta, setValorPregunta] = useState(valor);

  const objetoEditar = {
    pregunta: tituloPregunta,
    valor: Number(valorPregunta),
  };
  const editarPregunta = (e) => {
    e.preventDefault();
    dispatch(editarPreguntaAdmin(idpregunta, objetoEditar));
  };
  return (
    <>
      <section className="content">
        <div className="container">
          <div className="row mt-5">
            <div className="col-sm-12">
              <div className="card diseño-preguntas-admin border-2">
                <div className="card-body">
                  <h2 className="card-title mt-3 mb-5">Editar las preguntas</h2>
                  <form onSubmit={editarPregunta}>
                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <label for="pregunta">Pregunta</label>
                        <input
                          type="text"
                          className="form-control"
                          id="pregunta"
                          name="titulopregunta"
                          value={tituloPregunta}
                          onChange={(e) => settituloPregunta(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <label for="valor">Valor de la pregunta</label>
                        <input
                          type="number"
                          className="form-control"
                          id="valor"
                          name="valorPregunta"
                          value={valorPregunta}
                          onChange={(e) =>
                            setValorPregunta(Number(e.target.value))
                          }
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary my-2 color-boton-admin boton-sombra-admin"
                    >
                      Guardar cambios
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

export default AdminEditarPregunta;
