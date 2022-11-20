import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

const CarouselContainer = styled.div` //The Outer most div
border: 1px solid black;
max-width: '100vh';
max-height: '100vh';
overflow: hidden;
`
const InnerContainer = styled.div` //Nested inside the container
position: relative;
display: flex;
flex-direction: row;
gap: 6px;
margin: 4px;
border: 1px solid red;
overflow: scroll;
`
const TreeCard = styled.div`
display:flex;
flex-shrink: 0;
justify-content: center;
align-items:center;
background-color: #F0EAD2;
width: ${props => props.width ? props.width : '225px'};
height: ${props => props.height ? props.height : '199px'};
`
const Data = styled.img`
width: 211px;
height: 188px;
`

const ButtonR = styled.div`
position: absolute;
color: #d012c3;
right 0%;
/* left: 100%; */
`
const ButtonL = styled.div`
position: absolute;
color: #d012c3;
`
//${props => props.color ? 'red' : 'blue'}

//Set the Innercontainer to be the width of however many cards are needed to be displayed
const ImageCarousel = ({ data, width }) => {

  return (
    <CarouselContainer>
      <InnerContainer>
        <ButtonL>PREV</ButtonL>
        <ButtonR>NEXT</ButtonR>
        {data.map((pic, i) =>
          <TreeCard width={width} key={i}>
            <Data src={pic} />
          </TreeCard>
        )}
      </InnerContainer>
    </CarouselContainer>
  )
}
export default ImageCarousel;