import React, { Component } from 'react';
import Signin from './components/Signin/Signin';
// import Register from './components/Register/Register';
import './App.css';

class App extends Component{
  render() {
    // const { isSignedIn, imageUrl, route, box } = this.state;
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
