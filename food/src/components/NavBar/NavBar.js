import React from 'react';
import "./NavBar.css";

const NavBar= ({onRouteChange, isSignedIn}) => {
    if (isSignedIn) {
      return (
        <nav>
            <li onClick={() => onRouteChange('profile')} className='f3 link dim black underline pa3 pointer'>Profile</li>
            <li onClick={() => onRouteChange('dashboard')} className='f3 link dim black underline pa3 pointer'>Dashboard</li>
            <li onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Signout</li>
        </nav>
      );
    } else {
      return (
        <nav>
            <li onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</li>
            <li onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</li>
        </nav>
      );
    }
}

export default NavBar;