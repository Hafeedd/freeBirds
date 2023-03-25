import React from 'react'
import { Line } from 'react-chartjs-2'
import{Chart as ChartJS,
   LineElement,
   CategoryScale,//x axis
   LinearScale,// y axis
   PointElement,
   Legend,
   Tooltip
} from 'chart.js';
import useFetch from '../../useFetch/usefetch';


ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
  
  )
  const Chart = () => {
    const {datas,error,loading} = useFetch('http://localhost:8800/api/auth/loginInfo')
    
    
    const data={
      labels:['jan','feb','mar','apr','may','june','july','aug','sep','oct','nov','dec'],
      datasets:[{
        label:'website users/month',
        data:datas.months,
        backgroundColor:'black',
        borderColor:'#CC2445',
        
        pointBorderColor:'black',
        fill:true,
        tension:0.4
      }]
    }
    const options={
      plugins:{
        legend:true
      },
      scales:{
        y:{
           min:1,
           
        }
      }
    }

    
    
    return (
      <div className='container align-content-end ps-5 me-0 ms-5'>
        <h3>chart</h3>
        <div style={{width:'600px',height:'300px'}} >
            <Line data={data} options={options}></Line>
        </div>
    </div>
  )
}

export default Chart

/* import React, { useState } from 'react';

import { Line } from 'react-chartjs-2';

const Chart = () => {
  const [data] = useState({
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(194, 116, 161, 0.5)',
        borderColor: 'rgb(194, 116, 161)',
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(71, 225, 167, 0.5)',
        borderColor: 'rgb(71, 225, 167)',
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
  });

  return (
    <div className="container">
      <h3 className="mt-5">Line chart</h3>
      <Line data={data} options={{ responsive: true }} />
    </div>
  );
};

export default Chart; */
/* import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { CDBContainer } from 'cdbreact';

const Chart = () => {
  const [data, setData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(194, 116, 161, 0.5)',
        borderColor: 'rgb(194, 116, 161)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(71, 225, 167, 0.5)',
        pointHoverBorderColor: 'rgb(71, 225, 167)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  });

  useEffect(() => {
    setInterval(function() {
      var oldDataSet = data.datasets[0];
      var newData = [];

      for (var x = 0; x < data.labels.length; x++) {
        newData.push(Math.floor(Math.random() * 100));
      }

      var newDataSet = {
        ...oldDataSet,
      };

      newDataSet.data = newData;

      var newState = {
        ...data,
        datasets: [newDataSet],
      };

      setData(newState);
    }, 5000);
  }, []);

  return (
    <CDBContainer>
      <h3 className="mt-5">Dynamicly Refreshed Line chart</h3>
      <Line data={data} options={{ responsive: true }} />
    </CDBContainer>
  );
};

export default Chart; */