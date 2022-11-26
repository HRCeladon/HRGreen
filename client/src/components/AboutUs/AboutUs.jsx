import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import plantingTree from '../../../dist/assets/planting-tree.jpeg';
import NavBar from '../NavBar/Nav.jsx';
import Login from "../login/login.jsx"
import SignUp from "../login/signup.jsx"
import Footer from "../Footer/Footer.jsx"

const Wrapper = styled.section`
  background-color: #F0EAD2;
  width: 900px;
  height: fit-content;
  filter: drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.25));
  padding: 20px 30px 20px 30px;
  margin-top: 65px;
`

const Outside = styled.section`
  width: 99;
  display: flex;
  justify-content: center;
  margin: 20px 0 0 0;
  padding: 20px;`


const Title = styled.section`
  font-family: 'Inter', sans-serif;
  color: #262626;
  width: 100%;
  font-weight: 600;
  font-size: 32px;
`
const AboutUsSection = styled.section`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const Paragraph = styled.p`
  font-family: 'Inter', sans-serif;
  color: #262626;
  font-size: 20px;
`

const AboutUs = (props) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignup] = useState(false);

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
    <NavBar toggleModal={toggleModal}/>
    <Outside>
      <Wrapper>
        <AboutUsSection>
          <div>
            <div>
              <Title>About us</Title>
              <Paragraph>We are a 25 year old landscaping business that plants and relocates trees as well as other landscaping services. We care deeply about the people as well as the environment we serve. Our work ethic as well as online reviews have led to an explosion of profits and we are looking to give back. We are aiming to improve the places that people travel to, one tree at a time.</Paragraph>
            </div>
            <div>
              <Title>Why trees matter</Title>
              <Paragraph>Trees eat the greenhouse gases that cause climate change. </Paragraph>
              <Paragraph>Trees boost our mental health while raising our physical health.</Paragraph>
              <Paragraph>Trees clean the air so we can breathe more easily.</Paragraph>
              <Paragraph>Trees give a home to the wildlife we love.</Paragraph>
              <Paragraph>Trees filter your water, making your drinking supply cleaner and more reliable.</Paragraph>
            </div>
          </div>
          <img src={plantingTree} style={{width: '300px', height: '300px'}}></img>
        </AboutUsSection>
      </Wrapper>
    </Outside>
    <Footer/>

    {showLogin && <Login toggleModal={toggleModal}/>}
    {showSignUp && <SignUp toggleModal={toggleModal}/>}
    </div>
  )
}

export default AboutUs;