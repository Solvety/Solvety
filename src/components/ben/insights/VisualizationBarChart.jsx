import React from "react";
import Chart from "react-apexcharts";
import { switchTheme, visualizationBarChartData } from "../../../data/data";
import { useTheme } from "../../../context/ThemeContext";

const VisualizationBarChart = ({ type = "bar" }) => {
    const { resTheme } = useTheme();

    const bgColor = switchTheme("bg-white", "bg-[#2a2a27]", resTheme);
    const textColor = switchTheme("text-black", "text-white", resTheme);
    const borderColor = switchTheme(
        "border-gray-800",
        "border-[#9a9a98]",
        resTheme
    );

    const series = visualizationBarChartData;
    const options = {
        colors: ["#6941c6", "#9e77ed", "#d6bbfb"],
        chart: {
            stacked: true,
            toolbar: {
                show: false,
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
                        show: true,
                        position: 'bottom'
                    },
                },
            },
        ],
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 10,
                columnWidth: '45%',
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
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
            ],
        },
        legend: {
            show: true,
            position: 'bottom', // You can change this to 'top', 'right', 'left' as per your need
            labels: {
                colors: textColor,
                useSeriesColors: false
            }
        },
        fill: {
            opacity: 1,
        },
        states: {
            normal: {
                filter: {
                    type: "none",
                },
            },
            hover: {
                filter: {
                    type: "none",
                },
            },
            active: {
                filter: {
                    type: "none",
                },
            },
        },
    };

    return (
        <div className="app">
            <div className="row">
                <div className="mixed-chart custom-bar-chart">
                    <Chart
                        options={options}
                        series={series}
                        type={type}
                        width="100%"
                        height="350px"
                    />
                </div>
            </div>
        </div>
    );
};

export default VisualizationBarChart;
