import React, {useState} from "react";
import ContactUs from './ContactUs.jsx'

const ContactUsButton = () => {
  const [showContactUs, setContactUs] = useState(false)

  return (
    <>
      {!showContactUs && <div className='button-nav footer-button' onClick={() => setContactUs(true)}>Contact Us</div>}
      <ContactUs className='contact-us-form' showContactUs={showContactUs} onClose={() => setContactUs(false)}/>
    </>
  )
}

export default ContactUsButton