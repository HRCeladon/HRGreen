import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useLocation, useParams, useSearchParams, BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Testimonials from './Testimonials/Testimonials.jsx'
import HomePage from './HomePage/HomePage.jsx'
import { ContactUsButton, PlannerButton, TripClick } from './Modals/index.js'
import Employee from './employee/Employee.jsx'

export default function App() {
const [view, setView] = useState('Home')

const changeView = (newView) => {
  setView(newView);
}

const renderView = () => {
  switch (view) {
    case "Home":
      return (
        // <HomePage />
        <TripClick />
      )
  }
}

  return (
      <main>
        {renderView()}
      </main>
  )
}