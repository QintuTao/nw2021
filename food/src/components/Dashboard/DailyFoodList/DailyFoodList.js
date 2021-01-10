import React, { Component } from 'react';
// import  from ./components/
import FoodItem from "./FoodItem/FoodItem"
import "./DailyFoodList.css";

class DailyFoodList extends Component {
    constructor() {
        super();
        this.foodlist = [<FoodItem/>, <FoodItem/>]
        // this.addFood("lemon", 2);
    }
    addFood(name, serving) {
        const newfood = new FoodItem();
        newfood.setFoodRecord(name, "fruit", serving);
        this.foodlist.push(newfood);
    }
    render() {
        return (
            <div class = "container">
                <div class = "adding-field">
                    
                </div>
                <div class = "foodlist"> 
                    {/* {{this.foodlist.map((name, index) => (
                        <li key={index}>
                            {name}
                        </li>
                    ))} */}
                    {/*this.foodlist.map((food, i) => {  
                        // return {food};
                    // }) */}
                    {this.foodlist}
                </div>
            </div>
        );
    }
}

export default DailyFoodList;