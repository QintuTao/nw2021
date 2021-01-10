import React, {Component} from 'react';
import "./Profile.css"
import broccoli_left from './broccoli_left.png'

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            name: "a",
            email: "abc@gmail.com",
            age: 10,
            height: 140,
            weight: 40,
        };
    }
    saveInfo() {
        
    }
    render() {
        return (
            <div className="profile">
                <h1>Profile</h1>
                <span class="circle">
                    <img src={broccoli_left} class="broccoli" alt=""/>
                </span>
                
                <h4 class="topfield">
                    <span class="text">name</span>
                    <textarea id="myTextarea" cols="50">{this.state.name}</textarea>
                </h4>
                <h4 class="topfield">
                    <span class="text">email</span>
                    <textarea id="myTextarea" cols="50">{this.state.email}</textarea>
                </h4>
                <h2>
                    <span class="divider">Personal Information</span>
                    <button onClick={this.saveInfo}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">save</button>
                    <hr class="line"/>
                </h2>
                <h4 class="bottomfield">
                    <span class="text">age&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <textarea id="myTextarea" cols="50">{this.state.age}</textarea> yrs
                </h4>
                <h4 class="bottomfield">
                    <span class="text">height&nbsp;</span>
                    <textarea id="myTextarea" cols="50">{this.state.height}</textarea> cm
                </h4>
                <h4 class="bottomfield">
                    <span class="text">weight</span>
                    <textarea id="myTextarea" cols="50">{this.state.weight}</textarea> kg
                </h4>
                <footer class = "sticky">
      
                </footer>
            </div>

        );
    }
}

export default Profile;