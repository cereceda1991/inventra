import { useRef, useEffect } from 'react'
import Chart from 'chart.js/auto'
import { dataMovementsMonth, labels } from '../../API/dataMovements'
import { DashboardChartPropTypes } from '../../utils/propTypes'

const DashboardChart = ({ chartType, tension,pointRadius }) => {
  const chartRef = useRef(null)

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
          }
        ]
      },
      options: {
        scales: {
          x: {
            beginAtZero: false,
            grid: {
              display: false
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              display: true
            }
          }
        }
      }
    }

    const myChart = new Chart(chartRef.current, chartConfig)

    return () => {
      myChart.destroy()
    }
  }, [chartType, tension,pointRadius])

  return <canvas ref={chartRef}></canvas>
}

DashboardChart.propTypes = DashboardChartPropTypes

export default DashboardChart
