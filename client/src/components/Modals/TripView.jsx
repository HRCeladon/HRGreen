import React, { useState, useEffect, useRef } from 'react';
import { readImages, tripDetails, submitImage } from './formValidation.js'
import Maps from '../Maps/Maps.jsx'

const TripView = ({ showTrip, onClose, tripNumber }) => {
  const [images, setImages] = useState([])
  tripNumber = tripNumber || 1;

  return (showTrip && (
    <div className='modal' onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className='modal-header'>
          <div>Trip {tripNumber}</div>
          <div className='error'></div>
        </div>
        {/* Modal Body */}
        <div className='modal-body' >
          {/* Trip Map */}
          <div className='map'>
            <Maps />
          </div>
          {/* Trip Description */}
          <div className='modal-segment'>
            <div className='trip-details'>Trip Details</div>
            <ul >
              <li>From: {tripDetails.from}</li>
              <li>To: {tripDetails.to}</li>
              <li>Start Date: {tripDetails.startDate}</li>
              <li>End Date: {tripDetails.endDate}</li>
              <li>Travelers: {tripDetails.travelers.map(traveler => traveler)}</li>
            </ul>
          </div>
          {/* Image upload */}
          <div className='modal-segment'>
            <label id='files' htmlFor='files' >Upload Your Photos!</label> <br/>
            <input type='file' id='files' multiple='multiple' accept='image/png image/jepg image/jpg' onChange={(e) => readImages(e, setImages)} />
            <output id='image-preview' />
          </div>
        </div>
        {/* Modal Footer */}
        <div className='modal-footer'>
          <button className='modal-button' onClick={onClose} >Close</button>
        </div>
      </div>
    </div>
  )
  )
}

export default TripView