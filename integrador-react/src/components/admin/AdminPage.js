import React from "react";
import "./AdminStyle.css";
import AdminMenu from "./AdminMenu.js";
import AdminHeader from "./AdminHeader.js";
import AdminContent from "./AdminContent.js";
import { useSelector } from "react-redux";
import AdminTablasPreguntas from "./AdminTablasPreguntas.js";
import AdminUsuarios from "./AdminUsuarios.js";
import AdminPerfil from "./AdminPerfil.js";
import AdminContentQuestions from "./AdminContentQuestions.js";
import AdminEditarPregunta from "./AdminEditarPregunta.js";

const AdminPage = () => {
  const dashboard = useSelector((state) => state.rutasadmin.dashboard);
  const preguntas = useSelector((state) => state.rutasadmin.preguntas);
  const usuarios = useSelector((state) => state.rutasadmin.usuariosAdmin);
  const perfil = useSelector((state) => state.rutasadmin.perfil);
  const agregarPregunta = useSelector(
    (state) => state.rutasadmin.agregarPregunta
  );
  const editarPregunta = useSelector(
    (state) => state.rutasadmin.editarPregunta
  );
  return (
    <div className="d-flex">
      <AdminMenu></AdminMenu>
      <div className="w-100">
        <AdminHeader></AdminHeader>

        {dashboard ? <AdminContent /> : null}
        {preguntas ? <AdminTablasPreguntas /> : null}
        {usuarios ? <AdminUsuarios /> : null}
        {perfil ? <AdminPerfil /> : null}
        {agregarPregunta ? <AdminContentQuestions /> : null}
        {editarPregunta ? <AdminEditarPregunta /> : null}
      </div>
    </div>
  );
};

export default AdminPage;
