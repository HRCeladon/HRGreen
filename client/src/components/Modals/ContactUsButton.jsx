import React, {useState} from "react";
import ContactUs from './ContactUs.jsx'

const ContactUsButton = () => {
  const [showContactUs, setContactUs] = useState(false)

  return (
    <>
      <button className='contact-us-buton' onClick={() => setContactUs(true)}>Contact Us</button>
      <ContactUs className='contact-us-form' showContactUs={showContactUs} onClose={() => setContactUs(false)}/>
    </>
  )
}

export default ContactUsButton