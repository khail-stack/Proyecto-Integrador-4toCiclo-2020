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

  const dataPeru = useSelector((state) => state.datacovid.dataGeneralPeru);
  console.log(dataPeru);
  return (
    <div>
      <GraficoPeru contenido={dataPeru}></GraficoPeru>
    </div>
  );
};

export default BarChartPeru;
