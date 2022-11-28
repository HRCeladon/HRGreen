import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import ClientData from './ClientData.jsx'
import NavBar from '../NavBar/Nav.jsx'
import Maps from '../Maps/Maps.jsx'
import ContactUs from './ContactUs/ContactUs.jsx'
import EmployeeModal from './employeeModal/EmployeeModal.jsx'
const EmployeePage = styled.div`
  width: 99;
  display: flex;
  justify-content: center;
  flex-grow:2;
  margin: 20px 0 0 0;
  padding: 20px;
`;
const EmployeeContainer = styled.div`
  background-color: var(--light-color);
  width: 900px;
  height: fit-content;
  filter: drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.25));
  padding: 20px 30px 20px 30px;
  margin-top: 65px;
`;
const MapStyle = styled.div`
height: 400px;
`
const Admin = styled.div`
color: #5a7c2f;
margin-bottom: 10px;
font-size: 20px;
font-weight: bold;
text-decoration: underline;
`
const Employee = () => {
  const [openModal, setOpenModal] = useState(false)
  const [currentEmployee, setCurrentEmployee] = useState([])
  return (
    <>
      {openModal && <EmployeeModal currentEmployee={currentEmployee} closeModal={setOpenModal} />}
      <NavBar />
      <EmployeePage>
        <EmployeeContainer>
          <Admin>ADMIN</Admin>
          <MapStyle>
            <Maps />
          </MapStyle>
          <ClientData setCurrentEmployee={setCurrentEmployee} openModal={setOpenModal} />
          <ContactUs/>
        </EmployeeContainer>
      </EmployeePage>
    </>
  )
}
export default Employee;