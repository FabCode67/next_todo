'use client'

import { useEffect } from "react";
import Chart from "chart.js";

const HorizantalBarChart = () => {
  useEffect(() => {
    var ctx = document.getElementById("myHorizontal").getContext("2d");
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
  }, []);

  return (
    <>
      {/* Bar chart */}
      <div className="flex h-full w-full flex-col justify-center m-auto items-center text-center">
            <div className="canv_border h-full w-full mx-auto my-auto">
            <div className="canv border pt-0 h-[32vh] rounded-xl my-auto mx-auto shadow-xl">
            <div className="h-[100%]  w-full overflow-hidden flex justify-center m-auto items-center text-center">
            <canvas id="myHorizontal"></canvas>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HorizantalBarChart;
