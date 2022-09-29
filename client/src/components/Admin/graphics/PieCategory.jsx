import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

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
  const pieGraphics = useSelector(state => state.statistics);

  let labels =Object.keys(pieGraphics).length>0?Object.keys(pieGraphics.statisticsProductpie):[];
  let scores = Object.keys(pieGraphics).length>0?Object.values(pieGraphics.statisticsProductpie):[];



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

/** */
  return (
    <Doughnut data={data} options={options} />
  )
}

export default PieCategory