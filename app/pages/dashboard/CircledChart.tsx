'use client'

import { useEffect } from "react";
import { Chart, ChartScales } from "chart.js";
import { BsThreeDotsVertical } from "react-icons/bs";

interface Props {
  x: boolean;
  y: boolean;
}

const CircledChart: React.FC<Props> = () => {
  useEffect(() => {
    const canvas = document.getElementById('myCicledChart') as HTMLCanvasElement | null;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const myCicledChart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ["Accepted", "Pending", "Rejected"],
            datasets: [{
              data: [70, 10, 6],
              borderColor: [
                "rgb(75, 192, 192)",
                "rgb(255, 205, 86)",
                "rgb(255, 99, 132)",
              ],
              backgroundColor: [
                "rgb(75, 192, 192)",
                "rgb(255, 205, 86)",
                "rgb(255, 99, 132)",
              ],
              borderWidth: 2,
            }]
          },
          options: {
            scales: {
              x: {
                display: false,
              },
              y: {
                display: false,
              },
            } as ChartScales, // Asserting the type to ChartScales
          },
        });
      }
    }
  }, []);

  return (
    <div className=" border rounded-xl p-2" >
    <div className="p-1 justify-between">
      <div className="flex items-center text-center justify-between">
        <div className="">Line Chart</div>
        <div className="flex items-center text-center justify-between space-x-2">
          <div>Monthly</div>
          <div>
            <BsThreeDotsVertical />
          </div>
          </div>
        </div>
    </div>
    <div className="flex h-full w-full flex-col justify-center m-auto items-center text-center">
      <div className="canv_border h-full w-full mx-auto my-auto">
        <div className="canv  pt-0 h-[45vh]  my-auto mx-auto shadow-xl">
          <div className="h-[100%]  w-full overflow-hidden flex justify-center m-auto items-center text-center">
            <canvas id="myCicledChart"></canvas>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CircledChart;
