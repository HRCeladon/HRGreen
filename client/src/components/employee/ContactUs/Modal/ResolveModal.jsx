import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import {useState, useEffect} from "react";
import axios from 'axios';

const Modal = ({isShowing, hide, contact,toggle}) => {






  var markAsResolved = () => {

    contact.dealtWith = true;
    console.log('Resolved', contact)
    toggle();
  }

  if(isShowing) {
    return ReactDOM.createPortal(
      <>
      <div className="resolveModal-overlay"/>
      <div className="resolveModal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="resolveModal">
          <div className="resolveModal-header">
            <button type="button" className="resolveModal-close-button" data-dismiss="modal" aria-label="Close" onClick={toggle}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-NameDateDiv">
            <div className="modal-NameDiv">
              <div className="modal-NameHeader" id="modal-divHeader">Name</div>
              <div className="modal-NameContent">{contact.name}</div>
            </div>
            <div className="modal-DateDiv">
              <div className="modal-DateHeader" id="modal-divHeader">Date</div>
              <div className="modal-DateContent">{contact.date}</div>
            </div>
          </div>
          <div className="modal-EmailDiv">
            <div className="modal-EmailHeader" id="modal-divHeader">E-Mail</div>
            <div className="modal-EmailContent">{contact.email}</div>
          </div>
          <div className="modal-PhoneDiv">
            <div className="modal-PhoneHeader" id="modal-divHeader">Phone</div>
            <div className="modal-PhoneContent">{contact.phone}</div>
          </div>
          <div className="modal-BodyDiv">
            <div className="modal-BodyHeader" id="modal-divHeader">Body</div>
            <div className="modal-BodyContent">{contact.review}</div>
          </div>
          <div className="modal-ButtonDiv">
            {contact.dealtWith ? null : <button className="ResolveButton" onClick={markAsResolved}>Close As Resolved</button>}
            <button className="CloseButton" onClick={toggle}>Close</button>
          </div>

        </div>
      </div>
    </>, document.body
    )
  } else {
    return null
  }

}


export default Modal;