import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';


const EmployeeModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

const ModalContainer = styled.div`
  width: 40%;
  border-radius: 20px;
  background-color: #D6E880;
  padding: 10px;
  padding-bottom: 100px;
  position: relative;
`
const SendConfirmation = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
`
const ModalHeader = styled.label`
font-weight: bold;
`
const CurrClient = styled.div`
`
const Thanks = styled.textarea`
min-width: 100%;
max-width: 100%;
max-height: 200px;
`
const ModalButton = styled.button`
position: absolute;
top: 85%;
align-self: flex-end;
border-radius: 25px;
border: 0px;
cursor: pointer;
&:hover {background-color: #57ae48;}
`
const EmployeeModal = ({ currentEmployee, closeModal }) => {
  const [text, setText] = useState('Thank you for working with us to give back to the planet 1 tree at a time!')
  // console.log(currentEmployee)
  let modal = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (e.target.className.includes('employee-modal')) {
        closeModal(false)
      }
    }
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, []);

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <EmployeeModalBackground className='employee-modal' ref={modal}>
      <ModalContainer>
        <SendConfirmation>
          <ModalHeader>{`Client: ${currentEmployee.firstName} ${currentEmployee.lastName}!`}</ModalHeader>
          {/* <CurrClient >{`Client: ${currentEmployee.firstName} ${currentEmployee.lastName}!`}</CurrClient> */}
          <Thanks type='text' value={text} onChange={handleChange}></Thanks>
          <ModalButton onClick={() => closeModal(false)}>Send Confirmation</ModalButton>
        </SendConfirmation>
      </ModalContainer>
    </EmployeeModalBackground>
  )
}
export default EmployeeModal;