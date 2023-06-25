'use client'

import { useEffect } from "react";
import Chart from "chart.js";
import { BsThreeDotsVertical } from "react-icons/bs";

const HorizantalBarChart = () => {
  useEffect(() => {
    const canvas = document.getElementById('myHorizontal') as HTMLCanvasElement | null;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
    var myHorizontal = new Chart(ctx, {
      type: "horizontalBar",
      data: {
        labels: ["male", "female"],
        datasets: [
          {
            data: [66, 144, 146, 116, 107, 131, 43],
            label: "Applied",
            borderColor: "#37eb34",
            backgroundColor: "#37eb34",
            borderWidth: 1,
          }
        ],
      },
    });
}}
  }, []);

  return (
    <>
 <div className=" border rounded-xl p-2" >
    <div className="p-1 justify-between">
      <div className="flex items-center text-center justify-between">
        <div className="">Patient Gender</div>
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
            <div className="canv  pt-0 h-[30vh] rounded-xl my-auto mx-auto shadow-xl">
            <div className="h-[100%]  w-full overflow-hidden flex justify-center m-auto items-center text-center">
            <canvas id="myHorizontal"></canvas>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default HorizantalBarChart;
