import React, { Component } from 'react';
import DailyFoodList from './DailyFoodList/DailyFoodList';
import Chart from './Chart/Chart'
import "./Dashboard.css";

class Dashboard extends Component {
    render() {
        return (
            <div> 
                <h1>Dashboard</h1>
                <div>
                    <div className = "column left">
                        <DailyFoodList />
                    </div>
                    <div className = "column right">
                        <Chart />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;