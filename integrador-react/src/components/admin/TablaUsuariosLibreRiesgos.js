import React from "react";
import Swal from "sweetalert2";
import { borrarUsuariosLibresAdmin } from "./../../actions/usuariosAdminAction";
import { useDispatch } from "react-redux";

const TablaUsuariosLibreRiesgos = ({ index, usuarioLibres }) => {
  console.log(usuarioLibres);

  const { id, nombre, email, telefono, dni } = usuarioLibres;

  const dispatch = useDispatch();

  const confirmarEliminarUsuarioLibres = (id) => {
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
        dispatch(borrarUsuariosLibresAdmin(id));
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
          className="btn btn-danger eliminarPreguntaAdmins"
          onClick={() => confirmarEliminarUsuarioLibres(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default TablaUsuariosLibreRiesgos;
