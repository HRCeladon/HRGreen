import React, { useState, useEffect, useRef } from 'react';
import { readImages, tripDetails } from './formValidation.js'
import Maps from '../Maps/Maps.jsx'
const API_KEY = 'AIzaSyD2reYJIpHI2mXmu3cl4qQ42Ve4DQDd1DU'

const TripView = ({ showTrip, onClose }) => {
  const ref = useRef(null);
  const [map, setMap] = useState();
  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  const [images, setImages] = useState([])
  let [tripNumber, from, to, date, tripStatus] = [1, 'Texas', 'Florida', '12/23/2022', false]


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
          <div className='modal-segment'>
            <div >From {from} to {to} on {date}</div>
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