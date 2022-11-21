import React from 'react';

const NavBar = () => {

  return (
    <div className="navBar">
      <div className="logo-container">
        <div className="LogoText">TravelGreen</div>
        <div className="logo"></div>
      </div>

      <div className="loginbuttons-container">
        <div className="button-nav">Login</div>
        <div className="seperator">{'|'}</div>
        <div className="button-nav">Sign Up</div>
      </div>
    </div>
  )
}

export default NavBar