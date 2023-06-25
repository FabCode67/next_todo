'use client'

import { useEffect } from "react"
import { Chart } from "chart.js";
const LineChart = () => {
  useEffect(() => {
    const canvas = document.getElementById('lineChart') as HTMLCanvasElement | null;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
    var lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Jun", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Oct", "Sept", "Oct", "Nov", "Dec"],
        datasets: [{
          data: [86, 114, 106, 106, 107, 111, 133, 85, 90 ,100, 93, 100],
          label: "Applied",
          borderColor: "#37eb34",
          backgroundColor: "#37eb34",
          fill: false,
        }
        ]
      },
    });
  }}
  }, [])
  return (
    <>
      <div className="flex h-full w-full flex-col">
        <div className="canv_border h-full w-full mx-auto my-auto">
          <div className="canv border pt-0 h-[30vh] rounded-xl my-auto mx-auto shadow-xl">
            <div className="h-[100%] w-full overflow-hidden">
              <canvas id="lineChart" style={{ height: '100%', maxHeight: '100%' }}></canvas>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LineChart;
