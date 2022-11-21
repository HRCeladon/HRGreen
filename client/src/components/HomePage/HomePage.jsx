import React from 'react';
import Login from "../login/login.jsx"
import SignUp from "../login/signup.jsx"
import NavBar from '../NavBar/Nav.jsx'
import Maps from "../Maps/Maps.jsx"

const API_KEY = 'AIzaSyD2reYJIpHI2mXmu3cl4qQ42Ve4DQDd1DU';
const {useState, useRef, useEffect} = React;

const HomePage = () => {
  const ref = useRef(null);
  const [map, setMap] = useState();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignup] = useState(false);


  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  const toggleModal = (modal) => {
    switch (modal) {
      case 'login':
        setShowLogin(!showLogin)
        break;
      case 'signup':
        setShowSignup(!showSignUp)
      default:
        break;
    }
  }

  return (
    <>
    <NavBar toggleModal={toggleModal}/>
      <div className="homepage">
        <div className="home-container">
          <div className="map-section">
            <div className="intro">

              <div className="statement-container">
                <div className="statement">Give back to the places you go!</div>
                <div className="statement">
                  <a className="extra-bold">1,000+ </a>trees planted nationwide!
                </div>
              </div>

              {/* <div className="carousel">
              </div> */}
              <ImageCarousel />
            </div>

            <div className="map">
              <Maps />
            </div>
            <div className="stats-container">
              <div className="medium-heading">Stats</div>
            </div>
          </div>
        </div>
      </div>
      {showLogin && <Login toggleModal={toggleModal}/>}
      {showSignUp && <SignUp toggleModal={toggleModal}/>}
    </>
  )
}

export default HomePage;