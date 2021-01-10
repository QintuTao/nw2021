import React, {Component} from 'react';
import "./Profile.css"
import broccoli_left from './broccoli_left.png'

class Profile extends Component {
    state = {
        name: "a",
        email: "abc@gmail.com",
        age: 10,
        height: 140,
        weight: 70,
    };
    render() {
        return (
            <div className="profile">
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
                    <button class="save">save</button>
                    <hr class="line"/>
                </h2>
                <h4 class="bottomfield">
                    <span class="text">age&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <textarea id="myTextarea" cols="50">{this.state.age}</textarea>
                </h4>
                <h4 class="bottomfield">
                    <span class="text">height&nbsp;</span>
                    <textarea id="myTextarea" cols="50">{this.state.height}</textarea>
                </h4>
                <h4 class="bottomfield">
                    <span class="text">weight</span>
                    <textarea id="myTextarea" cols="50">{this.state.weight}</textarea>
                </h4>
                <footer class = "sticky">
      
                </footer>
            </div>

        );
    }
}

export default Profile;