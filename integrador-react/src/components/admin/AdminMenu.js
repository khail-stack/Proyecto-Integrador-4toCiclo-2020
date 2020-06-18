import React from "react";
import "./AdminStyle.css";
import { useDispatch, useSelector } from "react-redux";
import {
  rutaMostrarDashboard,
  rutaMostrarPreguntas,
  rutaMostrarUsuarios,
  rutaMostrarPerfil,
} from "../../actions/rutasAdminAction";
import { Link } from "react-router-dom";

const AdminMenu = () => {
  const dispatch = useDispatch();

  const dashboard = useSelector((state) => state.rutasadmin.dashboard);
  const preguntas = useSelector((state) => state.rutasadmin.preguntas);
  const usuarios = useSelector((state) => state.rutasadmin.usuariosAdmin);
  const perfil = useSelector((state) => state.rutasadmin.perfil);
  const agregarPregunta = useSelector(
    (state) => state.rutasadmin.agregarPregunta
  );

  return (
    <>
      <div className="sidebar-container fondo-sidebar">
        <div className="titulo-admin">
          <h4 className="text-light font-weight-bold">Administrador</h4>
        </div>

        <div className="menu no">
          <Link
            className="d-block p-3 text-light linea"
            onClick={() => dispatch(rutaMostrarDashboard(dashboard))}
          >
            <i className="fas fa-chart-bar mr-2"></i>Dashboard
          </Link>

          <Link
            className="d-block p-3 text-light linea"
            onClick={() => dispatch(rutaMostrarPreguntas(preguntas))}
          >
            <i className="fas fa-question mr-2"></i>Preguntas
          </Link>

          <Link
            className="d-block p-3  text-light linea"
            onClick={() => dispatch(rutaMostrarUsuarios(usuarios))}
          >
            <i className="fas fa-users mr-2"></i>Usuarios
          </Link>

          <Link
            className="d-block p-3 text-light linea"
            onClick={() => dispatch(rutaMostrarPerfil(perfil))}
          >
            <i className="fas fa-user-edit mr-2"></i>Perfil
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
