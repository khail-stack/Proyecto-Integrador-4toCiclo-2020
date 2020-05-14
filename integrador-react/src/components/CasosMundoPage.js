import React from "react";
import { CardCovid } from "./CardCovid";
import Spinner from "./Spinner";
import LinealChartGlobal from "./LinealChartGlobal";

const CasosMundoPage = (resumenesGlobales, error) => {
  return (
    <div>
      <div className="container">
        <div className="row margentitulo">
          <div className="col margentitulo">
            <h2 className="text-center subtitulo-home mb-5 espaciado-bajo">
              Resumen Global
            </h2>
          </div>
        </div>
        {error ? (
          <p className="alert alert-danger text-center mt-5">Hubo un error</p>
        ) : null}
      </div>

      {resumenesGlobales ? (
        <CardCovid contenido={resumenesGlobales} />
      ) : (
        <div className="d-flex justify-content-center">
          <div role="status">
            <Spinner></Spinner>
          </div>
        </div>
      )}

      <div className="container">
        <div className="row mt-5 mb-5 margentitulo">
          <div className="col margentitulo">
            <LinealChartGlobal></LinealChartGlobal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasosMundoPage;
