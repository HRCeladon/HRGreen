import React from 'react';
import styled from 'styled-components'
import plantingTree from '../../../dist/assets/planting-tree.jpeg';

const Wrapper = styled.section`
  background-color: #F0EAD2;
  width: 50%;
  height: fit-content;
  filter: drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.25));
  padding: 20px 30px 20px 30px;
  margin-top: 65px;
`;
const Title = styled.h1`
`

const AboutUs = (props) => {

  return (
    <Wrapper>

      About Us
    </Wrapper>
  )
}

export default AboutUs;