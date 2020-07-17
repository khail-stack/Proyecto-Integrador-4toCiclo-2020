import React from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { borrarUsuariosPosiblesAdmin } from "../../actions/usuariosAdminAction";

const TablaUsuariosPosiblesCasos = ({ index, usuarioPosibles }) => {
  console.log(usuarioPosibles);

  const { id, nombre, email, telefono, dni } = usuarioPosibles;

  const dispatch = useDispatch();

  const confirmarEliminarUsuarioPosibles = (id) => {
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
        dispatch(borrarUsuariosPosiblesAdmin(id));
      }
    });
  };
  return (
    <tr>
      <td className="text-center">{index}</td>
      <td className="ajustar-texto-tabla-pregunta">{nombre}</td>
      <td className="ajustar-texto-tabla-opciones text-center">{email}</td>
      <td className="ajustar-texto-tabla-opciones text-center">{telefono}</td>
      <td className="ajustar-texto-tabla-opciones text-center">{dni}</td>
      <td className="no text-center">
        <button
          className="btn btn-danger eliminarPreguntaAdmin"
          onClick={() => confirmarEliminarUsuarioPosibles(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default TablaUsuariosPosiblesCasos;
