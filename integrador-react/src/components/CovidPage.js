import React, { useEffect } from "react";
import "./CovidPage.css";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import {
  dataGlobal,
  graficoGlobal,
  filtrarData,
} from "../actions/covidActions";
import { CardCovid } from "./CardCovid";
import Spinner from "./Spinner";
import LinealChartGlobal from "./LinealChartGlobal";
import { dataGeneralPeru } from "./../actions/covidActions";
import BarChartPeru from "./BarChartPeru";

const CovidPage = () => {
  $(".btn").mouseup(function () {
    this.blur();
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataGlobal());
    dispatch(graficoGlobal());
    dispatch(dataGeneralPeru());
    $(document).ready(function () {
      $("#boton1").addClass("diseño_boton");
      $("#boton1").removeClass("diseño_bordes");
    });
  }, [dispatch]);

  // Obtener el state

  const dataperu = useSelector((state) => state.datacovid.dataperu);
  const cartaglobal = useSelector((state) => state.datacovid.cartaglobal);
  const graficoglobal = useSelector((state) => state.datacovid.graficoglobal);

  const filtrocarta = useSelector((state) => state.datacovid.filtrocarta);
  const filtrografico = useSelector((state) => state.datacovid.filtrografico);

  const error = useSelector((state) => state.datacovid.error);

  $("#boton1").click(function () {
    $("#boton1").removeClass("diseño_boton");
    $("#boton1").removeClass("diseño_bordes");
    $(this).toggleClass("diseño_boton");
    $("#boton2").addClass("diseño_bordes");
  });

  $("#boton2").click(function () {
    $("#boton2").removeClass("diseño_boton");
    $("#boton2").removeClass("diseño_bordes");
    $(this).toggleClass("diseño_boton");
    $("#boton1").addClass("diseño_bordes");
  });

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
          <div className="col text-center mx-auto no margentitulo" id="botones">
            <button
              id="boton1"
              className="btn uppercase diseño_boton2 espacio-botones d-md-inline diseño_bordes"
              onClick={() => dispatch(filtrarData(cartaglobal, graficoglobal))}
            >
              <i className="fas fa-globe-americas color-icono"></i>
              Casos en el Mundo
            </button>
            <button
              id="boton2"
              onClick={() => dispatch(filtrarData(dataperu, dataperu))}
              className="btn uppercase diseño_boton2 d-md-inline diseño_bordes"
            >
              <i className="far fa-flag color-icono"></i>
              Casos en el Perú
            </button>
          </div>
        </div>
      </div>

      {filtrocarta && filtrografico ? (
        filtrocarta === cartaglobal ? (
          <>
            <div className="container">
              <div className="row margentitulo">
                <div className="col margentitulo">
                  <h2 className="text-center subtitulo-home mb-5 espaciado-bajo">
                    Resumen Global
                  </h2>
                </div>
              </div>
              {error ? (
                <p className="alert alert-danger text-center mt-5">
                  Hubo un error
                </p>
              ) : null}
            </div>
            <CardCovid contenido={filtrocarta} />
            <div className="container">
              <div className="row mt-5 mb-5 margentitulo">
                <div className="col margentitulo">
                  <LinealChartGlobal></LinealChartGlobal>
                </div>
              </div>

              <div>
                <i className="datos_de_informacion">
                  * Datos proporcionados por el api de "Mathdroid"{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://covid19.mathdro.id/api"
                  >
                    https://covid19.mathdro.id/api
                  </a>
                </i>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="container">
              <div className="row margentitulo">
                <div className="col margentitulo">
                  <h2 className="text-center subtitulo-home mb-5 espaciado-bajo">
                    Resumen de Perú
                  </h2>
                </div>
              </div>
              {error ? (
                <p className="alert alert-danger text-center mt-5">
                  Hubo un error
                </p>
              ) : null}
            </div>
            <CardCovid contenido={filtrocarta} />
            <div className="container">
              <div className="row mt-5 mb-5 margentitulo">
                <div className="col margentitulo">
                  <BarChartPeru></BarChartPeru>
                </div>
              </div>
              <div>
                <i className="datos_de_informacion">
                  * Datos proporcionados por el api de "Mathdroid"{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://covid19.mathdro.id/api"
                  >
                    https://covid19.mathdro.id/api
                  </a>
                </i>
              </div>
            </div>
          </>
        )
      ) : (
        <div className="d-flex justify-content-center mt-5">
          <div role="status">
            <Spinner></Spinner>
          </div>
        </div>
      )}
    </div>
  );
};

export default CovidPage;
