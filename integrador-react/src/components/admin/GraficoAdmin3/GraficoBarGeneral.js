import React from "react";
import { Bar } from "react-chartjs-2";
const GraficoBarGeneral = () => {
  const barChart = [0] ? (
    <Bar
      data={{
        labels: ["Infectados", "Recuperados", "Muertos"],
        datasets: [
          {
            backgroundColor: [
              "rgba(234, 196, 94, 1)",
              "rgba(137, 234, 94, 1)",
              "rgba(241, 88, 88, 1)",
            ],
            borderColor: "rgb(255, 99, 132)",
            data: [5, 15, 20],
          },
        ],
      }}
    />
  ) : null;

  return <div>{barChart}</div>;
};

export default GraficoBarGeneral;
