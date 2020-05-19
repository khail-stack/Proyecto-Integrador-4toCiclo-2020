import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataGeneralPeru } from "./../actions/covidActions";
import GraficoPeru from "./GraficoPeru";
const BarChartPeru = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cargarGrafica2 = () => dispatch(dataGeneralPeru());
    cargarGrafica2();
  }, [dispatch]);

  const dataperu = useSelector((state) => state.datacovid.dataperu);

  return (
    <div>
      <GraficoPeru contenido={dataperu}></GraficoPeru>
    </div>
  );
};

export default BarChartPeru;
