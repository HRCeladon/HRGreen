import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

const CarouselContainer = styled.div` //The Outer most div
position: relative;
border: 1px solid black;
/* max-width: '100vh';
max-height: '100vh'; */
/* max-width: 100%; */
width: 462px;
max-height: 100%;
overflow: hidden;
`
const InnerContainer = styled.div` //Nested inside the container
/* box-sizing: border-box; */
scroll-behavior: smooth;
/* position: relative; */
display: flex;
flex-direction: row;
gap: 6px;
/* margin: 4px; */
border: 1px solid red;
overflow: scroll;
`
const TreeCard = styled.div`
box-sizing: border-box;
display:flex;
flex-shrink: 0;
justify-content: center;
align-items:center;
/* width: ${props => props.width ? props.width : '225px'};
height: ${props => props.height ? props.height : '199px'}; */
`
const Data = styled.img`
/* object-fit: cover; */
width: 150px;
height: 100%;
`

const ButtonR = styled.div`
position: absolute;
right 2%;
top: 45%;
cursor: pointer;
background-color: black;
color: white;
`
const ButtonL = styled.div`
position: absolute;
top: 45%;
left: 2%;
cursor: pointer;
background-color: black;
color: white;
`
const images = [
  'https://images.pexels.com/photos/1080401/pexels-photo-1080401.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1459497/pexels-photo-1459497.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1102909/pexels-photo-1102909.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/36767/tree-natur-nightsky-cloud.jpg?auto=compress&cs=tinysrgb&w=800'
]
//Set the Innercontainer to be the width of however many cards are needed to be displayed
const ImageCarousel = ({ data }) => {
  const [active, setActive] = useState(0);

  const handleRight = () => {
    const card = document.querySelector('.inner-container')
    card.scrollLeft += 156;
  }
  const handleLeft = () => {
    const card = document.querySelector('.inner-container')
    card.scrollLeft -= 156;
  }



  return (
    <CarouselContainer>
      <ButtonL onClick={handleLeft}>{'<'}</ButtonL>
      <ButtonR onClick={handleRight}>></ButtonR>
      <InnerContainer className='inner-container'>
        {images.map((pic, i) =>
          <TreeCard className='tree-card' key={i}>
            <Data src={pic} />
          </TreeCard>
        )}
      </InnerContainer>
    </CarouselContainer>
  )
}
export default ImageCarousel;
//${props => props.color ? 'red' : 'blue'}