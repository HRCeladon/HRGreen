import React from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Login from "../login/login.jsx"
import SignUp from "../login/signup.jsx"
import NavBar from '../NavBar/Nav.jsx'

const API_KEY = 'AIzaSyD2reYJIpHI2mXmu3cl4qQ42Ve4DQDd1DU';
const {useState, useRef, useEffect} = React;

const HomePage = () => {
  const ref = useRef(null);
  const [map, setMap] = useState();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignup] = useState(false);
  console.log(Status);

  const { isLoaded } = useLoadScript({ googleMapsApiKey: API_KEY })

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

  const Map = () => {
    return <GoogleMap zoom={4} center={{lat: 40, lng: -98}} mapContainerClassName="map-container"></GoogleMap>
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

              <div className="carousel">
              </div>
            </div>

            <div className="map">
              {isLoaded ? <Map/> : <div>Loading...</div>}
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