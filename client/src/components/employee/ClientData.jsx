import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
/* border: 1px solid black; */
margin-top: 15px;
`;
const Intro = styled.div`
font-weight: bold;
/* text-decoration: underline; */
/* margin-bottom: 15px; */
`;
const DataHeader = styled.div`
background-color: #75a43d;
display: flex;
justify-content: space-between;
border-bottom: 1px solid black;
border-top: 1px solid black;
font-size:18px;
`;
const ClientDataInfo = styled.div`
/* background-color: #AACD4F; */
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
justify-content: ${(props) => (props.change ? 'flex-start' : 'center')};
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
background-color: ${(props) => (props.check ? '#F0EAD2' : '#f64949')};
border-right: 1px solid black;
width: 100%;
`;
const StatusButton = styled.div`
`

const ClientData = ({ data }) => {
  const checkStatus = (bool) => {
    if (bool) {
      return 'Complete'
    } else {
      return 'In Progress'
    }
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
      {data.map((info, i) =>
        <ClientDataInfo key={i}>
          <Name change={false}>{info.name}</Name>
          <Email change={true}>{info.email}</Email>
          <Location change={false}>{info.location}</Location>
          <StatusCheck check={info.status}>
            <StatusButton>{checkStatus(info.status)}</StatusButton>
          </StatusCheck>
        </ClientDataInfo>
      )}
    </Container>
  )
}
export default ClientData;


{/* <ClientDataContainer>
<Intro>Client Data</Intro>
<Data>
  <DataTableHeader>
    <label>Name</label>
    <label>Email</label>
    <div>Location</div>
    <label>Status</label>
  </DataTableHeader>
  {data.map((curr, i) =>
    <DataTable key={i}>
      <Name>{curr.name}</Name>
      <Email>{curr.email}</Email>
      <Location>{curr.location}</Location>
      <Status><Complete>Complete</Complete></Status>
    </DataTable>
  )}
</Data>
</ClientDataContainer > */}

// const DataTableHeader = styled.div`
// display:flex;
// justify-content: space-between;
// flex-shrink:0;
// border-bottom: 1px solid black;
// `;
// const DataTable = styled.div`
// /* border: 1px solid red; */
// display:flex;
// justify-content: space-between;
// /* align-items: center; */
// flex-shrink:0;
// padding: 2px;
// `;
// const Name = styled.div`
// border-right: 1px solid black;
// `;
// const Email = styled.div`
// border-right: 1px solid black;
// padding-right:25px;
// `;
// const Location = styled.div`
// border-right: 1px solid black;
// padding-right:25px;
// `;
// const Status = styled.div`
// `;
// const Complete = styled.button`
// `;
