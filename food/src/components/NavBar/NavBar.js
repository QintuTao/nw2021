import React from 'react';
import "./NavBar.css";

const NavBar= ({onRouteChange, isSignedIn}) => {
    if (isSignedIn) {
      return (
        <div class="menu">
          <button class="button">menu</button>
          <nav class="menu-content">
            <li onClick={() => onRouteChange('profile')} className='f4 link dim black pa3 pointer'>Profile</li>
            <li onClick={() => onRouteChange('dashboard')} className='f4 link dim black pa3 pointer'>Dashboard</li>
            <li onClick={() => onRouteChange('signout')} className='f4 link dim black pa3 pointer'>Signout</li>
        </nav>
        </div>
      );
    } else {
      return (
        <div class="menu">
          <button class="button">menu</button>
          <nav class="menu-content">
            <li onClick={() => onRouteChange('signin')} className='f4 link dim black pa3 pointer'>Sign In</li>
            <li onClick={() => onRouteChange('register')} className='f4 link dim black pa3 pointer'>Register</li>
        </nav>
        </div>
        
      );
    }
}

export default NavBar;