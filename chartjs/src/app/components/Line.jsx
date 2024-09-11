'use client'
import React, { useEffect, useRef } from 'react'
import { Chart } from 'chart.js/auto'


const Line = () => {
 const chartRef = useRef(null)
 useEffect(() => {
  
  if (chartRef.current) {

   if (chartRef.current.chart) {
    chartRef.current.chart.destroy()
   }
    const ctx = chartRef.current.getContext('2d');
    const newChart = new Chart (ctx, {
     type: "line",
     data: {
      labels: [34, 64, 23, 44, 69, 27],
      datasets: [
       {
        label: 'Info',
        data: [34, 64, 23, 44, 69, 27],
        backgroundColor:[
         'rgba(255, 99, 132, 0.69)',
        ],
        borderColor:[
         'rgba(255, 99, 132, 0.69)',
        ],
        borderWidth: 1,
       }
      ]
     },
     options: {
      // responsive: true,
      scales: {
       x: {
        type: 'linear'
       },
       y: {
        beginAtZero: true
       }
      }
     }
    })
  
    chartRef.current.chart = newChart
   }
  }, []);


  return <div style={{position: 'relative', width: '100vw', height: '80vh' }} >
  <canvas ref={chartRef}/>
  </div>
  
}

export default Line