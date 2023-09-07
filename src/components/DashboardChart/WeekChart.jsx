import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { dataProductsAddedDaily, labels } from '../../API/dataWeek';

const WeekChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartConfig = {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [dataProductsAddedDaily],
      },
      options: {
        scales: {
          x: {
            beginAtZero: false,
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        barThickness: 6,
      },
    };

    const myChart = new Chart(chartRef.current, chartConfig);

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <>
      <h1>Semana anterior</h1>
      <canvas ref={chartRef}></canvas>
    </>
  );
};

export default WeekChart;
