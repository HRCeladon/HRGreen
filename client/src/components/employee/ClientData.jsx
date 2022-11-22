import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const ClientDataContainer = styled.div`
`;
const Intro = styled.div`
margin-top: 15px;
font-weight: bold;
text-decoration: underline;
`;
const DataTable = styled.div`
`;
const Name = styled.div`
`;
const Email = styled.div`
`;
const Location = styled.div`
`;
const Status = styled.div`
`;

const ClientData = () => {
  return (
    <ClientDataContainer>
      <Intro>Client Data</Intro>
      <DataTable>
        <Name>
          Ricardo Vargas
        </Name>
        <Email>
          email@gmail.com
        </Email>
        <Location>
          From: Texas To: Flordia
        </Location>
        <Status>
          <button>In Progress</button>
        </Status>
      </DataTable>
    </ClientDataContainer>
  )
}
export default ClientData;