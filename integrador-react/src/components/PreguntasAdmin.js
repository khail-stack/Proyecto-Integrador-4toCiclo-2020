import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  borrarPreguntaAdmin,
  obtenerPreguntaEditar,
} from "../actions/agregarPreguntaAction";
import Swal from "sweetalert2";
import { rutaEditarPreguntaAdmin } from "../actions/rutasAdminAction";
import { Link } from "react-router-dom";

const PreguntasAdmin = ({ preguntas, index }) => {
  const editarPregunta = useSelector(
    (state) => state.rutasadmin.editarPregunta
  );
  const { idpregunta, pregunta, valor } = preguntas;

  const dispatch = useDispatch();

  const confirmarEliminarProducto = (idpregunta) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text:
        "Si elimina esta pregunta se vera afectada en todos los cuestionarios.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        dispatch(borrarPreguntaAdmin(idpregunta));
      }
    });
  };

  const obtenerPreguntaymostrarFormulario = (preguntas) => {
    dispatch(obtenerPreguntaEditar(preguntas));
    dispatch(rutaEditarPreguntaAdmin(editarPregunta));
  };
  return (
    <tr>
      <td className="text-center">{index}</td>
      <td className="ajustar-texto-tabla-pregunta">{pregunta}</td>
      <td className="ajustar-texto-tabla-opciones text-center">{valor}</td>
      <td className="no text-center">
        <Link
          className="btn btn-primary editarPreguntaAdmin"
          onClick={() => obtenerPreguntaymostrarFormulario(preguntas)}
        >
          Editar
        </Link>
        <button
          className="btn btn-danger eliminarPreguntaAdmin ml-5"
          onClick={() => confirmarEliminarProducto(idpregunta)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default PreguntasAdmin;
