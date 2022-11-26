import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const CarouselContainer = styled.section` //The Outer most div
/* border: 2px solid purple; */
position: relative;
width: 100%;
height: 250px;
overflow: hidden;
flex-shrink:0;
`;
const InnerContainer = styled.div` //Nested inside the container
/* border: 1px solid red; */
scroll-behavior: smooth;
display: flex;
`;

const Data = styled.img`
object-fit: scale-down;
width: 100%;
height: 100%;
transition: ease-in;
`;

const ButtonR = styled.div`
position: absolute;
font-size: 25px;
right: 2%;
top: 45%;
cursor: pointer;
color: #262626;
`;
const ButtonL = styled.div`
position: absolute;
font-size: 25px;
top: 45%;
left: 2%;
cursor: pointer;
color: #262626;
`;
const images = [
  'https://images.pexels.com/photos/36767/tree-natur-nightsky-cloud.jpg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1102909/pexels-photo-1102909.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1080401/pexels-photo-1080401.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg?auto=compress&cs=tinysrgb&w=800'
]

//Set the Innercontainer to be the width of however many cards are needed to be displayed
const ImageCarousel = ({ data }) => {
  const [active, setActive] = useState(0);
  const length = images.length;

  const handleRight = () => {
    setActive(active === length - 1 ? 0 : active + 1)
  }
  const handleLeft = () => {
    setActive(active === 0 ? length - 1 : active - 1)
  }

  return (
    <CarouselContainer>
      <ButtonL onClick={handleLeft}>{'<'}</ButtonL>
      <ButtonR onClick={handleRight}>{'>'}</ButtonR>

        <div style={{
          height: '100%',
          backgroundImage: `url('${images[active]}')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundColor: '#D6E880',
          borderRadius: '10px',

        }}></div>

    </CarouselContainer>
  )
}
export default ImageCarousel;