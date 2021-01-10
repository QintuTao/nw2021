import React from 'react';
import "./Chart.css";
import { Doughnut } from 'react-chartjs-2';

const state = {
    labels: ['Carbs', 'Fat', 'Protein',
             'Vitamin', 'Mineral'],
    datasets: [
      {
        label: 'Nutritional Values',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4'
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
        ],
        data: [120, 80, 90, 20, 20]
      }
    ]
  }
  
  export default class Chart extends React.Component {
    render() {
      return (
        <div>
          <Doughnut
            data={state}
            options={{
              title:{
                display:true,
                text:"Today's Nutrition Value Intake",
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        </div>
      );
    }
  }