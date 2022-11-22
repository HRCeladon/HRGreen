import React, {useState, useEffect} from 'react';
import { } from './formValidation.js'

const Planner = ({showPlanner, onClose}) => {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [description, setDescription] = useState('')
  const [travelers, setTravelers] = useState('')

  const onPlannerSubmit = () => {
    const tripInfo = {
      from: from,
      to: to,
      startDate: startDate,
      endDate: endDate,
      travelers: travelers
    }
    console.log('Trip Info:', tripInfo)
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
        <div className='modal-body' >
          <div className='from-to'>
            <div className='modal-segment'>
              <label htmlFor='from'>From</label><br/>
              <input id='from' type='text' placeholder='Ex. Texas' onChange={(e)=>setFrom(e.target.value)} value={from}/>
            </div>

            <div className='modal-segment'>
              <label htmlFor='to'>To</label><br/>
              <input type='text' id='to' placeholder='Ex. Florida' onChange={(e)=>setTo(e.target.value)} value={to} />
            </div>
          </div>

          <div className='start-end'>
            <div className='modal-segment'>
              <label htmlFor='start-date'>Start Date</label><br/>
              <input type='text' id='start-date' placeholder='Start' onChange={(e)=>setStartDate(e.target.value)} value={startDate} /><br/>
            </div>

            <div className='modal-segment'>
              <label htmlFor='end-date'>End Date</label><br/>
              <input type='text' id='end-date' placeholder='Start' onChange={(e)=>setEndDate(e.target.value)} value={endDate} /><br/>
            </div>
          </div>

          <div className='description-and-travelers'>
            <div htmlFor='description-input'>Trip Description</div>
            <textarea id='description-input' rows='5' cols='200' placeholder='Trip Description' onChange={(e)=>setDescription(e.target.value)} value={description}/>

            <div htmlFor='travelers-input'>Additional Travelers</div>
            <textarea id='travelers-input' rows='5' cols='200' placeholder='John Doe&#10;John Smith&#10;Jane Doe' onChange={(e)=>setTravelers(e.target.value)} value={travelers}/>
          </div>
        </div>
        {/* Modal Footer */}
        <div className='modal-footer'>
          <button className='modal-button' onClick={onPlannerSubmit}>Save Trip</button>
          <button className='modal-button' onClick={onClose} >Close</button>
        </div>
      </div>
    </div>
    )
  )
}

export default Planner