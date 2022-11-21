import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

const CarouselContainer = styled.div` //The Outer most div
border: 1px solid black;
/* max-width: '100vh';
max-height: '100vh'; */
max-width: 100%;
max-height: 100%;
overflow: hidden;
`
const InnerContainer = styled.div` //Nested inside the container
box-sizing: border-box;
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
object-fit: cover;
width: 211px;
height: 188px;
`

const ButtonR = styled.div`
position: absolute;
color: black;
right 2%;
top: 45%;
cursor: pointer;
/* left: 100%; */
`
const ButtonL = styled.div`
position: absolute;
top: 45%;
left: 2%;
cursor: pointer;
color: black;
`

//Set the Innercontainer to be the width of however many cards are needed to be displayed
const ImageCarousel = ({ data }) => {
  const [active, setActive] = useState(0);

  const handleRight = () => {
    const card = document.querySelector('#inner-container')
    console.log(card)
  }
  const handleLeft = () => {
    console.log('left')
  }



  return (
    <CarouselContainer>
      <InnerContainer id='inner-container'>
        <ButtonL onClick={handleLeft}>PREV</ButtonL>
        <ButtonR onClick={handleRight}>NEXT</ButtonR>
        {data.map((pic, i) =>
          <TreeCard key={i}>
            <Data src={pic} />
          </TreeCard>
        )}
      </InnerContainer>
    </CarouselContainer>
  )
}
export default ImageCarousel;
//${props => props.color ? 'red' : 'blue'}