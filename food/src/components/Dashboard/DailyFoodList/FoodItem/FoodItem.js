import {React, Component} from 'react';
import "./FoodItem.css";
import broccoli_left from './broccoli_right.png'

class FoodItem extends Component {
    constructor (){
        super();
        this.name = "Broccoli";
        this.category = "Vegetable";
        this.serving = "1"

        this.calories = 5;
        this.carbs = 0;
        this.fat = 0;
        this.protein = 0;
    }
    setFoodRecord(name, category, serving) {
        this.name = name;
        this.category = category;
        this.serving = serving;
    }
    setNutritionalInfo() {
        
    }
    render() {
        return (
            <div class="dt w-100 bb b--black-05 pb2 mt2 food" href="#0">
                <div class="dtc w2 w3-ns v-mid">
                    <img src= {broccoli_left} class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
                </div>
                <div class="dtc v-mid pl3">
                    <h1 class="f6 f5-ns fw6 lh-title black mv0"> {this.name} </h1>
                    <h2 class="f6 fw4 mt0 mb0 black-60"> Categories: {this.category} </h2>
                    <h2 class="f6 fw4 mt0 mb0 black-60"> Servings: {this.serving} </h2>
                    <h2 class="f6 fw4 mt0 mb0 black-60"> Calories: {this.calories} </h2>
                    <h2 class="f6 fw4 mt0 mb0 black-80"> Carbs: {this.carbs} Protein: {this.protein} Fat: {this.fat} </h2>
                </div>
                <div class="dtc v-mid">
                    <form class="w-100 tr">
                    <button class="f6 bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">Delete</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default FoodItem;