import React from 'react';

const Footer = () => {

  return (
    <footer className="footer-container">
        <div className="footer">
          <div className="icon facebook"></div>
          <div className="icon twitter"></div>
          <div className="icon instagram"></div>
          <div className="icon tumblr"></div>
          <div className="icon linkedIn"></div>
        </div>
        <div className="footer">
          <div className="button-nav footer-button">Contact Us</div>
        </div>
        <div className="logo-container">
          <div className="LogoText foot-text">TravelGreen</div>
          <div className="logo foot-logo"></div>
        </div>
        <div className="team">
          Team: Caitlin Zhu | Halley Bennett | Michael Raisch | Tuan Nguyen | Caleb Underwood | Ricardo Vargas | Bala Sathiya
        </div>
      </footer>
  )
}

export default Footer;