'use client'

import { useEffect } from "react"
import { Chart } from "chart.js";
import { BsThreeDotsVertical } from "react-icons/bs";

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
    <div className=" border rounded-xl p-2" >
      <div className="p-1 justify-between">
        <div className="flex items-center text-center justify-between">
          <div className="">Revenue Generated</div>
          <div className="flex items-center text-center justify-between space-x-5">
            <div>department</div>
            <div>Monthly</div>
            <div>
              <BsThreeDotsVertical />
            </div>
            </div>
          </div>
      </div>
      <div className="flex h-full w-full flex-col">
        <div className="canv_border h-full w-full mx-auto my-auto">
          <div className="canv pt-0 h-[30vh] my-auto mx-auto shadow-xl">
            <div className="h-[100%] w-full overflow-hidden">
              <canvas id="lineChart" style={{ height: '100%', maxHeight: '100%' }}></canvas>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default LineChart;
