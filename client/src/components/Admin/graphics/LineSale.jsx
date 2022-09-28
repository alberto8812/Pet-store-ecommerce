import { useEffect, useMemo, useState } from "react";
import { useAuth0 } from '@auth0/auth0-react'//libreia Auth0
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
  const {isAuthenticated,getAccessTokenSilently}=useAuth0()
const [lineGraphics, setLineGraphics] = useState({});
let labels =Object.keys(lineGraphics).length>0?lineGraphics.statisticsProduct.month:[];
let scores = Object.keys(lineGraphics).length>0?lineGraphics.statisticsProduct.total:[];


useEffect(() => {
  
   const lineGraphicsdb=async()=>{
    const token= await getAccessTokenSilently()
    const data2=(await axios.get('http://localhost:3001/loginAdmin/graphics',
    {   
        headers:{
        authorization: `Bearer ${token}`
        },    
})).data
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