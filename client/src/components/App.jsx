import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';
import { useLocation, useParams, useSearchParams, BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Maps from './Maps/Maps.jsx';

import Testimonials from './Testimonials/Testimonials.jsx'



export default function App() {


  return(
      <div>
        <ul>

          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route path="/testimonials" element={<Testimonials />}/>
        </Routes>
        <Maps></Maps>
      </div>
  )
}