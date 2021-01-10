import React, { Component } from 'react';
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
    console.log(items)
    return (
      <ul className="foodlist"> {items} </ul>
    );
  }
}

export default FoodList;