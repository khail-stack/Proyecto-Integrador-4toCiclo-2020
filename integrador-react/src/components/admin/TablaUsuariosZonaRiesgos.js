import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { borrarUsuariosRiesgosAdmin } from "./../../actions/usuariosAdminAction";

const TablaUsuariosZonaRiesgos = ({ usuarioRiesgo, index }) => {
  console.log(usuarioRiesgo);

  const { id, nombre, email, telefono, dni } = usuarioRiesgo;

  const dispatch = useDispatch();

  const confirmarEliminarUsuarioRiesgos = (id) => {
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
        dispatch(borrarUsuariosRiesgosAdmin(id));
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
          onClick={() => confirmarEliminarUsuarioRiesgos(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default TablaUsuariosZonaRiesgos;
