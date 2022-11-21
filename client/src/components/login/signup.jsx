import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';
import './style.css';
import trees from './trees.png';

export default function Signup ({ toggleModal }) {
  const [inputFName, setInputFName] = useState('');
  const [inputLName, setInputLName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [employeeStatus, setEmployeeStatus] = useState(false);
  const [warning, setWarning] = useState('');

  var createAccount = () => {
    var pwdCheck = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
    var emailCheck = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    if (emailCheck.test(inputEmail) && pwdCheck.test(inputPassword) && inputFName !== '' && inputLName !== '') {
      axios.post('/signup', {email: inputEmail, pwd: inputPassword, fName: inputFName, lName: inputLName, employee: employeeStatus}).then((data) => {
        console.log(data.data);
        if (data.data !== 'An account under this email already exists. Please log in.') {
          console.log('Success!');
          toggleModal('signup');
        } else {
          setWarning('existing user');
          document.querySelector('#password').value = '';
        }
      })
    } else {
      setWarning('invalid'); // didn't fill out things correctly, or email isn't an email and password isn't strong
      document.querySelector('#password').value = '';
    }
    setInputFName('');
    setInputLName('');
    setInputEmail('');
    setInputPassword('');
  }

  return (
    <div className="modalBackground"
      onClick={() => {
        toggleModal('signup')
     }}>
      <div className="modalContent"
        onClick={e => {
          e.stopPropagation();
        }}>
        <h1>TravelGreen</h1>
        <img src={trees}/>
        <div className="form">
          <div className="modalBody">
            <h3>Sign Up</h3>
            <label>First Name</label><br/>
            <input onChange={(e) => setInputFName(e.target.value)}/><br/>
            <label>Last Name</label><br/>
            <input onChange={(e) => setInputLName(e.target.value)}/><br/>
            <label>Email</label><br/>
            <input onChange={(e) => setInputEmail(e.target.value)}/><br/>
            <label>Password</label><br/>
            <input id="password" type="password" onChange={(e) => setInputPassword(e.target.value)}/><br/>
            <ul id="pwdGuide">
              <li>At least 8 characters long</li>
              <li>At least one uppercase letter</li>
              <li>At least one lowercase letter</li>
              <li>At least one number (0-9)</li>
              <li>At least one special character</li>
            </ul>
            <input type="checkbox" className="checkbox" onChange={(e) => setEmployeeStatus(!employeeStatus)}></input>
            <label> I am an employee</label><br/>
            {warning === 'invalid' ? <div className="warning">Please make sure all fields are filled and correct.</div> : null}
            {warning === 'existing user' ? <div className="warning">An account under this email already exists. Please log in.</div> : null}
          </div>
          <div className="modalFooter">
            <button onClick={createAccount}>Sign Up</button><br/>
            OR
            <br/><button onClick={() => {
              toggleModal('login');
              toggleModal('signup');
            }}>Exisiting User</button>
          </div>
        </div>
      </div>
    </div>
  )
}