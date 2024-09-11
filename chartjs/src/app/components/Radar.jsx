'use client'
import React, { useEffect, useRef } from 'react'
import { Chart } from 'chart.js/auto'


const Radar = () => {
 const chartRef = useRef(null)
 useEffect(() => {
  
  if (chartRef.current) {

   if (chartRef.current.chart) {
    chartRef.current.chart.destroy()
   }
    const ctx = chartRef.current.getContext('2d');
    const newChart = new Chart (ctx, {
     type: "radar",
     data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
       {
        label: 'Info',
        data: [34, 64, 23, 44, 69, 27],
        backgroundColor:[
         'rgba(255, 99, 132, 0.2)',
 
        ],
        borderColor:[
         'rgba(255, 99, 132, 0.2)',

        ],
        borderWidth: 1,
       },
       {
        label: 'Data',
        data: [11, 47, 18, 32, 70, 11],
        backgroundColor:[
         'rgba(255, 99, 132, 0.2)',
 
        ],
        borderColor:[
         'rgba(255, 99, 132, 0.2)',

        ],
        borderWidth: 1,
       },
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

export default Radar