import React, { Component } from 'react';
import DailyFoodList from './DailyFoodList/DailyFoodList';
import "./Dashboard.css";

class Dashboard extends Component {
    render() {
        return (
            <div> 
                <h1>Dashboard</h1>
                <div>
                    <div className = "left">
                        <DailyFoodList />
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;