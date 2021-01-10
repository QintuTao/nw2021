import firebase from 'firebase';
import React, { Component } from 'react';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import './App.css';

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
  
  // Set the configuration for your app
  // TODO: Replace with your project's config object

  render () {
    return (
      <div className="App">
        <div className="center">
          <Signin 
          // loadUser={this.loadUser} onRouteChange={this.onRouteChange}
          />
        </div>
        <footer class = "sticky">
      
        </footer>
      </div>
    );
  }
}

export default App;
