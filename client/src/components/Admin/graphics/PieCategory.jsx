import { useEffect, useMemo, useState } from "react";
import { useAuth0 } from '@auth0/auth0-react'//libreia Auth0

import axios from "axios"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  
  responsive: true,

  plugins: {
    legend: {
      display: true,
    },
  },
};

const PieCategory = () => {
  const {isAuthenticated,getAccessTokenSilently}=useAuth0()
  const [pieGraphics, setPieGraphics] = useState({});
  let labels =Object.keys(pieGraphics).length>0?Object.keys(pieGraphics.statisticsProductpie):[];
  let scores = Object.keys(pieGraphics).length>0?Object.values(pieGraphics.statisticsProductpie):[];
  console.log(labels,scores)
  useEffect(() => {
  
    const lineGraphicsdb=async()=>{
     const token= await getAccessTokenSilently()
     const data2=(await axios.get('http://localhost:3001/loginAdmin/graphics',
     {   
         headers:{
         authorization: `Bearer ${token}`
         },    
 })).data
 setPieGraphics(()=>data2)
   }
   lineGraphicsdb()
 
  }, [])


 const data = {
    labels,
    datasets: [{
      label: 'My First Dataset',
      data:scores,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(66, 235, 54)',
        'rgb(207, 39, 151)',
        'rgb(181, 224, 61)',
        'rgb(101, 15, 94)'  
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgb(66, 235, 54)',
        'rgb(207, 39, 151)',
        'rgb(181, 224, 61)',
        'rgb(101, 15, 94)'  ,
      ],
      hoverOffset: 4,
      borderWidth: 1,
    }]}


  return (
    <Doughnut data={data} options={options} />
  )
}

export default PieCategory