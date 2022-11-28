import React from "react";
import { useState, useEffect } from "react";
import Rating from '@mui/material/Rating'

import styled from 'styled-components';

const Adiv = styled.div`
margin: 20px 0;
position: relative;
height: 130px;
width: 900px;
background-color: #648A34;
filter: drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.25));
`
const H1 = styled.h1`
margin: 0;
position: absolute;
top: 5px;
left: 5px;
font-family: 'Inter', sans-serif;
font-size: 28px;
`

const H3 = styled.div`
font-family: 'Inter', sans-serif;
font-size: 20px;
position: absolute;
top: ${props => props.t};
left: ${props => props.l};
right: ${props => props.r};
bottom: ${props => props.b};
`


const Trip = ({props, num}) => {

  console.log("🚀 ~ file: Trip2.jsx ~ line 38 ~ Trip ~ props", props)

  let to = new Date(props.startDate)
  let from = new Date(props.endDate)

  return (
    <Adiv>
      <H1>Trip Number {num}</H1>
      <H3 t="40px" l="5px">Trip from: {props.To}</H3>
      <H3 t="40px" l="5px">Trip to: {props.To}</H3>
      <Rating style={{position:'absolute', top: '10px', right: '130px'}} value = {props.Stars} readOnly />
      <H3 t="10px" r="10px">{props.completed ? <>Completed</>: <>In-Progress</>}</H3>
      <H3 b="5px" r="5px">Trip-Date to: {to.toDateString()} - from: {from.toDateString()}</H3>
    </Adiv>
  )

}

export default Trip;