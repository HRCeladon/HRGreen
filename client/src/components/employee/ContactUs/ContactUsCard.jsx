import React, { useEffect, useState, useRef } from 'react';

import './ContactUs.css'






export default function ContactUsCard({contact}) {


  console.log(contact)



  var bodyInfo = contact.review

  if(contact.review.length > 20) {
    bodyInfo = contact.review.slice(0,20)
  }

  if(contact.dealtWith) {
    return (
    <div className="fadedContactUsCard">
      <div className="cardNameContainer">
        <div className="cardNameHeading">Name</div>
        <div className="cardNameContent">{contact.name}</div>
      </div>
      <div className="cardDateContainer">
        <div className="cardDateHeading">Date</div>
        <div className="cardDateContent">{contact.date}</div>
      </div>
      <div className="cardBodyContainer">
        <div className="cardBodyHeading">Body</div>
        {contact.review.length > 20 ? <div className="cardBodyContent">{bodyInfo}...<div>Expand to see the rest</div></div> : <div className="cardBodyContent">{contact.review}</div> }

      </div>
      <div className="cardEmailContainer">
        <div className="cardEmailHeading">E-Mail</div>
        <div className="cardEmailContent">{contact.email}</div>
      </div>
      <div className="cardPhoneContainer">
        <div className="cardPhoneHeading">Phone Number</div>
        <div className="cardPhoneContent">{contact.phone}</div>
      </div>
    </div>
    )
  }

  return(
    <div className="contactUsCard">
        <div className="cardNameContainer">
          <div className="cardNameHeading">Name</div>
          <div className="cardNameContent">{contact.name}</div>
        </div>
        <div className="cardDateContainer">
          <div className="cardDateHeading">Date</div>
          <div className="cardDateContent">{contact.date}</div>
        </div>
        <div className="cardBodyContainer">
          <div className="cardBodyHeading">Body</div>
          {contact.review.length > 20 ? <div className="cardBodyContent">{bodyInfo}...<div className="expandBody">Expand to see the rest</div></div> : <div className="cardBodyContent">{contact.review}</div> }

        </div>
        <div className="cardEmailContainer">
          <div className="cardEmailHeading">E-Mail</div>
          <div className="cardEmailContent">{contact.email}</div>
        </div>
        <div className="cardPhoneContainer">
          <div className="cardPhoneHeading">Phone Number</div>
          <div className="cardPhoneContent">{contact.phone}</div>
        </div>
    </div>


  )
}