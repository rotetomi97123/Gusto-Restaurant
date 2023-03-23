import React from 'react'
import styled, { keyframes } from 'styled-components';

const Serving = () => {
  
  return (
    <Wrapper>
        <Div1>
            <p>We served</p>
            <h1>4541 happy customers</h1>
        </Div1>
        <Div2>
   
        </Div2>
        <Div3>
            <h1>All around the World in 2023</h1>
        </Div3>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    height: 500px;
`
const Div1 = styled.div`
    width: 100%;
    height: 34%;
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const Div2 = styled.div`
    width: 100%;
    height: 34%;
    position: relative;
`
const Div3 = styled.div`
    width: 100%;
    height: 34%;
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
export default Serving