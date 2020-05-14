import React from "react";
import { Line } from "react-chartjs-2";
const GraficoGlobal = ({ contenido }) => {
  const lineChart = contenido[0] ? (
    <Line
      data={{
        labels: contenido.map(({ reportDate }) => reportDate),
        datasets: [
          {
            data: contenido.map((data) => data.confirmed.total),
            label: "Infectados",
            borderColor: "rgba(234, 196, 94, 1)",
            fill: true,
          },
          {
            data: contenido.map((data) => data.deaths.total),
            label: "Muertos",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div>{lineChart}</div>;
};

export default GraficoGlobal;
