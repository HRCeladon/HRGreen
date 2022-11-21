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

  var createAccount = () => {
    var pwdCheck = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
    var emailCheck = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    if (emailCheck.test(inputEmail) && pwdCheck.test(inputPassword) && inputFName !== '' && inputLName !== '') {
      axios.post('/signup', {email: inputEmail, pwd: inputPassword, fName: inputFName, lName: inputLName, employee: employeeStatus}).then((data) => {
        if (data.data !== 'An account under this email already exists. Please log in.') {
          // clear the current fields
          console.log('Success!')
        } else {
          console.log('ERROR: ', data.data)
        }
      })
    } else {
      setWarning('Invalid e-mail/password. Please make sure all fields are filled and correct.');
      document.querySelector('.#password').value = '';
    }
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
        <h2>Sign Up</h2>
        <img src={trees}/>
        <div className="form">
          <div className="modalBody">
            <label>First Name</label><br/>
            <input onChange={(e) => setInputFName(e.target.value)}/><br/>
            <label>Last Name</label><br/>
            <input onChange={(e) => setInputLName(e.target.value)}/><br/>
            <label>Email</label><br/>
            <input onChange={(e) => setInputEmail(e.target.value)}/><br/>
            <label>Password</label><br/>
            <input id="password" type="password" onChange={(e) => setInputPassword(e.target.value)}/><br/>
            <input type="checkbox" onChange={(e) => setEmployeeStatus(!employeeStatus)}></input>
            <label> I am an employee</label><br/>
          </div>
          <div className="modalFooter">
            <button onClick={createAccount}>Sign Up</button><br/>
            OR
            <br/><button>Log In</button>
          </div>
        </div>
      </div>
    </div>
  )
}