import React from "react";
import { Pie } from "react-chartjs-2";
const GraficoPieGeneral = ({ contenido }) => {
  const pieChart = [0] ? (
    <Pie
      data={{
        labels: ["Masculino", "Femenino"],
        datasets: [
          {
            backgroundColor: ["rgba(234, 196, 94, 1)", "rgba(137, 234, 94, 1)"],
            data: [contenido.masculino, contenido.femenino],
          },
        ],
      }}
    />
  ) : null;

  return <div>{pieChart}</div>;
};

export default GraficoPieGeneral;
