import React, { useEffect } from "react";
import { graficoGlobal } from "../actions/covidActions";
import { useDispatch, useSelector } from "react-redux";
import GraficoGlobal from "./GraficoGlobal";
const LinealChartGlobal = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cargarGrafica = () => dispatch(graficoGlobal());
    cargarGrafica();
  }, [dispatch]);

  const global = useSelector((state) => state.datacovid.datoActivo2);
  return (
    <div>
      <GraficoGlobal contenido={global}></GraficoGlobal>
    </div>
  );
};

export default LinealChartGlobal;
