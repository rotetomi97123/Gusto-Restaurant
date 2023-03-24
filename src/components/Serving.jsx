import React from 'react'
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


const Serving = () => {
  
  return (
    <Wrapper>
        <Div1>
            <p>We served</p>
            <h1>4541 happy customers</h1>
        </Div1>
        <Div3>
         <Icon icon={faGlobe} />
        </Div3>
        <Div3>
            <h1>All around the World in 2023</h1>
        </Div3>
    </Wrapper>
  )
}

const Icon = styled(FontAwesomeIcon)`
  font-size: 5rem;
  color: #CDBE70;
  margin: 0 1rem;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 500px;
    border: 15px dashed #white;
    `
const pulseAnimation = keyframes`
      0% { transform: scale(1); }
      50% { transform: scale(1.2); }
      100% { transform: scale(1); }
     `;
const Div1 = styled.div`
    width: 100%;
    height: 34%;
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    p{
        animation: ${pulseAnimation} 5s ease-in-out infinite;
        font-size: 1.5rem;
        @media (max-width: 600px) {
            font-size: 0.8rem;
          }
    }
    h1{
        animation: ${pulseAnimation} 5s ease-in-out infinite;
        font-size: 2rem;
        @media (max-width: 600px) {
            font-size: 1rem;
          }
    }
`
const Div3 = styled.div`
    width: 100%;
    height: 34%;
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h1{
        animation: ${pulseAnimation} 5s ease-in-out infinite;
        font-size: 2rem;
        @media (max-width: 600px) {
            font-size: 1rem;
          }
    }
`
export default Serving