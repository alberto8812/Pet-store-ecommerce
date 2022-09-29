import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);





const options = {
  
  responsive: true,
  scales: {
    y: {
      min: 0,
    },
  },
  plugins: {
    legend: {
      display: true,
    },
  },
};
/* */
export default function LineSell() {
const lineGraphics = useSelector(state => state.statistics);
let labels =Object.keys(lineGraphics).length>0?lineGraphics.statisticsProduct.month:[];
let scores = Object.keys(lineGraphics).length>0?lineGraphics.statisticsProduct.total:[];


 


const data = {

      datasets: [
        {
          label: "Ventas",
          data: scores,
          tension: 0.3,
          borderColor: "rgb(75, 192, 192)",
          pointRadius: 6,
          pointBackgroundColor: "rgb(75, 192, 192)",
          //backgroundColor: "#fff",
        },
       
      ],
      labels,
    };


  

  return <Line data={data} options={options} />;

}