import React from 'react'
import ChefData from './ChefData'
import styled from 'styled-components'
import black from '../assets/black.png'
import Spoon from './Spoon'

const ChefsCorner = () => {
    const [count, setCount] = React.useState(0)

    const plus = () => {
        if(count === ChefData.length-1){
            setCount(0)
        }else{
            setCount(prev => prev+1)
        }
    }
    const minus = () => {
        if( count === 0){
            setCount(3)
        }else{
            setCount(prev => prev-1)
        }
    }
    return(
        <Wrapper id='chefscorner'>
            <Spoon text="Chef's Corner" />
            <PositionDiv>
                <LeftArrow onClick={minus}>&lt;</LeftArrow>
                <ImgWrapper>
                    <Img src={ChefData[count].image} alt={ChefData[count].job} />
                </ImgWrapper>
                <Name>{ChefData[count].name}</Name>
                <Job>{ChefData[count].job}</Job>
                <Text>{ChefData[count].text}</Text>
                <RightArrow onClick={plus}>&gt;</RightArrow>
            </PositionDiv>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    background-image: url(${black});
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
    background-attachment: fixed;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const PositionDiv = styled.div`
    position: relative;
    width: 700px;
    height:600px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    flex-direction: column;
    @media (max-width: 700px){
        padding: 1rem 1rem;
    }
    @media (max-width: 500px){
        padding: 2rem 2rem;
    }
    @media (max-width: 300px){
        padding: 1rem 1rem;
    }

`
const ImgWrapper = styled.div`
    border: 6px solid #CDBE70;
    background-color: #F5F5F5;
    box-shadow: 0px 0px 5px 1px #888888;
    position: relative; 
    width: 300px; 
    height: 300px; 
    overflow: hidden; 
    border-radius: 50%;
    @media (max-width: 700px){
        width: 200px; 
        height: 200px; 
    }
`
const Img = styled.img`
    width: 100%;
    height: auto;
`
const Name = styled.h1`
    color: white;
    margin-top:1rem;
`
const Text = styled.p`
    color: white;
    max-width: 700px;
    margin-top: 2rem;
    text-align: center;
    font-size: 1.2rem;
    letter-spacing: 1px;
    line-height:1.5rem;
`
const Job = styled.p`
    color:  #CDBE70;
    font-weight:600;
`
const RightArrow = styled.div`
    color: #CDBE70;
    font-size: 4rem;
    position: absolute;
    right: 0;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    &:hover{
        color:white;
        transition: 0.3s ease;
    }
    @media (max-width: 700px){
        right: 1rem;
    }
`
const LeftArrow = styled.div`
    color: #CDBE70;
    font-size: 4rem;
    position: absolute;
    left: 0;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    &:hover{
        color:white;
        transition: 0.3s ease;
    }
    @media (max-width: 700px){
        left: 1rem;
    }
`

export default ChefsCorner