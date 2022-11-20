import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useLocation, useParams, useSearchParams, BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Testimonials from './Testimonials/Testimonials.jsx'
import ImageCarousel from './carousel/ImageCarousel.jsx'

const images = [
  'https://images.pexels.com/photos/1080401/pexels-photo-1080401.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1459497/pexels-photo-1459497.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1102909/pexels-photo-1102909.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/36767/tree-natur-nightsky-cloud.jpg?auto=compress&cs=tinysrgb&w=800'
]
export default function App() {

  return (
    <div>
      <ImageCarousel data={images} />
      <ul>

        <li>
          <Link to="/testimonials">Testimonials</Link>
        </li>
      </ul>

      <hr />

      <Routes>
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </div>
  )
}