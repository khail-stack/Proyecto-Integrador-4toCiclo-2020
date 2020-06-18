import React from "react";
import "./ErrorPage.css";
const ErrorPage = () => {
  window.onload = function () {
    document.querySelector(".cont_principal").className =
      "cont_principal cont_error_active";
  };

  return (
    <div className="text-center color-error-fondo">
      <div class="cont_principal">
        <div class="cont_error">
          <h1 className="titulo-error">404</h1>
          <p className="sutbtitulo-error">
            La página a la que usted ha ingresado, no existe.
          </p>
        </div>
        <div class="cont_aura_1"></div>
        <div class="cont_aura_2"></div>
      </div>
    </div>
  );
};

export default ErrorPage;
