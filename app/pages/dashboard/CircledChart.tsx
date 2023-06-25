'use client'

import { useEffect } from "react"
import { Chart } from "chart.js";
const CircledChart = () => {
    useEffect(() => {
        var ctx = document.getElementById('myCicledChart').getContext('2d');
        var myCicledChart = new Chart(ctx, {
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
                        "rgb(75, 192, 192 )",
                        "rgb(255, 205, 86)",
                        "rgb(255, 99, 132)",
                    ],
                    borderWidth: 2,
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        display: false,
                    }],
                    yAxes: [{
                        display: false,
                    }],
                }
            },

        });
    }, [])


    return (
        <>
            {/* Doughnut chart */}
            <div className="flex h-full w-full flex-col justify-center m-auto items-center text-center">
            <div className="canv_border h-full w-full mx-auto my-auto">
            <div className="canv border pt-0 h-[50vh] rounded-xl my-auto mx-auto shadow-xl">
            <div className="h-[100%]  w-full overflow-hidden flex justify-center m-auto items-center text-center">
            <canvas id="myCicledChart"></canvas>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default CircledChart;