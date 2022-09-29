import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
/* */
ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const PieStatus = ({statusGraphics}) => {
  const pieGraphics = useSelector(state => state.statistics);

  let labels =statusGraphics.length>0?statusGraphics.map(res=>{if(res.status==='PENDING'||res.status==='COMPLETED'){return res.status} } ):[];
  let scores = statusGraphics.length>0?statusGraphics.map(res=>{if(res.status_count>=0){return res.status_count} } ):[];



 const data = {
    labels,
    datasets: [{
      label: 'My First Dataset',
      data:scores,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      
      ],
      hoverOffset: 4,
      borderWidth: 1,
    }]}


  return (
    <Doughnut data={data} options={options} />
  )
}

export default PieStatus