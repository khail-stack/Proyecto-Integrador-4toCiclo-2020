import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const RouteAdmin = (props) => {
  const autenticado = useSelector((state) => state.usuarios.autenticado);

  //const rol = useSelector((state) => state.usuarios.usuarioAutenticado);

  return localStorage.getItem("rol") === "ROLE_ADMIN" ||
    autenticado === false ? (
    <Redirect to="/admin/home" />
  ) : (
    <Route {...props}></Route>
  );
};

export default RouteAdmin;
