import React from 'react';
import Login from "../login/login.jsx"
import SignUp from "../login/signup.jsx"
import NavBar from '../NavBar/Nav.jsx'
import Maps from "../Maps/Maps.jsx"
import Testimonials from '../Testimonials/Testimonials.jsx';
import ImageGallery from '../Testimonials/ImageGallery.jsx';
import Footer from "../Footer/Footer.jsx"
import ImageCarousel from '../carousel/ImageCarousel.jsx'
const API_KEY = 'AIzaSyD2reYJIpHI2mXmu3cl4qQ42Ve4DQDd1DU';
const {useState, useRef, useEffect} = React;

const HomePage = () => {
  const ref = useRef(null);
  const [map, setMap] = useState();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignup] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [imageCount, setImageCount] = useState(0);


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
  var closeModal = (event) => {
    var string = event.target.classList[0]
    if (string === "pictureOverview" || string === "carouselImage") {
      return;
    }
    setGallery(false);
  }

  return (
    <div onClick={closeModal}>
    {gallery ? <ImageGallery photos={photos} setGallery={setGallery} imageCount={imageCount} gallery={gallery}/> : null}
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
                <ImageCarousel />
              </div>
            </div>

            <div className="map">
              <Maps />
            </div>
            <div className="stats-container">
              <div className="medium-heading">Stats</div>
            </div>
            <div className="testimonialHeader">Testimonials</div>
            <div className="testimonialDiv">
              <Testimonials setGallery={setGallery} setPhotos={setPhotos} setImageCount={setImageCount}/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      {showLogin && <Login toggleModal={toggleModal}/>}
      {showSignUp && <SignUp toggleModal={toggleModal}/>}
    </div>
  )
}

export default HomePage;