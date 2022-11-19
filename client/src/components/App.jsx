import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import './Modals/styles.css'
import ContactUs from './Modals/ContactUs.jsx'
import Planner from './Modals/Planner.jsx'


export default function App() {
  const [showContactUs, setContactUs] = useState(true)
  const [showPlanner, setPlanner] = useState(false)

  return(
    <>
        <div>Hello World!</div>
        <button className='contact-us-buton' onClick={() => setContactUs(true)}>Contact Us</button>
        {/* <input type='button' value='Start Planning Trip' onClick={() => setPlanner(!showPlanner)}/> */}
        <ContactUs className='contact-us-form' showContactUs={showContactUs} onClose={() => setContactUs(false)}/>
        <Planner showPlanner={showPlanner}/>
    </>
  )
}