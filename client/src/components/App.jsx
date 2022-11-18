import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import Testimonial from './Testimonials/Testimonials.jsx'



export default function App() {


  return(
    <div>
      <div>Hello World!</div>
      <div>
        <Testimonial/>
      </div>
    </div>


  )
}