import React, { Component } from 'react';
import Nutrition from '../../../../db/nutrition';
// import  from ./components/
import FoodItem from "./FoodItem/FoodItem"
// import "./DailyFoodList.css";


class FoodList extends React.Component {
  render () {
    var items = this.props.items.map((item, index) => {
      return (
        <FoodItem 
        key={index} 
        name = {item.name}
        category ={item.category} 
        serving = {item.serving} 
        removeItem={this.props.removeItem} 
        />
      );
    });
    const nutrition = new Nutrition()

    return (
      <ul className="foodlist"> {items} </ul>
    );
  }
}

export default FoodList;