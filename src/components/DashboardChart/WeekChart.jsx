import { useRef, useEffect } from 'react'
import Chart from 'chart.js/auto'
import { dataProductsAddedDaily, labels } from '../../API/dataWeek'

const WeekChart = () => {
  const chartRef = useRef(null)

  useEffect(() => {
    const chartConfig = {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [dataProductsAddedDaily]
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
  }, [])

  return <canvas ref={chartRef}></canvas>
}

export default WeekChart
