import React, { Component } from 'react';
import DailyFoodList from './DailyFoodList/DailyFoodList';
import Chart from './Chart/Chart'
import "./Dashboard.css";

var foodItems = [];
foodItems.push({index: 1, name: "Lemon", category: "fruit", serving: 1});
foodItems.push({index: 2, name: "Broccoli", category: "fruit", serving: 1});
foodItems.push({index: 3, name: "noodles", category: "main", serving: 3});
// console.log(foodItems); 

class Dashboard extends Component {
    constructor () {
        super()
        this.state = {
            totalCalories: 20,
            totalCarbs: 20,
            totalProtein: 20,
            totalFat: 20,
            totalVitamin: 20,
            totalMinerals: 20
        }
    }
    render() {
        return (
            <div> 
                <h1>Dashboard</h1>
                <div>
                    <div className = "column left">
                        <DailyFoodList foodItems = {foodItems}/>
                    </div>
                    <div className = "column right">
                        <Chart total_info = {this.state}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;