import React from "react";
import { Pie } from "react-chartjs-2";
const GraficoPieGeneral = () => {
  const pieChart = [0] ? (
    <Pie
      data={{
        labels: ["Infectados", "Sanos"],
        datasets: [
          {
            backgroundColor: ["rgba(234, 196, 94, 1)", "rgba(137, 234, 94, 1)"],
            data: [100, 300],
          },
        ],
      }}
    />
  ) : null;

  return <div>{pieChart}</div>;
};

export default GraficoPieGeneral;
