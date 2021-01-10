import React from 'react';
import "./Chart.css";
import { Doughnut } from 'react-chartjs-2';

var state = {
    labels: ['Carbs', 'Fat', 'Protein',
             'Vitamin', 'Mineral'],
    datasets: [
      {
        label: 'Nutritional Values',
        backgroundColor: [
          '#FFB347',
          '#E6F69D',
          '#AADEA7',
          '#64C2A6',
          '#2D87BB'
        ],
        hoverBackgroundColor: [
          '#FFB347',
          '#E6F69D',
          '#AADEA7',
          '#64C2A6',
          '#2D87BB'
        ],
        data: [120, 80, 90, 20, 20]
      }
    ]
  }
  
  export default class Chart extends React.Component {
    constructor(props) {
      super(props);
      state.datasets.data = [props.total_info.totalCarbs, 
        props.total_info.totalFat, 
        props.total_info.totalProtein, 
        props.total_info.totalVitamins, 
        props.totalMinerals]
    }
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