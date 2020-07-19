import React from "react";
import { Bar } from "react-chartjs-2";
const GraficoBarGeneral = ({ contenido }) => {
  //console.log(contenido);
  const barChart = [0] ? (
    <Bar
      data={{
        labels: contenido.map((data) => data.distrito),

        datasets: [
          {
            label: contenido.map((data) => data.distrito),
            backgroundColor: [
              "rgba(234, 196, 94, 1)",
              "rgba(137, 234, 94, 1)",
              "rgba(241, 88, 88, 1)",
              "rgba(230, 82, 18, 1)",
            ],
            borderColor: "rgb(255, 99, 132)",
            data: contenido.map((data) => data.positivos),
          },
        ],
      }}
    />
  ) : null;

  return <div>{barChart}</div>;
};

export default GraficoBarGeneral;
