// import firebase from './db/firebase';
import React, { Component } from 'react';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import Dashboard from './components/Dashboard/Dashboard';
import {BrowserRouter as Router, Link } from "react-router-dom";
import './App.css';

// const routes = [
//   {
//     path: "/",
//     exact: true,
//     sidebar: () => <div>home!</div>,
//     main: () => <h2>Home</h2>
//   },
//   {
//     path: "/Dashboard",
//     sidebar: () => <div>Dashboard!</div>,
//     main: () => <h2>Bubblegum</h2>
//   },
//   {
//     path: "/User Profile",
//     sidebar: () => <div>Dashboard</div>,
//     main: () => <h2>Shoelaces</h2>
//   }
// ];
class App extends Component {
  // constructor() {
  // var config = {
  //   apiKey: " AIzaSyBsQhiBeBxUxQw744BHlQfEPty5aUhbLY4 ",
  //   authDomain: "n-tri-569d8.firebaseapp.com",
  //   databaseURL: "https://n-tri-569d8-default-rtdb.firebaseio.com/",
  //   storageBucket: "gs://n-tri-569d8.appspot.com/"
  // };
  // firebase.initializeApp(config);

  // // Get a reference to the database service
  // var database = firebase.database();
  // }
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'profile',
      isSignedIn: false,
      user: {
        name: '',
        email: '',
        age: 20,
        height: 180,
        weight: 50,
      }
    }
  }
  // Set the configuration for your app
  // TODO: Replace with your project's config object
  

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'dashboard') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }
  
  render () {
    const { isSignedIn, route} = this.state;
    return (
      <div className="App">
        
          { route === 'signin' ?
            // <div className="center">
              <Signin 
              // loadUser={this.loadUser} 
              onRouteChange={this.onRouteChange}
              />
            : route === 'register' ? 
              // <div className="center">
                <Register 
                // loadUser={this.loadUser} 
                onRouteChange={this.onRouteChange}
                />
              // </div>
            : 
            route === 'profile' ?
              <Profile />
            : route === "dashboard" ?
              <Dashboard /> : 
            <div className="center"> 
              <Signin 
                onRouteChange={this.onRouteChange}
              />
            </div>
          }
        
        <footer class = "sticky">
        </footer>
      </div>
    );
  }
}

export default App;
