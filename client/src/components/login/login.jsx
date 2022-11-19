import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';

export default function Login () {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  var login = (e) => {
    e.preventDefault();
    var emailCheck = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    if (emailCheck.test(inputEmail) && inputPassword !== '') {
      axios.post('/login', {email: inputEmail, pwd: inputPassword}).then((data) => {
        if (data.data.indexOf('does not exist') === -1 && data.data !== 'Incorrect password. Please try again.') {
          console.log(data.data);
        } else {
          console.log('ERROR: ', data.data);
        }
      })
    } else {
      console.log('Invalid email/password.');
      document.querySelector('#password').value = '';
    }
  }

  return (
    <div>
      <h3>Log In</h3>
      <label>Email</label><br/>
      <input onChange={(e) => setInputEmail(e.target.value)}/><br/>
      <label>Password</label><br/>
      <input id="password" type="password" onChange={(e) => setInputPassword(e.target.value)}/><br/>
      <button onClick={login}>Log In</button>
    </div>
  )
}