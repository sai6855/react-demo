import "./styles.css";
import React from "react";
import ReactApexChart from "react-apexcharts";

export default function App() {
  const options = {
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  };
  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ];
  return (
    <div className="App">
      <select style={{ width: "3rem" }}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      {new Array(100).fill("-").map((_) => (
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          width="1000"
        />
      ))}
    </div>
  );
}
