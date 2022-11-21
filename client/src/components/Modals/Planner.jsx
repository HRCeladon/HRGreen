import React, {useState, useEffect} from 'react';

const Planner = ({showPlanner, onClose}) => {

  const modalBody = {
    padding: '10px',
    fontSize: '18px',
    borderTop: '1px solid #eee',
    borderBottom: '1px solid #eee',
    margin: '0 0 0 2rem'
  };
  const nicknameStyle = {
    display: 'inline-block',
    textAlign: 'left',
    margin: '0 0 20px 0',
    height: '20px',
    width: '50%',
    fontSize: '14px'
  };
  const emailStyle = {
    display: 'inline-block',
    textAlign: 'left',
    margin: '0 0 5px 0',
    height: '20px',
    width: '50%',
    fontSize: '14px'
  };
  const questionStyle = {
    width: '90%',
    height: '100px',
    fontSize: '24px',
    boxSizing: 'border-box',
    borderRadius: '5px',
    backgroundColor: '#f8f8f8',
    fontSize: '18px',
    resize: 'none'
  };

  return (showPlanner && (
    <div className='modal' onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className='modal-header'>
          <div>Contact Us</div>
          <div className='product'>We'll get back to you soon!</div>
          <div className='accent-underline'></div>
          <div className='error' style={error}></div>
        </div>
        {/* Modal Body */}
        <div className='modal-body' style={modalBody}>
          <div className='modal-segment'>
            <label htmlFor='first-name'>First Name</label><br/>
            <input id='first-name' style={{marginTop: '5px', height: '20px'}} type='text' placeholder='Example: John' onChange={(e) => setFirst(e.target.value)} style={nicknameStyle}/>
          </div>
          <div className='modal-segment'>
            <label htmlFor='last-name'>Last Name</label><br/>
            <input id='last-name' style={{marginTop: '5px', height: '20px'}} type='text' placeholder='Example: Doe' onChange={(e) => setLast(e.target.value)} style={nicknameStyle}/>
          </div>
          <div className='modal-segment'>
            <label htmlFor='phone'>Phone Number</label><br/>
            <input id='preferred-time' style={{marginTop: '5px', height: '20px'}} type='text' placeholder='123-456-7890' onChange={(e) => setLast(e.target.value)} style={nicknameStyle}/>
          </div>
          <div className='modal-segment'>
            <label htmlFor='your-email'>Your Email<span className="accent-star">*</span></label><br/>
            <input style={{marginTop: '5px'}} type='text' id='your-email' placeholder='Example: johndoe@gmail.com' onChange={(e) => setEmail(e.target.value)} style={emailStyle}/> <br/>
          </div>
          <div className='modal-segment'>
            <p>Choose a preferred time to be contacted</p>
            <input type='radio' id='morning'/>
            <label htmlFor='morning'>Morning</label>
            <input type='radio' id='afternoon'/>
            <label htmlFor='afternoon'>Afternoon</label>
            <input type='radio' id='evening'/>
            <label htmlFor='afternoon'>Evening</label>
          </div>
          <div className='modal-segment'>
            <div htmlFor='your-question'>Your question or comment</div>
            <textarea style={{marginTop: '5px'}} rows='5' cols='200' placeholder='Enter your question or comment here' onChange={(e) => setAsk(e.target.value)} style={questionStyle}/>
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

export default Planner