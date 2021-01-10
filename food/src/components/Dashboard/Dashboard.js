import React from 'react';
// import "./NavBar.css";

const NavBar= ({onRouteChange, isSignedIn}) => {
    if (isSignedIn) {
      return (
        <nav>
            <p onClick={() => onRouteChange('profile')} className='f3 link dim black underline pa3 pointer'>Profile</p>
            <p onClick={() => onRouteChange('dashboard')} className='f3 link dim black underline pa3 pointer'>Dashboard</p>
            <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Dashboard</p>
        </nav>
      );
    } else {
      return (
        <nav>
          <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
          <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
        </nav>
      );
    }
}

export default NavBar;