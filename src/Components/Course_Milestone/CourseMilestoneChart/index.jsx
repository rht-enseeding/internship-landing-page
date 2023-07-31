import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ScriptableContext,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
)
// ChartJS.Legend.prototype.afterFit = function () {
//   this.height = this.height + 50
// }

const CourseMilestoneChart = () => {
  //   const data = {
  //     labels: ['January', 'February', 'March', 'April', 'May'],
  //     datasets: [
  //       {
  //         label: 'Rainfall',
  //         fill: 'start',
  //         lineTension: 0.5,
  //         backgroundColor: 'rgba(75,192,192,1)',
  //         borderColor: 'rgba(0,0,0,1)',
  //         borderWidth: 2,
  //         data: [65, 59, 80, 81, 56],
  //         tension: '0.4',
  //       },
  //     ],
  //   }

  //   const options = {
  //     // type: 'area',
  //     data: data,
  //     options: {
  //       responsive: true,
  //       plugins: {
  //         filler: {
  //           propagate: false,
  //         },
  //         legend: {
  //           position: 'top',
  //         },
  //         title: {
  //           display: true,
  //           text: 'Chart.js Line Chart',
  //         },
  //       },
  //     },
  //   }

  const [chartdata, setchartdata] = useState({
    Labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    Data1: [-21, -37, -35, 48, 31, -22, 32],
    Data2: [-41, -47, -55, 68, 51, -42, 52],
  })

  const data = {
    labels: chartdata.Labels,
    datasets: [
      {
        label: 'Quizes',
        data: chartdata.Data1,
        // borderColor: 'rgb(53, 162, 235)',
        borderColor: ['#FF9800'],
        // backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        backgroundColor: (context) => {
          const ctx = context.chart.ctx
          const gradient = ctx.createLinearGradient(0, 0, 0, 200)
          gradient.addColorStop(0, 'rgb(255, 224, 179, 0.4)')
          gradient.addColorStop(1, 'rgb(249, 244, 236, 0.6)')
          return gradient
        },
        pointBorderColor: '#FF9800',
        tension: 0.4,
        fill: 'start',
        fontColor: 'pink',

        // fill: 'origin',
        // fill: 'start',
      },
      {
        label: 'Assignment',
        data: chartdata.Data2,
        backgroundColor: '#6641AA',
        borderColor: '#6641AA',
        pointBorderColor: '#6641AA',
        tension: 0.4,
        fontColor: 'pink',
      },
    ],
  }

  const plugin = {
    beforeInit(chart) {
      // console.log('be')
      // reference of original fit function
      const originalFit = chart.legend.fit

      // override the fit function
      chart.legend.fit = function fit() {
        // call original function and bind scope in order to use `this` correctly inside it
        originalFit.bind(chart.legend)()
        // increase the width to add more space
        this.width += 20
      }
    },
  }

  const options = {
    maintainAspectRatio: false,
    // layout: {
    //   padding: {
    //     left: 50,
    //   },
    // },

    plugins: {
      // Legend: true,
      legend: {
        position: 'top',
        align: 'start',
        filler: {
          propagate: false,
        },
        labels: {
          position: 'left',
          color: 'Black',
          usePointStyle: true,
          boxWidth: 150,

          font: {
            size: 12,
            weight: 400,
          },
        },
      },

      interaction: {
        intersect: false,
      },
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#67676A66',
          // not 'fontColor:' anymore
          font: {
            size: 10,
          },
          beginAtZero: true,
        },
      },

      y: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: '#67676A66',
          // not 'fontColor:' anymore
          font: {
            size: 10,
          },
          beginAtZero: true,
        },
      },
    },
    // scales: {
    //   y: {
    //     min: 0,
    //     max: 70,
    //   },

    //   y: {
    //     ticks: {
    //       color: 'black', // not 'fontColor:' anymore
    //       font: {
    //         size: 10,
    //       },
    //       beginAtZero: true,
    //     },
    //   },
    //   x: {
    //     ticks: {
    //       color: 'black', // not 'fontColor:' anymore
    //       font: {
    //         size: 10,
    //       },
    //       beginAtZero: true,
    //     },
    //   },
    // },
  }

  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '400px',
        }}
      >
        <Line
          options={options}
          data={data}
          plugins={[
            {
              id: 'increase-legend-spacing',
              beforeInit(chart) {
                // Get reference to the original fit function
                const originalFit = chart.legend.fit
                // Override the fit function
                chart.legend.fit = function fit() {
                  // Call original function and bind scope in order to use `this` correctly inside it
                  originalFit.bind(chart.legend)()
                  this.height += 20
                }
              },
            },
          ]}
        />
      </div>
    </div>
  )
}

export default CourseMilestoneChart
