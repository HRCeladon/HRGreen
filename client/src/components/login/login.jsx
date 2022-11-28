import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';
import './style.css';
import trees from './trees.png';

import Ustore from '../Provider/ZusProvider.jsx'

export default function Login ({ toggleModal }) {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [warning, setWarning] = useState('');

  const switcher = Ustore((state) => state.switcher)
  const UserSwap = Ustore((state) => state.UserSwap)


  var login = (e) => {
    e.preventDefault();
    var emailCheck = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    if (emailCheck.test(inputEmail) && inputPassword !== '') {
      axios.post('/login', {email: inputEmail, pwd: inputPassword}).then((data) => {
        console.log('success')
        if (typeof data.data === 'object' && data.data !== 'Incorrect password. Please try again.') {
          console.log(data.data);
          if (data.data.employee) {
            switcher('Employee')
          } else {
            UserSwap(data.data)
            switcher('Trips')
          }
          toggleModal('login');
        } else if (data.data === 'Incorrect password. Please try again.') {
          setWarning('wrong password');
        } else {
          setWarning('no account');
        }
        document.querySelector('#password').value = '';
      })
    } else {
      setWarning('invalid');
      document.querySelector('#password').value = '';
    }
    setInputEmail('');
    setInputPassword('');
  }

  return (
    <div className="modalBackground"
      onClick={() => {
        toggleModal('login')
      }}
    >
      <div className="modalContent"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <div className="logo-modal">
          <div className="logo-container">
            <div className="LogoText foot-text">TravelGreen</div>
            <div className="logo foot-logo"></div>
        </div>

        </div>
        <img src={trees}/>
        <div className="form">
          <div className="modalBody">
            <h3>Log In</h3>
            <label>Email</label><br/>
            <input className="input-login" onChange={(e) => setInputEmail(e.target.value)}/><br/>
            <label>Password</label><br/>
            <input className="input-login"  id="password" type="password" onChange={(e) => setInputPassword(e.target.value)}/><br/>
            {warning === 'invalid' ? <div className="warning">Invalid e-mail/password.</div> : null}
            {warning === 'no account' ? <div className="warning">Account not found.</div> : null}
            {warning === 'wrong password' ? <div className="warning">Incorrect password. Please try again.</div> : null}
          </div>
          <div className="modalFooter">
            <button onClick={login}>Log In</button>
            <div>OR</div>
            <button onClick={() => {
              toggleModal('login');
              toggleModal('signup');
            }}>Create Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}