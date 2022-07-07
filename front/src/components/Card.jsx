import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: ${(props) => props.type !== "sm" && "300px"};
    margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
    margin-right: 10px;
    margin-left: 10px;
    cursor: pointer;
    display: ${(props) => props.type === "sm" && "flex"};
    gap: ${(props) => props.type === "sm" && "10px"};
`;

const Image = styled.img`
    width: 100%;
    height: ${(props) => (props.type === "sm" ? "100px" : "200px")};
    background-color: #999;
    flex: 1;
`;

const Details = styled.div`
    display: flex;
    margin-top: ${(props) => (props.type === "sm" ? "none" : "20px")};
    gap: 12px;
    flex: 1;
`;

const Texts = styled.div``;

const Title = styled.h1`
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
    font-size: 14px;
    font-weight: 400;
    margin: 9px 0px;
    color: ${({ theme }) => theme.text};
`;

const Info = styled.div`
    font-size: ${(props) => (props.type === "sm" ? "12px" : "14px")};
    color: ${({ theme }) => theme.textSoft};
`;

const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 50%;
    background-color: #999;
    display: ${(props) => props.type === "sm" && "none"};
`;

const Card = ({ type }) => {
    return (
        <Link to="/video/123" style={{ textDecoration: "none" }}>
            <Container type={type}>
                <Image type={type} src="https://i.ibb.co/J72F87k/Capture-d-cran-de-2022-07-05-11-54-19.png" />
                <Details type={type}>
                    <ChannelImage type={type} src="https://avatars.githubusercontent.com/u/69431755?v=4" />
                    <Texts>
                        <Title>Test title </Title>
                        <ChannelName>Test channel name</ChannelName>
                        <Info type={type}>557,837 views - 12 hours ago</Info>
                    </Texts>
                </Details>
            </Container>
        </Link>
    );
};

export default Card;
