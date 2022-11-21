import React, {useState, useEffect} from 'react';
import { checkContactUsForm } from './formValidation.js'
import './styles.css'

const ContactUs = ({showContactUs, onClose}) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onContactUsSubmit = () => {
    let isValid = checkContactUsForm(name, phone, email, message)
    if (isValid) {
      const contactInfo = {
        name: name,
        phone: phone,
        email: email,
        comment: message
      }
      console.log('Contact Info: ', contactInfo)
    }
  }
  const handlePhoneInput = (e) => {
    const formattedPhoneNumber = formatPhone(e)
    setPhone(formattedPhoneNumber)
  }

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

  return (showContactUs && (
    <div className='modal' onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className='modal-header'>
          <div>Contact Us</div>
          <div className='product'>We'll get back to you soon!</div>
          <div className='accent-underline'></div>
          <div className='error'></div>
        </div>
        {/* Modal Body */}
        <div className='modal-body' >
          <div className='modal-segment'>
            <label htmlFor='full-name'>Full Name</label><br/>
            <input id='full-name' style={{marginTop: '5px', height: '20px'}} type='text' placeholder='Example: John Doe' onChange={(e) => setName(e.target.value)} style={nicknameStyle}/>
          </div>
          <div className='modal-segment'>
            <label htmlFor='phone'>Phone Number</label><br/>
            <input type='text' id='phone' style={{marginTop: '5px', height: '20px'}} onChange={(e) => handlePhoneInput(e.target.value)} value={phone} style={nicknameStyle}/>
          </div>
          <div className='modal-segment'>
            <label htmlFor='your-email'>Your Email</label><br/>
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
            <div htmlFor='your-question'>Comments/Question</div>
            <textarea style={{marginTop: '5px'}} rows='5' cols='200' placeholder='Message' onChange={(e) => setMessage(e.target.value)} style={questionStyle} value={message}/>
          </div>
        </div>
        {/* Modal Footer */}
        <div className='modal-footer'>
          <button className='modal-button' onClick={onContactUsSubmit}>Submit</button>
          <button className='modal-button' onClick={onClose} >Close</button>
        </div>
      </div>
    </div>
    )
  )
}

export default ContactUs