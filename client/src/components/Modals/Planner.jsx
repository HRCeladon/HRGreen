import React, {useState, useEffect} from 'react';
import AutoCompleteInput from './AutoCompleteInput.jsx'
import { checkTripPlannerForm, formatTravelers } from './formValidation.js'
import trees from './trees.png'

const Planner = ({showPlanner, onClose}) => {
  const [from, passFrom] = useState('')
  const [to, passTo] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [description, setDescription] = useState('')
  const [travelers, setTravelers] = useState('')
  const clearFields = () => {
    passFrom('')
    passTo('')
    setStartDate('')
    setEndDate('')
    setDescription('')
    setTravelers('')
  }

  const onPlannerSubmit = () => {
    let isValid = checkTripPlannerForm(from, to, startDate, endDate)
    if (isValid) {
      const tripInfo = {
        from: from,
        to: to,
        startDate: startDate,
        endDate: endDate,
        travelers: formatTravelers(travelers),
        tripCompleted: false,
        stars: 0,
        reviews: []
      }
      console.log('Trip Info:', tripInfo)
      clearFields()
      onClose()
    }
  }

  return (showPlanner && (
    <div className='modal' onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className='modal-header'>
          <div>Plan a new trip</div>
          <div>Enter trip details below</div>
          <div className='error'></div>
        </div>
        {/* Modal Body */}
        <div className='modal-body'>
          <AutoCompleteInput passFrom={passFrom} passTo={passTo} />

          <div className='start-end'>
            <div className='start-container'>
              <label htmlFor='start-date'>Start Date</label>
              <input type='date' id='start-date' onChange={(e)=>setStartDate(e.target.value)} value={startDate} /><br/>
            </div>
            <div className='end-container'>
              <label htmlFor='end-date' >End Date</label>
              <input type='date' id='end-date' onChange={(e)=>setEndDate(e.target.value)} value={endDate} /><br/>
            </div>
          </div>

          <textarea id='description-input' rows='5' cols='200' placeholder='Trip Description' onChange={(e)=>setDescription(e.target.value)} value={description}/>

          <div className='travelers-input' htmlFor='travelers-input'>Additional Travelers</div>
          <textarea id='travelers-input' rows='5' cols='200' placeholder='John Doe&#10;John Smith&#10;Jane Doe' onChange={(e)=>setTravelers(e.target.value)} value={travelers}/>
        </div>
        {/* Modal Footer */}
        <div className='modal-footer'>
          <button className='modal-button' onClick={onPlannerSubmit}>Save Trip</button>
          <button className='modal-button' onClick={onClose} >Close</button>
        </div>
        <img className='modal-trees' src={trees} alt='trees'/>
      </div>
    </div>
    )
  )
}

export default Planner