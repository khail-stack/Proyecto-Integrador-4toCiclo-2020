import React from "react";
import { Line } from "react-chartjs-2";

const GraficoLinealGeneral = ({ contenido }) => {
  const lineChart = [0] ? (
    <Line
      data={{
        labels: contenido.map(({ fecha }) => fecha),
        datasets: [
          {
            data: contenido.map((data) => data.total),
            label: "Encuestas realizadas",
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255,255,255,0.1)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div>{lineChart}</div>;
};

export default GraficoLinealGeneral;
