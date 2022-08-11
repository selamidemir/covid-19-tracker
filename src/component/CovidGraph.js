import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectCountry, selectGraphData } from '../redux/covid19Slice';

function CovidGraph() {
  const covid19Data = useSelector(selectGraphData);
  const country = useSelector(selectCountry);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Covid 19 Graphics for ${country.name}`,
      },
    },
  };

  const labels = ['Infected', 'Recovered', 'Deaths', 'Active'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: covid19Data,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  
  return (
    <div className='covid-graph'><Bar options={options} data={data} /></div>
  )
}

export default CovidGraph;