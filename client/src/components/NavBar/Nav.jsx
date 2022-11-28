import React from 'react';

import Ustore from '../Provider/ZusProvider.jsx'

const NavBar = ({toggleModal}) => {

  const switcher = Ustore((state) => state.switcher);

  return (
    <div className="navBar">
      <div onClick = {() => switcher('Home')}className="logo-container">
        <div className="LogoText">TravelGreen</div>
        <div className="logo"></div>
      </div>
      <div className="loginbuttons-container">
      <div
      onClick = {() => switcher('Trips')}
      className="button-nav"
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