import React from 'react';

const NavBar = ({toggleModal}) => {

  return (
    <div className="navBar">
      <div className="logo-container">
        <div className="LogoText">TravelGreen</div>
        <div className="logo"></div>
      </div>
      <div className="loginbuttons-container">
      <div className="button-nav"
          >Plan a Trip</div>
        <div className="button-nav"
          onClick={() => {
            toggleModal('login')
          }}>Login</div>
        <div className="seperator">{'|'}</div>
        <div className="button-nav"
          onClick={() => {
            toggleModal('signup')
          }}>Sign Up</div>
      </div>
    </div>
  )
}

export default NavBar