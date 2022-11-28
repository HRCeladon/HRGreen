import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// import EmployeeModal from './employeeModal/EmployeeModal.jsx'

const Container = styled.div`
/* border: 1px solid black; */
margin-top: 15px;
`;
const Intro = styled.div`
font-weight: bold;
`;
const DataHeader = styled.div`
background-color: #75a43d;
display: flex;
justify-content: space-between;
border-bottom: 1px solid black;
border-top: 1px solid black;
font-size:18px;
`;
const CdContainer = styled.div`
border: 1px solid green;
/* width: 100% */
max-height:200px;
overflow: auto;
`
const ClientDataInfo = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 1px solid black;
font-size:12px;
`;
const Name = styled.div`
display: flex;
justify-content: ${(props) => (props.change ? 'flex-start' : 'center')};
border-right: 1px solid black;
border-left: 1px solid black;
width: 100%;
`;
const Email = styled.div`
display: flex;
justify-content: ${(props) => (props.change ? 'space-around' : 'center')};
border-right: 1px solid black;
width: 100%;
overflow:scroll;
::-webkit-scrollbar {
    display: none;
}
`;
const Location = styled.div`
display: flex;
justify-content: ${(props) => (props.change ? 'flex-start' : 'center')};
border-right: 1px solid black;
width: 100%;
`;
const Status = styled.div`
display: flex;
justify-content: ${(props) => (props.change ? 'flex-start' : 'center')};
border-right: 1px solid black;
width: 100%;
`;
const StatusCheck = styled.div`
display: flex;
justify-content: ${(props) => (props.change ? 'flex-start' : 'center')};
background-color: ${(props) => (props.check ? '#F0EAD2' : '#ff3e3e')};
//f64949
border-right: 1px solid black;
width: 100%;
cursor: ${(props) => (props.check ? 'default' : 'pointer')};
&:hover {${(props) => (props.check ? 'false' : 'background-color: #b42b2b')};}
`;
const StatusButton = styled.div`
`

const ClientData = ({ setCurrentEmployee, openModal }) => {
  const [clientData, setClientData] = useState([])
  useEffect(() => {
    axios('/all')
      .then((res) => setClientData(res.data))
      .catch((err) => console.log(err))
  }, []);

  const handleClick = (info) => {
    let email = info._id
    openModal(true)
    setCurrentEmployee(info)
  }

  return (
    <Container>
      <Intro>Client Data</Intro>
      <DataHeader>
        <Name>Name</Name>
        <Email>Email</Email>
        <Location>Location</Location>
        <Status>Status</Status>
      </DataHeader>
      <CdContainer>
        {clientData.map((info, i) => {
          if (info.trips[0] && !info.trips[0].completed) {
            var location = info.trips[0]
            // console.log(info.trips[0].completed)
            return (
              <ClientDataInfo key={i}>
                <Name change={false}>{`${info.firstName} ${info.lastName}`}</Name>
                <Email change={true}>{info._id}</Email>
                <Location change={false}>{location.to}</Location>
                <StatusCheck onClick={() => handleClick(info)} check={location.completed}>
                  <StatusButton>Awaiting Approval</StatusButton>
                </StatusCheck>
              </ClientDataInfo>
            )
          }
        }
        )}
      </CdContainer>
    </Container>
  )
}
export default ClientData;