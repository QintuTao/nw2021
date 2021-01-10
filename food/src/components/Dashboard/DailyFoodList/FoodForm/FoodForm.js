import React, { Component } from 'react';
import "./FoodForm.css";
import broccoli from './broccoli_right.png'

class FoodForm extends React.Component {
    constructor(props) {
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
      this.refs.foodName.focus();
    }
    onSubmit(event) {
      event.preventDefault();
      var name = this.refs.foodName.value;
      var category = this.refs.foodCategory.value;
      var serving = this.refs.foodServing.value;
      
      if(name && category && serving) {
        this.props.addItem({name, category, serving});
        this.refs.form.reset();
      }
    }
    render () {
      return (
        <form ref="form" onSubmit={this.onSubmit} className="foodform">
            <div className = "row">
                <div className = "input-info">
                    <div className = "foodformfield">
                        <label> Name </label>
                        <input type="text" ref="foodName"
                        className="form-control a2 input-reset hover-black" placeholder="Broccoli"/>
                    </div>
                    <div className = "foodformfield">
                        <label> Category</label>
                        <input type="text" ref="foodCategory" 
                        className="form-control a2 input-reset hover-black" placeholder="Veggies"/>
                    </div>
                    <div className = "foodformfield">
                        <label> Serving</label>
                        <input type="number" ref="foodServing" 
                        lassName="form-control a2 input-reset hover-black" placeholder="1"/>
                    </div>
                </div>
                <div className = "potential-img dtc w2 w3-ns v-mid">
                    <img src= {broccoli} class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
                </div>
            </div>
            <button type="submit" 
            className="btn btn-default b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
                Add</button> 
        </form>
      );   
    }
}
export default FoodForm;