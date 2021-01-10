import React, { Component } from 'react';
// import  from ./components/
import FoodItem from "./FoodItem/FoodItem"
import "./DailyFoodList.css";

class DailyFoodList extends Component {
    render() {
        return (
            <div class = "container">
                <div class = "adding-field">
                    
                </div>
                <div class = "foodlist"> 
                    <FoodItem />
                    <FoodItem />
                </div>
            </div>
        );
    }
}

export default DailyFoodList;