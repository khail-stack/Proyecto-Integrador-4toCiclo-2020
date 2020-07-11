import React, { useEffect } from "react";
import "./ErrorPage.css";
import { useDispatch } from "react-redux";
import { mostrarPaginaError } from "../actions/usuarioActions";

const ErrorPage = () => {
  window.onload = function () {
    document.querySelector(".cont_principal").className =
      "cont_principal cont_error_active";
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mostrarPaginaError());
  }, [dispatch]);

  return (
    <div className="text-center color-error-fondo">
      <div className="cont_principal">
        <div className="cont_error">
          <h1 className="titulo-error">404</h1>
          <p className="sutbtitulo-error">
            La página a la que usted ha ingresado, no existe.
          </p>
        </div>
        <div className="cont_aura_1"></div>
        <div className="cont_aura_2"></div>
      </div>
    </div>
  );
};

export default ErrorPage;
