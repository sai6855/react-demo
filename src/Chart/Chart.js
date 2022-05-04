import React from "react";
import ReactApexChart from "react-apexcharts";
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
const Chart = () => (
  <ReactApexChart options={options} series={series} type="bar" width="1000" />
);

export default Chart;
