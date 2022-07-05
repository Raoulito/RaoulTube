import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
width : 300px;
margin: 20px 20px 50px;
cursor : pointer;
padding-bottom: 10px;
`;

const Image = styled.img`
width : 100%;
height : 180px;
background-color : #999;
`;

const Details = styled.div`
display : flex;
margin-top : 10px;
gap : 12px;
`;

const Texts = styled.div`


`;

const Title = styled.h1`
font-size : 16px;
font-weight : 600;
color : ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
font-size : 14px;
font-weight : 400;
margin : 9px 0px;
color : ${({ theme }) => theme.text};
`;


const Info = styled.div`
font-size : 14px;
color : ${({ theme }) => theme.textSoft};
`;

const ChannelImage = styled.img`
width : 36px;
height : 36px;
object-fit : cover;
border-radius : 50%;
background-color : #999;
`;

const Card = () => {
  return (
    <Link to="/video/123" style={{textDecoration:"none"}}>
    <Container>
      <Image src="https://i.ibb.co/J72F87k/Capture-d-cran-de-2022-07-05-11-54-19.png"/>
      <Details>
        <ChannelImage src="https://avatars.githubusercontent.com/u/69431755?v=4"/>
        <Texts>
            <Title>Test title </Title>
            <ChannelName>Test channel name</ChannelName>
            <Info>557,837 views - 12 hours ago</Info>
        </Texts>
        
        </Details>
    </Container>
    </Link>
  )
}

export default Card
