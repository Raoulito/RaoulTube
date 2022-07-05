import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import Comments from "../components/Comments";
import Card from "../components/Card";

const Container = styled.div`
    display: flex;
    gap: 24px;
`;
const Content = styled.div`
    flex: 5;
    padding: 20px 0 0 50px;
`;
const VideoWrapper = styled.div`
    flex: 5;
`;

const Title = styled.h1`
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Info = styled.span`
    color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
    display: flex;
    gap: 20px;
    color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`;

const Divider = styled.div`
    margin: 15px 0px;
    border: 0.5px solid ${({ theme }) => theme.soft}; ;
`;

const Recommandation = styled.div`
    flex: 2;
    margin-top: 20px;
`;

const Channel = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.text};
`;

const ChannelInfo = styled.div`
    display: flex;
    gap: 10px;
    color: ${({ theme }) => theme.text};
`;

const Image = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    object-fit: cover;
`;

const ChanneDetails = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
    font-weight: 500;
`;

const ChannelCounter = styled.span`
    margin: 5px 0px 10px 0px;
    color: ${({ theme }) => theme.textSoft};
    font-size: 12px;
`;

const Description = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.text};
`;

const Subscribe = styled.button`
    background-color: #cc0000;
    font-weight: 500;
    color: #ffffff;
    border-radius: 2px;
    border: none;
    height: 40px;
    font-size: 14px;
    cursor: pointer;
`;

const Video = () => {
    return (
        <Container>
            <Content>
                <VideoWrapper>
                    <iframe width="100%" height="720" src="https://www.youtube.com/embed/UNYbxtCGqEk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </VideoWrapper>
                <Title>Test Title</Title>
                <Details>
                    <Info>3,256,765 views - 05 Jul 2022</Info>
                    <Buttons>
                        <Button>
                            <ThumbUpOutlinedIcon />
                            500
                        </Button>
                        <Button>
                            <ThumbDownOutlinedIcon />
                            Dislike
                        </Button>
                        <Button>
                            <ReplyOutlinedIcon />
                            Share
                        </Button>
                        <Button>
                            <SaveOutlinedIcon />
                            Save
                        </Button>
                    </Buttons>
                </Details>
                <Divider />
                <Channel>
                    <ChannelInfo>
                        <Image src="https://avatars.githubusercontent.com/u/69431755?v=4" />
                        <ChanneDetails>
                            <ChannelName>Test channel name</ChannelName>
                            <ChannelCounter>1,837,837 subscribers</ChannelCounter>
                            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Description>
                        </ChanneDetails>
                    </ChannelInfo>
                    <Subscribe>SUBSCRIBE</Subscribe>
                </Channel>
                <Divider />
                <Comments />
            </Content>

            <Recommandation>
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
            </Recommandation>
        </Container>
    );
};

export default Video;
