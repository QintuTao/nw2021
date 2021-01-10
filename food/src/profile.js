import React, {Component} from 'react';

class Profile extends Component {
    state = {
        name: "a",
        email: "abc@gmail.com",
        age: 10,
        height: 140,
        weight: 70,
        imageUrl: 'https://img2.pngio.com/broccoli-png-image-free-broccoli-pictures-download-broccoli-cartoon-broccoli-png-2400_2328.png'
    };
    render() {
        return (
            <div>
                <img src={this.state.imageUrl} width="100px" height="100px" alt=""/>
                <h4>
                    name:
                    <textarea id="myTextarea">{this.state.name}</textarea>
                </h4>
                <h4>
                    email:
                    <textarea id="myTextarea">{this.state.email}</textarea>
                </h4>
                <h1>Personal Information</h1>
                <h4>
                    age:
                    <textarea id="myTextarea">{this.state.age}</textarea>
                </h4>
                <h4>
                    height:
                    <textarea id="myTextarea">{this.state.height}</textarea>
                </h4>
                <h4>
                    weight:
                    <textarea id="myTextarea">{this.state.weight}</textarea>
                </h4>
                <button>submit</button>
            </div>
        );
    }
}

export default Profile;