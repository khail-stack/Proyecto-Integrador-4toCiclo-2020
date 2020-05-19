import React from "react";
import { useSelector } from "react-redux";
import GraficoGlobal from "./GraficoGlobal";
const LinealChartGlobal = () => {
  const filtrografico = useSelector((state) => state.datacovid.filtrografico);
  return (
    <div>
      <GraficoGlobal contenido={filtrografico}></GraficoGlobal>
    </div>
  );
};

export default LinealChartGlobal;
