import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';
import './style.css';
import trees from './trees.png';

export default function Login ({ toggleModal }) {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [warning, setWarning] = useState('');

  var login = (e) => {
    e.preventDefault();
    var emailCheck = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    if (emailCheck.test(inputEmail) && inputPassword !== '') {
      axios.post('/login', {email: inputEmail, pwd: inputPassword}).then((data) => {
        if (data.data.indexOf('does not exist') === -1 && data.data !== 'Incorrect password. Please try again.') {
          console.log('Success!');
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
        <h1>TravelGreen</h1>
        <img src={trees}/>
        <div className="form">
          <div className="modalBody">
            <h3>Log In</h3>
            <label>Email</label><br/>
            <input onChange={(e) => setInputEmail(e.target.value)}/><br/>
            <label>Password</label><br/>
            <input id="password" type="password" onChange={(e) => setInputPassword(e.target.value)}/><br/>
            {warning === 'invalid' ? <div className="warning">Invalid e-mail/password.</div> : null}
            {warning === 'no account' ? <div className="warning">Account not found.</div> : null}
            {warning === 'wrong password' ? <div className="warning">Incorrect password. Please try again.</div> : null}
          </div>
          <div className="modalFooter">
            <button onClick={login}>Log In</button><br/>
            OR
            <br/><button onClick={() => {
              toggleModal('login');
              toggleModal('signup');
            }}>Create Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}