import React, { Component } from "react";
import Chart from "react-apexcharts";
import { visualizationBarChartData } from "../../../data/data";


export default function ApexCharts({type}) {
  let series = visualizationBarChartData;
  let options = {
    colors: ["#6941c6", "#9e77ed", "#d6bbfb"],
    chart: {
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "top",
            offsetX: 0,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 3,
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: "13px",
              fontWeight: 900,
            },
          },
        },
      },
    },
    xaxis: {
      type: "category",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    legend: {
      position: "top",
      offsetX: 0,
      offsetY: 0,
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={series}
            type= {type}
            width="100%"
            height="350px"
          />
        </div>
      </div>
    </div>
  );
}