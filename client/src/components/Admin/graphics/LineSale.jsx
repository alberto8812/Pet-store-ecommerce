import { useEffect, useMemo, useState } from "react";
import axios from "axios"
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

export default function LineSell() {
const [lineGraphics, setLineGraphics] = useState({});

const labels =lineGraphics.month;
const scores = lineGraphics.total;
console.log(lineGraphics)

useEffect(() => {
   const lineGraphicsdb=async()=>{
    const data2=(await axios.get('http://localhost:3001/loginAdmin/graphics')).data
    setLineGraphics(()=>data2)
  }
  lineGraphicsdb()

 }, [])



 


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