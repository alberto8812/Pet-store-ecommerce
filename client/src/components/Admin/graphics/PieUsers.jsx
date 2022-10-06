import React from 'react'
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
};
 
const PieUsers = ({statusUserGraphics}) => {
  //datos de los usuarios activos para las graficas

  let labels =statusUserGraphics.length>0?statusUserGraphics.map(res=>{if(res.blockUser===true||res.blockUser===false){return res.blockUser} } ):[];//statusGraphics.length>0?statusGraphics.map(res=>{if(res.status==='PENDING'||res.status==='COMPLETED'){return res.status} } ):[];
  let scores = statusUserGraphics.length>0?statusUserGraphics.map(res=>{if(res.status_blocK>=0){return res.status_blocK} } ):[];



 const data = {
    labels,
    datasets: [{
      label: 'My First Dataset',
      data:scores,
      backgroundColor: [
        'rgb(54, 162, 235)',
        'rgb(255, 99, 132)',
       

      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 99, 132, 1)',
       
        
      ],
      hoverOffset: 4,
      borderWidth: 1,
    }]}

  return (
    <Pie data={data} options={options} />
  )
}

export default PieUsers