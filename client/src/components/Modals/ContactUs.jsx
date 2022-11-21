import React, {useState, useEffect} from 'react';
import './styles.css'

const ContactUs = ({showContactUs, onClose}) => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')

  const onContactSubmit = () => {
    const contactInfo = {
      name: name,
      phone: phone,
      email: email,
      comment: comment
    }
    console.log('Contact Info: ', contactInfo)
  }
  const formatPhone = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const len = phoneNumber.length;
    if (len < 4) return phoneNumber;
    if (len < 7) return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
  }
  const handlePhoneInput = (e) => {
    const formattedPhoneNumber = formatPhone(e)
    setPhone(formattedPhoneNumber)
  }
  // Helper function to verify email address
  const verifyEmail = (email) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email.match(regex);
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
            <div htmlFor='your-question'>Comments/Question</div>
            <textarea style={{marginTop: '5px'}} rows='5' cols='200' placeholder='Message' onChange={(e) => setComment(e.target.value)} style={questionStyle}/>
          </div>
        </div>
        {/* Modal Footer */}
        <div className='modal-footer'>
          <button className='modal-button' onClick={onContactSubmit}>Submit</button>
          <button className='modal-button' onClick={onClose} >Close</button>
        </div>
      </div>
    </div>
    )
  )
}

export default ContactUs