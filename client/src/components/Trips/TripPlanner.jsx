import React, {useState} from 'react';
import styled from 'styled-components';

import NavBar from '../NavBar/Nav.jsx';
import Footer from '../Footer/Footer.jsx';
import Login from "../login/login.jsx"
import SignUp from "../login/signup.jsx"
import Trip from './Trip.jsx';
import Trip2 from './Trip2.jsx';

import Ustore from '../Provider/ZusProvider.jsx'

import Popular from './TripInfo.js'

const H1 = styled.h1`
font-family: 'Inter', sans-serif;
color: ${props => props.cl || "black"};
font-size: ${props => props.sz || "36px"};
`

const Home = styled.div`
width: 99;
display: flex;
justify-content: center;
margin: 80px 0 100px 0;
padding: 20px;
`

const Cdiv = styled.div`
background-color: var(--background-secondary);
width: 900px;
height: 1200px;
filter: drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.25));
padding: 20px 30px 20px 30px;
`

const TripsHolder = styled.div`
height: 920px;
overflow-y: auto;
overflow-x: hidden;
::-webkit-scrollbar {
  display: none;
}
`

const Sign = styled.div`
background-color: var(--light-color);
width: 900px;
height: 81px;
filter: drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.25));
display: grid;
place-items: center;

`

const C2div = styled.div`
display: flex;
flex-direction: column;
`



const TripPlanner = () => {

  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignup] = useState(false);

  const User =  Ustore((state) => state.UserData)

  console.log(User)

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
  if (!User) {
    return (
      <div>
      <NavBar toggleModal={toggleModal}/>
        <Home>
          <C2div>
            <H1>Trip Planner</H1>

            <Cdiv>
              <H1 sz="32px">Your Trips</H1>
              <Sign>
                <H1 sz="32px" cl="var(--background-tertiary)">Sign in to view your trips</H1>
              </Sign>
              <H1 sz="32px">Popular Trips</H1>
              <TripsHolder>
                  {Popular.map((trip, ind) => {
                    return(
                      <Trip props={trip} key={ind}/>
                    )
                  })}
              </TripsHolder>
            </Cdiv>
          </C2div>
        </Home>
        <Footer />
        {showLogin && <Login toggleModal={toggleModal}/>}
        {showSignUp && <SignUp toggleModal={toggleModal}/>}
      </div>
    )
  } else {
    return (
      <div>
      <NavBar toggleModal={toggleModal}/>
        <Home>
          <C2div>
            <H1>Trip Planner for {User.firstName + ' ' + User.lastName} </H1>

            <Cdiv>
              <H1 sz="32px">Your Trips</H1>
              <TripsHolder>
                  {User.trips.map((trip, ind) => {
                    return(
                      <Trip props={trip} key={ind} num = {ind}/>
                    )
                  })}
              </TripsHolder>
            </Cdiv>
          </C2div>
        </Home>
        <Footer />
        {showLogin && <Login toggleModal={toggleModal}/>}
        {showSignUp && <SignUp toggleModal={toggleModal}/>}
      </div>
    )
  }
}

export default TripPlanner;