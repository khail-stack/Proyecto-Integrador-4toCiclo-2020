import React from "react";
import GraficoPieGeneral from "./GraficoPieGeneral";
import { useSelector } from "react-redux";

const GraficoAdminPie2 = () => {
  const dataCircular = useSelector(
    (state) => state.graficasAdmin.graficaCircular
  );
  //console.log(dataCircular);
  return (
    <>
      {dataCircular !== 0 ? (
        <div>
          <GraficoPieGeneral contenido={dataCircular}></GraficoPieGeneral>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default GraficoAdminPie2;
