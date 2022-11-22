import React, { useState, useEffect, useRef } from 'react';
import { readImages, tripDetails } from './formValidation.js'
import Maps from '../Maps/Maps.jsx'

const TripView = ({ showTrip, onClose, tripNumber, from, to, start, end, tripStatus }) => {
  const [images, setImages] = useState([])
  tripNumber = tripNumber || 1
  from = from || 'Texas'
  to = to || 'Florida'
  start = start || '2022-12-23'
  end = end || '2023-1-04'
  tripStatus = tripStatus || false

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
            <p>{tripDetails}</p>
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
          <button className='modal-button' >Submit</button>
          <button className='modal-button' onClick={onClose} >Close</button>
        </div>
      </div>
    </div>
  )
  )
}

export default TripView