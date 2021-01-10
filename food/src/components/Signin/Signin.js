import React from 'react';
import db from '../../db/database'
import ReactDOM from "react-dom";
import './Signin.css';
import {BrowserRouter as Router, Link, Route } from "react-router-dom";
  

class Signin extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      doesUserExist: true
    }

    /* react references to DOM elements */
    this.refToEmail       = React.createRef();
    this.refToPassword    = React.createRef();

    /* bind this to functions */
    this.handleSignIn = this.handleSignIn.bind(this)

    this.onRouteChange = this.props.onRouteChange;
  }

  validateEmail(email) {
    db.lookupUser(email)
  }

  async handleSignIn(event) {
    
    const email     = this.refToEmail.current.value;
    const password  = this.refToPassword.current.value;

    /* check if email already exist */
    const doesExist = await db.lookupUser(email)
    this.setState({
      doesUserExist: doesExist
    })

    /* signIn if yes */
    this.onRouteChange('profile');
  }

  render() {
    const { onRouteChange } = this.props;
    let doesUserExist = this.state.doesUserExist

    console.log("ii" + doesUserExist)
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
                  ref={this.refToEmail}
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mt3">
                
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset hover-black w-100"
                  type="password"
                  name="password"
                  id="password"
                  ref={this.refToPassword}
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.handleSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <p onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">
                {doesUserExist ? "Dont't have an account? Register!" : "Seems like you don't have an account! Please Register"}
              </p>            
            </div>
          </div>
        </div>
    );
  }
}

export default Signin;