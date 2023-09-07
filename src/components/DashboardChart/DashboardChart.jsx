import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { dataMovementsMonth, labels } from '../../API/dataMovements';
import { DashboardChartPropTypes } from '../../utils/propTypes';

const DashboardChart = ({ chartType, tension, pointRadius, color }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartConfig = {
      type: chartType,
      responsive: true,
      data: {
        labels: labels,
        datasets: [
          {
            ...dataMovementsMonth,
            lineTension: tension,
            pointRadius: pointRadius,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            labels: {
              color: color, // Cambia el color de fuente de la leyenda aquí
            },
          },
        },
        scales: {
          x: {
            beginAtZero: false,
            grid: {
              color: color, // Cambia el color de las líneas de la grilla en el eje x aquí
              display: false,
            },
            ticks: {
              color: color, // Cambia el color de fuente del eje x aquí
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              color: color, // Cambia el color de las líneas de la grilla en el eje y aquí
              display: true,
            },
            ticks: {
              color: color, // Cambia el color de fuente del eje y aquí
            },
          },
        },
      },
    };

    const myChart = new Chart(chartRef.current, chartConfig);

    return () => {
      myChart.destroy();
    };
  }, [chartType, tension, pointRadius, color]);

  return <canvas ref={chartRef}></canvas>;
};

DashboardChart.propTypes = DashboardChartPropTypes;

export default DashboardChart;
