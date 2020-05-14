import React, { useEffect } from "react";
import "./CovidPage.css";
import { useDispatch, useSelector } from "react-redux";
import { dataGlobal, dataActivo, graficoGlobal } from "../actions/covidActions";
import { CardCovid } from "./CardCovid";
import Spinner from "./Spinner";
import LinealChartGlobal from "./LinealChartGlobal";
import { dataGeneralPeru } from "./../actions/covidActions";
import BarChartPeru from "./BarChartPeru";

const CovidPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataGlobal());
    dispatch(graficoGlobal());
    dispatch(dataGeneralPeru());
  }, [dispatch]);

  // Obtener el state
  const dataCartaGlobales = useSelector(
    (state) => state.datacovid.dataCartaGlobales
  );

  const datoActivo = useSelector((state) => state.datacovid.datoActivo);

  const error = useSelector((state) => state.datacovid.error);

  const filtrarData = (dataCartaGlobales) => {
    dispatch(dataActivo(dataCartaGlobales));
  };

  return (
    <div>
      <div className="fondo-covid">
        <div className="circulo uno"></div>
        <div className="circulo dos"></div>
        <div className="circulo tres"></div>
        <div>
          <div className="container mt-5">
            <div className="row align-content-center">
              <div className="col text-center">
                <h1 className="titulo-covid">Casos de Coronavirus</h1>
                <p className="subtitulo-covid">
                  Informacion acerca del coronavirus en el mundo y en el país
                </p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>

      <div className="container padre">
        <div className="row align-items-center margentitulo">
          <div className="col text-center mx-auto no margentitulo">
            <button
              className="btn uppercase diseño_boton espacio-botones d-md-inline"
              onClick={() => filtrarData(dataCartaGlobales, dataActivo)}
            >
              <i className="fas fa-globe-americas color-icono"></i>
              Casos en el Mundo
            </button>
            <button className="btn uppercase diseño_boton2 d-md-inline">
              <i className="far fa-flag color-icono"></i>
              Casos en el Perú
            </button>
          </div>
        </div>
      </div>

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

      {datoActivo ? (
        <CardCovid contenido={datoActivo} />
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

      <div className="container">
        <div className="row mt-5 mb-5 margentitulo">
          <div className="col margentitulo">
            <BarChartPeru></BarChartPeru>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovidPage;
