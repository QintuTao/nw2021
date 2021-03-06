import React, { Component } from 'react';
// import  from ./components/
import FoodList from "./FoodList/FoodList";
import FoodForm from "./FoodForm/FoodForm";
import "./DailyFoodList.css";

class DailyFoodList extends Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.state = {foodItems: props.foodItems};
    }
    addItem(foodItem) {
        var foodItems = this.state.foodItems;
        foodItems.unshift({
          index: foodItems.length+1, 
          name: foodItem.name, 
          category: foodItem.category, 
          serving: foodItem.serving
        });
        this.setState({foodItems: foodItems});
    }
    removeItem (itemIndex) {
        var foodItems = this.state.foodItems;
        foodItems.splice(itemIndex, 1);
        this.setState({foodItems: foodItems});
    }
    // addFood(name, serving) {
    //     const newfood = new FoodItem();
    //     newfood.setFoodRecord(name, "fruit", serving);
    //     this.foodlist.push(newfood);
    // }
    // addItem(e) {
    //     if (this._inputElement.value !== "") {
    //       var newItem = {
    //         text: this._inputElement.value,
    //         key: Date.now()
    //       };
       
    //       this.setState((prevState) => {
    //         return { 
    //           items: prevState.foodlist.concat(newItem) 
    //         };
    //       });
    //       this._inputElement.value = "";
    //     }
    //     console.log(this.state.items);
    //     e.preventDefault();
    // }
    // createTasks(item) {
    //     return <li key={item.key}>{item.text}</li>
    // }
    // render() {
    //     return (
    //       <div id="main">
    //         {/* <TodoHeader /> */}
    //         <FoodList items={todoItems} removeItem={this.removeItem}/>
    //         <FoodForm addItem={this.addItem} />
    //       </div>
    //     );
    // }
    render() {
        // var listItems = this.state.foodlist.map(this.createTasks);
        // var listfood = 
        return (
            <div class = "container">
                <FoodForm addItem={this.addItem} />
                <FoodList items={this.state.foodItems} removeItem={this.removeItem}/>
                
            </div>
        );
    }
    // <div class = "foodlist"> 
    //                 {listItems}
    //                 {/* {{this.foodlist.map((name, index) => (
    //                     <li key={index}>
    //                         {name}
    //                     </li>
    //                 ))} */}
    //                 {/* {this.state.foodlist.map((food, i) => (
    //                     <FoodItem

    //                     />
    //                 ))} */}
    //                  {/* {this.foodlist} */}
    //             </div>
}

export default DailyFoodList;