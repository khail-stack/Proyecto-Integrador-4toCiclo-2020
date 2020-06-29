import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const RouteError = (props) => {
  const autenticado = useSelector((state) => state.usuarios.autenticado);

  return localStorage.getItem("rol") === "ROLE_USER" ||
    autenticado === false ? (
    <Redirect to="/" />
  ) : (
    <Route {...props}></Route>
  );
};

export default RouteError;
