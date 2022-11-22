import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import ClientData from './ClientData.jsx'
import NavBar from '../NavBar/Nav.jsx'
import Maps from '../Maps/Maps.jsx'

const EmployeePage = styled.div`
  width: 99;
  display: flex;
  justify-content: center;
  margin: 20px 0 0 0;
  padding: 20px;
`;
const EmployeeContainer = styled.div`
  background-color: #F0EAD2;
  width: 50%;
  height: fit-content;
  filter: drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.25));
  padding: 20px 30px 20px 30px;
  margin-top: 65px;
`;
const MapStyle = styled.div`
height: 400px;
`

const Employee = () => {
  return (
    <>
      {/* <NavBar /> */}
      <EmployeePage>
        <EmployeeContainer>
          <MapStyle>
            <Maps />
          </MapStyle>
          <ClientData />
        </EmployeeContainer>
      </EmployeePage>
    </>
  )
}
export default Employee;