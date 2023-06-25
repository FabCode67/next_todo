'use client'

import { useEffect } from "react"
import { Chart } from "chart.js";
import { BsThreeDotsVertical } from "react-icons/bs";
const FilledLineChart =() => {
    useEffect(() => {
      const canvas = document.getElementById('myChart') as HTMLCanvasElement | null;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
      var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                datasets: [{
                    data: [105, 90, 95, 102, 98, 103, 100, 88, 90, 99, 101, 87],
                    label: "Applied",
                    borderColor: "#37eb34",
                    backgroundColor: "#37eb34",
                }
                ]
            },
        });
      }
    }
    }, [])


    return (
        <>
             <div className=" border rounded-xl p-2" >
      <div className="p-1 justify-between">
        <div className="flex items-center text-center justify-between">
          <div className="">Total patient visit</div>
          <div className="flex items-center text-center justify-between space-x-5">
            <div>Monthly</div>
            <div>
              <BsThreeDotsVertical />
            </div>
            </div>
          </div>
      </div>
            <div className="flex h-full w-full flex-col">
        <div className="canv_border h-full w-full mx-auto my-auto">
          <div className="canv border pt-0 h-[50vh] rounded-xl my-auto mx-auto shadow-xl">
            <div className="h-[100%] w-full overflow-hidden">
              <canvas id="myChart" style={{ height: '100%', maxHeight: '100%' }}></canvas>
            </div>
          </div>
        </div>
      </div>
      </div>
        </>
    )
}

export default FilledLineChart;