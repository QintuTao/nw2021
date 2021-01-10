import React from 'react';
import ReactDOM from "react-dom";
import './Signin.css';
import {BrowserRouter as Router, Link, Route } from "react-router-dom";
  

class Signin extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       signInEmail: '',
//       signInPassword: ''
//     }
//   }

  render() {
    const { onRouteChange } = this.props;
    return (
        <div className="pa4 black-80 background-box">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset hover-black w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                //   onChange={this.onEmailChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset hover-black w-100"
                  type="password"
                  name="password"
                  id="password"
                //   onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
                <p onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">
                    Don't have an account? Register!
                </p>
                    {/* <Link to ="/Register" class="f6 link dim black db">Don't have an account? Register!</Link> */}
                    {/* <Route path = "/Register" component = {/components/Register}/> */}
                {/* <a href="#0" class="f6 link dim black db">Forgot your password?</a> */}
            </div>
          </div>
        </div>
    );
  }
}

export default Signin;