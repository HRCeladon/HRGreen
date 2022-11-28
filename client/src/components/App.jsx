import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useLocation, useParams, useSearchParams, BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Rating from '@mui/material/Rating'

import About from './AboutUs/AboutUs.jsx'
import Trips from './Trips/TripPlanner.jsx'
import Testimonials from './Testimonials/Testimonials.jsx'
import HomePage from './HomePage/HomePage.jsx'
import { ContactUsButton, PlannerButton, TripClick } from './Modals/index.js'
import Employee from './employee/Employee.jsx'

import Ustore from './Provider/ZusProvider.jsx'

export default function App() {

const view = Ustore((state) => state.Page)

const changeView = (newView) => {
  setView(newView);
}

const renderView = () => {
  switch (view) {
    case "Home":
      return (
        <HomePage />
      )
    case "Trips":
      return (
        <Trips />
      )
    case "Employee":
      return (
        <Employee />
      )
    case "About":
      return(
        <About />
      )
  }
}

  return (
      <main>
        {renderView()}
      </main>
  )
}