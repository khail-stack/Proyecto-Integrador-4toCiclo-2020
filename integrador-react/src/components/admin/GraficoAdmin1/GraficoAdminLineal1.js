import React from "react";
import GraficoLinealGeneral from "./GraficoLinealGeneral";
import { useSelector } from "react-redux";

const GraficoAdminLineal1 = () => {
  const dataLineal = useSelector((state) => state.graficasAdmin.graficaLineal);

  //console.log(dataLineal);
  return (
    <>
      {dataLineal !== 0 ? (
        <GraficoLinealGeneral contenido={dataLineal} />
      ) : (
        <div></div>
      )}
    </>
  );
};

export default GraficoAdminLineal1;
