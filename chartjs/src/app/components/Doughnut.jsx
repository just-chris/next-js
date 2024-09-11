'use client'
import React, { useEffect, useRef } from 'react'
import { Chart } from 'chart.js/auto'


const Doughnut = () => {
 const chartRef = useRef(null)
 useEffect(() => {
  
  if (chartRef.current) {

   if (chartRef.current.chart) {
    chartRef.current.chart.destroy()
   }
    const ctx = chartRef.current.getContext('2d');
    const newChart = new Chart (ctx, {
     type: "doughnut",
     data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
       {
        label: 'Info',
        data: [34, 64, 23, 44, 69, 27],
        backgroundColor:[
         'rgba(255, 99, 132, 0.2)',
         'rgba(54, 162, 235, 0.2)',
         'rgba(255, 206, 86, 0.2)',
         'rgba(75, 192, 192, 0.2)',
         'rgba(153, 102, 255, 0.2)',
         'rgba(255, 159, 64, 0.2)'
        ],
        borderColor:[
         'rgba(255, 99, 132, 0.2)',
         'rgba(54, 162, 235, 0.2)',
         'rgba(255, 206, 86, 0.2)',
         'rgba(75, 192, 192, 0.2)',
         'rgba(153, 102, 255, 0.2)',
         'rgba(255, 159, 64, 0.2)'
        ],
        borderWidth: 1,
       }
      ]
     },
     options: {
      // responsive: true,

     }
    })
  
    chartRef.current.chart = newChart
   }
  }, []);


  return <div style={{position: 'relative', width: '100vw', height: '80vh' }} >
  <canvas ref={chartRef}/>
  </div>
  
}

export default Doughnut