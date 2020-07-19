import React from "react";
import GraficoBarGeneral from "./GraficoBarGeneral";
import { useSelector } from "react-redux";

const GraficoAdminBar3 = () => {
  const dataBarras = useSelector((state) => state.graficasAdmin.graficaBarras);
  //console.log(dataBarras);
  return (
    <>
      {dataBarras !== 0 ? (
        <div>
          <GraficoBarGeneral contenido={dataBarras}></GraficoBarGeneral>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default GraficoAdminBar3;
