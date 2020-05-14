import React from "react";
import { Bar } from "react-chartjs-2";
const GraficoPeru = ({ contenido }) => {
  const barChart = contenido ? (
    <Bar
      data={{
        labels: ["Infectados", "Recuperados", "Muertos"],
        datasets: [
          {
            data: [
              contenido.confirmed.value,
              contenido.recovered.value,
              contenido.deaths.value,
            ],
            label: ["Infectados", ["Recuperados"], ["Muertos"]],
            borderColor: "rgba(234, 196, 94, 1)",
            backgroundColor: [
              "rgba(234, 196, 94, 1)",
              "rgba(137, 234, 94, 1)",
              "rgba(241, 88, 88, 1)",
            ],
          },
        ],
      }}
    />
  ) : null;

  return <div>{barChart}</div>;
};

export default GraficoPeru;
