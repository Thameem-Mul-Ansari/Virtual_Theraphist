// PieChart.tsx
"use client";

import React, { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

interface PieChartProps {}

const PieChart: React.FC<PieChartProps> = () => {
  useEffect(() => {
    const getChartOptions = () => {
      return {
        series: [35.1, 23.5, 2.4, 5.4],
        colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
        chart: {
          height: 320,
          width: "100%",
          type: "donut",
        },
        stroke: {
          colors: ["transparent"],
          lineCap: "",
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: {
                  show: true,
                  fontFamily: "Inter, sans-serif",
                  offsetY: 20,
                },
                total: {
                  showAlways: true,
                  show: true,
                  label: "Unique visitors",
                  fontFamily: "Inter, sans-serif",
                  formatter: function (w: { globals: { seriesTotals: any[]; }; }) {
                    const sum = w.globals.seriesTotals.reduce((a: any, b: any) => {
                      return a + b
                    }, 0)
                    return `${sum}k`
                  },
                },
                value: {
                  show: true,
                  fontFamily: "Inter, sans-serif",
                  offsetY: -20,
                  formatter: function (value: string) {
                    return value + "k"
                  },
                },
              },
              size: "80%",
            },
          },
        },
        grid: {
          padding: {
            top: -2,
          },
        },
        labels: ["Direct", "Sponsor", "Affiliate", "Email marketing"],
        dataLabels: {
          enabled: false,
        },
        legend: {
          position: "bottom",
          fontFamily: "Inter, sans-serif",
        },
        yaxis: {
          labels: {
            formatter: function (value: string) {
              return value + "k"
            },
          },
        },
        xaxis: {
          labels: {
            formatter: function (value: string) {
              return value  + "k"
            },
          },
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
      }
    }

    if (typeof ApexCharts !== 'undefined') {
        const chartOptions = getChartOptions();
        const chart = new ApexCharts(document.getElementById("donut-chart")!, {
            ...chartOptions,
            chart: {
              type: 'donut',
              height: 320,
              width: "100%",
            },
          });
          chart.render();
    
        const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          const checkbox = event.target;
          if (checkbox.checked) {
            switch (checkbox.value) {
              case 'desktop':
                chart.updateOptions({
                  series: [15.1, 22.5, 4.4, 8.4],
                });
                break;
              case 'tablet':
                chart.updateOptions({
                  series: [25.1, 26.5, 1.4, 3.4],
                });
                break;
              case 'mobile':
                chart.updateOptions({
                  series: [45.1, 27.5, 8.4, 2.4],
                });
                break;
              default:
                chart.updateOptions({
                  series: [55.1, 28.5, 1.4, 5.4],
                });
            }
          } else {
            chart.updateOptions({
              series: [35.1, 23.5, 2.4, 5.4],
            });
          }
        };
    
        const checkboxes = document.querySelectorAll<HTMLInputElement>('#devices input[type="checkbox"]');
       
      }
    }, []);

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      {/* ... your existing JSX code ... */}
      <div className="py-6" id="donut-chart">
        {/* Render ApexCharts here */}
      </div>
      {/* ... your existing JSX code ... */}
    </div>
  );
};

export default PieChart;
