import React, {useState, useEffect} from 'react';
import { checkContactUsForm, formatPhone } from './formValidation.js'
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

  return (showContactUs && (
    <div className='modal' onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className='modal-header'>
          <div>Contact Us</div>
          <div className='product'>We'll get back to you soon!</div>
          <div className='error'></div>
        </div>
        {/* Modal Body */}
        <div className='modal-body' >
          <div className='modal-segment'>
            <label htmlFor='your-full-name'>Your Full Name</label><br/>
            <input id='your-full-name' type='text' placeholder='Ex. John Doe' onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='modal-segment'>
            <label htmlFor='your-phone'>Your Phone Number</label><br/>
            <input type='text' id='your-phone' placeholder='Ex. 1234567890' onChange={(e) => handlePhoneInput(e.target.value)} value={phone} />
          </div>
          <div className='modal-segment'>
            <label htmlFor='your-email'>Your Email</label><br/>
            <input type='text' id='your-email' placeholder='Ex. johndoe@gmail.com' onChange={(e) => setEmail(e.target.value)}/> <br/>
          </div>
          <div className='modal-segment'>
            <div>Choose a preferred time to be contacted</div>
            <input type='radio' id='morning'/>
            <label htmlFor='morning'>Morning</label>
            <input type='radio' id='afternoon'/>
            <label htmlFor='afternoon'>Afternoon</label>
            <input type='radio' id='evening'/>
            <label htmlFor='afternoon'>Evening</label>
          </div> <br/>
          <div className='modal-segment'>
            <div htmlFor='your-message'>Your Comment/Question</div>
            <textarea id='your-message' rows='5' cols='200' placeholder='Message' onChange={(e) => setMessage(e.target.value)} value={message}/>
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