import { useRef, useEffect } from 'react'
import Chart from 'chart.js/auto'
import PropTypes from 'prop-types'
import {
  dataMovements2020,
  dataMovements2021,
  dataMovements2022,
  dataMovements2023,
  labels
} from '../../utils/Movements'

const DashboardChart = ({ chartType }) => {
  const chartRef = useRef(null)

  useEffect(() => {
    const chartConfig = {
      type: chartType,
      data: {
        labels: labels,
        datasets: [dataMovements2020, dataMovements2021, dataMovements2022, dataMovements2023]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    }

    const myChart = new Chart(chartRef.current, chartConfig)

    return () => {
      myChart.destroy()
    }
  }, [chartType])

  return <canvas ref={chartRef}></canvas>
}

DashboardChart.propTypes = {
  chartType: PropTypes.string.isRequired
}

export default DashboardChart
